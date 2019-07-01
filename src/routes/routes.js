const express = require("express")
// Analisar Modelagem em documentos individuais de rotas!
const router = express.Router()

const AtendimentoCtrl = require("./../controllers/AtendimentoController")

router.get('/', (req, res) =>{
    res.send("Home page!")
});

router.post('/store', AtendimentoCtrl.store);
router.post('/delete/:id', AtendimentoCtrl.delete);
router.post('/show', AtendimentoCtrl.show);

module.exports = router;