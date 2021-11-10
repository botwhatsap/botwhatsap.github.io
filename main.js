__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/price', (req, res) => {
    res.sendFile(__path + '/price.html')
})

router.get('/docs', (req, res) => {
    res.sendFile(__path + '/docs.html')
})
router.get('/', (req, res) => {
    res.sendFile(__path + '/index.html')
})

module.exports = router
