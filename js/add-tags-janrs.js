const myButton = document.getElementById("myButtonTags");
const myList = document.getElementById("myListTags");
const buttonContainer = document.getElementById("buttonContainerTags");

myButton.addEventListener("click", function () {
    myList.style.display = myList.style.display === 'none' ? 'block' : 'none';
});

myList.addEventListener("click", function (event) {
    if (event.target.tagName === 'LI') {
        const selectedWordSpan = document.createElement('span');
        selectedWordSpan.classList.add("selected-word");
        selectedWordSpan.textContent = event.target.textContent;
        selectedWordSpan.addEventListener("click", function () {
            this.remove();
        });

        buttonContainer.insertBefore(selectedWordSpan, myButton);
        event.target.remove(); // Удаляем выбранное слово из списка
        myList.style.display = 'none';
    }
});


const myButtonJ = document.getElementById("myButtonJanrs");
const myListJ = document.getElementById("myListJanrs");
const buttonContainerJ = document.getElementById("buttonContainerJanrs");

myButtonJ.addEventListener("click", function () {
    myListJ.style.display = myListJ.style.display === 'none' ? 'block' : 'none';
});

myListJ.addEventListener("click", function (event) {
    if (event.target.tagName === 'LI' && buttonContainerJ.querySelectorAll(".selected-word-janrs").length < 3) {
        const selectedWordSpan = document.createElement('span');
        selectedWordSpan.classList.add("selected-word-janrs");
        selectedWordSpan.textContent = event.target.textContent;
        selectedWordSpan.addEventListener("click", function () {
            this.remove();
        });

        buttonContainerJ.insertBefore(selectedWordSpan, myButtonJ);
        event.target.remove();
        myListJ.style.display = 'none';
    }
});