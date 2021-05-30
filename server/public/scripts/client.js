$(document).ready(onReady);

console.log('client side js is ready!');

function onReady() {
    console.log('jquery is working');
    // click event handler(s)
    addORdelete();

}

function addORdelete(){

    $('#addTask').on('click', function(){
        let newTask = {
            task: $('.task-input').val()
        };
        // Add new task to DB on click
        captureTask(newTask);
    });
$('.todos').on('click', '.completeTask', finishedTaskHandler);
$('.done').on('click', '.deleteTask', deleteTaskHandler );
 
} 


function captureTask(newTask){
console.log('In captureTask', newTask);
$.ajax({
    type: 'POST',
    url: '/todos',
    data: newTask
}).then( response => {
    console.log('Server Response', response);
    // re-render task list here via GET route function
    getTasks();
}).catch(error => {
    console.log('POST error', error);
    alert('unable to create new task, try again later')
})
$('.task-input').val('')
}



function getTasks() {
    
    $.ajax({
        type: 'GET',
        url: '/todos'
    }).then(response => {
        console.log(response);
        //must render tasks onto DOM here
       renderTasks(response);
    }).catch(error => {
        console.log('GET error', error);
    });
}



function renderTasks(addTask) {
    
    $('.done').empty();
   $('.todos').empty();
   
   for (let i= 0; i < addTask.length; i++) {
          if (addTask[i].done == false ) {
              $('.todos').append(`<div class="active"><li>${addTask[i].task}</li><span><button class="completeTask" data-id="${addTask[i].id}">Mark Complete</button></span></div>`)
          } else {
              $('.done').append(`
              <div class="done"><li>${addTask[i].task}</li><span><button class="deleteTask" data-id="${addTask[i].id}">Remove</button></span></div>`)
          }
   }
}

// click handler
function finishedTaskHandler(){
    finishedTask($(this).data("id"));
}

function finishedTask(addTaskID,){
    
    $.ajax({
        method:'PUT',
        url:`/todos/${addTaskID}`,
        data: addTaskID
    }).then( response => {
        // re-render tasks
        getTasks();
    }).catch( error => {
        console.log('Error, Not able to mark task complete', error);
    })
}

function deleteTaskHandler(){
    deleteTask($(this).data("id"))
}

function deleteTask(addTaskID) {
    console.log('DELETED');
    $.ajax({
        method:'DELETE',
        url: `/todos/${addTaskID}`
    })
    .then(response => {
        console.log('TASK DELETED');
        getTasks();
    })
    .catch( error => {
        alert('Error deleting Task.', error)
    })
}
