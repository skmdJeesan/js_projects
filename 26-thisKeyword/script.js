
let form = document.querySelector('form');
let username = document.querySelector('.username');
let role = document.querySelector('.role'); 
let bio = document.querySelector('.bio');
let photo = document.querySelector('.photo');
let delBtn = document.querySelector('.del')

// user.addEventListener('mouseenter', () => {
//   document.querySelector('.del').className.replace('opacity-0', 'opacity-100')
// })

const userManager = {
  users: [],
  init: function() { 
    form.addEventListener('submit', this.submitForm.bind(this))
    delBtn.addEventListener('click', this.removeUser.bind(this))
  },
  submitForm: function(e) {
    e.preventDefault();
    this.addUser()
  },
  addUser: function() {
    this.users.push({username: username.value, role: role.value, bio: bio.value, photo: photo.value})
    form.reset()
    this.render()
  },
  render: function() {
    document.querySelector(".users").innerHTML = "";
    this.users.forEach(function (user) {
      const card = document.createElement("div");
      card.className =
        "flex flex-col gap-2 bg-gray-200 rounded-xl items-center justify-center py-2 px-4 h-[30vh] w-[18vw] hover:scale-[1.2] transition-transform cursor-pointer shadow-xl relative";

      // Image
      const imgDiv = document.createElement('div');
      imgDiv.className = ' h-17 w-17 rounded-full overflow-hidden border-blue-200 shadow'
      const img = document.createElement("img");
      img.className = "w-full h-full object-cover";
      img.src = user.photo;
      img.alt = "User Photo";
      imgDiv.appendChild(img);
      card.appendChild(imgDiv)

      // Name
      const name = document.createElement("h2");
      name.className = "text-base font-bold";
      name.textContent = user.username;
      card.appendChild(name);

      // Role
      const role = document.createElement("h3");
      role.className = "text-sm";
      role.textContent = user.role;
      card.appendChild(role);

      // Description
      const bio = document.createElement("h4");
      bio.className = "text-gray-700 text-center text-sm";
      bio.textContent = user.bio;
      card.appendChild(bio);

      // Delete btn
      const delBtn = document.createElement('div')
      delBtn.className = 'del h-4 w-4 bg-red-400 rounded-full absolute top-2 right-2 flex items-center justify-center hover:bg-red-600'
      const icon = document.createElement('i');
      icon.className = 'ri-close-fill'
      delBtn.appendChild(icon)
      card.appendChild(delBtn)

      // Finally, append the card wherever needed, for example:
      document.querySelector(".users").appendChild(card);
    });
  },
  removeUser: function() {
    this.users.pop()
    this.render()
  },
}

userManager.init()
