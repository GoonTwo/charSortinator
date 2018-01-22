const express = require('express');
const router = express.Router();

router.post('/strings', (req, res) => {
  console.log('made it to /')
});

module.exports = router;
