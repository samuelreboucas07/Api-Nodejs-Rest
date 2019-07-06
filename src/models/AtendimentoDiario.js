const mongoose = require('mongoose')

const AtendimentoDiarioSchema  = new mongoose.Schema({
    Medico: {
        type: String,
        default: "Não definido!"
    },
    HorarioInicio: {
        type: String,
        required: true
    },
    HorarioFinal: {
        type: String,
        required: true
    },

});

module.exports = mongoose.model('AtendimentoDiario', AtendimentoDiarioSchema)