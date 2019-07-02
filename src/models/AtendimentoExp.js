const mongoose = require("mongoose")

const AtendimentoSchema = new mongoose.Schema({
    Medico: {
        type: String,
        required: true,
        default: "Médico não definido."
    },

    Data: { 
        type: Date,
        required: true
    },

    horarioInicio: {
        type: String,
        required: true,
        default: "Não_definido"
    },

    horarioFinal: {
        type: String,
        required: true,
        default: "Não_definido"
    }

});

module.exports = mongoose.model('Atendimento', AtendimentoSchema)