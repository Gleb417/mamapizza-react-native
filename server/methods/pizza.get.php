<?php
const DB_HOST = 'localhost';
const DB_NAME = 'BDReactNativeMamaPizza';
const DB_USERNAME = 'root';
const DB_PASSWORD = '';

function displayPizza(): string
{
    $host = 'localhost';
    $dbname = 'testprak2';
    $username = 'root';
    $password = '';

    $dsn = "mysql:host=$host;dbname=$dbname";

    try {
        $pdo = new PDO($dsn, $username, $password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $stmt = $pdo->query("SELECT * FROM pizza ");
        $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);

        }

        return $html;
    } catch(PDOException $e) {
        return "Ошибка подключения: " . $e->getMessage();
    }
}