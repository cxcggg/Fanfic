window.addEventListener("DOMContentLoaded", function () {
    const historiBtn = document.getElementById('histori-open');
    const modalHistori = document.getElementById('histori-read');
    const historiClose = document.querySelector('.close-histori');
    const modalOver = document.querySelector('.modal-overlay-black');
    historiBtn.addEventListener("click", () => {
        modalHistori.classList.add('active');

        modalOver.classList.add('active');
    })
    historiClose.addEventListener("click", () => {
        modalHistori.classList.remove('active');

    })
    modalOver.addEventListener("click", () => {
        modalOver.classList.remove('active');
        modalHistori.classList.remove('active');

    })

})