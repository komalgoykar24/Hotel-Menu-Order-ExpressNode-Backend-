const express=require("express");
const router=express.Router();
const asyncWrap=require("../utils/asyncWrap");
const Menu=require("../model/menuList");
const listingSchema=require("../schema");
const ExpressError=require("../utils/ExpressError");

const validateListing =(req,res,next)=>{
    let {error}=listingSchema.validate(req.body);
    if(error){
        let errMsg=error.details.map((el)=>el.message).join(",");
      throw new ExpressError(400,errMsg);
    }
    else{
        next();
    }
};


//Index Path
router.get("/",asyncWrap(async(req,res)=>{
     const allMenu=await Menu.find({});
     res.render("./listings/index",{allMenu});

}));

//New Path
router.get("/new",(req,res)=>{
    res.render("./listings/new.ejs");
});

//Create Path
router.post("/new",validateListing,asyncWrap( async(req,res,next)=>{
      let newMenu=  new Menu(req.body.listing);
        console.log(newMenu);
        await newMenu.save();
}));


//Show Path
router.get("/:id",asyncWrap( async(req,res)=>{
    let {id}=req.params;
    let menu= await Menu.findById(id);
    res.render("./listings/show.ejs",{menu});
}));

//Edit path
router.get("/:id/editMenu",asyncWrap(async(req,res)=>{
    let {id}=req.params;
    let menu=await Menu.findById(id);
    res.render("./listings/edit",{menu});
}));

//Update Path
router.put("/:id/menu",validateListing,asyncWrap( async(req,res)=>{
    if(!req.body.listing){
        throw new ExpressError(400,"Send Valid Data.")
    }
    let {id}=req.params;
    let result=await Menu.findByIdAndUpdate(id,{...req.body.listing});
    res.redirect("/tastytrove");
}));

//Delete Path
router.delete("/:id",asyncWrap( async(req,res)=>{
    let {id}=req.params;
    const deletedRecord=await Menu.findByIdAndDelete(id);
    res.redirect("/tastytrove");
}));


module.exports=router;
