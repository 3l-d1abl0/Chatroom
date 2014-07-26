
$.ajaxSetup ({
	cache: false
})

$(setInterval(function(){
	//$(".title-bar").load("trial.php");
	$(".content").load("disp.php");
	//$(".main-body").attr({scrollTop: $(".main-body").attr('scrollHeight')});
	
		var objDiv = document.getElementById("main-body");
		objDiv.scrollTop = objDiv.scrollHeight;
	
	$(".onlineUsers").load("online.php");	

},500));


/*var objDiv = document.getElementById("main");
		objDiv.scrollTop = objDiv.scrollHeight;  */