const mongoose = require('mongoose')
const Schema = mongoose.Schema

let promoSchema = new Schema({
    code: { type: String, required: true },
    quantity: { type: Number, required: true  }
})

const Promo = mongoose.model('Promo', promoSchema)

Promo.countDocuments()
.then(count => {
    if (count === 0) {
        Promo.create([
            {code: 'CROISSANT15', quantity: 5},
            {code: 'CROISSANT2019', quantity: 10},
            {code: 'SUMMERCROISSANT', quantity: 15}
        ])
    }
})

module.exports = Promo