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

  if (clickCount % 2 === 0) {
    mainSections.forEach((x) => {
      x.classList.toggle("none");
    });
  } else if (clickCount % 2 === 1) {
    mainSections.forEach((x) => {
      x.classList.toggle("none");
    });
  }
  clickCount++;
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

