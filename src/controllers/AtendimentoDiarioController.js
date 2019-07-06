const AtendimentoDiarioModel = require("./../models/AtendimentoDiario")

class AtendimentoDiarioCtrl {
    async storeDiario  (req, res){
        const AtendimentoDiario = await AtendimentoDiarioModel.create(req.body)
        return res.json(AtendimentoDiario)
    }

} 

module.exports = new AtendimentoDiarioCtrl();