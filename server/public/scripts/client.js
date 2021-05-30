const { response } = require("express");

$(document).ready(onReady);

console.log('client side js is ready!');

function onReady() {
    console.log('jquery is working');
    addORdelete();

}

function addORdelete(){
    let newTask = {
        task: $('.task-input').val()
    }
 
} // end addTask


function captureTask(newTask){
console.log('In captureTask', newTask);
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
