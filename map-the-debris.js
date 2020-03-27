function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  
  let answArr = [];

  const getOrbitPeriod = function(obj) {
    let orbPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + obj.avgAlt, 3)/ GM));
    obj.orbitalPeriod = orbPeriod;
    delete obj.avgAlt;
    return obj
  };
  for (let elem in arr){
    answArr.push(getOrbitPeriod(arr[elem]))
  }
  return answArr;
}

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));
