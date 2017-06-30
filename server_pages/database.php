<?php 
	class Connection{
		public function getConnection(){
			$server_address = 'localhost';
			$username = 'root';
			$password = '';
			$database_name = 'xpendi';

			$db = mysqli_connect($server_address,$username,$password,$database_name) or die (
				$conn->error.__LINE__);
			$conn = mysqli_select_db($db, 'xpendi');
			return $conn;
		}

	}

	class Database{
	 private $conn = null;
	 
	 //constructor

	 public function __construct(){
	 	$connection = new Connection();
	 	$this->conn = $connection->getConnection();
	 }	

	 public function authenticate($HouseId,$MemberId,$Password){
	 	//$password = md5($password);
	 $query = "select * from customer where c_id='$MemberId' and house_id='$HouseId' and password='$Password' ";
	 
	 $result = mysqli_query($this->conn,$query);

	 $row = mysqli_fetch_array($result,MYSQLI_ASSOC);
 	
 	if ($row['c_id'] == $MemberId && $row['house_id'] == $HouseId && $row['password'] == $Password){
 		return "true";
 	}
 	return "false";
	

	}

	}

?>