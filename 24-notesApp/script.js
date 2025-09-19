
// All the variables and docs selection
let formContainer = document.querySelector('.form-container')
let cards = document.querySelector('.cards')

// grab the form container (scoped queries below)
const form = document.querySelector('#noteForm');
if (!form) throw new Error('Form #noteForm not found in the DOM');

// Inputs / controls (scoped to the form)
const imgUrlInput = form.querySelector('#imgUrl');
const fullNameInput = form.querySelector('#fullName');
const hometownInput = form.querySelector('#hometown');
const purposeInput = form.querySelector('#purpose');
const categorySelect = form.querySelector('#category');

// Buttons in form-container
const createBtn = form.querySelector('#createBtn');
const closeBtn = form.querySelector('#closeBtn');

// buttons in card-container
let addBtn = document.querySelector('.addBtn')
let upBtn = document.querySelector('.upBtn')
let downBtn = document.querySelector('.downBtn')

// code starts from here
function saveToLocalStorage (obj){
  if(localStorage.getItem('tasks') == null){
    let oldTasks = []
    oldTasks.push(obj)
    localStorage.setItem('tasks', JSON.stringify(oldTasks))
  } else {
    let oldTasks = localStorage.getItem('tasks')
    oldTasks = JSON.parse(oldTasks)
    oldTasks.push(obj);
    localStorage.setItem('tasks', JSON.stringify(oldTasks))
  }
}

addBtn.addEventListener('click', () => {
  formContainer.classList.replace('-top-[100%]','-top-[0%]')
})

closeBtn.addEventListener('click', () => {
  formContainer.classList.replace('-top-[0%]','-top-[100%]')
})

// Helper: read current form values (trimmed)
function getFormValues() {
  return {
    imgUrl: imgUrlInput?.value?.trim(),
    fullName: fullNameInput?.value?.trim(),
    hometown: hometownInput?.value?.trim(),
    purpose: purposeInput?.value?.trim(),
    category: categorySelect?.value?.trim()
  };
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = getFormValues();
  // simple validation
  if (data.fullName === '' || data.hometown === '' || data.purpose === '' || data.category === '' || data.imgUrl == '') {
    alert('Please fill the valid required fields.');
    return;
  }
  //console.log('Form submitted:', data);
  // TODO: create a card, save to localStorage, send to server, etc.
  createProfileCard({
    img: data.imgUrl,
    name: data.fullName,
    hometown: data.hometown,
    purpose: data.purpose,
    category: data.category
  });
  saveToLocalStorage(data)
  form.reset();
});

function createProfileCard(obj) {
  // Outer card
  const card = document.createElement("div");
  card.className = "card bg-[#f5f5f5] flex flex-col p-4 w-full h-full shadow-xl rounded-2xl absolute justify-around";

  // Profile wrapper
  const profile = document.createElement("div");
  profile.className = "profile overflow-hidden h-15 w-15 -mb-4";

  const profileImg = document.createElement("img");
  profileImg.src = obj.img;
  profileImg.alt = name;
  profileImg.className = "w-full h-full object-cover rounded-full";

  profile.appendChild(profileImg);
  card.appendChild(profile);

  // Name
  const h3Name = document.createElement("h3");
  h3Name.className = "font-bold";
  h3Name.textContent = obj.name;
  card.appendChild(h3Name);

  // Info block
  const infoBlock = document.createElement("div");
  infoBlock.className = "flex flex-col text-sm";

  const row1 = document.createElement("div");
  row1.className = "flex justify-between";
  const r1left = document.createElement("h4");
  r1left.textContent = "Hometown";
  const r1right = document.createElement("h4");
  r1right.textContent = obj.hometown;
  row1.appendChild(r1left);
  row1.appendChild(r1right);

  const row2 = document.createElement("div");
  row2.className = "flex justify-between";
  const r2left = document.createElement("h4");
  r2left.textContent = "Category";
  const r2right = document.createElement("h4");
  r2right.textContent = obj.category;
  row2.appendChild(r2left);
  row2.appendChild(r2right);

  infoBlock.appendChild(row1);
  infoBlock.appendChild(row2);
  card.appendChild(infoBlock);

  // Actions
  const actions = document.createElement("div");
  actions.className = "flex gap-2";

  const callBtn = document.createElement("div");
  callBtn.className = "call py-1 px-4 bg-black text-white rounded-full cursor-pointer active:scale-95 flex gap-2 items-center";
  const phoneIcon = document.createElement("i");
  phoneIcon.className = "ri-phone-line";
  const callText = document.createElement("h3");
  callText.className = "text-sm";
  callText.textContent = "call";
  callBtn.appendChild(phoneIcon);
  callBtn.appendChild(callText);

  const msgBtn = document.createElement("div");
  msgBtn.className = "message py-1 px-4 bg-black/20 text-white rounded-full cursor-pointer active:scale-95 hover:bg-black/40 flex items-center";
  msgBtn.textContent = "message";

  actions.appendChild(callBtn);
  actions.appendChild(msgBtn);
  card.appendChild(actions);

  // append to parent
  cards.appendChild(card);
}

function updateCardStack () {
  const cardlist = document.querySelectorAll('.cards .card');
  cardlist.forEach((card,idx) => {
    if(idx == 3) return;
    card.style.zIndex = 3 - idx;
    card.style.transform = `translateY(${idx*10}px) scale(${1-idx*0.02})`;
    card.style.opacity = `${1-idx*0.02}`
  })
}


upBtn.addEventListener('click', () => {
  let firstCard = cards.firstElementChild;
  let lastCard = cards.lastElementChild;
  if(lastCard) {
    cards.insertBefore(lastCard, firstCard)
    updateCardStack()
  }
})

downBtn.addEventListener('click', () => {
  let firstCard = cards.firstElementChild;
  if(firstCard) {
    cards.append(firstCard)
    updateCardStack()
  }
})


