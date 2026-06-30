//third read
//here we are crating standalone function 


function addtwoNumber(){
    console.log("function created");
    
}


function loggedin(username = "sam"){
    console.log(`${username} logged in`);
}

loggedin("krishna");



function restOperator(val1  ,val2 ,...price){
    return price;
}

// console.log(restOperator(21,34,324,34));


//we are now passsing obj in parameter

const user = {
    firstname : "ram",
    Address : "Bangalore"
}

function objpassed(anyobj){
    console.log(`my name is ${anyobj.firstname} and my adress is ${anyobj.Address}`);
     //here we not not striclty checking that obj has relation with properties such as firstname or adress that why we use typescript;
}


objpassed(user);
objpassed({
    name : "krishan ",
    eamil : "ramkrishna@microsoft.com",
    Address : "bangalore"
});


//now passing array to function

const arr = [34,2,34,234,2];

function arrvaluesopration(getarr , index){
    console.log(`${getarr[index]}`);
    
}

arrvaluesopration(arr , 2);
arrvaluesopration([4,2,34,23,42,4,'43fds'] , 6);
//
