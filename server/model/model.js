const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    nama : {
        type : String,
        required: true
    },
    alamat: {
        type : String,
        required : true
    },
    jenis : String,
    nohp : Number,
    waktu  : Number,
    total : Number,   
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;