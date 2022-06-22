const { Schema, model } = require('mongoose');
const reactionsSchema = require('./Reactions')

const thoughtsSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (date) => {
                if (date) return date.toLocaleString();
            },
        },
        username: {
            type: String,
            required: true
        },
        reactions: [reactionsSchema],
        user: [
            {
              type: Schema.Types.ObjectId,
              ref: 'users',
            },
        ],
    },
    {
        timestamps: true,
        toJSON: { getters: true, virtuals: true },
    }
)

thoughtsSchema
    .virtual('reactionCount')
    .get(function() {
        return this.reactions.length
    })

const Thoughts = model('thoughts', thoughtsSchema);

module.exports = {
    Thoughts,
    thoughtsSchema
}