let projectsDataSet = {
  1: {
    title: "React JS",
    imageLink: "Images/projectsPopup/reactPOP.png",
    discription:
      "Convert website homepage from normal HTML and CSS, into a Fully responsive React JS web application.Provides ease in the process of modification and flexibility in dealing with elements.",
    demoLink: "https://abualhija.github.io/React/",
    "Source code": "https://github.com/Abualhija/React",
  },
  2: {
    title: "HTML / CSS / Javascript",
    imageLink: "Images/projectsPopup/spdPOP.png",
    discription:
      "Typing speed test with many playing levels , Some features are restricted so cheating is not possible.",
    demoLink: "https://abualhija.github.io/Front-End/index7.html",
    "Source code":
      "https://github.com/Abualhija/My-Repository/tree/main/Frontend/Typing%20speed%20Test",
  },
  3: {
    title: "HTML / CSS / Javascript",
    imageLink: "Images/projectsPopup/Memory_GamePOP.png",
    discription: "Mini game Cars memory card to find all similar pictures.",
    demoLink: "https://abualhija.github.io/Front-End/index6.html",
    "Source code":
      "https://github.com/Abualhija/My-Repository/tree/main/Frontend/Memory%20Game",
  },
  4: {
    title: "HTML / CSS ",
    imageLink: "Images/projectsPopup/FyloPOP.png",
    discription:
      "Designing a homepage of Fylo , hypothetical online cloud storage using html , css and svg.",
    demoLink: "https://abualhija.github.io/Front-End/index5.html",
    "Source code":
      "https://github.com/Abualhija/My-Repository/tree/main/Frontend/Fylo",
  },
  5: {
    title: "HTML / CSS ",
    imageLink: "Images/projectsPopup/YoutubePOP.png",
    discription: "Cloning the homepage of YouTube using html and css.",
    demoLink: "https://abualhija.github.io/portfolio/YouTube_index",
    "Source code":
      "https://github.com/Abualhija/My-Repository/tree/main/Frontend/YouTube%20clone",
  },
  6: {
    title: "HTML / CSS ",
    imageLink: "Images/projectsPopup/TwitterPOP.png",
    discription: "Cloning the homepage of Twitter using html and css.",
    demoLink: "https://abualhija.github.io/portfolio/twitter_index",
    "Source code":
      "https://github.com/Abualhija/My-Repository/tree/main/Frontend/Twitter%20clone",
  },
  7: {
    title: "HTML / CSS ",
    imageLink: "Images/projectsPopup/HomorPOP.png",
    discription:
      "Drawing Homer character from Simpsons cartoon using only CSS.",
    demoLink: "https://abualhija.github.io/portfolio/simp_index",
    "Source code":
      "https://github.com/Abualhija/My-Repository/tree/main/Frontend/Simpsons",
  },
  8: {
    title: "HTML / CSS ",
    imageLink: "Images/projectsPopup/FrebPOP.png",
    discription: "Drawing Ferb cartoon character using only CSS.",
    demoLink: "https://abualhija.github.io/portfolio/freb_index",
    "Source code":
      "https://github.com/Abualhija/My-Repository/tree/main/Frontend/Ferb",
  },
  9: {
    title: "Python",
    imageLink: "Images/projectsPopup/carsShowRoomPOP.jpg",
    discription:
      "The system contains all process needed by any car showroom like employees issues , simulating the selling and buying cars operations ,and reflecting all bank account operations.provides Accessibility for each employee with a permission to access and modify a certain data according to the nature of employee's work Has a full email system for all employees.",
    demoLink: "No Demo",
    "Source code":
      "https://github.com/Abualhija/My-Repository/tree/main/Python/Cars%20Showroom",
  },
};
let container = document.querySelector(".main-container");

/* Changing the background image randomly from many photos*/

/* generating the images */
let imagesArray = generateImages();
function generateImages() {
  let images = [];
  for (let i = 1; i <= 5; i++) {
    images.push(`Images/img${i}.png`);
  }
  return images;
}

/* generating random number between 0 and imagesArrayLength 
  to change the background randomly*/
randomChoiceFunction(1);

