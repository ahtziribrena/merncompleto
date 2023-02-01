const mongoose=require("mongoose")
const Schema=mongoose.Schema
const CandidaturasSchema=new Schema({
    Nombrecandidato:String,
    Curpcandidato:String,
    Telefonocandidato: String,
    Edadcandidato: Number,
    Id_electoralcandidato:String,
    Direccioncandidato:String,
    Partido:String,
    Puesto:String,
    Ruta:String,
})
module.exports=mongoose.model("Candidaturas",CandidaturasSchema)