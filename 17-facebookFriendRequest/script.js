let istatus = document.querySelector('h3');
let addFriend = document.querySelector('#add');
let removeFriend = document.querySelector('#remove');

addFriend.addEventListener('click', function () {
    istatus.innerHTML = 'Friends';
    istatus.style.color = 'green'
})

removeFriend.addEventListener('click', function () {
    istatus.innerHTML = 'Stranger';
    istatus.style.color = 'red';
})