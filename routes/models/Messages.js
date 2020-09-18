const mongoose = require ('mongoose')

let MessageSchema = new mongoose.Schema ({

    firstName:    { type: String, lowercase: true },
    lastName: { type: String, default: '' },
    email: { type: String, default: ''},
    phone:  { type: String, default: '' },
    subject: { type: String, default: '' },
    message:   { type: String, default: '' },

})

module.exports = mongoose.model('message', MessageSchema)