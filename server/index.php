<?php

header('Content-type: application/json');

$method = $_REQUEST['method'];

if(!empty($method)) {

    if(@is_file('methods/'.$method.'.php')) {

        include 'methods/'.$method.'.php';

    }

}

else {

    $response = [

        'error' => 'Метод не найден'

    ];

}

$response = json_encode($response);

echo $response;