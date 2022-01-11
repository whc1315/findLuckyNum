// Write your code below this line.
// let lucknum = []
// function luckyNumbers(n){
//     for (let i = 1; i <= n; i++){
//     let r = (Math.floor(Math.random() * 10))
//     if(lucknum.indexOf(r) === -1) lucknum.push(r)
//     } console.log(lucknum)
// }
// luckyNumbers(9)
// ^^^^MY INCORRECT ATTEMPT^^^^



// Write your code below this line.
function luckyNumbers(n) {
    let possibleNumbers = [1,2,3,4,5,6,7,8,9,10]
    let luckyNum = []
    for (let i = 0; i < n; i++) {
      let x = Math.floor(Math.random() * possibleNumbers.length);
      luckyNum.push(possibleNumbers[x])
      possibleNumbers.splice(x, 1)
    }
    // return luckyNum
    console.log(luckyNum)
  } 

  luckyNumbers(6)