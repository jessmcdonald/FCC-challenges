const denomVals = [
  { name: "ONE HUNDRED", val: 100.0 },
  { name: "TWENTY", val: 20.0 },
  { name: "TEN", val: 10.0 },
  { name: "FIVE", val: 5.0 },
  { name: "ONE", val: 1.0 },
  { name: "QUARTER", val: 0.25 },
  { name: "DIME", val: 0.1 },
  { name: "NICKEL", val: 0.05 },
  { name: "PENNY", val: 0.01 }
]

function checkCashRegister(price, cash, cid) {
  let changeDue = cash - price;
  let changeToGive = [];
  let answer = {};

  //create cash drawer object
  let cashDrawer = cid.reduce(
    function(drawer, curr){
      drawer.total += curr[1];
      drawer[curr[0]] = curr[1];
      return drawer
    }, {total: 0}
  );
  //console.log(cashDrawer)

  //if do not have enough change
  if( changeDue > cashDrawer.total ){
    answer = {status: "INSUFFICIENT_FUNDS", change: []}
  } 
  //if have exactly enough change
   else if( changeDue == cashDrawer.total ){
    answer = {status: "CLOSED", change: cid}
  } else {
    //loop through denomVal
    for(let i = 0; i < denomVals.length; i++){
      if(denomVals[i].val > changeDue){
      } else {
        changeToGive = denomVals.reduce(function(acc, curr){
          let value = 0;
          //while denomVal is still in cashDrawer && changeDue is not less than denomVal
          while(cashDrawer[curr.name] > 0 && changeDue >= curr.val){
            //reduce changeDue by current denomVal
            changeDue -= curr.val;
            //reduce cashDrawer by current denomVal
            cashDrawer[curr.name] -= curr.val;
            //add 1x denomVal to the current denomVal value accum
            value += curr.val;
            //rounding
            changeDue = Math.round(changeDue * 100) / 100;
          }
          //if denomVal was used, add to changeToGive array
          if(value > 0){
            acc.push([curr.name, value]);
          }
          return acc
        }, []);
        answer.status = "OPEN";
        answer.change = changeToGive;
        //cannot give any change or cannot give correct change
        if(changeToGive.length < 1 || changeDue > 0){
          answer.status = "INSUFFICIENT_FUNDS";
          answer.change = [];
        }
      }
    }
  }
  return answer
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
