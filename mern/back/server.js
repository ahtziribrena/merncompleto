const express = require("express")
const app = express()
const bodyParser = require("body-parser")
require("./src/db/database")
const usuarioRouter = require("./src/routes/Usuariorouter")
const candidaturaRouter = require("./src/routes/Candidaturarouter")

const cors = require('cors')

app.use(
    bodyParser.urlencoded({
        extended: true
    })
)

app.use(cors())
app.use(bodyParser.json())

app.use("/", usuarioRouter)
app.use("/candidatura", candidaturaRouter)


app.get("/", (req, res) => {
    res.send("INGRID---")
})
app.listen(3001, function () {
    console.log("servidor activo")
})