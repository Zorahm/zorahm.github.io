document.addEventListener("DOMContentLoaded", () => {
    const toggleThemeButton = document.getElementById("toggleTheme");

    toggleThemeButton.addEventListener("click", () => {
        document.body.classList.toggle("light-theme");
    });
});
