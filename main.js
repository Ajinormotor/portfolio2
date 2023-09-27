
var type = new Typed(".auto-type", {
    strings:["Frontend Developer","Busisness Manager"],
    typeSpeed: 150,
    backSpeed:150,
    loop: true
});



var navLink = document.getElementById("navLink");

function showMenu() {
    navLink.style.left = "0px";
}

function hideMenu() {
    navLink.style.left = "-300px";
}