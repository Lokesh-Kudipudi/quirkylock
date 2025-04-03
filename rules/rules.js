import RuleWordle from "./RuleWordle/RuleWordle";
import RuleSlidingPuzzle from "./RuleSlidingPuzzle/RuleSlidingPuzzle";
import RuleRiddle from "./RuleRiddle/RuleRiddle";
import RuleLocation from "./RuleLocation/RuleLocation";
import RuleQR from "./RuleQR/RuleQR";
import RuleSum from "./RuleSum/RuleSum";
import RuleEarthquake from "./RuleEarthquake/RuleEarthquake";
import Rule from "./Rule";
import RuleMorse from "./RuleMorse/RuleMorse";
import RuleTimeEmoji from "./RuleTimeEmoji/RuleTimeEmoji";

function getRandomWord() {
  const words = [
    {
      word: "shreeraj",
      scramble: "ershajre",
    },
    {
      word: "charisma",
      scramble: "rhaicams",
    },
    {
      word: "sneha",
      scramble: "hasne",
    },
    {
      word: "lokesh",
      scramble: "klohes",
    },
    {
      word: "balaji",
      scramble: "aljbai",
    },
    {
      word: "harshini",
      scramble: "nishirah",
    },
    {
      word: "ragamaie",
      scramble: "aagimera",
    },
    {
      word: "krishna",
      scramble: "nirksha",
    },
    {
      word: "sujith",
      scramble: "jitsuh",
    },
    {
      word: "rithvik",
      scramble: "kivhitr",
    },
    {
      word: "yashwanth",
      scramble: "hynawstah",
    },
    {
      word: "meghana",
      scramble: "gahname",
    },
  ];

  return words[Math.floor(Math.random() * words.length + 1)];
}

const randomWordObject = getRandomWord();

var rules = [
  new Rule(
    "Your password must be at least 6 characters.",
    (t) => t?.length >= 6
  ),
  new Rule(
    "Your password must include an uppercase and a lowercase letter.",
    (t) => /[A-Z]/.test(t) && /[a-z]/.test(t)
  ),
  new Rule(
    "Your password must include a special character.",
    (t) => /\W/.test(t)
  ),
  new Rule("Your password must include a number.", (t) =>
    /\d/.test(t)
  ),
  new Rule(
    "It should include the name of the event conducting club",
    (t) => /epoch/.test(t)
  ),
  new Rule(
    "It should include the name of the common DL framework",
    (t) => /tensorflow|pytorch/.test(t)
  ),
  new Rule(
    "It should include the name of Highest Subscribed Youtube Channel related to ML",
    (t) => /3Blue1Brown/.test(t)
  ),
  new Rule(
    "Your password must contain a word that is a common activation function in neural networks",
    (t) => /relu|sigmoid|tanh|softmax/.test(t)
  ),
  new Rule(
    "Your password must contain a metric used to measure GPU performance.",
    (t) => /flops|tensorflops/.test(t)
  ),
  new Rule(
    "Your password must include the abbreviation of a famous image generative model.",
    (t) => /gan|vae|diffusion/.test(t)
  ),
  new RuleMorse(),
  new RuleTimeEmoji(),
  new Rule(
    `Unscramble the word: '${randomWordObject.scramble}' into a name of event organizer`,
    (t) =>
      new RegExp(`\\b${randomWordObject.word}\\b`, "i").test(t)
  ),

  // new RuleQR(),
  // new Rule(
  //   "The sum of digits should be equal to the number of vowels in the password",
  //   (t) => {
  //     let sum = 0;
  //     let vowels = 0;
  //     for (let i = 0; i < t.length; i++) {
  //       if (!isNaN(t[i])) {
  //         sum += parseInt(t[i]);
  //       }
  //       if (/[aeiou]|[AEIOU]/.test(t[i])) {
  //         vowels++;
  //       }
  //     }
  //     console.log(sum, vowels);
  //     return sum == vowels;
  //   }
  // ),

  // new Rule(
  //   "Your password must contain all the english vowels.",
  //   (t) =>
  //     /a/i.test(t) &&
  //     /e/i.test(t) &&
  //     /i/i.test(t) &&
  //     /o/i.test(t) &&
  //     /u/i.test(t)
  // ),
  // new Rule(
  //   "Your password must include 2-digit prime number.",
  //   (t) =>
  //     /(?:11)|(?:13)|(?:17)|(?:19)|(?:23)|(?:29)|(?:31)|(?:37)|(?:41)|(?:43)|(?:47)|(?:53)|(?:59)|(?:61)|(?:67)|(?:71)|(?:73)|(?:79)|(?:83)|(?:89)|(?:97)/.test(
  //       t
  //     )
  // ),
  // new RuleSum(),
  // new Rule(
  //   'Your password must include the name of "The power house of the cell". \u{1F9A0}', //&#x1F9A0;
  //   (t) => /(?:mitochondria)|(?:mitochondrion)/i.test(t)
  // ),
  // new Rule(
  //   "Your password must include the name of a continent.",
  //   (t) =>
  //     /asia|europe|africa|australia|oceania|north america|south america|antarctica/i.test(
  //       t
  //     )
  // ),
  // new Rule(
  //   "Your password must contain the value of pi up to first 5 decimal places.",
  //   (t) => /(?:3\.14159)/.test(t)
  // ),

  // // new RuleWordle(),
  // new RuleEarthquake(),
  // new RuleLocation(),
  // new RuleRiddle(),
  // new Rule(
  //   "Your password must have as many vowels as consonants.",
  //   (t) =>
  //     (t.match(/[aeiou]/gi) || []).length ===
  //     (t.match(/[bcdfghjklmnpqrstvwxys]/gi) || []).length
  // ),
  // new RuleSlidingPuzzle(),
  // new Rule(
  //   "Your password must include the length of your password.",
  //   (t) => {
  //     let l = t.length;
  //     let r = new RegExp(`${l}`);
  //     return r.test(t);
  //   }
  // ),
];

function sort_rules(a, b) {
  if (a.correct == b.correct) {
    return b.num - a.num;
  } else if (!a.correct && b.correct) {
    return -1;
  } else {
    return 1;
  }
}

export default rules;
export { sort_rules };
