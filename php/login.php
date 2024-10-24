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

    session_start();

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $username = mysqli_real_escape_string($conn, $_POST["username"]);
        $password = mysqli_real_escape_string($conn, $_POST["password"]);

        // Валидация данных
        if (empty($username) || empty($password)) {
            echo "Заполните все поля!";
            exit;
        }

        // Проверка на существование логина
        $sql = "SELECT * FROM users_table WHERE username = '$username'";
        $result = mysqli_query($conn, $sql);
        if (mysqli_num_rows($result) > 0) {
            $row = mysqli_fetch_assoc($result);
            // Проверка пароля
            if (password_verify($password, $row["password"])) {
                $_SESSION["user_id"] = $row["id"];
                $_SESSION["username"] = $row["username"];
                $_SESSION["role"] = $row["role"];
                echo "Вход выполнен!";
                header("Location: profile.php"); // Перенаправление на страницу профиля
            } else {
                echo "Неверный пароль!";
            }
        } else {
            echo "Пользователь не найден!";
        }
    }

    mysqli_close($conn);
?>