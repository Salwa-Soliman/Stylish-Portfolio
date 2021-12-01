const bar = document.querySelector("header .fa-bars"),
    navbar = document.querySelector(".navbar"),
    close = document.querySelector("header .close"),
    body = document.querySelector("body"),
    bodyContents = Array.from(document.querySelector("body").children),
    scrollTop = document.querySelector(".scroll-top");

bar.onclick = function() {
    navbar.style.display = "block";
    navbar.style.animationName = "right-to-left";
    navbar.style.right = "0";
};

close.onclick = function() {
    navbar.style.animationName = "left-to-right";
    navbar.style.right = "-250px";
};

bodyContents.forEach((element) => {
    element.addEventListener("mouseenter", function() {
        if (!this.classList.contains("fade")) {
            this.classList.add("fade");
        }
    });
});

body.onscroll = () => {
    if (
        document.body.scrollTop > 500 ||
        document.documentElement.scrollTop > 500
    ) {
        scrollTop.style.display = "block";
    } else {
        scrollTop.style.display = "none";
    }
};
scrollTop.onclick = function() {
    this.style.display = "none";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};