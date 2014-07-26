<?php
ob_start();
session_start();
include('connect.php');
include('timezone.php');

if($_SESSION['name']=='nuser')
	header('Location: chatroom.php');
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
	<body class="over-body">

		<div class="topBar">
			<center>JustSayIt!</center>
		</div>

		<!---	<div class="noti">Abra Cadabra</div> -->

<div id="wrapper">
		<div class="chat-box">

				<div class="title-bar">
						<span style="color: cyan font-weight:bold">Just Say it..</span>
				</div>

				<div class="secondary-body">	
				</div>
					  <div class="dummy-message-box">
				
							<form name="messageBoxSignInForm" id="messageBoxSignInForm" onsubmit="return false">
							<input type="submit" id="messageBoxSignIn" value="Sign in to enter chat" />
							</form>
					  </div>
						
				
		</div>
		<div class="user-reg">
					<center>
					<form id="regForm" name="register"	onsubmit="return false" >
						<br>
						<input type="text" id="regName" name="regName"  class="ibox" placeholder="Enter Your Name"/> <br>
						<div class="hmsg" id="regNameMsg"></div>
						<input type="text" id="regUname" name="regUname" class="ibox" placeholder="Choose a Username"/> <br>
						<div class="hmsg" id="regUnameMsg"><span style="font-size: 1 px;"></span></div>
						<input type="password" id="regPassw" name="regPassw" class="ibox" placeholder="Password"/> <br>
						<div class="hmsg" id="regPasswMsg"></div>
						<input type="password" id="regConf" name="regConf" class="ibox" placeholder="Confirm Password"/> <br>
						<div class="hmsg" id="regConfMsg"></div>
						<br>
						<img class="checking" src="loadi.gif"></img>
						<input type="submit" id="regis" name="regis" value="Register Yourself!" />
						 <br>
						<span class="confirm"></span>
					</form>
					<button class="regSign">Sign In</button></center>

					<center>
					<form id="signInForm" name="signIn"	onsubmit="return false" >
						<span class="error">Invalid username</span> <br>
						<input type="text" id="username" name="username"  placeholder="enter username"/> <br>
						<input type="password" id="passw" name="passw"  placeholder="Password"/> <br>
						<center><img class="loading" src="loadi.gif"></img></center>
						<center> <input type="submit" id="signIn" name="sub" value="Go!!!" />  </center>
					</form>
					
						<button id="regi" title="Insert Data" href="#">Register</button></center>
		</div>
</div>

	</body>
</html>

<?php
			/*author: Sameer_Barha (3l_d1abl0) */
}
?>