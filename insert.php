<?php
session_start();
include('connect.php');
include('timezone.php');


if(!$con)
		 {    die('Could not connect: ' . mysql_error());   }
		else
	     {  //echo"Cool   Connected..!!!";
	 			//echo "Connected!!";


	 		$username=$_POST['uname'];
	 		$password=$_POST['pwd'];

	 		$username= trim($username);
			//$username=mysql_real_escape_string($username);	creating Problem
			//$password=mysql_real_escape_string($password);

			$time= time();
			$query="SELECT uwrd FROM users WHERE BINARY username='$username'";
			
			//echo $password;

			$result=mysqli_query($con,$query);

			if($result) {

				$row = mysqli_fetch_assoc($result);

				//echo $row;

				if($row['uwrd']==$password){

				    	$_SESSION['uid']=$username;
				    	$_SESSION['user']='nuser';

				    	//echo "Yahoo!!";
				    	
				    	echo "gotcha#!chatroom.php";
				}
				else{
				     		//die('Password and username does not match! ' . mysql_error());		
						echo "woha#!Wrong Combo";
					}

				     	
			}
			else{				//die(' Query me Some Error!!! ' . mysql_error());
				     		//echo "Query me Some Error!!!";
					echo "woha#!Internal Error";
			}



	 	  }
	 	  		/*author: Sameer_Barha (3l_d1abl0) */

?>