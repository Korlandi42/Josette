const router = require('express').Router()
const User = require('./model')
const Promo = require('../promo/model')
const {hashPassword} = require('./controller')
const v = require('validator')
const jwt = require('jsonwebtoken')
let bcrypt = require('bcrypt')


const checkUser = (user) => {
    const { username, password } = user
    if (!username || !password)
        return true
        if (Object.prototype.toString.call(username) !== "[object String]")
        return true
    if (Object.prototype.toString.call(password) !== "[object String]")
        return true
    if (!v.isAlphanumeric(username) || !v.isAlphanumeric(password))
        return true
    if (!v.isLength(username, {min: 5, max: 12}) || !v.isLength(password, {min: 5, max: 12}))
        return true
}

router.post('/register', async (req, res) => {
    let { username, password, code } = req.body
    if (!code || Object.prototype.toString.call(code) !== "[object String]")
        return res.status(400).json('invalid code')
    const existcode = await Promo.findOne({ code })
    if (!existcode)
        return res.status(400).json('code doesn\'t exist')
    if (existcode.quantity <= 0)
        return res.status(400).json('code expired')
    if (existcode.quantity > 0)
        await existcode.update({quantity: existcode.quantity - 1})
    
    if (checkUser(req.body)) 
        return res.status(400).json('invalid credentials')
    if ( await User.findOne({username}))
        return res.status(400).json('username already exist')
    password = await hashPassword(password)
    try {
        const user = await User.create({
            username,
            password
        })
        return res.status(200).json(user)
    } catch (e) {
        return res.status(400).json('bad request')
    }
})

router.post('/login', async (req, res) => {
    let { username, password } = req.body
    if (checkUser(req.body))
        return res.status(400).json('invalid credentials')
    const user = await User.findOne({username})
    if (!user)
        return res.status(400).json('user not found')
    bcrypt.compare(password, user.password, async (err, response) => {
        if (err) {
            return res.status(401).json('An error occured while trying to log you in, please try again.')
        }
        if (response === false) {
            return res.status(401).json('Please check your password.' )
        } else {
            const token = jwt.sign({ username: user.username}, 'secret', { expiresIn: 86400000});
            res.status(200).json(token)
        }
    })
})

router.post('/user', async (req, res) => {
    const { auth } = req.body
    const decoded = await jwt.verify(auth, 'secret')
    if (!decoded)
        return res.status(401).json('bad token')
    const user = await User.findOne({username: decoded.username})
    if (!user)
        return res.status(404).json('user not found')
    res.status(200).json(user)
})

module.exports = router