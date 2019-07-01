const Atendimento = require("./../models/Atendimento");

class AtendimentoController {

    async store (req, res){
        const infHorario = await Atendimento.create(req.body);
        return res.json(infHorario)
    }

    async delete (req, res){
        await Atendimento.findByIdAndDelete({_id: req.params.id})
        return res.send()
    }

    async show (req, res){
        const infHorarios = await Atendimento.find()
        return res.json(infHorarios)
    }
}

module.exports = new AtendimentoController();