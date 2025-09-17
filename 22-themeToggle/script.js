
let body = document.querySelector('body');
let btn = document.querySelector('button');

let isOsDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
// if isOsDark is true then the Os dark mode is on else it's off

// if(isOsDark) body.classList = 'dark';
// else body.classList = 'light';

let theme = localStorage.getItem('theme');
if(theme) body.classList.replace('dark',theme);

btn.addEventListener('click', () => {
  if(body.classList.contains('dark')) {
    body.classList.replace('dark','light');
    localStorage.setItem('theme', 'light')
  }
  else {
    body.classList.replace('light','dark');
    localStorage.setItem('theme', 'dark')
  }
})