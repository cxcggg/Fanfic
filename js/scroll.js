const buttons = document.querySelectorAll(".scroll-button");

buttons.forEach(button => {
    button.addEventListener("click", (event) => {
        const targetId = event.target.id.replace("scrollTo", "");
        const targetElement = document.getElementById(targetId);

        if (targetElement) {

            targetElement.scrollIntoView({ behavior: "smooth" });
        }
    })
})