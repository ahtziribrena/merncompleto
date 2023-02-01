const express = require("express");
const router = express.Router();
const Candidatura = require("../model/candidaturaModel")

// obtener todos los registros
router.get('/obtenerRegistros', async (req, res) => {
    const candidatura = await Candidatura.find();
    res.json(candidatura)

});
//agregar un registro
router.post("/agregarRegistro", async (req, res) => {
    console.log(req.body)
    const candidatura = new Candidatura(req.body);
    await candidatura.save();
    res.redirect("/obtenerRegistros")
})
// eliminar un registro
router.get("/eliminarRegistro/:id", async (req, res) => {
    const { id } = req.params
    await Candidatura.remove({ _id: id })
    res.redirect("/obtenerRegistros")
})
//obtener el registro a editar por el id
router.get('/obtenerRegistro/:id', async (req, res) => {
    const { id } = req.params;
    const candidatura = await Candidatura.findById(id);
    res.json(candidatura)
});

// se edita el registro en la base de datos
router.post('/editarRegistro/:id', async (req, res) => {
    const { id } = req.params;
    await Candidatura.update({ _id: id }, req.body);
    res.redirect('/obtenerRegistros');
});


module.exports = router;