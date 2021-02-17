const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
//items:is list added
var items =0;
//id: of each list created
var id=0;
//unchecked: how many unchecked left 
var unchecked = 0;
//newTodoClicked: used to determine if new toDo was clicked again
var newTodoClicked =0;
//checkArray: holds if the list is check or unchecked index is the id  
var checkarray = new Array();

//newTodo: creates a textfield and button to add to the list
//also restarts todo if new todo button is clicked again
function newTodo() {
  //if the user clicks new todo button again to restart one
  if(newTodoClicked>0){
    location.reload();
  }
  //tracks the new todo button click
  newTodoClicked++;

  //form: to allow forward textfield value to a javascript function
  //when button add is clicked
  var form = document.createElement("FORM");
  form.setAttribute("id","myForm");
  form.setAttribute("action","javascript: addTodo()");
  //add to list
  list.appendChild(form);

  //text: textfield element 
  var text = document.createElement("INPUT");
  text.setAttribute("type","text");
  text.setAttribute("id","mytext");

  //button: button element
  var button = document.createElement("INPUT");
  button.setAttribute("type","submit");
  button.setAttribute("value","ADD");

  //add to text and button to form
  document.getElementById("myForm").appendChild(text);
  document.getElementById("myForm").appendChild(button);
}

function addTodo(){

  items++;
  id++;
  unchecked++;
  uncheckedCountSpan.innerHTML = unchecked;
  itemCountSpan.innerHTML = items;

  var form = document.createElement("FORM");
  form.setAttribute("id","myForm1");
  form.setAttribute("action","javascript: checked(this)");
  list.appendChild(form);
  
  var checkbox = document.createElement("INPUT");
  checkarray[items]="unchecked";
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("name","check");
  checkbox.setAttribute("id",""+id+"");
  checkbox.onclick = (function(){
    return function(){
      checked(checkbox.getAttribute("id"));
    }
  })();
  

  var label = document.createElement("LABEL");
  var value = document.getElementById("mytext").value;
  var text = document.createTextNode(value+" ");
  label.setAttribute("for","check");
  label.setAttribute("id","label"+id+"");
  label.appendChild(text);

  var button = document.createElement("INPUT");
  button.setAttribute("type","submit");
  button.setAttribute("value","x");
  button.setAttribute("id","button"+id+"");
  button.onclick = (function(){
    return function(){
      deleteTodo(checkbox.getAttribute("id"));
    }
  })();

  list.appendChild(checkbox);
  list.appendChild(label);
  list.appendChild(button);
  
}

function checked(obj){
  var checkedValue = checkarray[obj];
  if(checkedValue==="unchecked"){
    unchecked--;
    checkarray[obj]="checked";
  }else{
    unchecked++;
    checkarray[obj]="unchecked";
  }
  uncheckedCountSpan.innerHTML = unchecked;
}

function deleteTodo(obj){

  items--;
  unchecked--;
  uncheckedCountSpan.innerHTML = unchecked;
  itemCountSpan.innerHTML = items;

  var checkbox_elem = document.getElementById(obj);
  checkbox_elem.parentNode.removeChild(checkbox_elem)
  var label_elem = document.getElementById("label"+obj);
  label_elem.parentNode.removeChild(label_elem)
  var button_elem = document.getElementById("button"+obj);
  button_elem.parentNode.removeChild(button_elem)
  
}

