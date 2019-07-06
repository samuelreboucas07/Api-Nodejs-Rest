const express = require("express")
// Analisar Modelagem em documentos individuais de rotas!
const router = express.Router()

const AtendimentoCtrl = require("./../controllers/AtendimentoExpController")
const AtendimentoDiarioCtrl = require("./../controllers/AtendimentoDiarioController")

router.get('/', (req, res) =>{
    res.send("Home page!")
});

router.post('/storeExp', AtendimentoCtrl.store);
router.post('/deleteExp/:id', AtendimentoCtrl.delete);
router.post('/showExp', AtendimentoCtrl.show);

router.post('/storeDiario', AtendimentoDiarioCtrl.storeDiario)

module.exports = router;