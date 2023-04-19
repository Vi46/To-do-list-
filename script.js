const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList =document.getElementById('taskList');

function addTask(){
  const textValue =taskInput.value;
  const listItem =document.createElement('li');
  listItem.innerText=textValue;
  listItem.addEventListener('click',function(){listItem.classList.toggle('completed')});
  
  const deleteButton =document.createElement('button');
  deleteButton.innerText ='Delete';
  deleteButton.classList.add('delete-button');
  deleteButton.addEventListener('click',function(){listItem.remove();});
  
  listItem.appendChild(deleteButton);
  taskList.appendChild(listItem);
  taskInput.value='';
}
addButton.addEventListener('click', addTask);

taskInput.addEventListener('keypress',function(e){
  if(e.keyCode===13){
   addTask(); 
  }
});

