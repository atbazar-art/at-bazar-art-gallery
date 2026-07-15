const gallery = document.getElementById("gallery");

const designs = [
{
title:"Football Jersey",
category:"Jersey",
badge:"Premium",
image:"https://picsum.photos/400/300?1"
},
{
title:"Poster Design",
category:"Poster",
badge:"Free",
image:"https://picsum.photos/400/300?2"
},
{
title:"Islamic Banner",
category:"Banner",
badge:"New",
image:"https://picsum.photos/400/300?3"
}
];

designs.forEach(item=>{

gallery.innerHTML += `
<div class="card">

<img src="${item.image}">

<div class="info">

<h3>${item.title}</h3>

<p>${item.category}</p>

<span class="badge">${item.badge}</span>

</div>

</div>
`;

});
