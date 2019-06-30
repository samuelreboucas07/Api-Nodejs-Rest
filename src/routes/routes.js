const express = require("express")
// Analisar Modelagem em documentos individuais de rotas!
const router = express.Router()

const AtendimentoCtrl = require("./../controllers/AtendimentoController")

router.get('/', (req, res) =>{
    res.send("Home page!")
});

router.post('/store', AtendimentoCtrl.store);

module.exports = router;