/* const readline = require('readline');
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
]; */
/*     let prompt = (questions, answers) => {
      if (questions.length) {
        rl.question(questions, (answer) => { 
          answerStore.push(answers[0].concat(answer))
          questions.shift();
          answers.shift();
          prompt(questions,answers)
        })
      }
    } */
/* let questionElt = function (questionIn, callback) {
  rl.question(questionIn, (answer) => {
    answerStore.push(answer)
    callback;
  });
}
let end = function(){
  console.log(answerStore);
  rl.close();
}
questionElt("What's your name? Nicknames are also acceptable :\)", questionElt("What's an activity you like doing?", end( )));
 */

/* rl.question("What's your name? Nicknames are also acceptable :\)\n", (answer) => {
  answerStore.push(`Hi my name is ${answer}`)
  rl.question("What's an activity you like doing?\n", (answer) => {
    answerStore.push(`My favourite activity is ${answer}`)
    rl.question("What do you listen to while doing that?\n", (answer) => {
      answerStore.push(`I love listening to ${answer}`)
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)\n", (answer) => {
        answerStore.push(`My favourite meal is ${answer}`)
        rl.question("What's your favourite thing to eat for that meal?\n", (answer) => {
          answerStore.push(`I love having ${answer}`)
          rl.question("Which sport is your absolute favourite??\n", (answer) => {
            answerStore.push(`My absolute favourite sport is${answer}`)
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!\n", (answer) => {
              answerStore.push(`My super secret super power is ${answer}`)
              process.stdout.write(answerStore.toString());
              rl.close();
            }); 
          });
        });
      });
    });
  }); 
});
 */
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