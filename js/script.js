/*
 * Author:           hosttech GmbH
 * Language:         Native JavaScript
 * Description:      Script to enhance user experience on the default page.
 * */


// Caching elements to enhance performance
var parallaxHolder = document.getElementById('parallax-holder');
var mainNavigation = document.getElementById("main-navigation");
var navToggle = document.getElementById("nav-toggle");
body = document.body;

var translateY = 0;


function parallaxify() {
    translateY = window.scrollY * 0.4;
    parallaxHolder.style.transform = 'translate3d(0, ' + translateY.toFixed(2) + 'px, 0)';
}

function stickyfy() {
    if (window.scrollY > 100) {
        mainNavigation.className = "sticky";
    } else if (window.scrollY <= 0) {
        mainNavigation.className = "";
    }
}

navToggle.addEventListener("click", function () {
    if (body.className === "nav-active") {
        body.className = "";
    } else {
        body.className = "nav-active";
    }
});

// instead uf using an onScroll listener, check each 10ms for better performance
scrollIntervalID = setInterval(function () {
    window.requestAnimationFrame(parallaxify);
    stickyfy();
}, 10);