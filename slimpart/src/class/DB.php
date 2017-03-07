<?php
class DB{

	public $conn;
	public $error;
	public $pdo;
	private $settings;
	public function __construct(){
		try 
		{
			$this->settings = require __DIR__."/../settings.php";
			$db = $this->settings["settings"]["db"];
		     $this->conn = new PDO('mysql:host='.$db["host"].';port='.$db["port"].';dbname='.$db["dbname"], $db["user"], $db["pass"]);
			
			$this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		} 
		catch(PDOException $e) {
		    $this->error = $e->getMessage();
		}
	}

	/**
	 * This fetches a row from database
	 * @param  [string] $query  [This is the SQL query string where the values are defined as :ColumnName]
	 * @param  [array] $params [Array with key value pairs, where Keys are those defined in the query (:ColumnName => value)]
	 * @return [array | false]         [description]
	 */
	public function fetch($query=NULL,$params=NULL){
		try 
		{
		    $this->pdo =  $this->conn->prepare($query);
			$this->pdo->execute($params);
			return  $this->pdo->fetch(PDO::FETCH_ASSOC);
		}
		catch(PDOException $e) {
		    $this->error = $e->getMessage();
		    return false;
		}
	}

	/**
	 * Fetches multiple rows form the database
	 * @param  [string] $query  [This is the SQL query string where the values are defined as :ColumnName]
	 * @param  [2D array] $params [Array with key value pairs, where Keys are those defined in the query (:ColumnName => value)]
	 * @return [array | false]         [description]
	 */
	public function fetchAll($query=NULL,$params=NULL){
		try 
		{
		    $this->pdo = $this->conn->prepare($query);
			$this->pdo->execute($params);
			return  $this->pdo->fetchAll(PDO::FETCH_ASSOC);
		} 
		catch(PDOException $e) {
		    $this->error = $e->getMessage();
		    return false;
		}
		
	}

	/**
	 * This is used for DELETE AND UPDATE queries
	 * @param  [type] $query  [description]
	 * @param  [type] $params [description]
	 * @return [type]         [description]
	 */
	public function execute($query=NULL,$params=NULL){
		try 
		{
			$this->pdo = $this->conn->prepare($query);
			$this->pdo->execute($params);
			return true;
		} 
		catch (PDOException $e) {
			$this->error = $e->getMessage();
			return  false;
		}
	}

	/**
	 * This fetched the rows count after a select query
	 * @return [type] [description]
	 */
	public function rowCount(){
	    return $this->pdo->rowCount();
	}

	/**
	 * Fetches the last insert Id after an INSERT query
	 * @return [type] [description]
	 */
	public function lastInsertId(){
	    return $this->conn->lastInsertId();
	}

	/**
	 * Builds a query and data for running a query
	 * @param  [array] $data    [description]
	 * @param  [array] $columns [description]
	 * @return [array("Data","String")]          [description]
	 */
	public function buildQuery($data,$columns){
		$query = array('String' => array(), 'Data' => array());
		foreach ($data as $key => $value) {
			if(in_array($key, $columns)){
				$query['Data'][$key] = $value;
				$query_string_temp = $key.'=:'.$key; 
				array_push($query['String'], $query_string_temp);
			}
		}
		$query['String'] = implode(', ', $query['String']);
		return $query;
	}
	

}

?>
