const mongoose=require("mongoose");
const Menu=require("../model/menuList.js")
const initData=require("./data")
main().then(()=>{
    console.log("Connection establish..");
}).catch((err)=>{
    console.log(err);
});

async function main(params) {
    await mongoose.connect("mongodb://127.0.0.1:27017/Hotel");
    
};

const initDB=async()=>{
   await Menu.deleteMany({});
   await Menu.insertMany(initData.data);
   console.log("Data was inserted..");
};

initDB();