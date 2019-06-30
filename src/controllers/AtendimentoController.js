const Atendimento = require("./../models/Atendimento");

class AtendimentoController {

    async store (req, res){
        const infHorario = await Atendimento.create(req.body);
        return res.json(infHorario)
    }
}

module.exports = new AtendimentoController();