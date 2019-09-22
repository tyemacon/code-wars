/*
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b.

array_diff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

array_diff([1,2,2,2,3],[2]) == [1,3]


Test.describe("Sample tests", function() {
  Test.it("Should pass Sample tests", function() {
    Test.assertDeepEquals(array_diff([], [4,5]), [], "a was [], b was [4,5]");
    Test.assertDeepEquals(array_diff([3,4], [3]), [4], "a was [3,4], b was [3]");
    Test.assertDeepEquals(array_diff([1,8,2], []), [1,8,2], "a was [1,8,2], b was []");
  });
});
*/ 


function array_diff(a, b) {
  for(let i = 0; i < b.length; i++){
    let bVar = b[i];
    for(let j = 0; j < a.length; j++){
      if(a[j] === bVar){
        a.splice(j, 1);
        j--;
      }
    }
  }
  return a;
}

console.log(array_diff([1,8,2,8,2,1,5,6,7,8,8,8,8,3,8,8,8,8], [1,8]));