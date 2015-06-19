$(document).ready(function() {
	$('a#continue1').click(function (){
		$('.start').slideToggle();
	});
	
	var txtBoxElement1 = document.getElementById('question1');
	var submit1 = document.getElementById('submit1');
	submit1.onclick = onClickShow;
	
	var txtBoxElement2 = document.getElementById('txtDate');
	var submit2 = document.getElementById('submitDate');
	submit2.onclick = clickShow;
	
	$("#question1").keyup(function(event){
		if(event.keyCode == 13){
			$("#submit1").click();
		}
	});
	
	function onClickShow () {
		if ((txtBoxElement1.value == "white") || (txtBoxElement1.value == "White") || (txtBoxElement1.value == "WHITE")){
			$('.start2').slideToggle();
		}
			
		else if (txtBoxElement1.value == ""){
			alert('Pa! You did not input anything. :)');
			txtBoxElement1.value = "";
		}
			
		else {
			alert('Yamot bakit di mo alam! >_<');
			txtBoxElement1.value = "";
		}
	};
	
	$("#txtDate").keyup(function(event){
		if(event.keyCode == 13){
			$("#submitDate").click();
		}
	});
	
	function clickShow () {
		if (txtBoxElement2.value == "25"){
			$('.start5').slideToggle();
		}
			
		else if (txtBoxElement2.value == ""){
			alert('Pa! You did not input anything. :)');
			txtBoxElement2.value = "";
		}
	
		else{
			alert('Hulaan mo :*');
			txtBoxElement2.value = "";
		}
	};
	
	$('a#continue2').click(function (){
		$('.start3').fadeToggle();
	});
	
	$('#continue3').click(function (){
		$('.start4').slideToggle();
	});
	
	$('a#continue4').click(function (){
		$('.start6').slideToggle();
	});
	
	$('a#continue5').click(function (){
		$('.start7').slideToggle();
	});

});