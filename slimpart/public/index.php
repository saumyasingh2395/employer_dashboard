<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
session_start();


require __DIR__ .'/../vendor/autoload.php';



$settings = [
    'settings' => [
        'displayErrorDetails' => true, // set to false in production
        'addContentLengthHeader' => false, // Allow the web server to send the content-length header

         // Renderer settings
        'renderer' => [
            'template_path' => __DIR__ . '/../templates/'
        ],
        "db" => [
            "host" => "127.0.0.1",
            "dbname" => "login",
            "user" => "root",
            "pass" => "P@ssw0rd"
        ]

    ]
];


$app = new \Slim\App($settings);
 
 require __DIR__ . '/../src/dependencies.php';

 require __DIR__ . '/../src/routes.php';

$app-> run();