function randomChoiceFunction(x) {
  if (x === 1) {
    backgroundInterval = setInterval(function () {
      let randomNumber = Math.floor(Math.random() * imagesArray.length);
      container.style.backgroundImage = `url(${imagesArray[randomNumber]})`;
    }, 5000);
  } else {
    clearInterval(backgroundInterval);
    container.style.backgroundImage = `url("Images/img5.png")`;
  }
}
/* ---END--- generating random number between 0 and imagesArrayLength 
  to change the background randomly*/

/* ---END--- Changing the background image randomly from many photos*/

/* adding open class to settings menu*/

let settingButton = document.querySelector(".settings-gear");
settingButton.addEventListener("click", function () {
  document.querySelector(".setting-box").classList.toggle("open");
  document.querySelector(".setting-box i").classList.toggle("rotate");
  document.querySelector(".setting-box-overlay").classList.toggle("active");
});

let hideSettings = document.querySelector(".setting-box-overlay");
hideSettings.addEventListener("click", function () {
  document.querySelector(".setting-box").classList.toggle("open");
  document.querySelector(".setting-box i").classList.toggle("rotate");
  document.querySelector(".setting-box-overlay").classList.toggle("active");
});

/* ------END------ adding open class to settings menu*/

/* add active for random background */
const randomBackground = document.querySelectorAll(".random-background span");
randomBackground.forEach(function (sp) {
  sp.addEventListener("click", function (e) {
    activeClass(e);

    /* checking the random background choice*/
    if (e.target.dataset.bgrndm === "yes") {
      randomChoiceFunction(1);
    } else {
      randomChoiceFunction(0);
    }
    /* ---END--- checking the random background choice*/
  });
});

/* ---END--- adding active for random background */

/* switching site colors */

const colorsList = document.querySelectorAll(".colors-list li");
colorsList.forEach(function (li) {
  li.addEventListener("click", function (e) {
    document.documentElement.style.setProperty(
      "--mainColor",
      `${e.target.dataset.color}`
    );
    activeClass(e);
  });
});

/* ---END--- switching site colors */

/* change the active class on header area*/
let allLinks = document.querySelectorAll(".links a");
allLinks.forEach(function (e) {
  e.addEventListener("click", function () {
    let activeLink = document.querySelector("a.active");
    activeLink.classList.remove("active");
    e.classList.add("active");
  });
});

/* ---END--- changing active class */

/* start scrolling for header and bullets */
let allBulletsScroll = document.querySelectorAll(".navBullets .bullet");
let allLinksScroll = document.querySelectorAll(".links a");

scrollToSections(allLinksScroll);
scrollToSections(allBulletsScroll);
function scrollToSections(elements) {
  elements.forEach(function (e) {
    e.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });
}

/* ---END--- start scrolling for header and bullets */

/* start progress bar */

let skillsContainer = document.querySelector(".skills-main-container");

window.onscroll = function () {
  let skillsOffsetTop = skillsContainer.offsetTop;
  let skillsOffsetHeight = skillsContainer.offsetHeight;
  let windowHeight = window.innerHeight;
  let windowScrollTop = this.pageYOffset;

  wntedHeight = skillsOffsetTop + skillsOffsetHeight - windowHeight;
  if (windowScrollTop >= wntedHeight - 800) {
    let skillsProgress = document.querySelectorAll(".skill-progress p");
    skillsProgress.forEach(function (e) {
      let progressValue = e.dataset.progress;
      e.style.width = `${progressValue}`;
    });
  }
};

/* ---END--- start progress bar */

/* start makeing the popup element disappear */

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("close-button")) {
    e.target.parentElement.remove();
    document.querySelector(".popup-overlay").remove();
    document.body.style.overflow = "auto";
  }
  if (e.target.classList.contains("popup-overlay")) {
    document.querySelector(".popup-Element").remove();
    document.querySelector(".popup-overlay").remove();
    document.body.style.overflow = "auto";
  }
});

/* ---END--- start makeing the popup element disappear */

/* Start picking the choice fot showing the bullets */

let bulletsSpan = document.querySelectorAll(".bullets-option span");
let bulletsNav = document.querySelector(".navBullets");

