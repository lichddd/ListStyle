$().ready(function () {
	$('.list-box ul').children().addClass('list-T').addClass('list-T1');
	
	
	
	
	
})









function toList () {
	$('.list-box ul').children().removeClass('list-T1').addClass('list-T2');
	
	
	
}

function toGrid () {
	$('.list-box ul').children().removeClass('list-T2').addClass('list-T1');
	
	
	
}