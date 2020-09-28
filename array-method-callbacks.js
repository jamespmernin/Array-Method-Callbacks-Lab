const minions = [
  "bob",
  "stuart",
  "dave",
  "jerry",
  "kevin",
  "mark",
  "tim",
  "phil",
  "carl",
];

minions.forEach(minion => console.log(`${minion} - here`));

let capitalizedMinions = minions.map(minion => {
  if (minion != 'kevin') {
    return minion[0].toUpperCase() + minion.slice(1);
  } else {
    return minion;
  }
});
console.log(capitalizedMinions);

function isCapitalized(word) {
  return word[0].toUpperCase() === word[0];
}

function isLowercase(word) {
  return word[0].toLowerCase() === word[0];
}

console.log(capitalizedMinions.every(isCapitalized));

let actuallyCapitalizedMinions = capitalizedMinions.filter(minion => isCapitalized(minion));
console.log(actuallyCapitalizedMinions);
console.log(actuallyCapitalizedMinions.every(isCapitalized));

const isKevin = (minion) => minion === 'kevin';
let kevinIndex = capitalizedMinions.findIndex(isKevin)
console.log(kevinIndex);
capitalizedMinions[kevinIndex] = (capitalizedMinions[kevinIndex][0].toUpperCase() + capitalizedMinions[kevinIndex].slice(1));
console.log(capitalizedMinions.every(isCapitalized));

let minionNameLengths = capitalizedMinions.map(minion => minion.length);
// console.log(minionNameLengths);
const reducer = (x, i) => x + i;
console.log(minionNameLengths.reduce(reducer));

const sixPlus = (x) => x.length >= 6;
const sevenPlus = (x) => x.length >= 7;
console.log(capitalizedMinions.some(sixPlus));
console.log(capitalizedMinions.some(sevenPlus));
capitalizedMinions[kevinIndex] = capitalizedMinions[kevinIndex].toLowerCase();
console.log(capitalizedMinions.some(isCapitalized));
console.log(capitalizedMinions.some(isLowercase));

let sortedMinions = capitalizedMinions.sort(function (a, b) {
  // To sort ascending  -> a.length - b.length
  // To sort descending -> b.length - a.length
  return a.length - b.length;
});
console.log(sortedMinions);