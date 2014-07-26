<?php
session_start();
	include('connect.php');
	include('timezone.php');

	$currentTime=time();
	$endTime=$currentTime-300;


	if(!$con){
		    die('Could not connect: ' . mysql_error()); 
	}
	else{ 
			$query="SELECT username FROM ontab WHERE message_time >'".$endTime."' ORDER BY message_time";

			$result=mysqli_query($con,$query);
			$onlines="";
			if($result){
             
	     		while ($row = mysqli_fetch_assoc($result)){
	     			$onlines.="<div class='user_container'><center>".$row['username']."</center></div><hr class='onhr'>";
	     		}

	     		echo $onlines;
	     	}
	     	else{	

	     		echo "Query me Gadbad..!!";
	     	}
	}

			/*author: Sameer_Barha (3l_d1abl0) */
?>