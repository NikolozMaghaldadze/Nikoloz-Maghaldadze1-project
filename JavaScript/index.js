let barMenu = document.querySelector(".burger-bar");
let activeBarMenu = document.querySelector(".burger-bar active");
let navigationBar = document.querySelector(".mobile-navigation");
let mainSections = document.querySelectorAll("section");
let header = document.querySelector("header");
let footer = document.querySelector("footer");
let clickCount = 0;
let popup = document.querySelector(".popup");
let X = document.querySelector(".X");
let user = document.querySelector(".logged-user-avatar");
let user2 = document.querySelector(".logged-user-avatar-1");
let user1 = document.querySelector(".popup-button");
let active = navigationBar.classList.contains("active");
user.addEventListener("click",()=>{
  popup.classList.add("active");
});
user2.addEventListener("click",()=>{
  popup.classList.add("active");
});
X.addEventListener("click",()=>{
  popup.classList.remove("active");
  if(!popup.classList.contains("active")){
    if(window.innerWidth < 450){
      navigationBar.classList.add("active");
    }
    if(window.innerWidth > 450){
      navigationBar.classList.remove("active");
    }
  }
});

user1.addEventListener("click",()=>{
  popup.classList.add("active");
  navigationBar.classList.remove("active");
  console.log(popup.classList.contains("active"));
  
});

barMenu.addEventListener("click", function () {
  barMenu.classList.toggle("active");
  navigationBar.classList.toggle("active");

  if (active) {
    mainSections.forEach((x) => {
      x.classList.toggle("none");
    });
  } else if (!active) {
    mainSections.forEach((x) => {
      x.classList.toggle("none");
    });
  }
  active = true;
});

window.addEventListener("resize", function () {
  let w = window.innerWidth;
  {
    if (w > 450) {
      navigationBar.classList.remove("active");
      barMenu.classList.remove("active");
      mainSections.forEach((x) => {
        x.classList.remove("none");
      })
    }
  }
});

//s l i d e r #1
let leftArrow = document.getElementById("arrowLeft");
let rightArrow = document.getElementById("arrowRight");
let left = document.getElementById("left");
console.log(left);
let sliderIndex = 0;
let slider = [
  {
    id: 1,
    imageURL: "https://images.pexels.com/photos/973049/pexels-photo-973049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    headerText: "World news",
    topic: "Amazing places in America to visit.",
    description:
      "For some reason — this country, this city, this neighborhood, this particular street — is the place you are living a majority of your life in.",
  },
  {
    id: 2,
    imageURL: "https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    headerText: "Places to visit",
    topic: "Amazing places in europe to visit.",
    description:
      "Experience Europe's charm! From Italy's art to France's cuisine, immerse in diverse cultures, stunning landscapes, and rich history. Your adventure awaits!",
  },
  {
    id: 3,
    imageURL: "https://images.pexels.com/photos/10936088/pexels-photo-10936088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    headerText: "Georgia",
    topic: "Place full of love and beauty!",
    description:
      "Discover Georgia in the Caucasus! A blend of ancient history, breathtaking landscapes, warm hospitality, and delectable cuisine. Unveil a hidden gem!",
  },
];

function setNewSlide(item) {
  // div sliderWrapper
  let divWrapper = document.createElement('div');
  divWrapper.classList.add('sliderWrapper');
  //slider img
  let image = document.createElement('img');
  image.setAttribute('src', item.imageURL);
  //div textWrapper
  let textWrapper = document.createElement('div');
  textWrapper.classList.add('text-information');
  //h2
  let headerTag = document.createElement('h2');
  headerTag.innerText = item.headerText;
  //hr
  let hr = document.createElement('hr');
  //h3
  let h3 =document.createElement('h3');
  h3.innerText = item.topic;
  //p
  let paragraph =document.createElement('p');
  paragraph.innerText = item.description;
  let button = document.createElement('button');
  button.innerText = 'learn more';
  divWrapper.appendChild(image);
  textWrapper.appendChild(headerTag);
  textWrapper.appendChild(h3);
  textWrapper.appendChild(paragraph);
  textWrapper.appendChild(button);
  divWrapper.appendChild(textWrapper);

  return divWrapper;
}

left.appendChild(setNewSlide(slider[sliderIndex]))

function clearTag(){
  left.innerHTML = ''
}

rightArrow.addEventListener("click", () => {
  if(sliderIndex == slider.length-1){
    sliderIndex = 0;
  }else{
    sliderIndex++;
  }
  clearTag();
  left.appendChild(setNewSlide(slider[sliderIndex]));
  
});

leftArrow.addEventListener("click", () => {
  if(sliderIndex == 0){
    sliderIndex=slider.length-1;
  }else{
    sliderIndex--;
  }
  clearTag();
  left.appendChild(setNewSlide(slider[sliderIndex]));
  
});



//S L I D E R  #2

