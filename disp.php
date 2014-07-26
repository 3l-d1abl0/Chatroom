<?php
session_start();
	include('connect.php');
	include('timezone.php');
	

		 $prevtime= time() - 600;

		 if(!$con)
		 {    die('Could not connect: ' . mysql_error());   }
		else
	     { 
	     	$query="SELECT username,message_content,message_time FROM messages WHERE message_time >'".$prevtime."' ORDER BY message_time";
	     
	     	$result=mysqli_query($con,$query);

	     	if($result){
             
	     		while ($row = mysqli_fetch_assoc($result))
	     		 {

	     	$hoursAndMinutes = date('d/m/Y',$row['message_time'])==date('d/m/Y',time())?'today '.date('h:i A',$row['message_time']):date('d/m/Y h:i A',$row['message_time']);
					//$hoursAndMinutes = date('g:ia', $row['message_time']);
	
	echo '<p>  <span style="color: #555; font-size:13px;">[' . $hoursAndMinutes . ']</span> <strong>' . $row['username'] . '</strong>:  ' . $row['message_content'] . '</p>';
	}

              }

           else{ echo "An error occurred!"; } 

	     }
	     /*author: Sameer_Barha (3l_d1abl0) */
?>