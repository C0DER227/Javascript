let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click',()=>{
    let paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "Enter your Tasks";
    inputField.addEventListener('click',()=>{
        inputField.value="";
    })
    paragraph.addEventListener('click',()=>{
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick',()=>{
        toDoContainer.removeChild(paragraph);
    })
})