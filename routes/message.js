var express = require('express');
const app = express()
var router = express.Router();
const Message = require('./models/Messages')
/* GET users listing. */
router.get('/', (req, res) => {
    res.render('message', {
      data: {},
      errors: {}
    });
  });
  
  router.post('/message', (req, res) => {
    const message = new Message(req.body);
    message.save()
        .then(message => {
            res.json('success');
        })
            .catch(err => {res.status(400)})

})

module.exports = router;
