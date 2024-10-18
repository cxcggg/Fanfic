window.addEventListener("DOMContentLoaded", function () {
    const tagAddBtn = document.getElementById('add-tag');
    const modalTag = document.getElementById('modal-tag');
    const tagClose = document.querySelector('.close');
    const modalOver = document.querySelector('.modal-overlay');
    tagAddBtn.addEventListener("click", () => {
        modalTag.classList.add('active');
        document.body.classList.add('no-scrol');
        modalOver.classList.add('active');
    })
    tagClose.addEventListener("click", () => {
        modalTag.classList.remove('active');
        document.body.classList.remove('no-scrol');
    })
    modalOver.addEventListener("click", () => {
        modalOver.classList.remove('active');
        modalTag.classList.remove('active');
        document.body.classList.remove('no-scrol');
    })

})