bulletsSpan.forEach(function (span) {
  span.addEventListener("click", function (e) {
    if (e.target.dataset.display === "show") {
      bulletsNav.style.display = "block";
    } else {
      bulletsNav.style.display = "none";
    }
    activeClass(e);
  });
});
/* ---END--- Start picking the choice fot showing the bullets */

/* start making the navBar Fixed */

let fixedNavbar = document.querySelectorAll(".fixed-navbar-options span");
let navBar = document.querySelector(".header-area");

fixedNavbar.forEach(function (span) {
  span.addEventListener("click", function (e) {
    if (e.target.dataset.display === "not-fixed") {
      navBar.classList.remove("fixed");
      // bulletsNav.style.display = "block";
      // document
      //   .querySelector(".bullets-option span[data-display=show]")
      //   .classList.add("active");
      // document
      //   .querySelector(".bullets-option span[data-display=hide]")
      //   .classList.remove("active");
    } else {
      navBar.classList.add("fixed");
      // bulletsNav.style.display = "none";
      // document
      //   .querySelector(".bullets-option span[data-display=show]")
      //   .classList.remove("active");
      // document
      //   .querySelector(".bullets-option span[data-display=hide]")
      //   .classList.add("active");
    }
    activeClass(e);
  });
});

/* ---END--- start making the navBar Fixed */

/* Function to change active class */
function activeClass(ev) {
  ev.target.parentElement.querySelectorAll(".active").forEach(function (e) {
    e.classList.remove("active");
  });
  ev.target.classList.add("active");
}

/* ---END--- Function to change active class */

/* clicking on reset button to reset everything */

let resetButton = document.querySelector(".options-box.reset");
resetButton.addEventListener("click", function () {
  window.location.reload();
});

/* end clicking on reset button to reset everything */

/* start toggle menue */
let toggleButton = document.querySelector(".toggle-menu");
let tLinks = document.querySelector(".links");

toggleButton.addEventListener("click", function (e) {
  /* stop propagation */
  e.stopPropagation();
  /* for the arrow */
  this.classList.toggle("menu-active");
  /* for the menu */
  tLinks.classList.toggle("open");
});

/* other way to hide element after clicking outside it */

document.addEventListener("click", function (e) {
  if (e.target !== toggleButton && e.target !== tLinks) {
    //checling if the menu is open
    if (tLinks.classList.contains("open")) {
      /* for the arrow */
      toggleButton.classList.toggle("menu-active");
      /* for the menu */
      tLinks.classList.toggle("open");
    }
  }
});

/* if you want to hide the menu after clicking on links active this  */
// tLinks.addEventListener("click", function (e) {
//   e.stopPropagation();
// });

/* ---end--- toggle menue */

/* Create Popup for projects images*/

let imagesGallery = document.querySelectorAll(".image-box img");

