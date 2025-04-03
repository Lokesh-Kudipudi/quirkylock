const words = [
  "shreeraj",
  "charisma",
  "sneha",
  "lokesh",
  "balaji",
  "harshini",
  "ragamaie",
  "krishna",
  "sujith",
  "rithvik",
  "yashwanth",
  "meghana",
];

export default function getRandomWord() {
  return words[Math.floor(Math.random() * (words.length + 1))];
}
