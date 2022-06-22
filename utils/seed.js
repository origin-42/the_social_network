const connection = require('../config/connection');
const { Users, Thoughts } = require('../models');
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
        const thoughts = generateThoughts();

        const username = usernames[i];
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