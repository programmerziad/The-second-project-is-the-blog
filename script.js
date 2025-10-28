const toggle = document.getElementById("theme-toggle");
    const icon = toggle.querySelector("i");
    const body = document.body;
    const backToTop = document.getElementById("backToTop");

    toggle.addEventListener("click", () => {
        body.classList.toggle("dark");
        icon.classList.toggle("fa-sun");
        icon.classList.toggle("fa-moon");
    });

    window.addEventListener("scroll", () => {
        if (window.scrollY > 40) {
        backToTop.style.display = "flex";
    } else {
        backToTop.style.display = "none";
    }
    });

    backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });