window.addEventListener("DOMContentLoaded", function () {
    const registorAddBtn = document.getElementById('register');
    const modalregistor = document.getElementById('register-modal');
    const registorClose = document.querySelector('.close-registor');
    const registorOver = document.querySelector('.modal-overlay');
    registorAddBtn.addEventListener("click", () => {
        modalregistor.classList.add('active');
        // document.body.classList.add('no-scrol');
        registorOver.classList.add('active');
    })
    registorClose.addEventListener("click", () => {
        modalregistor.classList.remove('active');
        document.body.classList.remove('no-scrol');
    })
    registorOver.addEventListener("click", () => {
        registorOver.classList.remove('active');
        modalregistor.classList.remove('active');
        document.body.classList.remove('no-scrol');
    })

})

window.addEventListener("DOMContentLoaded", function () {
    const loginAddBtn = document.getElementById('login');
    const modallogin = document.getElementById('login-modal');
    const loginClose = document.querySelector('.close-login');
    const registorOver = document.querySelector('.modal-overlay');
    loginAddBtn.addEventListener("click", () => {
        modallogin.classList.add('active');
        // document.body.classList.add('no-scrol');
        registorOver.classList.add('active');
    })
    loginClose.addEventListener("click", () => {
        modallogin.classList.remove('active');
        document.body.classList.remove('no-scrol');
    })
    registorOver.addEventListener("click", () => {
        registorOver.classList.remove('active');
        modallogin.classList.remove('active');
        document.body.classList.remove('no-scrol');
    })

})