var dt = new DataTransfer();

document.querySelector('.input-file input[type=file]').addEventListener('change', function () {
    var filesList = this.closest('.input-file').nextElementSibling; // Получаем следующий элемент
    filesList.innerHTML = ''; // Очищаем содержимое


    for (var i = 0; i < this.files.length; i++) {
        let file = this.files.item(i);
        dt.items.add(file);

        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function () {
            let new_file_input = '<div class="input-file-list-item">' +
                '<img class="input-file-list-img" src="' + reader.result + '">' +
                '<span class="input-file-list-name">' + file.name + '</span>' +
                '<a href="#" onclick="removeFilesItem(this); return false;" class="input-file-list-remove">x</a>' +
                '</div>';
            filesList.appendChild(new_file_input);
        }
    };
    this.files = dt.files;
});
function removeFilesItem(target) {
    // Получаем элемент предыдущего элемента (аналог .prev())
    let name = target.previousElementSibling.textContent;

    // Находим input[type=file] в родительском элементе .input-file-row
    let input = target.closest('.input-file-row').querySelector('input[type=file]');

    // Удаляем родительский элемент .input-file-list-item
    target.closest('.input-file-list-item').remove();

    // Фильтруем массив dt.items
    for (let i = 0; i < dt.items.length; i++) {
        if (name === dt.items[i].getAsFile().name) {
            // Удаляем элемент из массива dt.items
            dt.items.splice(i, 1);
            i--; // Уменьшаем индекс, чтобы не пропустить следующий элемент после удаления
        }
    }

    // Обновляем файлы в input
    input.files = new DataTransfer().files; // Создаем новый объект DataTransfer, если dt.files необходимо, не забудьте его настроить
    for (let file of dt.items) {
        let dataTransfer = new DataTransfer();
        dataTransfer.items.add(file.getAsFile());
        input.files = dataTransfer.files;
    }
}