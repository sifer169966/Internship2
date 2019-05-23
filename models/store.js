const mongoose = require('mongoose')

const Schema = mongoose.Schema
const StoreSchema = new Schema({
    id: {type: String, required: true, unique: true},
    product: {type: String, require: true},
    price: Number,
    Date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Store', StoreSchema)