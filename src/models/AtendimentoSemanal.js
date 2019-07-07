const mongoose = require('mongoose')

const AtendimentoSemanalSchema = new mongoose.Schema({

    Medico: {
        type: String,
        default: "Não definido!"
    },
    
    Dias: {
        // Array com nome ou numero relaciona com o nome?
        type: Array,
    },    
    
    HorarioInicio: {
        Type: String,
        required: true
    },
    
    HorarioFinal: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('AtendimentoSemanal', AtendimentoSemanalSchema)
