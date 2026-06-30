
//forth read

//let arr = [3,43,53,2];


// console.log(arr);
// arr.push(20);
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.unshift(0);
// console.log(arr);
// console.log(arr.includes(2));
// console.log(arr.indexOf(3));


//join convert the arr in string
let a = [2]
let b = [243, 43, 43]

// const newarr = b.join("-")
//const newarr = b.slice(1,3)
// console.log(newarr);



//slicce and splice (splice chages the original array)

// let A=["original=", 1,2,3,4]
// console.log(A);
// let B=["slice=", 1,2,3,4]
// console.log(B);
// console.log(B.slice(1,3));
// console.log(B);
// let C=["splice=", 1,2,3,4]
// console.log(C);
// console.log(C.splice(1,3));
// console.log(C);


//array merging through concate ,
// const arr = [3,3,3,2,2,2]
// const arr2 = [3,33,36,27,82,2 , [43]

// const newarr = arr2.concat(arr);
// console.log(newarr);


// // used to spread array and the collect all
// const new2 = [...arr , ...arr2 , 43]
// console.log(new2);

// //to make nested arraay flat

// const realflatarr = arr2.flat(Infinity) ;
// console.log(realflatarr);


console.log();


// about obj scope and this function 


// this referes to windows in browser gives all the function but in IDE it referes to empty obj if printe ouside any obj
const objThis = {
    username: "ram",

    welcome: function () {
        console.log("welocme", this.username);
    }
}

//objThis.welcome();



//this.property doesnot provide context inside function it give undefine 

//imp there is diif in function and expressio 

//function declartion using arrow function
//we are wirttng expression java variable an strore anything

const chai = function() {
    let username = "krishna";

    console.log(this.username);
}

// chai();


const chai2 = () => {
    let username = "krishna";
    console.log(this);
}
// chai();



//implicite return arrow function(no return keyword nedded)
//Note when we put currly braces we need to always return value 



//no currly braces
const sum = (num1 , num2) =>  (num1 + num2);
console.log(sum(2,5));
//retunr implicite obj
const objreturn  = () =>  ({username : "krishna"})
console.log(objreturn());










