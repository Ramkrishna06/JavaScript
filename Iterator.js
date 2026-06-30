//sixth read


let arr = [34, 35, 342, 342, 2]

for (let i = 0; i < arr.length; i++) {
    //console.log(arr[i]);
}

//whiile lloop

// while(Condition){

// }


// {
//     console.log("first we will do work once and then check condition");
// }while(conditon);


//for of and for in and for each loop 
//for of loop detects values direclty
// let str = "hello"
for (const i of arr) { //str
    //   console.log(i,"-");
}


//maps (key value pair)

const map = new Map();
map.set(3, "fsd");
map.set(2, "have to build my own project");
console.log(map);


for (let key of map) {
    // console.log(key);
}

for (let [key, value] of map) {
    // console.log(key,":",value);
}

//what if we have obj
const obj = {
    username: "ramkrishna",
    email: "ramkrishna234a@microsoft.com"
}

//for obj is not iteratable there anothe way map are iteratable
// for(const i of obj){
//     console.log(i);
// }


//using for in looop 

for (const i in obj) {
    // console.log(i ," ", obj[i]);   
}


//does it woeks in array : yes it works
// so in for in loop we itereate in keys
for (const i in arr) {
    // console.log(arr[i]);
}

//what about map 
//..on map for of loop convet map into indivalual array with key and value
// for(let i in map){
//     //prints keys
//     console.log(i);

// }
//nothing will be printed



// for each loop

arr.forEach(function (val) {
    // console.log(val);
})

arr.forEach((val, index, arr) => {
    //    console.log(val ,"=>comes form arraow");
})


//itereatin usign for each in array of object

const data = [
    {
        language: 'java',
        extetion: ".java"
    },
    {
        language: 'python',
        extetion: ".py"
    },
    {
        language: 'javascript',
        extetion: ".js"
    }
]



data.forEach((data)=>{
    console.log(data.language,":" ,data.extetion);
})


//drawback : what if we want to return value based on some condition here for each fails 
//we user .filter methods that can return the value;




