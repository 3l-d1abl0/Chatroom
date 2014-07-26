<?php
session_start();
include('connect.php');
include('timezone.php');

	if(!$con)
		 {    die('Could not connect: ' . mysql_error());   }
		else
	     {  


	     	$name=$_POST['name'];
	     	$username=$_POST['username'];
	 		$password=$_POST['pwd'];
	 		$ip=$_SERVER['REMOTE_ADDR'];


	     	$time= time();
	     	$query="INSERT INTO users( log_date, username, uwrd,name,reg_ip,last_ip) VALUES (".$time.",'".$username."','".$password."','".$name."','".$ip."','".$ip."')";

	     	$result=mysqli_query($con,$query);

	     		if($result){
             		
             			//echo "roger";
              			$que="INSERT INTO ontab( message_time, username, ip) VALUES (000000000,'".$username."','".$ip."')";
              			$res=mysqli_query($con,$que);
              			if($res) {
              					echo "roger";
              			}
              			else {
              				echo "negative";
              			}
              	}
				else{ 
						echo "negative";
				} 
	     }



	     	/*author: Sameer_Barha (3l_d1abl0) */

?>