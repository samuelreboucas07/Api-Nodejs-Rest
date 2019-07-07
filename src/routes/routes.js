const express = require("express")
// Analisar Modelagem em documentos individuais de rotas!
const router = express.Router()

const AtendimentoExpCtrl = require("./../controllers/AtendimentoExpController")
const AtendimentoDiarioCtrl = require("./../controllers/AtendimentoDiarioController")

router.get('/', (req, res) =>{
    res.send("Home page!")
});

router.post('/storeExp', AtendimentoExpCtrl.store);
router.post('/deleteExp/:id', AtendimentoExpCtrl.delete);
router.post('/showExp', AtendimentoExpCtrl.show);

router.post('/storeDiario', AtendimentoDiarioCtrl.storeDiario)
router.post('/deleteDiario/:id', AtendimentoDiarioCtrl.deleteDiario)
router.post('/showDiario', AtendimentoDiarioCtrl.showDiario)

module.exports = router;