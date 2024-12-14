const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  },
];

const galleryUl = images.map(
  (image) => `<li><img src="${image.url}" alt="${image.alt}"></li>`).join(``);
  const gallery = document.querySelector(`.gallery`)
  gallery.innerHTML = galleryUl;
  gallery.style.display = `flex`;
  gallery.style.flexWrap = `wrap`;


  const list = gallery.querySelectorAll(`li`);
  list.forEach((li) => {
    li.style.listStyle = `none`;
  })
  
  const image = gallery.querySelectorAll(`img`);
  image.forEach((img) => {
    img.style.width = `200px`;
  })
  

// const numberOfLi = 6;

// for(let i = 0; i < numberOfLi; i++) {
//   const list = document.createElement(`li`);
//   galleryUl.append(list)
// }

// const listLi = galleryUl.querySelectorAll(`li`);
// listLi.forEach((imgLi) => {
//   const image = document.createElement(`img`);
//   imgLi.append(image);
//   console.log(imgLi)
// });

// const imgCicle = galleryUl.querySelectorAll(`img`);

// images.forEach((img, index) => {
//   imgCicle.setAttribute(img, img)
// })
