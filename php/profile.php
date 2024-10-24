<?php
    session_start();

    if (!isset($_SESSION["user_id"])) {
        header("Location: login.html");
        exit;
    }

    echo "<h1>Привет, " . $_SESSION["username"] . "!</h1>";

    // Дополнительная логика для страницы профиля
?>