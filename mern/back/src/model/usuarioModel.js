const mongoose=require("mongoose")
const Schema=mongoose.Schema
const UsuarioSchema=new Schema({
    Nombre:String,
    Curp:String,
    Telefono: String,
    Edad: Number,
    Ruta: String,
    Id_electoral:String
})
module.exports=mongoose.model("Usuarios",UsuarioSchema)
