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
        }

        // Add new task to DB on click
        captureTask(newTask);

    })
 
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
   $('.todos').empty();
   for (let i= 0; i < addTask.length; i++) {
          if (addTask[i].done == false ) {
              $('.todos').append(`<div class="active"><li>${addTask[i].task}</li><span><button class="completeTask" data-id="${addTask.id}">Mark Complete</button></span></div>`)
          } else {
              $('.done').append(`
              <div class="done"><li>${addTask.task}</li><span><button class="deleteTask" data-id="${addTask.id}">Remove</button></span></div>`)
          }
   }
}


function finishedTask(taskID){
    $.ajax({
        method:'PUT',
        url:`/todos/${taskID}`,
        data: taskID
    }).then( response => {
        getTasks();
    }).catch( error => {
        console.log('Error, Not able to mark task complete', error);
    })
}
