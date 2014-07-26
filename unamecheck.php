<?php
session_start();
include('connect.php');
include('timezone.php');

	if(!$con)
		 {    die('Could not connect: ' . mysql_error());   }
		else
	     {  


	     	
	     	$username=$_POST['uname'];


	     	
	     	$query="SELECT id FROM users WHERE BINARY username='".$username."'";

	     	$result=mysqli_query($con,$query);
	     	//$row=mysql_num_rows($result);
	     		if($result) {
             			
	     				$row=mysqli_fetch_assoc($result);

             			if($row['id']==0) {

             				echo 1;
             			}
             			else{
             				echo 0;
             			}
              	
              	}
				else{ 
						echo "Query Error";

				} 
	     }


			/*author: Sameer_Barha (3l_d1abl0) */


?>