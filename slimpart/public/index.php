<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
session_start();


require __DIR__ .'/../vendor/autoload.php';

spl_autoload_register(function ($classname){
    require (__DIR__."/../src/class/".$classname.".php");
});


$settings = require __DIR__ . '/../src/settings.php';

$app = new \Slim\App($settings);
 

 require __DIR__ . '/../src/dependencies.php';

 require __DIR__ . '/../src/routes.php';

$app->run();
