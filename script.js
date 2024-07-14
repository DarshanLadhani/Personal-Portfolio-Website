// Event Listner for window to scroll to top
window.addEventListener('load', function () {
    if (window.location.hash) {
        window.location.hash = "";
    }
});

// Scroll to top function

window.onscroll = function () { showscrollbtn() };

function showscrollbtn() {
    let btn = document.getElementById("scroll-top");
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        btn.style.display = "block";
    }
    else {
        btn.style.display = "none";
    }
}

function scrolltop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Project - Tabs

function displayProject(x, projectName) {
    let tabcontent, tablink, projectContent, webDev;

    tabcontent = document.getElementsByClassName("project-content");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablink = document.getElementsByClassName("tablink");
    for (let i = 0; i < tablink.length; i++) {
        tablink[i].classList.remove("active")
    }

    projectContent = document.getElementsByClassName("project-content");
    webDev = document.getElementsByClassName("web-dev")

    if (projectName == "All") {
        for (let i = 0; i < projectContent.length; i++) {
            projectContent[i].style.display = "flex";
        }
        x.classList += " active";
    }
    else if (projectName == "web-dev") {
        for (let i = 0; i < webDev.length; i++) {
            webDev[i].style.display = "flex";
        }
        x.classList += " active";
    }
    else {
        document.getElementById(projectName).style.display = "flex";
        x.classList += " active";
    }
}

document.getElementById("default").click()

// Modal Image 
let modal = document.getElementById("mymodal");
let modalImg = document.getElementById("modal-img");
let captionText = document.getElementById("caption");

function displayImg(myimg) {
    modal.style.display = "block";
    modalImg.src = myimg.src;
    captionText.innerHTML = myimg.alt;
}
var span = document.getElementsByClassName("close-btn")[0]

span.onclick = function () {
    modal.style.display = "none";
}

// For Side-Nav
function openNav () {
    document.getElementById("myside-nav").style.width ="50%";
}
function closeNav () {
    document.getElementById("myside-nav").style.width = "0px";
}

