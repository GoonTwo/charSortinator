const express = require('express');
const router = express.Router();
const sortLexicographically = require('../util/sortLexicographically')

router.post('/strings', sortLexicographically, (req, res) => {
  res.send(req.strings);
});

module.exports = router;
