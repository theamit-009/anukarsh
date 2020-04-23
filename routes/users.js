var express = require('express');
var router = express.Router();
const pool = require('../db/dbConfig');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/getContacts',(request, response) => {

  pool.query('SELECT name from salesforce.Account')
  .then((contactQueryResult) => {
      console.log('contactQueryResult  : '+JSON.stringify(contactQueryResult.rows));
      response.send(contactQueryResult.rows);
  })
  .catch((contactQueryError) => {
    response.send(contactQueryError);
    console.log('contactQueryResult Error : '+contactQueryError.stack);
  })

});


module.exports = router;