let secondSlider = [
  {
    id:1,
    img1URL:"https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img1URL2:"https://images.pexels.com/photos/1366922/pexels-photo-1366922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img1URL3:"https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    header:"Dolore magna aliqua",
    header2:"Morbi eleifend a libero",
    paragraph:"Lorem ipsum dolor sit amet, ipsum labitur",
    clockIMG:"https://cdn-icons-png.flaticon.com/512/641/641328.png",
    time1:"2m ago",
    time2:"1h ago",
    time3:"2h ago",
  },
  {
    id:2,
    img1URL:"https://images.pexels.com/photos/9638689/pexels-photo-9638689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img1URL2:"https://images.pexels.com/photos/6590699/pexels-photo-6590699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img1URL3:"https://images.pexels.com/photos/16059681/pexels-photo-16059681/free-photo-of-clouds-over-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    header:"Dolore magna aliqua",
    header2:"Morbi eleifend a libero",
    paragraph:"Lorem ipsum dolor sit amet, ipsum labitur",
    clockIMG:"https://cdn-icons-png.flaticon.com/512/641/641328.png",
    time1:"2m ago",
    time2:"1h ago",
    time3:"2h ago",
  },
  {
    id:3,
    img1URL:"https://images.pexels.com/photos/1693095/pexels-photo-1693095.jpeg?auto=compress&cs=tinysrgb&w=600",
    img1URL2:"https://images.pexels.com/photos/4215113/pexels-photo-4215113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img1URL3:"https://images.pexels.com/photos/4394104/pexels-photo-4394104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    header:"Dolore magna aliqua",
    header2:"Morbi eleifend a libero",
    paragraph:"Lorem ipsum dolor sit amet, ipsum labitur",
    clockIMG:"https://cdn-icons-png.flaticon.com/512/641/641328.png",
    time1:"2m ago",
    time2:"1h ago",
    time3:"2h ago",
  }
]

//append object
let secondLeftArrow = document.getElementById("dinamicSectionLeft");
let secondRightArrow = document.getElementById("dinamicSectionRight");
let appendObject = document.querySelector(".section-from-js");
let secondIndex = 0;
function setSecondSlider(object) {
  //main wrapper
  let mainWrapper=document.createElement("div");
  mainWrapper.classList.add('from-js')
  // div sliderWrapper
  let divWrapper1 = document.createElement('div');
  let divWrapper2 = document.createElement('div');
  let divWrapper3 = document.createElement('div');
  divWrapper1.classList.add('blockWrapper');
  divWrapper2.classList.add('blockWrapper');
  divWrapper3.classList.add('blockWrapper');
  //slider img
  let image1 = document.createElement('img');
  let image2 = document.createElement('img');
  let image3 = document.createElement('img');
  image1.setAttribute('src', object.img1URL);
  image2.setAttribute('src', object.img1URL2);
  image3.setAttribute('src', object.img1URL3);
  //div textWrapper
  let textWrapper1 = document.createElement('div');
  let textWrapper2 = document.createElement('div');
  let textWrapper3 = document.createElement('div');
  textWrapper1.classList.add('text-wrapper-js');
  textWrapper2.classList.add('text-wrapper-js');
  textWrapper3.classList.add('text-wrapper-js');
  //h2
  let headerTag1 = document.createElement('h2');
  let headerTag2 = document.createElement('h2');
  let headerTag3 = document.createElement('h2');
  headerTag1.innerText = object.header;
  headerTag2.innerText = object.header2;
  headerTag3.innerText = object.header2;
  //p
  let paragraph1 =document.createElement('p');
  let paragraph2 =document.createElement('p');
  let paragraph3 =document.createElement('p');
  paragraph1.innerText = object.paragraph;
  paragraph2.innerText = object.paragraph;
  paragraph3.innerText = object.paragraph;
  //div clock
  let divClock1 =document.createElement("div");
  let divClock2 =document.createElement("div");
  let divClock3 =document.createElement("div");
  divClock1.classList.add("time-wrapper");
  divClock2.classList.add("time-wrapper");
  divClock3.classList.add("time-wrapper");
  //clock
  let clock1 = document.createElement("img");
  let clock2 = document.createElement("img");
  let clock3 = document.createElement("img");
  clock1.setAttribute("src", object.clockIMG);
  clock2.setAttribute("src", object.clockIMG);
  clock3.setAttribute("src", object.clockIMG);
  //
  let postTime1= document.createElement("p");
  let postTime2= document.createElement("p");
  let postTime3= document.createElement("p");
  postTime1.innerText=object.time1;
  postTime2.innerText=object.time1;
  postTime3.innerText=object.time1;
  //append

  // block 1
  divWrapper1.appendChild(image1);
  divWrapper1.appendChild(headerTag1);
  divWrapper1.appendChild(paragraph1);
  divClock1.appendChild(clock1);
  divClock1.appendChild(postTime1);
  divWrapper1.appendChild(divClock1);
// block 2
  divWrapper2.appendChild(image2);
  divWrapper2.appendChild(headerTag2);
  divWrapper2.appendChild(paragraph2);
  divWrapper2.appendChild(divClock2);
  divClock2.appendChild(clock2);
  divClock2.appendChild(postTime2);
// block 3
  divWrapper3.appendChild(image3);
  divWrapper3.appendChild(headerTag3);
  divWrapper3.appendChild(paragraph3);
  divWrapper3.appendChild(divClock3);
  divClock3.appendChild(clock3);
  divClock3.appendChild(postTime3);
// main block
  mainWrapper.appendChild(divWrapper1);
  mainWrapper.appendChild(divWrapper2);
  mainWrapper.appendChild(divWrapper3);
  return mainWrapper;
}

appendObject.appendChild(setSecondSlider(secondSlider[secondIndex]));

secondRightArrow.addEventListener("click", () => {
  if(secondIndex == secondSlider.length-1){
    secondIndex = 0;
  }else{
    secondIndex++;
  }
  clearSecondSlider();
  appendObject.appendChild(setSecondSlider(secondSlider[secondIndex]));
});

secondLeftArrow.addEventListener("click", () => {
  if(secondIndex == 0){
    secondIndex=secondSlider.length-1;
  }else{
    secondIndex--;
  }
  clearSecondSlider();
  appendObject.appendChild(setSecondSlider(secondSlider[secondIndex]));
  
});

function clearSecondSlider(){
  appendObject.innerHTML = ''
}