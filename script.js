const toggleButton = document.getElementById("toggle-dark-mode");

if (localStorage.getItem("dark-mode") === "enabled") {
    document.body.classList.add("dark-mode");
    toggleButton.textContent = "🌙";
} else {
    toggleButton.textContent = "☀️";
}

toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    toggleButton.classList.add("dark-mode-active");

    if (document.body.classList.contains("dark-mode")) {
        toggleButton.textContent = "🌙";
        localStorage.setItem("dark-mode", "enabled");
    } else {
        toggleButton.textContent = "☀️";
        localStorage.setItem("dark-mode", "disabled");
    }

    setTimeout(() => {
        toggleButton.classList.remove("dark-mode-active");
    }, 500);
});

// Menu burger
const hamburgerButton = document.getElementById("hamburgerButton");
const hamburgerMenu = document.getElementById("hamburgerMenu");


hamburgerButton.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("active");
});


document.addEventListener("click", (event) => {
    if (!hamburgerMenu.contains(event.target) && !hamburgerButton.contains(event.target)) {
        hamburgerMenu.classList.remove("active"); 
    }
});