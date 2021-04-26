$(document).ready(onReady);

console.log('client side js is ready!');

function onReady() {
    console.log('jquery is working');
    addTask();

}

function addTask(){
    let newTask = {
        task: $('.task-input').val()
    }
    $.ajax({
        type: 'POST',
        url: '/todos',
        data: newTask
    }).then(function(response) {
        console.log('Server Response', response);
    }).catch(function (error) {
        console.log('POST error', error);
        alert('unable to create new task, try again later')
    })
} // end addTask

function getTasks() {
    $.ajax({
        type: 'GET',
        url: '/todos'
    }).then(function (response) {
        console.log(response);
        //must render tasks onto DOM here

    }).catch(function (error) {
        console.log('GET error', error);
    });
}
