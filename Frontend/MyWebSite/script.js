let colorIcons = document.querySelector(".color-icon");
let  icons = document.querySelector(".color-icon .icons");

icons.addEventListener("click", () => {
  colorIcons.classList.toggle("open");
});



let resetButt = document.querySelector(".color-box")

resetButt.addEventListener('click',reset);
function reset() {
      resetButt.classList.toggle("activee");
      colorIcons.classList.remove("open")
}


let buttons = document.querySelectorAll(".btn");

for (var button of buttons) {
  button.addEventListener("click", (color) => {
    //adding click event to each button

    let target = color.target;

    let open = document.querySelector(".open");
    if (open) {
      open.classList.remove("open");
    }

    document.querySelector(".active").classList.remove("active");
    target.classList.add("active");

    header = document.querySelector(".header");
    button = document.querySelector(".button-main");
    logo = document.querySelector(".logo");
    nav_bars = document.querySelectorAll('.nav_bar a');
    skills = document.querySelectorAll('.title');
    card = document.querySelectorAll('.icon');
    info = document.querySelectorAll('.info h3');
    // reset
    card_contact = document.querySelectorAll('.contact .icon');
    info_contact = document.querySelectorAll('.contact .info h3');


    let dataColor = target.getAttribute("data-color");
    let colors = dataColor.split(" ");


    header.style.setProperty('background-color', colors[0])
    button.style.setProperty('background-color', colors[0])
    button.style.setProperty('color', colors[1])
    logo.style.setProperty('color', colors[1])
    for (i = 0; i < nav_bars.length; i++) {
      nav_bars[i].style.setProperty('color', colors[1]);
    }
    for (q = 0; q < skills.length; q++) {
      skills[q].style.setProperty('color', colors[0]);
    }
    for (j = 0; j < skills.length; j++) {
      card[j].style.setProperty('color', colors[0]);
      info[j].style.setProperty('color', colors[0]);
    }
    for (m = 0; m < card_contact.length; m++) {
      card_contact[m].style.setProperty('color', colors[0]);
      info_contact[m].style.setProperty('color', colors[0]);
    }
  })
};


resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", () => {
  header.style.setProperty('background-color', "#f2f2f2");
  logo.style.setProperty('color', "#3a6cf4");
  button.style.setProperty('background-color', "#3a6cf4");
  button.style.setProperty('color', "#fff");

  for (i = 0; i < nav_bars.length; i++) {
    nav_bars[i].style.setProperty('color', "#3a6cf4");
  }
  for (q = 0; q < skills.length; q++) {
    skills[q].style.setProperty('color', "#3a6cf4");
  }
  for (j = 0; j < skills.length; j++) {
    card[j].style.setProperty('color', "#3a6cf4");
    info[j].style.setProperty('color', "#3a6cf4");
  }
  for (m = 0; m < card_contact.length; m++) {
    card_contact[m].style.setProperty('color', "#3a6cf4");
    info_contact[m].style.setProperty('color', "#3a6cf4");
  }


})
