$(document).ready(onReady);

console.log('client side js is ready!');

function onReady() {
    console.log('jquery is working');
    addTask();

}

function addTask(){
    $('i').on('click', function (){
        console.log(`Yes I'm Working!`);
    });
}
