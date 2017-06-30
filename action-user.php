<?php
	$data = file_get_contents("php://input");
    $postData = json_decode($data);


	$HouseId = $postData -> HouseId;
	$MemberId = $postData -> MemberId;
 	$Password = $postData -> Password;
 
 	$HouseId = stripcslashes($HouseId);
 	$MemberId = stripcslashes($MemberId);
 	$Password = stripcslashes($Password);

 	

 	$db = mysqli_connect("localhost","root","");
 	if(!$db){
 		echo "db connection fail!!!!";
 	}
 	$select_db = mysqli_select_db($db, 'xpendi');
 	if (!$select_db){
    	die("Database Selection Failed" . mysqli_error($connection));
	}
 	$result = mysqli_query($db,"select * from customer where c_id='$MemberId' and house_id='$HouseId' and password='$Password' ");
 	

 	$row = mysqli_fetch_array($result,MYSQLI_ASSOC);
 	
 	if ($row['c_id'] == $MemberId && $row['house_id'] == $HouseId && $row['password'] == $Password){
 	echo "Login success!!";
 	}
 	else{
 	echo "Login Failed !!";
 	
 	}

?>