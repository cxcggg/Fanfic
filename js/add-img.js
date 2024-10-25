const addFileButton = document.getElementById('addFileButton');
const fileList = document.querySelector('.file-list');

addFileButton.addEventListener('click', () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '*'; // При необходимости задайте приемлемые типы файлов
    input.click();

    input.addEventListener('change', (event) => {
        const file = event.target.files[0];

        if (file) {
            const fileItem = document.createElement('li');
            fileItem.classList.add('file-item');

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.classList.add('input-add-img');
            checkbox.checked = true; // Добавляем файл по умолчанию

            const fileName = document.createElement('span');
            fileName.classList.add('file-name');
            fileName.textContent = file.name;

            const removeButton = document.createElement('button');
            removeButton.textContent = '×';
            removeButton.classList.add('button-add-img');
            removeButton.addEventListener('click', () => {
                fileList.removeChild(fileItem);
            });

            fileItem.appendChild(checkbox);
            fileItem.appendChild(fileName);
            fileItem.appendChild(removeButton);
            fileList.appendChild(fileItem);
        }
    });
});