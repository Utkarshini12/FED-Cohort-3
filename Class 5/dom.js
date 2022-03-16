// console.log(document);

// console.log(document.domain);

// console.log(document.title);

// console.log(document.body);

// // grabbing elements 

// // GETELEMENTBYID

// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// headerTitle.innerText ="Hello";
// headerTitle.style.borderBottom = "solid 3px #000"

// function mi() {
//     document.getElementById('mission').innerHTML = "Mission Accepted!"
// }

// // GETELEMENTBYCLASSNAME

// console.log(document.getElementsByClassName('list-group-item'));
// var items = document.getElementsByClassName('list-group-item')
// console.log(items[1]);
// // items[1].style.backgroundColor = "grey";

// // items.style.backgroundColor = "#f4f4f4";

// for(var i = 0; i < items.length; i++) {
//    items[i].style.borderBottom ="solid 3px #000";
// }


// var header = document.querySelector('#main-header');
// header.style.borderBottom = "solid 4px red";

// var input = document.querySelector('input');
// input.value = "hello World";

// var titles = document.querySelectorAll('.title');
// console.log(titles);

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');

// console.log(odd);
// console.log(even);

// for (var i = 0; i< odd.length; i++) {
//     odd[i].style.backgroundColor = "#f4f4f4";

// }

// tranversing the dom 


var itemList = document.querySelector('#items');
//parentNode property 
console.log(itemList.parentNode.parentNode);
console.log(itemList.childNodes);
console.log(itemList.previousElementSibling);







