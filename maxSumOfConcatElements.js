/* Challenge: Rearrange Array Elements so as to form two number such that their sum is maximum. The number of digits in both the numbers cannot differ by more than 1. You're not allowed to use any sorting function.

for e.g. [1, 2, 3, 4, 5]

The expected answer would be [531, 42]. Another expected answer can be [542, 31]. In scenarios such as these when there are more than one possible answers, return any one.

*
*******************************************************************
Breakdown of my solution:

* Find the largest number in the current array (maxNum)- This is because I realized the max sum comes when the largest numbers are paired together in both numbers. For example, for 2nd digit spot (tens), both numbers should have the max available. Matching this way should always provide the highest sum

* Concat this number(maxNum) alternatively between first and second number to be returned- So it starts with firstNum, then secondNum on next pass, firstNum again etc

* Delete maxNum from array using maxIndex and .splice()- so to ensure single numbers aren't repeated. However, if a number was repeated in the original array, only one would be deleted on first pass, then the other goes on the next pass etc thus preserving the solution.

* Repeat for length of original array (at which point modified array will also be empty)
   
*/
function maxSumOfConcatElements(arr) {
      let temp = [...arr], firstNum = "", secondNum = "", maxNum, maxIndex;
      for (let val in arr) {
        console.log(val)
        maxNum = Math.max(...temp);
        maxIndex = temp.indexOf(maxNum)
        if (val % 2 === 0) {
          firstNum += maxNum;
        }
        else {
          secondNum += maxNum;
        }
        temp.splice(maxIndex,1)
      }
    
  return [firstNum, secondNum]
}
