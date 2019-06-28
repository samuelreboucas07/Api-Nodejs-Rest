const express = require("express")

const router = express.Router()

router.get('/', (req, res) =>{
    res.send("Home page!")
})

router.get('/teste', (req, res) => {
    res.send("Teste!")
})

module.exports = router;