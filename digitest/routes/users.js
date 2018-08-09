let express = require('express');
let router = express.Router();

const User = require('../models/v1/users.model');
let user = new User();
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET user by id. */
router.get('/:id', function(req, res, next) {
    const userId = req.params.id;
    const userIlnfo  = user.getById(userId);
    res.status(200);
    res.send(userIlnfo);
});

module.exports = router;
