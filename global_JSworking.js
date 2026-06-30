// fifth read
// 

//Imeediate Invoke Function Ecpression(IIFE)

(function wakeup(){
    //named ifi
console.log("DB connected");
})();

//() -- defination and task
//() --second is for immediate execution

//why we need this -- to prevent problem casused form global scope polution we user ifi 

//we use arrwo fiunction under ifif function

( () => {
    // undnamed ifi
    console.log("using arrow function to print using ifi");
    
})();

((name) => {
    console.log(`${name}`);
})("krishna")


//Nullish Coalishing operator
//provide null safty


let val = null ?? 10
let val1 = undefined ?? 10

console.log(val);


//terniary operator
let iceteeprice =100;
const a =iceteeprice >= 100 ? "this is nedded " : "this is not nedded comes form second case";
console.log(a);
