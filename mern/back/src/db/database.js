const mongose = require ("mongoose")
mongose.connect("mongodb://172.23.0.2:27017/mer")
.then(
    db=>console.log("conexion exitosa db")
).catch(
    err=>console.log(err)
)