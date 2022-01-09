const playBtn = document.querySelector(".play");
const videoPlayer = document.querySelector(".video");
const video = document.querySelector(".home-video");
const articles = document.querySelectorAll(".articles article");

playBtn.addEventListener("click", () => {
  video.src =
    "https://www.youtube.com/embed/dhKEFcnU508?autoplay=1&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=http://youtubeembedcode.com";
  videoPlayer.style.visibility = "visible";
});

window.addEventListener("click", (e) => {
  if (
    e.target.className != "home-play" &&
    e.target.className != "ellips-play"
  ) {
    videoPlayer.style.visibility = "hidden";
    video.src = "";
  }
});

//ANIMATIONS START
const challengeArticleReveal = () => {};

challengeArticleReveal();
//ANIMATIONS ENDS

//Slideshow
const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");

tabs.forEach((tab) => {
  //SHOW SLIDESHOW
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("tab-active");
    });
    tabs.forEach((el) => {
      el.classList.remove("nav-tab-active");
    });

    target.classList.add("tab-active");
    tab.classList.add("nav-tab-active");
  });
  //SHOW SLIDESHOW
});

//Ellipsis

const sections = document.querySelectorAll("section");
const ellipsis = document.querySelectorAll(".ellips-dot");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  ellipsis.forEach((el) => {
    el.classList.remove("ellips-active");
    if (el.classList.contains(current + "Ellipse")) {
      el.classList.add("ellips-active");
    }
  });
});
