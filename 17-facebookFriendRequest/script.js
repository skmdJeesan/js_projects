let istatus = document.querySelector('h3');
let btn = document.querySelector('#add');
//let removeFriend = document.querySelector('#remove');

let flag = 0;

btn.addEventListener('click', function () {
    if (flag == 0) {
        istatus.innerHTML = 'Friends';
        istatus.style.color = 'green';
        btn.innerHTML = 'remove'
        btn.style.color = '#111';
        btn.style.backgroundColor = '#dadada'
        flag = 1;
    } else {
        istatus.innerHTML = 'Stranger';
        istatus.style.color = 'red';
        btn.innerHTML = 'add friend'
        btn.style.color = 'white';
        btn.style.backgroundColor = 'cadetblue'
        flag = 0;
    }
})

// removeFriend.addEventListener('click', function () {
//     istatus.innerHTML = 'Stranger';
//     istatus.style.color = 'red';
// })

const img = document.querySelector('img');
const love = document.querySelector('i');

img.addEventListener('dblclick', function(){
    love.style.opacity = '0.8';
    love.style.transform = 'translate(-50%, -50%) scale(1)';
    setTimeout(function(){
        love.style.opacity = '0';
        love.style.transform = 'translate(-50%, -50%) scale(0)';
    }, 3000)
})

const main = document.querySelector('#main');
const cursor = document.querySelector('.cursor');

main.addEventListener('mousemove', function(e) {
    cursor.style.left = e.x+'px';
    cursor.style.top = e.y+'px';
})