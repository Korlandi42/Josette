const router = require('express').Router()
const Recipe = require('../recipe/model')
const jwt = require('jsonwebtoken')

router.get('/recipe',  async (req, res) => {
    const auth = req.header('auth')
    const decoded = await jwt.verify(auth, 'secret')
    if (!decoded)
        return res.status(401).json('bad token')
    try {
        const recipe = await Recipe.find()
        return res.status(200).json(recipe[0])
    } catch(err) {
        return res.status(400).json('bad request')
    }
})

module.exports = router