// function reverse(str) {
//   let result = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     result += str[i];
//   }
//   return result;
// }

// function reverse2(str) {
//   return str.split("").reverse().join("");
// }

//calculate the sum of numbers from 1 up to (and including) some number n

// function addUpToFirst(n) {
//   // n=100 if n grows - num of oper grows too
//   let total = 0; //set total to 0
//   for (let i = 1; i <= n; i++) {
//     //loop depends what n is - addition i++// every time we loop we have 8 oper
//     total += i;
//   }
//   return total;
// }

// function addUpToSecond(n) {
//   return (n * (n + 1)) / 2;
// }

function allEven(nums) {
  let loopCount = 0;
  for (var i = 0; i < nums.length; i++) {
    loopCount++;
    if (nums[i] % 2 !== 0) {
      console.log("LOOP COUNT:", loopCount);
      return false;
    }
  }
  console.log("LOOP COUNT:", loopCount);
  return true;
}
