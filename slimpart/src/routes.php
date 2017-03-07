<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
//fetch all users
    $app->get('/', function ($request, $response, $args) {
         $sth = $this->db->prepare("SELECT * FROM users");
        $sth->execute();
        $hello = $sth->fetchAll();
        return $this->response->withJson($hello);
    });


//fetch single user details
    // $app->get('/login/[{id}]', function ($request, $response, $args) {
    //      $sth = $this->db->prepare("SELECT * FROM users WHERE id=:id");
    //     $sth->bindParam("id", $args['id']);
    //     $sth->execute();
    //     $user = $sth->fetchObject();
    //     return $this->response->withJson($user);
    // });

//signup for user
  $app->post('/signup', function ($request, $response) {
        $data = $request->getParsedBody();
        $input = json_decode($data["data"],true);
        //require_once 'passwordHash.php';
        //$input['password'] = passwordHash::hash($input['password']);
            $sql = "INSERT INTO users (name, email, password, phone, designation, organisation) VALUES (:name, :email, :password, :phone, :designation, :organisation)";
      
            $sth = $this->db->prepare($sql);
            $sth->bindParam("name", $input['name']);
            $sth->bindParam("email", $input['email']);
            $sth->bindParam("password", $input['password']);
            $sth->bindParam("phone", $input['phone']);
            $sth->bindParam("designation", $input['designation']);
            $sth->bindParam("organisation", $input['organisation']);
            $sth->execute();
            $input['id'] = $this->db->lastInsertId();
       
      
        return $this->response->withJson($input);
    });

 //login for user
  $app->post('/login', function ($request, $response){
    $input = $request->getParsedBody();
    console.log("$input");
  
    // //require_once 'passwordHash.php';
    $email= $input['email'];
    $password= $input['password'];
    $sql = "SELECT email, password FROM users where email=:email and password= :password ";
    $sth = $this->db->prepare($sql);
    $sth->bindParam("email",$email);
    $sth->bindParam("password",$password);
    $user= $sth->execute();

    return $this->response->withJson($user);
  });


//delete user
   $app->delete('/[{id}]', function ($request, $response, $args) {
         $sth = $this->db->prepare("DELETE FROM users WHERE id=:id");
        $sth->bindParam("id", $args['id']);
        $sth->execute();
        $user = $sth->fetchAll();
        return $this->response->withJson($user);
    });

//insert basic info about the company
$app->post('/info', function ($request, $response) {
        $data = $request->getParsedBody();
        $input = json_decode($data["data"],true);
        //require_once 'passwordHash.php';
        //$input['password'] = passwordHash::hash($input['password']);
            $sql = "INSERT INTO info (name, website, headquarters, total_employees, company_type, founding_date, industry ) VALUES (:name, :website, :headquarters, :total_employees, :company_type, :founding_date, :industry)";
      
            $sth = $this->db->prepare($sql);
            $sth->bindParam("name", $input['name']);
            $sth->bindParam("website", $input['website']);
            $sth->bindParam("headquarters", $input['headquarters']);
            $sth->bindParam("total_employees", $input['total_employees']);
            $sth->bindParam("company_type", $input['company_type']);
            $sth->bindParam("founding_date", $input['founding_date']);
            $sth->bindParam("industry", $input['industry']);
            $sth->execute();
            $input['id'] = $this->db->lastInsertId();
       
      
        return $this->response->withJson($input);
    });

//insert about us
$app->post('/about', function ($request, $response) {
        $data = $request->getParsedBody();
        $input = json_decode($data["data"],true);
        //require_once 'passwordHash.php';
        //$input['password'] = passwordHash::hash($input['password']);
            $sql = "INSERT INTO about (vision, mission, about_us ) VALUES (:vision, :mission, :about_us)";
      
            $sth = $this->db->prepare($sql);
            $sth->bindParam("vision", $input['vision']);
            $sth->bindParam("mission", $input['mission']);
            $sth->bindParam("about_us", $input['about_us']);
            $sth->execute();
            $input['id'] = $this->db->lastInsertId();
       
      
        return $this->response->withJson($input);
    });

//insert products and services
$app->post('/products', function ($request, $response) {
        $data = $request->getParsedBody();
        $input = json_decode($data["data"],true);
        //require_once 'passwordHash.php';
        //$input['password'] = passwordHash::hash($input['password']);
            $sql = "INSERT INTO products (title, description, priority) VALUES (:title, :description, :priority)";
      
            $sth = $this->db->prepare($sql);
            $sth->bindParam("title", $input['title']);
            $sth->bindParam("description", $input['description']);
            $sth->bindParam("priority", $input['priority']);
            $sth->execute();
            $input['id'] = $this->db->lastInsertId();
       
      
        return $this->response->withJson($input);
    });