imagesGallery.forEach(function (e) {
  e.addEventListener("click", function () {
    dataIndex = e.dataset.index;
    let overlay = document.createElement("div");
    overlay.className = "popup-overlay";
    document.body.appendChild(overlay);
    /* ---END--- create Overlay */

    /* create popup element */
    let popupElement = document.createElement("div");
    popupElement.className = "popup-Element";

    /*+++ adding heading to popup element+++*/
    if (e.alt !== "") {
      let imgeTitle = document.createElement("h3");
      let imageText = document.createTextNode(e.alt);
      imgeTitle.appendChild(imageText);
      popupElement.appendChild(imgeTitle);
    }
    /*--- ---END--- +++adding heading to popup element+++ ---*/

    let popupContainer = document.createElement("div");
    popupContainer.className = "popup-container";
    popupElement.appendChild(popupContainer);

    let popupImage = document.createElement("img");
    if (window.innerWidth > 768) {
      popupImage.src = projectsDataSet[dataIndex]["imageLink"];
    } else {
      popupImage.src = e.src;
    }
    popupContainer.appendChild(popupImage);

    document.body.appendChild(popupElement);

    let projecDetails = document.createElement("div");
    projecDetails.className = "project-element";
    popupContainer.appendChild(projecDetails);

    let projectTextNode = document.createElement("div");
    projectTextNode.className = "project-description";
    projecDetails.appendChild(projectTextNode);

    let projectTitle = document.createElement("h4");
    let projectTitleText = document.createTextNode(
      projectsDataSet[dataIndex]["title"]
    );
    projectTitle.appendChild(projectTitleText);
    projectTextNode.appendChild(projectTitle);

    let projectDetailsElement = document.createElement("p");
    let projectText = document.createTextNode(
      projectsDataSet[dataIndex]["discription"]
    );
    projectDetailsElement.appendChild(projectText);
    projectTextNode.appendChild(projectDetailsElement);

    let projecLinks = document.createElement("div");
    projecLinks.className = "project-links";
    projecDetails.appendChild(projecLinks);
    let demoLink = document.createElement("a");
    if (projectsDataSet[dataIndex].demoLink === "No Demo") {
      demoLink.className = "demo-link no-demo";
    } else {
      demoLink.className = "demo-link";
    }

    demoLink.target = "_blank";
    demoLink.href = projectsDataSet[dataIndex]["demoLink"];
    demoLink.innerHTML = "Demo";

    let sourceLink = document.createElement("a");
    sourceLink.className = "source-link";
    sourceLink.target = "_blank";
    sourceLink.href = projectsDataSet[dataIndex]["Source code"];
    sourceLink.innerHTML = "Source code";

    projecLinks.appendChild(demoLink);
    projecLinks.appendChild(sourceLink);

    /* ---END--- create popup element */

    /* create close button */
    let closeButton = document.createElement("span");
    closeButton.className = "close-button";
    let closeButtonText = document.createTextNode("X");
    closeButton.appendChild(closeButtonText);
    popupElement.appendChild(closeButton);
    /* ---END--- create close button */
  });
});

let imgBox = document.querySelectorAll(".image-box img");

imgBox.forEach(function (e) {
  e.addEventListener("click", function () {
    let noDemo = document.querySelectorAll(".no-demo");
    if ( noDemo ){
      noDemo.forEach(function (f) {
        f.remove();
      });
    }
  });
}
);
//////////////*************************+////////////////////// -->

/* Preventing scroll when popup is show*/

let allProjects = document.querySelectorAll(".image-box img");
allProjects.forEach(function (e) {
  e.addEventListener("click", function () {
    let allDivs = document.querySelectorAll("body > div");
    allDivs.forEach(function (e) {
      if (e.classList.contains("popup-Element")) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    });
  });
});

/* ---END--- Preventing scroll when popup is show*/

/* prevent submit button from submitting form */
let formSubmitButton = document.querySelector(".contact .right-form input");
formSubmitButton.disabled = true;

/* ---END--- prevent submit button from submitting form */

/* Current Year for footer */
document.querySelector(".date-year").innerHTML = new Date().getFullYear();

/*---END--- Current Year for footer */

/* Change color of navbar when scrolling */
let navBarElements = document.querySelectorAll(".change-nav-colors > div");
let navBarLinks = document.querySelectorAll("ul.links li a");
let navBullets = document.querySelectorAll(".navBullets .bullet");
window.addEventListener("scroll", function () {
  navBarElements.forEach(function (e) {
    if (window.scrollY > e.offsetTop - 200) {
      if (window.scrollY < e.offsetTop + e.offsetHeight) {
        navBarLinks.forEach(function (f) {
          if (f.dataset.section === `.${e.classList[0]}`) {
            // changing the navBullets color based on active section
            navBullets.forEach(function (g) {
              if (g.dataset.section === f.dataset.section) {
                g.classList.add("active");
              } else {
                g.classList.remove("active");
              }
            });
            document
              .querySelector("ul.links li a.active")
              .classList.remove("active");
            f.classList.add("active");
          }
        });
      }
    }
  });
});

/* ---END--- Change color of navbar when scrolling */

changeInnerHTML();
function changeInnerHTML() {
  let screenWidth = window.innerWidth;
  screenWidth = window.innerWidth;
  if (screenWidth < 670) {
    document.querySelector(
      ".introduction-text h1"
    ).innerHTML = `<h1>I'm a <span> Creative</span><br>Web Developer</h1>`;
  } else {
    document.querySelector(
      ".introduction-text h1"
    ).innerHTML = `<h1>I'm a <span> Creative</span> Web Developer</h1>`;
  }
}

window.addEventListener("resize", () => {
  changeInnerHTML();
});
