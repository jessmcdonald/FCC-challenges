let line;
let kittens;
let beds;
let index = 0;
let requests = [];
let canFulfil = [];
let departDate = 0;
let cannotFulfil = [];

//get number of kittens and number of beds from first input line
while ((line = readline())) {
  const splitline = line.split(" ");
  if (index < 1) {
    kittens = splitline[0];
    beds = splitline[1];
    index += 1;
  } else {
    //get arrivals and departure days for each kitten
    for (let i = 0; i < 1; i++) {
      var inputs = line.split(" ");
      const A = parseInt(inputs[0]);
      const D = parseInt(inputs[1]);
      requests.push({ arrive: A, depart: D });
      index += 1;
    }
  }
}

//sort array of requests according to earliest departure date
requests.sort((a, b) =>
  a.depart - b.depart ? a.depart - b.depart : b.depart - a.depart
);
//print(JSON.stringify(requests));

//for loop iterates over unfulfilled requests once for every bed that is available
for (let y = 0; y <= beds - 1; y++) {
  cannotFulfil = [];
  //reset departDate after 1 iteration
  departDate = 0;
  //loop through requests and add request to canFulfil if it starts after previous event ends
  requests.forEach(x => {
    const { arrive, depart } = x;
    if (arrive >= departDate) {
      canFulfil.push(x);
      departDate = depart;
    } else {
      cannotFulfil.push(x);
    }
  });

  //set requests to be unfilfilled requests for next iteration
  requests = cannotFulfil;
}

//print(JSON.stringify(cannotFulfil))
answer = JSON.stringify(canFulfil.length);
print(answer);
