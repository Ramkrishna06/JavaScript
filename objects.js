//second read


//objects creation

//object singelton

const sym = Symbol("any this for debuggig");

//defining obj

const obj = {}

const Juser = {
    "name": "ramk",
    [sym]: "this is the symbol",
    "full name": "ramk prajapati",
    email: "ramkrishna@ibm.in:"
}

// console.log(Juser.email);
// console.log(Juser["fullname"]);
// console.log(Juser["sym"]);
// console.log(typeof sym);


//noraml primitive got changed oor modified
// Juser.email = "krishn@google.com"
// console.log(Juser.email);


// console.log(Juser[sym]);
// Juser[sym] = "this is chaged value";
// console.log(Juser[sym]);
//conslusion is we can chage the value but we cannot vhage the key

//before

let s = "fsfsd";
let s2 = new String("fsfsd");

// console.log(s === s2);



const sym1 = Symbol("id");
const sym2 = Symbol("id");

const customer = {
    [sym1]: "xtz",
    [sym2]: "xtz"
}

// console.log(sym1 == sym2);
// console.log(sym1 === sym2);


//Object.freeze(customer); // will stop the further modification on properties


//here we are crating function as object property
Juser.wishers = function () {
    console.log("hello this is name nice to meet you")
}


Juser.wishers2 = function () {
    console.log(`hello this is ${this["full name"]} nice to meet you`)
}

// console.log(Juser.wishers());
// console.log(Juser.wishers2());



///nested object 

const nestedobj = {

    name: "sdfs",
    Adress: {
        city: "mumbai",
        state: "Maharastra"
    }
}

// how to join two obj 

//there is the concept of target and source in object.asssign

const a1 = { 2: '2', "fs": 4 }
const a2 = {
    "re": '32',
    "fs": 4,
    Ad: { city: "this is the adress" }
}

const objmerge = Object.assign(a1, a2);
const objmerge2 = Object.assign({}, a1, a2); // prefered this to give target as empty obj
// console.log(a1);
// console.log(a2);
// console.log(objmerge);


const spredobj = { ...a1, ...a2 }
// console.log(spredobj);


// //usign obj prototype methods
// console.log(Object.keys(spredobj));
// console.log(Object.values(spredobj));
// console.log(Object.entries(spredobj));

// console.log(spredobj.hasOwnProperty("2"));















