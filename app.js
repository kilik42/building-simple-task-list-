//define UI VARIABLES

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');


//load all event listeners
loadEventListeners();


//load all event listeners
function loadEventListeners(){
  // add task loadEventListeners
  form.addEventListener('submit', addTask);
}


//add tasks
function addTask(e){
  if(taskInput.value === ''){
    alert('Add a task');
  }

  //create li element
  const li = document.createElement('li');
  // add class
  li.className = 'collection-item';
  // text node
  li.appendChild(document.createTextNode(taskInput.value));
  //create new link createElement
  const link = document.createElement('a');
  //add className
  link.className = 'delete-item seconday-content';
  //add icon html

  link.innerHTML = '<i class = "fa fa-remove"> </i>';

  //append the link to li
  li.appendChild(link);

//append li to ul
taskList.appendChild(li);

//clear taskInput
taskInput.value = '';

console.log(li);


  e.preventDefault();

}
