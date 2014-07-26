$(document).ready(function(){

		function nameCheck(){

				$("#regNameMsg").hide();
					var name= $("#regName").val();
			
					if(name[0]==' ' || name==null || name==''){
						$("#regName").css({"border-color": "#FC3C3C"});
						$("#regNameMsg").html('Invalid name');
						$("#regNameMsg").slideDown(100);
						$(".checking").hide();
							return 0;
						}
					name =name.trim();
					var ll=name.length;
					var asciiNum;

					for (var i = 0;i<ll; i++) {
					asciiNum = name.charCodeAt(i);

					if ((asciiNum>=65 && asciiNum<=90) || (asciiNum>=97 && asciiNum<=122)|| name[i]==' ' ) {
						//alert(name[i]);
					}
					else {
						perm=0;
						$("#regName").css({"border-color": "#FC3C3C"});
						$("#regNameMsg").html('Only Alphabets..!!');
						$("#regNameMsg").slideDown(100);
						$(".checking").hide();
						return 0;
					}
				}//for

				return 1;

		}

		function unameCheck(){

				$("#regUnameMsg").hide();
				var uname= $("#regUname").val();
			
				if(uname[0]==' ' || uname==null || uname==''){
					$("#regUname").css({"border-color": "#FC3C3C"});
					$("#regUnameMsg").html('Invalid Username');
					$("#regUnameMsg").slideDown(100);
					$(".checking").hide();
						return 0;
				}


				uname =uname.trim();
				var ll=uname.length;
				var asciiNum;
			
				for (var i = 0;i<ll; i++) {
					asciiNum = uname.charCodeAt(i);
					
				if ((asciiNum>=65 && asciiNum<=90) || (asciiNum>=97 && asciiNum<=122)||(asciiNum>=48 && asciiNum<=57) || asciiNum==45 || asciiNum==95 || asciiNum==124 || asciiNum ==36 || asciiNum==42 )
					{
						//alert(name[i]);
					}
				else {	
					$("#regUname").css({"border-color": "#FC3C3C"});
					$("#regUnameMsg").html('Invalid UserName');
					$("#regUnameMsg").slideDown(100);
						$(".checking").hide();
						return 0;

					}
			} //for
					//Checking For availability
					$("#regUnameMsg").html('');
					$("#regUnameMsg").hide();
					var stat; //alert('going');


					$.ajax({
								type:"POST",
								url:"unamecheck.php",
								async:false,
								data: {uname: uname},
								cache:false,
								success:function(response){
												
								if(response==1) {
  												stat=1;	//alert('Stat= '+stat);
  											}
  								else{
  										//alert('abhi bhi!!');
  										$("#regUname").css({"border-color": "#FC3C3C"});
										$("#regUnameMsg").html('Username Unavailable!!');
										$("#regUnameMsg").slideDown(100);
  									stat=0;
  								}

							  }
						});



					return stat;

		}

		/*function unameAvail(){
					
					$("#regUnameMsg").html('');
					$("#regUnameMsg").hide();
					var stat; alert('going');
					var uname= $("#regUname").val();
					name =name.trim();
					$.post('unamecheck.php', {uname: uname},
  
							function(data){
  								if(data==1) {
  									stat=1;	alert('Stat= '+stat);
  								}
  								else{
  										alert('abhi bhi!!');
  										$("#regUname").css({"border-color": "#FC3C3C"});
										$("#regUnameMsg").html('Username Unavailable!!');
										$("#regUnameMsg").slideDown(100);
  									stat=0;
  								}
							}
							
						);	

					
		}*/

		function passCheck(){

					$("#regPasswMsg").hide();
					var pass= $("#regPassw").val();
							
				if(pass==null || pass==''){
					
					$("#regPassw").css({"border-color": "#FC3C3C"});
					$("#regPasswMsg").html('Can\'t be blank!');
					$("#regPasswMsg").slideDown(100);
					$(".checking").hide();
						return 0;
				}

				//Password Confirmation
				$("#regConfMsg").hide();
				var rePass= $("#regConf").val();
			
					if(pass!=rePass){
						
						$("#regConf").css({"border-color": "#FC3C3C"});
						$("#regConfMsg").html('Password does not match!');
						$("#regConfMsg").slideDown(100);
						$(".checking").hide();
							return 0;
					}

			return 1;
		}//


	$("#regis").click(function(){

					$(".checking").show();
					$(".confirm").hide();
					//alert('happening!!');
					//var availStat=unameAvail(); alert('avail= '+availStat);
					////////////////////////////////////////////
					var nameStat=nameCheck();	//alert('name= '+nameStat);
					///UserName Validation/////
					var unameStat=unameCheck();	//alert('username= '+unameStat);
					//Password
					var passStat=passCheck();	//alert('pass= '+passStat);

					//alert('Vooohooo!!!');

					if(nameStat==0){
										$(".checking").hide();
										$(".confirm").html("Name Problem");
  										$(".confirm").show();
					}
					else if (unameStat==0) {
										$(".checking").hide();
										$(".confirm").html("UserName Problem");
  										$(".confirm").show();
					}
					else if (passStat==0) {
										$(".checking").hide();
										$(".confirm").html("Password Problem");
  										$(".confirm").show();
					}
					else{

							var name= $("#regName").val();		name =name.trim();
							var uname= $("#regUname").val();	uname =uname.trim();
							var pass= $("#regPassw").val();

					$.post('regit.php', {name: name,username: uname, pwd: pass},
  
							function(data){
  									$(".checking").hide();
  									if(data=='roger'){
  										$(".confirm").html("Successfully Registered !! <br> Sign In to Continue !!");
  										$(".confirm").show();
  										$(".confirm").fadeOut(4500);
  										$("#regForm").trigger("reset");
  										
  									}
  									else{
  										$(".checking").hide();
  										$(".confirm").html("Registration Failed <br> Try Again!!");
  										$(".confirm").show();
  									}
							}
							
					);

					}


	/*	if (perm==1) {
			

		} */

									

	});//click


});