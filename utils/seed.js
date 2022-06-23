const connection = require('../config/connection');
const { Users } = require('../models/Users');
const { Thoughts } = require('../models/Thoughts');
const { usernames, emails, generateThoughts, generateReactions } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');

    // Drop existing thoughts
    await Thoughts.deleteMany({});

    // Drop existing users
    await Users.deleteMany({});

    // Create empty array to hold the users
    const users = [];

     // Loop 20 times -- add users to the users collection
    for (let i = 0; i < 20; i++) {
        const thoughtsData = generateThoughts();
        const thoughts = [];
        const username = usernames[i];

        for (let j = 0; j < thoughtsData.length; j++) {
            const reactionsData = generateReactions();
            const reactions = [];

            for (let k = 0; k < reactionsData.length; k++) {
                reactions.push({
                    reactionBody: reactionsData[k],
                    username
                })
            }

            thoughts.push({
                thoughtText: thoughtsData[j],
                username,
                reactions
            })
            await Thoughts.create({
                thoughtText: thoughtsData[j],
                username,
                reactions
            })
        }
        
        const email = emails[i];

        users.push({
        username,
        email,
        thoughts
        });
    }
    
    await Users.collection.insertMany(users);

    console.table(users);
    console.info('Seeding complete! 🌱');
    process.exit(0);
});