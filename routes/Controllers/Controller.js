// const Message   = require('../models/Messages')


// module.exports = {
//     message: (req, res, next) => {
        

//         if (errorValidate) {
//             res.render('auth/signup', { error_msg: true, errorValidate: errorValidate, errors: [] })

//             return
//         }

//         Message.findOne({ email: req.body.email })
//             .then( user => {
//                 if (user) {
//                     req.flash('errors', 'Email already exists')

//                     return res.redirect(301, '/api/users/signup')
//                 } else {
//                     const newUser = new User

//                     newUser.email           = req.body.email
//                     newUser.password        = req.body.password
//                     newUser.profile.name    = req.body.name
//                     newUser.profile.picture = gravatar(req.body.email)

//                     bcrypt.genSalt(10, (error, salt) => {
//                         if (salt) {
//                             bcrypt.hash(newUser.password, salt, (error, hash) => {
//                                 if (error) throw error

//                                 newUser.password = hash

//                                 newUser.save()
//                                         .then( user => {
//                                             req.logIn(user, (error) => {
//                                                 if (error) {
//                                                     res.status(400).json({
//                                                         confirmation: false,
//                                                         message: error
//                                                     })
//                                                 } else {
//                                                     next()
//                                                 }
//                                             })
//                                         })
//                                         .catch( error => {
//                                             req.flash('errors', error)

//                                             return res.redirect(301, '/api/users/signup')
//                                         })
//                             })
//                         } else {
//                             throw error
//                         }
//                     })
//                 }
//             })
//     },