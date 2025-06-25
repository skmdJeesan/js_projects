let arr = [
    {dp: "https://images.unsplash.com/photo-1725071421752-327d5bc3e40a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story: "",},

    {dp: "https://images.unsplash.com/photo-1492288991661-058aa541ff43?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story: "",},

    {dp: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story: "",},

    {dp: "https://plus.unsplash.com/premium_photo-1661681115364-d6a47c193442?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story: "",}
]

let clutter = "";
arr.forEach(function(elem,i){
    clutter += `<div class="story"><img src="${elem.dp}" alt=""></div>`
})

document.querySelector('#story-section').innerHTML = clutter