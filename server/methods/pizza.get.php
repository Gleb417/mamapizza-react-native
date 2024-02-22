<?php

    // Подключение к базе данных (используя расширение mysqli)
    $mysqli = new mysqli("localhost", "root", "", "BDReactNativeMamaPizza");

    // Проверка соединения
    if ($mysqli->connect_error) {
        die("Ошибка подключения: " . $mysqli->connect_error);
    }

    // Выполнение SQL запроса для выборки всех записей из таблицы
    $result = $mysqli->query("SELECT * FROM pizza");

    // Проверка наличия данных
    if ($result->num_rows > 0) {
        $data = [];
        // Формирование массива данных
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }

        // Закрытие соединения
        $mysqli->close();
        $response = $data;
    } else {
        $mysqli->close();

    }

?>
