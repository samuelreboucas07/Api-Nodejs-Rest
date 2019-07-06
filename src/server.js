const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()
const routes = require("./routes/routes")

mongoose.connect('mongodb://localhost:27017/Desafio_cubos', {useNewUrlParser: true})

app.use(cors())
app.use(express.json())

app.use(routes)

app.listen(3001, () => {
    console.log("Servidor na porta 3001!")
})
