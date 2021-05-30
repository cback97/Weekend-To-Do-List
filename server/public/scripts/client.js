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

}).catch(error => {
    console.log('POST error', error);
    alert('unable to create new task, try again later')
})
}


function getTasks() {
    $.ajax({
        type: 'GET',
        url: '/todos'
    }).then(function (response) {
        console.log(response);
        //must render tasks onto DOM here
       renderTasks();
    }).catch(function (error) {
        console.log('GET error', error);
    });
}

function renderTasks() {
   $('.todos').empty();
   for (let i= 0; i < response.length; i++) {
          if (response[i].done === true ) {
              $('.done').append(`<div class="active"><li>${response.task}</li><span><button data-id="${response.id}">Mark Complete</button></span></div>`)
          } else {
              $('todos').append(`
              <div class="done"><li>${response.task}</li><span><button data-id="${response.id}">Remove</button></span></div>`)
          }
   }
}
