<?php

    $app->get('/', function ($request, $response, $args) {
         $sth = $this->db->prepare("SELECT * FROM users");
        $sth->execute();
        $hello = $sth->fetchAll();
        return $this->response->withJson($hello);
    });

  $app->post('/signup', function ($request, $response) {
        $data = $request->getParsedBody();
        $input = json_decode($data["data"],true);
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

    