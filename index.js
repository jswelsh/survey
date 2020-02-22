const readline = require('readline');
let answerStore = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let questions =
  [
      "What's your name? Nicknames are also acceptable :\)\n",
      "What's an activity you like doing?\n",
      "What do you listen to while doing that?\n",
      "Which meal is your favourite (eg: dinner, brunch, etc.)\n",
      "What's your favourite thing to eat for that meal?\n",
      "Which sport is your absolute favourite??\n",
      "What is your superpower? In a few words, tell us what you are amazing at!\n"
  ];
let answers = 
  [
      `Hi my name is `,
      `My favourite activity is `,
      `I love listening to `,
      `My favourite meal is `,
      `I love having `,
      `My absolute favourite sport is `,
      `My super secret super power is `
  ];
  
let prompt = () => { 
  if (questions.length) {
    rl.question(questions[0], (answer) => { 
      answerStore.push(answers[0].concat(answer))
      questions.shift();
      answers.shift();
      prompt()
    })} else {
      process.stdout.write(answerStore.toString());
      rl.close();
    }
}
prompt()