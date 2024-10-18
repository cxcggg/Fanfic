const addButton = document.getElementById('addButton');
const inputField = document.getElementById('inputField');

addButton.addEventListener('click', () => {
    addButton.style.display = 'none';

    inputField.style.display = 'inline-block';
    inputField.style.marginLeft = '5px';
    inputField.focus();


    inputField.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            const savedText = inputField.value;
            console.log("Название:", savedText);

            inputField.style = 'none'
            addButton.style.display = 'none';

            inputField.value = '';

            inputField.removeEventListener('keypress', arguments.callee);

        }
    })
})

const addButton1 = document.getElementById('addButton-1');
const inputField1 = document.getElementById('inputField-1');

addButton1.addEventListener('click', () => {
    addButton1.style.display = 'none';

    inputField1.style.display = 'inline-block';
    inputField1.style.marginLeft = '5px';
    inputField1.focus();

    inputField1.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            const savedText = inputField1.value;
            console.log("Автор:", savedText);

            inputField1.style = 'none'
            addButton1.style.display = 'none';

            inputField1.value = '';

            inputField1.removeEventListener('keypress', arguments.callee);

        }
    })
})

const addButton2 = document.getElementById('addButton-2');
const inputField2 = document.getElementById('inputField-2');

addButton2.addEventListener('click', () => {
    addButton2.style.display = 'none';

    inputField2.style.display = 'inline-block';
    inputField2.style.marginLeft = '5px';
    inputField2.focus();

    inputField2.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            const savedText = inputField2.value;
            console.log("Персонажи:", savedText);

            inputField2.style = 'none'
            addButton2.style.display = 'none';

            inputField2.value = '';

            inputField2.removeEventListener('keypress', arguments.callee);

        }
    })
})

const addButton3 = document.getElementById('addButton-3');
const inputField3 = document.getElementById('inputField-3');

addButton3.addEventListener('click', () => {
    addButton3.style.display = 'none';

    inputField3.style.display = 'inline-block';
    inputField3.style.marginLeft = '5px';
    inputField3.focus();

    inputField3.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            const savedText = inputField3.value;
            console.log("Описание:", savedText);

            inputField3.style = 'none'
            addButton3.style.display = 'none';

            inputField3.value = '';

            inputField3.removeEventListener('keypress', arguments.callee);

        }
    })
})

const addButton4 = document.getElementById('addButton-4');
const inputField4 = document.getElementById('inputField-4');

addButton4.addEventListener('click', () => {
    addButton4.style.display = 'none';

    inputField4.style.display = 'block';
    inputField4.style.marginLeft = '5px';
    inputField4.focus();

    inputField4.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            const savedText = inputField4.value;
            console.log("Жанры:", savedText);

            inputField4.style = 'none'
            addButton4.style.display = 'none';

            inputField4.value = '';

            inputField4.removeEventListener('keypress', arguments.callee);

        }
    })
})

