<?php
return [
	"settings" =>  [
        'displayErrorDetails' => true, // set to false in production
        'addContentLengthHeader' => false, // Allow the web server to send the content-length header

         // Renderer settings
        'renderer' => [
            'template_path' => __DIR__ . '/../templates/'
        ],
        "db" => [
            "host" => "127.0.0.1",
            "dbname" => "ambitionbox_local",
            "user" => "root",
            "pass" => "Newton123!",
            "port" => "3306"
        ]
    ]
];



?>