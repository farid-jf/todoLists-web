let taskBtn = document.getElementById('taskBtn')
let confirmation = document.getElementById('confirmation')
let sureElement = document.getElementById('sure')

taskBtn.addEventListener('click', addTask)

function addTask() 
{
    let taskInput = document.getElementById('taskInput')
    let textInput = taskInput.value.trim()

    if (textInput === "") {
        toggleSure();
        return;
    }

    let lists = document.getElementById('taskList')
    let list = document.createElement('li')

    list.innerHTML = `<div><input type="checkbox" name="" id=""> ${textInput} </div> <span class="delete-btn" style="float: right;" onclick="deleteTask(this)">❌</span>`
    
    lists.appendChild(list)

    taskInput.value = ""
}


function toggleSure() {
    sureElement.classList.toggle('showSure');
}

function ok() {

    sureElement.classList.toggle('showSure')
}

function deleteTask(test)
{
    taskToDelete = test.parentElement;
    confirmation.classList.toggle('showConfirmation')
}

function confirm()
{
    if (taskToDelete) {
        taskToDelete.remove()
        confirmation.classList.toggle('showConfirmation')
        taskToDelete = null
    }
}

function cancel()
{
    confirmation.classList.toggle('showConfirmation')
    taskToDelete = null
}