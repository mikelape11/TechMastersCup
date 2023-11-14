'use strict'

var clipboard = new ClipboardJS('.signs__button');

clipboard.on('success', function (e) {
  console.log(e);
});

clipboard.on('error', function (e) {
  console.log(e);
});

console.log("\u2705 Javascript cargado")


const homeBtn = document.querySelector("#home");
const infoBtn = document.querySelector("#info");
const playersBtn = document.querySelector("#players");
const resultsBtn = document.querySelector("#results");
const signsBtn = document.querySelector("#signs");
const signButton = document.querySelectorAll(".signs__button");
const tooltip = document.querySelectorAll(".signs__tooltiptext");
const menuBtn = document.querySelector(".menu__icon");
const menuList = document.querySelector(".menu__ul");

/*==================== CHANGE LANGUAGE ====================*/

if(homeBtn) {
    homeBtn.addEventListener("click", changeHome);
}
if(infoBtn) {
    infoBtn.addEventListener("click", changeInfo);
}
if(playersBtn) {
    playersBtn.addEventListener("click", changePlayers);
}
if(resultsBtn) {
    resultsBtn.addEventListener("click", changeResults);
}
if(signsBtn) {
    signsBtn.addEventListener("click", changeSigns);
}
if(signButton) {
    signButton.forEach((btn) => {
        btn.addEventListener("click", copyText);
    });
}
if(menuBtn) {
    menuBtn.addEventListener('click', ()=> {
        menuList.classList.toggle('active');
    });
}

function changeHome() {
    location.href="/tmc/";
}
function changeInfo() {
    location.href="/tmc/info/";
}
function changePlayers() {
    location.href="/tmc/players/";
}
function changeResults() {
    location.href="/tmc/results/";
}
function changeSigns() {
    location.href="/tmc/signs/";
}
function copyText() {

    tooltip.forEach((t) => {
        t.innerHTML = "Copied!";

        setTimeout(
            function() {
                t.innerHTML = "Copy to clipboard";
            }, 
        1000);
    });
}


/*==================== DELETE ROUTE /#IDS ====================*/

var links = document.getElementsByTagName("a");

Array.prototype.forEach.call(links, function(elem, index) {

    var elemAttr = elem.getAttribute("href");
    if(elemAttr && elemAttr.includes("#")) {
        elem.addEventListener("click", function(ev) {
        ev.preventDefault();
        document.getElementById(elemAttr.replace(/#/g, "")).scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest"
            });
        });
    }
});




