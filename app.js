const express=require("express");
const app=express();
const mongoose=require("mongoose");

const path=require("path");
const methodOverride=require("method-override");
const ejsMate=require("ejs-mate");

const ExpressError=require("./utils/ExpressError");

const { error } = require("console");
const listingRouter=require("./routes/listings")
app.engine("ejs",ejsMate);
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));

main().then(()=>{
    console.log("Connection establish..");
}).catch((err)=>{
    console.log(err);
});

async function main(params) {
    await mongoose.connect("mongodb://127.0.0.1:27017/Hotel");
    
};

app.use("/tastytrove",listingRouter);






app.all("*",(req,res,next)=>{
   next( new ExpressError(404,"Page not found"));
});

app.use((err,req,res,next)=>{
  let {statusCode=500,message="Something went wrong"}=err;
  res.status(statusCode).render("./listings/error",{message});
//   res.status(statusCode).send(message);
});


app.listen(8080,()=>{
    console.log("App is listing on port 8080");
});