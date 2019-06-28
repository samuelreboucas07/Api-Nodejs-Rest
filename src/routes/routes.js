const express = require("express")
// Analisar Modelagem em documentos individuais de rotas!
const router = express.Router()

router.get('/', (req, res) =>{
    res.send("Home page!")
})

router.get('/teste', (req, res) => {
    res.send("Teste!")
})

module.exports = router;