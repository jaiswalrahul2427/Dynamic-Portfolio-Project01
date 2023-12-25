window.onscroll = function() {
    scrollfunction();
}


function scrollfunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("nav").style.top = "-10px";
        document.getElementById("nav").style.zIndex = "1000"
    } else {
        document.getElementById("nav").style.top = "-100px";
    }

}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        section.style.transition = "ease-out 0.2s";
    }
}

function displayNav() {
    let nav = document.getElementById("nav");
    nav.style
}