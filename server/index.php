<?php
header('Content-type: application/json');
$response = [];
//print_r($_REQUEST);
if (isset($_REQUEST['method'])) {
    $method = $_REQUEST['method'];

    if (!empty($method)) {
        if (@is_file('methods/'.$method.'.php')) {
            include 'methods/'.$method.'.php';

        } else {
            $response['error'] = 'Метод не найден';
        }
    } else {
        $response['error'] = 'Метод не указан';
    }
} else {
    $response['error'] = 'Метод не указан';
}

$response = json_encode($response);
echo $response;
?>


