const AtendimentoDiarioModel = require("./../models/AtendimentoDiario")

class AtendimentoDiarioCtrl {
    async storeDiario  (req, res){
        const AtendimentoDiario = await AtendimentoDiarioModel.create(req.body)
        return res.json(AtendimentoDiario)
    }

    async deleteDiario (req, res){
        await AtendimentoDiarioModel.findByIdAndDelete({_id: req.params.id})
        return res.send()
    }

    async showDiario(req, res){
        const AtendimentoDiario = await AtendimentoDiarioModel.find()
        return res.json(AtendimentoDiario)
    }

} 

module.exports = new AtendimentoDiarioCtrl();