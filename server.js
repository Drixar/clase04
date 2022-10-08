const express = require("express");
const productRouter = require("./routes/products");

const app = express();
const PORT = 8080;

const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${PORT}`)
 })
 server.on("error", error => console.log(`Error en servidor ${error}`))

app.get('/', (req, res) => {
    res.send({ mensaje: 'hola mundo' })
 })

app.get("/home",(req,res)=>{
    res.send("peticion home")
})

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// ruta general que usa Router para productos
app.use("/api/productos", productRouter);

