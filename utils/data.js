// Generate random usernames
const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split("")
const numbers = '123456789'.split("")
const generateNames = () => {
  let name = []
  for (let i = 0; i < 8; i++) {
    name.push(alphabet[Math.floor(Math.random() * alphabet.length)])
  }
  return name.join("");
}
const generateNumbers = () => {
  let number = []
  for (let i = 0; i < 2; i++) {
    number.push(numbers[Math.floor(Math.random() * numbers.length)])
  }
  return number.join("");
}

const usernames = [];

for (let i = 0; i < 20; i++) {
  usernames.push(`${generateNames()}${generateNumbers()}`)
}

const emails = [
  'Lily_Waterson6529@zorer.org',
  'Jackeline_Abbey7147@extex.org',
  'Marilyn_Uddin9998@zorer.org',
  'Johnny_Farmer7938@nickia.com',
  'Chad_Dale337@kideod.biz',
  'Denny_Chester3112@qater.org',
  'Erin_Quinnell4269@dionrab.com',
  'Willow_Harvey932@twipet.com',
  'Matthew_Watt3345@elnee.tech',
  'Carmen_Brown7723@guentu.biz',
  'Kurt_Burnley7168@twace.org',
  'Marie_Thomas2089@supunk.biz',
  'Josh_Edler8558@gembat.biz',
  'Carl_Ingham9317@eirey.tech',
  'Ruby_Miller4965@guentu.biz',
  'Maddison_Sanchez6021@extex.org',
  'Noah_Snow4300@famism.biz',
  'Ivy_Talbot2879@ovock.tech',
  'Fred_Wood7016@ovock.tech',
  'Melinda_Knight1277@bungar.biz',
  'Alex_Addison5132@bungar.biz',
  'Denis_Lowe8358@gompie.com',
  'Maribel_Wright2224@eirey.tech',
  'Phillip_Calderwood7987@liret.org',
  'Gladys_Moss9735@muall.tech',
  'Judith_Parr5471@extex.org',
  'Oliver_Nanton6759@muall.tech',
  'Nathan_Oliver5003@brety.org',
  'Shannon_Woodcock7266@ovock.tech',
  'Leanne_Simmons4568@cispeto.com',
];


const thoughtsData = [
  'Those apples are very red.',
  'The banana was completely brown.',
  'The way you said that didn\'t make sense.',
  'She went over to see if her name was there.',
  'There was a big party at Tom\'s place last weekend.',
  'I am extra ticklish for some reason.',
  'We have bigger problems to worry about.',
  'There is a party on Saturday.',
  'I was riding my bike when I got winded.',
  'She felt bad about constantly complaining about her friends but they were driving her insane.',
  'When you enter a room, smile and say hello.',
  'Tom pointed at one of the names on the list.',
  'It was a big honor to be asked to give a speech.',
  'She doesn’t teach chemistry.',
  'There are many theories regarding the origins of language.',
  'He is bigger than all the other boys.',
  'Do you mind waiting an extra hour so I can read more of my book?',
  'What a big eater he is!',
  'Shape up or ship out!',
  'Somebody help me!',
]

const reactionsData = [
  'I have my hair cut every month.',
  'Your neighbor cut down my trees.',
  'She had a strange love for McDonald\'s hamburgers.',
  'My water bottle is white and made of steel.',
  'She is a very smart girl.',
  'I just walked on the lamest window.',
  'The chocolate chip cookies smelled so good that I ate one without asking.',
  'I could help mom around here.',
  'Tom scanned the list, but couldn\'t find his name.',
  'I am afraid I have to go.',
  'He camped out in front of the tree to save it, but they just waited until he was asleep to move him and knock it down.',
  'The sea looked grey and dirty, as though someone had dumped bathwater into the bay.',
  'I wanted to read the book.',
  'The library was quiet until we got here.',
  'I am a little mad right now.',
  'You can\'t talk to me unless you tell me your favorite color.',
  'When I was a child, our house seemed bigger than now.',
  'What\'s your favorite toy to play with?',
  'Good morning!',
  'What do you do for Thanksgiving?',
  'You should think about that for the rest of your life.',
  'I\'ve got other problems.',
  'He loves to play basketball.',
  'He wanted to wear lipstick but the lipstick was expired.',
  'He is worried about you.',
  'Moral Foundations Theory states that there are five main moral foundations which inform people’s moral decision-making.',
  'Everyone mocked her for getting a philosophy degree, but she got a well-paying job after college.',
  'The train leaves in ten minutes.',
  'The sea looked grey and dirty, as though someone had dumped bathwater into the bay.',
  'This big sofa is really not suitable for a small room.',
  'People are really out there thinking we can stop fascism by pointing out that they made factually inaccurate statements somewhere along the way.',
  'He wanted to get the cheese so badly.',
  'Create beautiful designs with a powerful tool.',
  'On top of that, our power has been out since Sunday.',
  'Tom answered the first question on the test.',
  'She didn\'t understand why everyone loved his music so much.',
  'They go to a gallery every Saturday.',
  'Good morning!',
  'How beautiful she is!',
  'What a big eater he is!',
  'He got a tattoo with another woman.',
  'We have a big stove which keeps us very toasty.',
  'This could become a problem.',
  'She got her first iPad when she was two years old.',
  'I was in a boyband and we were signed to a label.',
  'You\'d better wear a light jacket.',
  'You don\'t have children.',
  'This is real life.',
  'They had a very bad breakup.',
  'I was riding my bike when I got winded.',
  'Plenty of sleep is healthful.',
  'The professor marked down one point for every use of the word \'interesting\' in a paper.',
  'The horse was named Sir Reginald the Greatest and Grossest.',
  'Anakin and Padme belong together.',
  'I take ten minutes to get there.',
  'Her paintings are works of art.',
  'What are your favorite candies?',
  'Sit down and cross your legs, please!',
  'It wasn\'t a big store, right?',
  'It\'s a big deal to Tom, I think.',
]

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Generate a user
const getRandomUser = () => getRandomArrItem(usernames)

// Generate a thought
const getRandomThought = () => getRandomArrItem(thoughtsData)

// Generate a reaction
const getRandomReaction = () => getRandomArrItem(reactionsData)

// generate a list of thoughts
const generateThoughts = () => {
  let thoughts = []
  for (let i = 0; i < 5; i++) {
    thoughts.push(getRandomThought())
  }
  return thoughts;
}

// Generate a list of reactions from 0-5
const reacts = () => Math.floor(Math.random() * 5)

const generateReactions = () => {
  let reactions = []
  let numOfReactions = reacts()
  for (let i = 0; i < numOfReactions; i++) {
    reactions.push(getRandomReaction())
  }
  return reactions
}

// Export the functions for use in seed.js
module.exports = { usernames, emails, getRandomUser, generateThoughts, generateReactions };
