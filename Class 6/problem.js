// CALLBACK HELL , pyramid of doom

function getContinent(callback) {
    let c= 'asia'
     callback(c);
}


function getCountries(continent, callback){
    let countries= ["India", "Pakistan", "Bangal"]
    callback(countries)
}

function getStates(countries, callback){
    let state= ["Delhi", "karnataka", "Maharashtra"]
    callback(state)
}

getContinents(function(continent) {
    getCountries(continent, function(countries) {
        getStates(countries[7], function(state) {
            getTown(state, function(town) {

            })
            
        })
    })
})
// solve the problem using promises
getContinent().then(function(continent) {
    getCountries().then(function(contries) {


    })
}) 

// we are in callback hell again 

// first we want to get the continent 
// then we want to get the countries 


// timers 
get Address() {
    getContinent().then(function(continent) { // asia 
        getCountries().then(function(contries) {  
            // == give us error , resolved  // 3000  // india 
            setTimeout(getCountries, 3000)
            getStates().then(function(state){ // 2s  // erroe 
                setTimeout(getStates, 5000)
            })
        })
    })
}




// async await 

const continents = await getContinent(); // 0s // asia
const countries = await getCountries(); // 2s // india
const state = await getStates(); // 4s  // error 


//  stack 1 : using promises , timer 

[]
country, state, town, streetname 
[india, delhi, west Delhi ] 

// result : 
// error : streetname() timestamp: 8s


// stack 2 : using async await 
country, state, town, streetname 

var c = asia
var co = country 
var state = // erroe 

[asia, country ]

// result 

= [asia, india ]
// errerror : streetname() timestamp: 8s



c , co 
state = delhi 
= = [asia, india, delhi  ]

