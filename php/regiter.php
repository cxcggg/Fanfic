<?php
    // Подключение к базе данных
    $db_host = "localhost";
    $db_name = "users";
    $db_user = "username";
    $db_password = "password";

    $conn = mysqli_connect($db_host, $db_user, $db_password, $db_name);

    if (!$conn) {
        die("Ошибка подключения: " . mysqli_connect_error());
    }

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $username = mysqli_real_escape_string($conn, $_POST["username"]);
        $password = mysqli_real_escape_string($conn, $_POST["password"]);
        $confirm_password = mysqli_real_escape_string($conn, $_POST["confirm_password"]);
        $email = mysqli_real_escape_string($conn, $_POST["email"]);

        // Валидация данных
        if (empty($username) || empty($password) || empty($confirm_password) || empty($email)) {
            echo "Заполните все поля!";
            exit;
        }
        if ($password !== $confirm_password) {
            echo "Пароли не совпадают!";
            exit;
        }

        // Проверка на существование логина и email
        $check_username = mysqli_query($conn, "SELECT * FROM users_table WHERE username = '$username'");
        $check_email = mysqli_query($conn, "SELECT * FROM users_table WHERE email = '$email'");
        if (mysqli_num_rows($check_username) > 0) {
            echo "Имя пользователя уже занято!";
            exit;
        }
        if (mysqli_num_rows($check_email) > 0) {
            echo "Email уже используется!";
            exit;
        }

        // Зашифровка пароля
        $hashed_password = password_hash($password, PASSWORD_DEFAULT);

        // Вставка данных в БД
        $sql = "INSERT INTO users_table (username, password, email) VALUES ('$username', '$hashed_password', '$email')";
        if (mysqli_query($conn, $sql)) {
            // Отправка письма
            $to = $email;
            $subject = "Подтверждение регистрации";
            $message = "Вы успешно зарегистрировались!";
            $headers = "From: no-reply@yoursite.com";
            if (mail($to, $subject, $message, $headers)) {
                echo "Регистрация прошла успешно! Проверьте свою почту.";
            } else {
                echo "Ошибка отправки письма.";
            }
        } else {
            echo "Ошибка регистрации.";
        }
    }

    mysqli_close($conn);
?>