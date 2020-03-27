const diceCup = dice => {
  const dice1 = dice[0];
  const dice2 = dice[1];
  let possibleResults = [];

  for (let i = 1; i <= dice1; i++) {
    for (let j = 1; j <= dice2; j++) {
      possibleResults.push(i + j);
    }
  }
  let mostProbable = [];
  let count = [];
  let number = 0;
  let maxIndex = 0;

  for (let k = 0; k < possibleResults.length; k += 1) {
    number = possibleResults[k];
    count[number] = (count[number] || 0) + 1;
    if (count[number] > maxIndex) {
      maxIndex = count[number];
    }
  }

  for (m in count)
    if (count.hasOwnProperty(m)) {
      if (count[m] === maxIndex) {
        mostProbable.push(Number(m));
      }
    }
  return mostProbable.join("\n");
};

console.log(diceCup([6, 4]));
