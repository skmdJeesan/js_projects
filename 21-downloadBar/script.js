
let sec = 3;
let progress = document.querySelector('.progress')
let percent = document.querySelector('.percent');
let heading = document.querySelector('.heading');

let cnt = 0;
let interval = setInterval(() => {
  if(cnt == 100) heading.textContent = 'Downloaded'
  if(cnt < 100){
    cnt++;
    //progress.classList.replace('w-[0%]', `w-${cnt}%`)
    progress.style.width = `${cnt}%`
    percent.textContent = `${cnt}%`
  } else clearInterval(interval)
}, (sec*1000)/100)