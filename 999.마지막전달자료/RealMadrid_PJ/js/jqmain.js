$(function(){//jQb
	/*
		CSS에서 미디어 쿼리 등을 사용하여
		설정을 했지만 특정 개체를 jQuery로
		조작해준 경우 기존 CSS가 먹히지 않는
		경우가 있다. 이때는 반드시 jQuery를
		통해서 보정해 주어야한다.
		아래는 브라우져사이즈가 바뀔때 체크하여
		먹히지 않는 CSS를 보완해 준것이다.
	*/
	$(window).resize(function(){
		var currwidth = $("body").width();
		//alert(currwidth);
		if(currwidth > 1000)
			$("#menu").show();
		else
			$("#menu").hide();
	});
	//모바일메뉴클릭
	$("#mobmenu").click(function(){
		$("#menu").slideDown(300);
	});//모바일메뉴클릭
	//메뉴닫기
	$("#btnclose").click(function(){
		$("#menu").slideUp(300);
	});//메뉴닫기
	
});//jQb