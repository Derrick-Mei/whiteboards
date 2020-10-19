// function isArmstrong(num) {
//   let str = num.toString().split('')
//   let sum = str.reduce( (acc, item) => acc += Math.pow(parseInt(item), str.length),0)
//   console.log(sum === num)
// }

function isArmstrong(num) {
    let lengthCalc = num
    let length = 1;
    let num2 = num
    let sum = 0
    while (lengthCalc > 10) {
      length++
      lengthCalc = lengthCalc/10
    }
    // console.log(length)
    while ( num2 >= 1) {
      // console.log("num2", num2%10)
      sum += Math.pow(num2%10, length)
      num2 = (num2 - num2%10) / 10
    }
    // console.log(sum)
    // console.log(num)
    console.log(sum === num)
  }

  isArmstrong(6)
  isArmstrong(153)
  isArmstrong(351)