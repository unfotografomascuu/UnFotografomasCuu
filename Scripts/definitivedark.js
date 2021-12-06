function DarkMode() {
    const lmode = document.querySelector("#light-mode");
    const amode = document.querySelector("#auto-mode");
    const dmode = document.querySelector("#dark-mode");

    if (amode.checked == true) {
        document.body.classList.remove("theme-light", "theme-dark");
        document.body.classList.add(`theme-auto`);
        console.log("Modo Automatico.");
    }

    if (lmode.checked == true) {
        document.body.classList.remove("theme-auto", "theme-dark");
        document.body.classList.add(`theme-light`);
        console.log("Modo Claro.");
    }

    if (dmode.checked == true) {
        document.body.classList.remove("theme-light", "theme-auto");
        document.body.classList.add(`theme-dark`);
        console.log("Modo Oscuro.");
    }

    document.addEventListener("DOMContentLoaded", () => {
        document.querySelector("#theme").addEventListener("change", function () {
            applyTheme(this.value);
        });
    });

    document.addEventListener("DOMContentLoaded", () => {
        const savedTheme = localStorage.getItem("theme") || "auto";

        applyTheme(savedTheme);

        for (const optionElement of document.querySelectorAll("#theme option")) {
            optionElement.selected = savedTheme === optionElement.value;
        }

        document.querySelector("#theme").addEventListener("change", function () {
            localStorage.setItem("theme", this.value);
            applyTheme(this.value);
        });
    });

};