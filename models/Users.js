const { Schema, model } = require('mongoose');
const Thoughts = require('./Thoughts')

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true,
            match: /^[a-z0-9_-]{3,15}$/
        },
        email: {
            type: String,
            unique: true,
            required: true,
            match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
        },
        thoughts: [Thoughts],
        friends: [this]
    },
    {
        toJSON: {
          virtuals: true,
          getters: true
        },
    }
)

userSchema.virtual('friendCount').get(function() {
    return this.friends.length
})

const Users = model('users', userSchema);

module.exports = Users;