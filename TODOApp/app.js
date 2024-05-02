const removeBtns =document.querySelectorAll('li button'); //remove btn code
const form = document.querySelector('#addTodo');
const input =document.querySelector('#newTodo');
const todoList =document.querySelector('#todoList');

function addItemToLocalStorage(name) {
  let myItems = JSON.parse(localStorage.getItem("todoList"))
  if (myItems !== null) {
    myItems.push(name)
  } else {
    myItems = [name]
  }
  localStorage.setItem("todoList", JSON.stringify(myItems))
}

function removeFromLocalStorage(name) {
  let myItems = JSON.parse(localStorage.getItem("todoList"))
  myItems = myItems.filter(item => item !== name);
  localStorage.setItem("todoList", JSON.stringify(myItems))
}

const mySuperItems = JSON.parse(localStorage.getItem("todoList"))

if (mySuperItems !== null) {
  for (let item of mySuperItems) {
    addItem(item);
  }
}

for (let btn of removeBtns){
  btn.addEventListener('click', function(e){
      e.target.parentElement.remove();
  })
};

function addItem(name) {
  console.log('Adding ' + name + ' to list.')
  const newTodo =document.createElement('li');
  const removeBtns = document.createElement('button');
  removeBtns.innerText = 'Remove';
  removeBtns.addEventListener('click', function(e){
      e.target.parentElement.remove();
  });
  newTodo.innerText=name;
  newTodo.appendChild(removeBtns);
  todoList.appendChild(newTodo);
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    let name = input.value; 
    
    addItem(name);

    addItemToLocalStorage(input.value);

    input.value ='';
});

todoList.addEventListener("click", function(event) {
  const targetTagToLowerCase = event.target.tagName.toLowerCase();
  if (targetTagToLowerCase === "li") {
    event.target.style.textDecoration = "line-through";
  } else if (targetTagToLowerCase === "button") {
    let name = event.target.parentElement.innerText.replace('Remove', '');
    removeFromLocalStorage(name);
    event.target.parentNode.remove();
  }
});
