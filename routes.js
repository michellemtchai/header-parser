var express = require('express');
const router = express.Router();

router.get('/whoami', (req,res)=>{
  res.json({
    ipaddress: req.ip,
    language: req.get('Accept-Language'),
    software: req.get('User-Agent')
  })
});
//---------- DO NOT EDIT BELOW THIS LINE --------------------

module.exports = router;
