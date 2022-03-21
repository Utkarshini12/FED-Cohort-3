// console.log(document);

// console.log(document.domain);

// console.log(document.title);

// console.log(document.body);

// // grabbing elements 

// // GETELEMENTBYID

// console.log(document.getElementById('header-title'));
var headerTitle = document.getElementById('header-title');
headerTitle.innerText ="Hello";
headerTitle.style.display = 'block'

function mi() {
    document.getElementById('mission').innerHTML = "Mission Accepted!"
}

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


// var itemList = document.querySelector('#items');
// //parentNode property 
// console.log(itemList.parentNode.parentNode);
// console.log(itemList.childNodes);
// console.log(itemList.previousElementSibling);

// add items 
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');


// events
// addEventListener('what is the event that will trigger ', it will trigger a function) 
form.addEventListener('submit', addItem)
// event lisnter for delte 
itemList.addEventListener('click', removeItem);
// event listner for serach 
filter.addEventListener('keyup', filterItems);




function addItem(e) {

    e.preventDefault();
    var newItem = document.getElementById('item').value;
    //create a  new element 
    var li = document.createElement('li');
    // add styles
    li.className = 'list-group-item';
    console.log(li);
    // add text node with input value
    var input = document.createTextNode(newItem);
    console.log(input);
    // append input to li
    li.appendChild(input);
    // create del button
    var deleteBtn = document.createElement('button');
    // add styles
    deleteBtn.className = "btn btn-danger btn-sm float-end delete";
    // create text node and add it to to the button
    deleteBtn.appendChild(document.createTextNode('X'));
    console.log(deleteBtn);
    // adding button to li 
    li.appendChild(deleteBtn);
    console.log(li);
    // append li to list 
    itemList.appendChild(li);

}

function removeItem(e) {

    if(e.target.classList.contains('delete')) {
        if(confirm('are you sure? ')) {
            var li = e.target.parentElement
            itemList.removeChild(li) // remove the child 
        }
    }
}


// special attack 

function filterItems(e) {

    // grab the value inside the textbox and store it in a  var 

    // compare the value to all the text node inside the ul

    // store the list text nodes in an array 
    // loop through the array 
    // find the value equal to the value inside the array 
    // item.style.display = 'none'
    // item.style.display = 'block'



}


