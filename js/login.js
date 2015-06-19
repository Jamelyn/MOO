$(document).ready(function() {

	var txtUsername = document.getElementById('txtUsername');
	var txtPassword = document.getElementById('txtPassword');
	var btnSubmit = document.getElementById('submit');
	btnSubmit.onclick = onSubmit;
	
	$("#txtUsername").keyup(function(event){
		if(event.keyCode == 13){
			$("#submit").click();
		}
	});
	
	$("#txtPassword").keyup(function(event){
		if(event.keyCode == 13){
			$("#submit").click();
		}
	});

	function onSubmit () {
		if ((txtUsername.value == "cocz02") && (txtPassword.value == "cocojam02")){
			MOO();
			window.close();
		}
			
		else if ((txtPassword.value == "") && (txtUsername.value == "")){
			alert('Invalid inputs');
			txtPassword.value = "";
			txtUsername.value = "";
		}
		
		else if ((txtPassword.value != "cocojam02") && (txtUsername.value == "cocz02")){
			alert('Invalid password');
		}
			
		else if (txtUsername.value != "cocz02"){
			alert('You are not allowed to see this :P');
			txtUsername.value = "";
			txtPassword.value = "";
		}
	};
	
	function MOO() {
		window.open('him-menu.html');
	}
});