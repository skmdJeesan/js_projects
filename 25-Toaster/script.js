
// toaster
let parent = document.querySelector('.parent');
function createToaster (config){
  return function (notification){
    let div = document.createElement('div');
    div.className =`${config.theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'} py-3 px-6 rounded w-fit shadow-lg pointer-events-none capitalize text-base`;
    div.textContent = notification
    parent.appendChild(div)
    if(config.pos_x !== 'left' || config.pos_y !== 'top'){
      parent.className += `${config.pos_x === 'left' ? ' left-5' : ' right-5'} ${config.pos_y === 'top' ? ' top-5' : ' bottom-5'}`
    }
    setTimeout(function(){
      parent.removeChild(div);
    }, config.duration*1000)
  }
}

let toaster = createToaster({
  pos_y: 'bottom',
  pos_x: 'right',
  theme: 'light',
  duration: 3,
})

toaster('this is a test notification')
setTimeout(() => {toaster('download done')}, 2000)