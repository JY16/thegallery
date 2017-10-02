let toggleMenu = document.querySelector(".menu-toggle");
let mobileNav = document.querySelector(".mobile-nav");

toggleMenu.addEventListener("click", function() {
    if (mobileNav.style.display === "flex") {
        mobileNav.style.display = "none";
    }
    else {
        mobileNav.style.display = "flex";
    }
});


// Show Gallery Image

function showLargeImage() {
    let largeImageImg = document.querySelector(".show-large-image img");
    let imageLink = document.querySelectorAll(".thumb-container a");

    for (let i = 0; i < imageLink.length; i++) {
        imageLink[i].addEventListener("click", function(event) {
            event.preventDefault();
           largeImageImg.src =  imageLink[i].querySelector(".thumb-container img").src;
        });
    }
}

showLargeImage();