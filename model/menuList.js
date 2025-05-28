const mongoose=require("mongoose");
const menuSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        default: "https://media.istockphoto.com/id/1814583966/photo/composition-with-indian-dishes.jpg?s=612x612&w=0&k=20&c=BqIKYkjuB22xh3dTj0TfyXqhDKV4l56tbRBE-vDj9rE=" ,
        set:(v)=> v === "" ? "https://media.istockphoto.com/id/1814583966/photo/composition-with-indian-dishes.jpg?s=612x612&w=0&k=20&c=BqIKYkjuB22xh3dTj0TfyXqhDKV4l56tbRBE-vDj9rE=" : v
    },
    isAvailable:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        default:0
    }
});

const Menu=mongoose.model("Menu",menuSchema);
module.exports=Menu;