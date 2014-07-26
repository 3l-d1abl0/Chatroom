$(document).ready(function(){

	//$(".newMessage").hide();
	$(".error").hide();
	$(".topBar").slideDown(700);


	$("#messageBoxSignIn").click(function(){
		$("#username").focus();
		$("#username").css("background-color","cyan");
		//alert("#username");
	});


	$("#username").keyup(function (){
  					$("#username").css("background-color","white");
	 });

	$("#username").keydown(function(){
					$("#username").css("background-color","white");
					});




	$("#signIn").click(function()
		{		
				$(".loading").show();
				$("#signIn").css("background-color","#BDBDBD");

				var username = $("#username").val();
				var pass =$("#passw").val();
				//alert(username);
				//alert(pass);

				if(username== "" || username =="enter username" || username==null)
				{
					$(".error").show();
					$("#username").css("background-color","red");
					$(".loading").hide();
					return false;
				}

				//alert("sending!!!");
				//use the $.post() method to call insert.php file.. this is the ajax    request
  				$.post('insert.php', {uname: username, pwd: pass},
  
							function(data){
  								var stat=data.split("#!");
  								if(stat[0]=='woha') {
  									$(".error").show();
  									$(".error").html(stat[1]);
  									$(".loading").hide();
  								}
  								else if(stat[0]=='gotcha')
  									window.location.replace(stat[1]);
  									//window.location.replace(stat[1]+"?uname="+username);
							}
							
							);

		});

		$("#regi").click(function()
			{
				$("#signInForm").hide();
				$("#regi").hide();
				$("#regForm").slideDown(700);
				$(".regSign").slideDown(1000);
			});

		$(".regSign").click(function()
			{
				$("#regForm").hide();
				$(".regSign").hide();
				$("#signInForm").slideDown(700);
				$("#regi").slideDown(1000);
			});

		/*$("#regis").click(function()
			{
				var name = $("#regName").val();
				var username = $("#regUname").val();
				var uword = $("#regPassw").val();
				var cuword = $("#regConf").val();

				alert(name +"+"+username+"+"+uword+"+"+cuword);
			}); */

		$('input[type="text"],input[type="password"]').focus(function(){
			$(this).css({"border-color": "#000000"}); 

		}); 

		$('input[type="text"],input[type="password"]').blur(function(){
			$(this).css({"border-color": "#C1E0FF"}); 
		}); 

		///Registration Form Authentication//////
			//Name Validation
		$("#regName").blur(function(){
			$("#regNameMsg").hide();
			var name= $("#regName").val();
			//alert("##"+name+"##");
			if(name[0]==' ' || name==null || name==''){
				$("#regName").css({"border-color": "#FC3C3C"});
				$("#regNameMsg").html('Invalid name');
				$("#regNameMsg").slideDown(100);
				return false;
			}


			name =name.trim();
			//alert("#"+name+"#");
			var ll=name.length;
			//alert("###"+ll+"###");
			var asciiNum;
			for (var i = 0;i<ll; i++) {
					asciiNum = name.charCodeAt(i);
					//alert(asciiNum);
				if ((asciiNum>=65 && asciiNum<=90) || (asciiNum>=97 && asciiNum<=122)|| name[i]==' ' )
					{
						//alert(name[i]);
					}
				else {	$("#regName").css({"border-color": "#FC3C3C"});
						$("#regNameMsg").html('Only Alphabets..!!');
						$("#regNameMsg").slideDown(100);
							return false;

				}
			} 

		});

		//UserName Validation
		$("#regUname").focus(function(){
						$("#regUnameMsg").html('Alphanumeric - _ | $ *');
						$("#regUnameMsg").slideDown(100);

		});

		$("#regUname").blur(function(){

				$("#regUnameMsg").hide();
				var name= $("#regUname").val();
				//alert("##"+name+"##");
			
			if(name[0]==' ' || name==null || name==''){
				$("#regUname").css({"border-color": "#FC3C3C"});
				$("#regUnameMsg").html('Invalid Username');
				$("#regUnameMsg").slideDown(100);
				return false;
			}


			name =name.trim();
			//alert("#"+name+"#");
			var ll=name.length;
			//alert("###"+ll+"###");
			var asciiNum;
			for (var i = 0;i<ll; i++) {
					asciiNum = name.charCodeAt(i);
					//alert(asciiNum);
				if ((asciiNum>=65 && asciiNum<=90) || (asciiNum>=97 && asciiNum<=122)||(asciiNum>=48 && asciiNum<=57) || asciiNum==45 || asciiNum==95 || asciiNum==124 || asciiNum ==36 || asciiNum==42 )
					{
						//alert(name[i]);
					}
				else {	$("#regUname").css({"border-color": "#FC3C3C"});
						$("#regUnameMsg").html('Invalid UserName');
						$("#regUnameMsg").slideDown(100);
							return false;

				}
			} 

		//alert(name);


			$.post('unamecheck.php', {uname: name},
  
							function(data){
  								if(data==1) {
  										//$("#regUname").css({"border-color": "#FC3C3C"});
										//$("#regUnameMsg").html('da='+data);
										//$("#regUnameMsg").slideDown(100);
										//	return false;
  								}
  								else{
  										$("#regUname").css({"border-color": "#FC3C3C"});
										$("#regUnameMsg").html('Username Unavailable!!');
										$("#regUnameMsg").slideDown(100);
											return false;
  								}
							}
							
							);


		});


		///Password Validation

		$("#regPassw").blur(function(){

				$("#regPasswMsg").hide();
				var name= $("#regPassw").val();
				//alert("##"+name+"##");
			
			if(name==null || name==''){
				$("#regPassw").css({"border-color": "#FC3C3C"});
				$("#regPasswMsg").html('Can\'t be blank!');
				$("#regPasswMsg").slideDown(100);
				return false;
			}

		});

		////Password Confirmation
			$("#regConf").blur(function(){

				$("#regConfMsg").hide();
				var pass= $("#regPassw").val();
				var rePass= $("#regConf").val();
				//alert("##"+name+"##");
			
			if(pass!=rePass){
				$("#regConf").css({"border-color": "#FC3C3C"});
				$("#regConfMsg").html('Password does not match!');
				$("#regConfMsg").slideDown(100);
				return false;
			}

		});
});