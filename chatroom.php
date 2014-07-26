<?php
ob_start();
session_start();

include('connect.php');
include('timezone.php');

if($_SESSION['user']!='nuser')
	header('Location: index.php');
	//echo "Session: ".$_SESSION['user'];
else
{

?>


<!DOCTYPE>

<html>
<head>
	<title>Chatroom</title>
	<script type="text/javascript" src="jquery-1.11.0.min.js"></script>
	<script type="text/javascript" src="essential.js"></script>
	<script type="text/javascript" src="send.js"></script>
	<script type="text/javascript" src="refresh.js"></script>
	<script type="text/javascript" src="vigil.js"></script>

	<link rel="stylesheet" type="text/css" href="main.css">
</head>
	<body  class="over-body">

		<div class="topBar">
			<center>Just Say it!</center>
		</div>

		<!---	<div class="noti">Abra Cadabra</div> -->

<div id="wrapper">
		<div class="chat-box">

				<?php
						//$uid=$_SESSION['uid'];
						$ip=$_SERVER['REMOTE_ADDR'];
				?>


				<div class="title-bar">
						<span style="color: cyan font-weight:bold">Just Say it..</span>
				</div>

				<div class="main-body" id="main-body">
						<div class="content" id="content"> </div>
				</div>

				
				<div class="message-box">
					
					<form name="newMessage" class="newMessage" onsubmit="return false">
								
						<div class="left">
							<textarea name="MessageTextBox" id="MessageTextBox">Enter your message here....</textarea>
						</div>
						<div class="right">
							<input type="submit" id="SendIt" value="SEND" />
						</div>
					</form>


				</div>

				<?php					  
            			echo'<input type="hidden" id="ip" value="'.$ip.'" />';

				/*<input type="hidden" id="name" value="'.$uid.'" />*/
				?>	
				
		</div>
				<div class="user-stat">
					
					<center>
				 		 <span style= " color:white">Welcome <span id="loggedUser"> <?php echo $_SESSION['uid']; ?> </span>!</span>

				 		 	<br>
				 	</center>
				 		  
				 		  <form name="signOut" action="logo.php" method="post">
								<center> <input type="submit" id="signOut" name="sout" value="SIGN OUT" />  </center>
						  </form>
					
					<div class="onlineUsers">
							People Online
					
					</div>
				</div>
</div>

	</body>
</html>

<?php

}
?>