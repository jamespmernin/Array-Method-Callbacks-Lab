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

const isCapitalized = (word) => {
  return word[0].toUpperCase() === word[0];
}

const isLowercase = (word) => {
  return word[0].toLowerCase() === word[0];
}

console.log(capitalizedMinions.every((minion) => isCapitalized(minion)));

let actuallyCapitalizedMinions = capitalizedMinions.filter((minion) => isCapitalized(minion));
console.log(actuallyCapitalizedMinions);
console.log(actuallyCapitalizedMinions.every((minion) => isCapitalized(minion)));

const isKevin = (minion) => minion === 'kevin';
let kevinIndex = capitalizedMinions.findIndex(isKevin)
console.log(kevinIndex);
capitalizedMinions[kevinIndex] = (capitalizedMinions[kevinIndex][0].toUpperCase() + capitalizedMinions[kevinIndex].slice(1));
console.log(capitalizedMinions.every((minion) => isCapitalized(minion)));

let minionNameLengths = capitalizedMinions.map((minion) => minion.length);
// console.log(minionNameLengths);
const reducer = (x, i) => x + i;
console.log(minionNameLengths.reduce(reducer));

const sixPlus = (x) => x.length >= 6;
const sevenPlus = (x) => x.length >= 7;
console.log(capitalizedMinions.some((minion) => sixPlus(minion)));
console.log(capitalizedMinions.some((minion) => sevenPlus(minion)));
capitalizedMinions[kevinIndex] = capitalizedMinions[kevinIndex].toLowerCase();
console.log(capitalizedMinions.some((minion) => isCapitalized(minion)));
console.log(capitalizedMinions.some((minion) => isLowercase(minion)));

let sortedMinions = capitalizedMinions.sort(function (a, b) {
  // To sort ascending  -> a.length - b.length
  // To sort descending -> b.length - a.length
  return a.length - b.length;
});
console.log(sortedMinions);