function display(sum) {
    document.getElementById('call').innerHTML = sum;
}

function calculator(n1, n2) {
    let sum = n1+ n2;
    return sum;
}

var result = calculator(5, 5);
display(result);


// promises
var promise = new Promise(function(resolve, reject) {
    var x = 3;
    var y = '3';

    if(x === y) {
        resolve();
    }else {
        reject();
    }

})

// pending 
// Three states 
// resolve : true state
// reject : false state 
// pending  : initial state of a promise 
promise.then(function() {
    console.log("Success");
}).catch(function() {
    console.log("Some error ");
})



// timers in js 
// setTimeout(func, time in mm)

function timer() {
    alert("Hello")
}


// es6 
// a promise 
let promise2 = new Promise(function(resolve, reject) {
    setTimeout(function(){
        resolve('Promise is resolved')
    }, 3000);
})
// async func 
async function asyncFunc() {

    let result = await promise2;
    let result2 = await promise3; 

    console.log(result);
    console.log("Hello");
}

asyncFunc();

