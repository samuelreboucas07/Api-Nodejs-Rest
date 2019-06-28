const express = require("express")
const app = express()
const routes = require("./routes/routes")

app.use(routes)

app.listen(3000, ()=>{
    console.log("Servidor na porta 3000!")
})
