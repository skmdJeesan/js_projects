const users = [
  {
    name: "Aarav Sharma",
    pic: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    bio: "Software student from Pune, loves coding and chess."
  },
  {
    name: "Priya Nair",
    pic: "https://images.unsplash.com/photo-1529626455594-4daea6f7e0c1",
    bio: "UX designer from Kochi, enjoys sketching and teaching design."
  },
  {
    name: "Rohit Verma",
    pic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    bio: "Electrical engineering student, into embedded systems."
  },
  {
    name: "Sana Khan",
    pic: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    bio: "Data analyst from Lucknow, loves painting and street food."
  },
  {
    name: "Vikram Joshi",
    pic: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    bio: "Civil engineering student, enjoys trekking and sketching."
  },
  {
    name: "Meera Iyer",
    pic: "https://images.unsplash.com/photo-1529626455594-4daea6f7e0c2",
    bio: "Community organiser from Chennai, into music and baking."
  },
  {
    name: "Ankit Gupta",
    pic: "https://images.unsplash.com/photo-1524504388940-b1c1722653e2",
    bio: "Full-stack developer, mentors juniors and plays tabla."
  },

  // Added more with same first names, different surnames 👇
  {
    name: "Aarav Mehta",
    pic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    bio: "AI enthusiast from Delhi, enjoys cricket and coding nights."
  },
  {
    name: "Priya Singh",
    pic: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce",
    bio: "Marketing student, loves photography and blogging."
  },
  {
    name: "Rohit Das",
    pic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    bio: "Backend developer, fond of football and open source."
  },
  {
    name: "Sana Patel",
    pic: "https://images.unsplash.com/photo-1529626455594-4daea6f7e0c4",
    bio: "Medical student, enjoys reading and volunteering."
  },
  {
    name: "Vikram Reddy",
    pic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    bio: "Mechanical engineer, passionate about biking."
  },
  {
    name: "Meera Kapoor",
    pic: "https://images.unsplash.com/photo-1524504388940-b1c1722653e3",
    bio: "Fashion designer, enjoys yoga and travel."
  },
  {
    name: "Ankit Yadav",
    pic: "https://images.unsplash.com/photo-1529626455594-4daea6f7e0c5",
    bio: "Frontend developer, gamer, and music lover."
  }
];

function showUsers(arr) {
  if (arr.length === 0) {
    // optional: show no-results message
    const no = document.createElement('div');
    no.className = "text-white/90";
    no.textContent = "No users found.";
    document.querySelector('.cards').appendChild(no);
    return;
  }
  arr.forEach((user) => {
    // Create card container
    const card = document.createElement("div");
    card.className = "card flex flex-col h-[37vh] w-[15vw] rounded-3xl overflow-hidden relative cursor-pointer hover:scale-120 transition-transform";

    //Image
    const img = document.createElement("img");
    img.src = user.pic;
    img.alt = "#";
    img.className = "h-full w-full object-cover";
    card.appendChild(img);

    // Blur layer
    const blurLayer = document.createElement("div");
    blurLayer.className = "blur-layer w-full h-1/3 bg-white/30 blur-lg absolute bottom-0";
    card.appendChild(blurLayer);

    // Content container
    const content = document.createElement("div");
    content.className = "content absolute bottom-2 text-white left-4 hover:text-yellow-400";
    card.appendChild(content);

    // Title
    const h3 = document.createElement("h3");
    h3.className = "text-base font-bold";
    h3.textContent = user.name;
    content.appendChild(h3);

    // Paragraph
    const p = document.createElement("p");
    p.className = "text-xs";
    p.textContent = user.bio;
    content.appendChild(p);

    // Finally append to some parent (example: body or .cards)
    document.querySelector('.cards').appendChild(card);
  });
}

showUsers(users);

let inp = document.querySelector('input');
inp.addEventListener('input', () => {
  let newUsers = users.filter((user) => {
    return user.name.toLowerCase().startsWith(inp.value.toLowerCase());
  })
  document.querySelector('.cards').innerHTML = '';
  showUsers(newUsers)
})

