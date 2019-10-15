const mongoose = require('mongoose')

//obtendo Promise do node e aplicando ao Promise deprecated do mongose
mongoose.Promise = global.Promise;

module.exports = mongoose.connect('mongodb://localhost/mymoney', {useNewUrlParser:true});

mongoose.Error.messages.general.required = "O atributo '${PATH}' é obrigatório."