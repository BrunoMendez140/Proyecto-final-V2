document.addEventListener("DOMContentLoaded", () => {
    const navButton = document.querySelector(".navbtn");
    const navList = document.querySelector(".nav-list");

    if (navButton && navList) {
        navButton.addEventListener("click", () => {
            navList.classList.toggle("active");
            navButton.classList.toggle("active");
        });
        
        document.addEventListener("click", (event) => {
            if (!navButton.contains(event.target) && !navList.contains(event.target)) {
                navList.classList.remove("active");
                navButton.classList.remove("active");
            }
        });
    }
});
