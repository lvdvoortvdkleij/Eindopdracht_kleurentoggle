let toggleStatus = false;
  
const toggleNav = function() {
    const getSidebar = document.querySelector(".nav-sidebar");
    const getSidebarUl = document.querySelector(".nav-sidebar ul");
    const getSidebarLinks = document.querySelectorAll (".nav-sidebar li");

    toggleStatus = !toggleStatus

    if (toggleStatus === false) {
        getSidebarUl.style.visibility ="visible";
        getSidebar.style.width ="272px";

        for (let i = 0; i < getSidebarLinks.length; i++) {
            getSidebarLinks[i].style.opacity = "1";
        }

        toggleStatus === true;
    }

    else if (toggleStatus === true) {
        getSidebar.style.width ="50px";

        for (let i = 0; i < getSidebarLinks.length; i++) {
            getSidebarLinks[i].style.opacity = "1";
        }
        
        getSidebarUl.style.visibility ="hidden";

        toggleStatus === false;
    }
}

const homeBackground = document.querySelector(".makeHome");
const blueBackground = document.querySelector(".makeBlue");
const greenBackground = document.querySelector(".makeGreen");
const yellowBackground = document.querySelector(".makeYellow");
const pinkBackground = document.querySelector(".makePink");

homeBackground.addEventListener("click", function() {
    document.body.className = "makeHome"
    toggleNav ();
});

blueBackground.addEventListener("click", function() {
    document.body.className = "makeBlue"
    toggleNav ();
});

greenBackground.addEventListener("click", function() {
    document.body.className ="makeGreen"
    toggleNav ();
});

yellowBackground.addEventListener("click", function() {
    document.body.className = "makeYellow"
    toggleNav();
});

pinkBackground.addEventListener("click", function() {
    document.body.className = "makePink"
    toggleNav ();
});