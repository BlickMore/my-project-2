const {Schema,ObjectId, model} = require('mongoose')


const User = new Schema({
    email: {type:String, required: true, unique: true},
    password: {type: String, required: true},
    avatar: {type:String},
    nickname: {type:String},
    cart:[{type: ObjectId}]
})

module.exports = model('User', User)