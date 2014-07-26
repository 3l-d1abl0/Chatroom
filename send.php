<?php

		include('connect.php');
		include('timezone.php');

		/*	$server = "localhost";
		$user = "root";
		$password = "";
		$database="chat";



		 $con=mysqli_connect($server,$user,$password,$database); */



		 if(!$con)
		 {    die('Could not connect: ' . mysql_error());   }
		else
	     { 
	     		$message=$_POST["mess"];
	     		$username=$_POST["uid"];
	     		$ip=$_POST["ipa"];
	     		$status=$_POST["stat"];

	     		$message=trim($message);
	     		$username= trim($username);
	     		//$username=mysqli_real_escape_string($username);

	     		$time= time();

	     		//echo $username,$time;

	     		//echo json_encode($username);
	     	if($status==1){

	     		$query="INSERT INTO messages(username,message_content,message_time,ip) VALUES ('".$username."','".$message."','".$time."','".$ip."')";

	     		$result=mysqli_query($con,$query);

	     		if($result){
             		//echo "";
              	}
				else{ echo "An error occurred!"; }   
       		}
       		else{
       			
       			$query="UPDATE ontab SET message_time =".$time." WHERE username = '".$username."'";

       			$result=mysqli_query($con,$query);

	     		if($result){
             		//echo "";
              	}
				else{ echo "An error occurred!"; }   

       		}
       }

	    		/*author: Sameer_Barha (3l_d1abl0) */
?>