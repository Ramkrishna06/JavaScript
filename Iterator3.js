let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//we wnat to add 10 to every elemnt

// const result1 = arr.map((num) => (num + 10));
// console.log(result1);
// const result = arr.map((num) => { return num + 10 })
//     .map(function operation(n) { return n - 4 })
//     .filter((n) => { return n > 10 });
// console.log(result);




// Its purpose is to reduce an entire array into a single value.
//think of acculumator as running total

const myreducearr = arr.reduce(
    (acc, currval) =>{

          console.log(`${acc} , ${currval}`)
          return acc+currval
    }, 10//acculumator
);
console.log("total value ",myreducearr);
