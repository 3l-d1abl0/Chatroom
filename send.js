$(document).ready(function(){

		$("#MessageTextBox").click(function(){
			$("#MessageTextBox").html("");

		});


		function hellYeah(){

				var username= $("#loggedUser").html();	username=jQuery.trim(username);
				var message= $("#MessageTextBox").val();	message=jQuery.trim(message);
				var ip=$("#ip").val();
				var status=2;

				$.post('send.php', {mess: message,uid: username,ipa: ip,stat:status},
  
							function(data){
  							
  							//Updated
						});

		}



		$("#SendIt").click(function(){

			var username= $("#loggedUser").html();	username=jQuery.trim(username);
			var message= $("#MessageTextBox").val();	message=jQuery.trim(message);
			var ip=$("#ip").val();
			var status=1;

			if(message == "" || message == "Enter your message here")
			{
					return false;
			}

			//$(".title-bar").load("trial.php");
			//$(".title-bar").load("trial.php");

			$.post('send.php', {mess: message,uid: username,ipa: ip,stat:status},
  
							function(data){
  							
  							//$("#MessageTextBox").html("");
  							document.newMessage.MessageTextBox.value = "";
  							//var str=username +" says...";
  							//$(".title-bar").html(str);

  							//alert(data);
  							hellYeah();

						});

		});

});