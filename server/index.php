<?php
header('Content-type: application/json');

header('Access-Control-Allow-Origin: *');

// if ($_SERVER['REQUEST_METHOD'] === 'POST') {
//     $method = isset($_POST['method']) ? $_POST['method'] : '';

//     if (!empty($method)) {
//         $methodFilePath = 'methods/'.$method.'.php';
//         if (is_file($methodFilePath)) {
//             ob_start(); // Захват вывода
//             include $methodFilePath;
//             $response = json_decode(ob_get_contents()); // Получаем данные из подключенного скрипта
//             ob_end_clean(); // Очистка буфера вывода
//         } else {
//             $response['error'] = 'Метод не найден';
//         }
//     } else {
//         $response['error'] = 'Метод не указан';
//     }
// } else {
//     $response['error'] = 'Метод не указан';
// }

// echo json_encode($response);

$mysqli = new mysqli("192.168.0.103", "root", "", "BDReactNativeMamaPizza");

if ($mysqli->connect_error) {
    die("Ошибка подключения: " . $mysqli->connect_error);
}

$result = $mysqli->query("SELECT imagepizza, namepizza, descriptionpizza, pricepizza FROM pizza");

if ($result->num_rows > 0) {
    $data = [];
    
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
    
    $response = $data;
    
    $mysqli->close();
} else {
    $mysqli->close();
}

echo json_encode($response);
