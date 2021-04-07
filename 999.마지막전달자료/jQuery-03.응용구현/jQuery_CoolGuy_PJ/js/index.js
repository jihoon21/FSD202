$(function(){//jQB//////
	// 1. 메인 타이틀 클릭시 메인 타이틀 오른쪽으로 사라짐
	$("#mTitle").click(function(){
		$(this).animate({
			left: "150%"
		},400,"easeInElastic",function(){
			// 2. 메인남녀 왼쪽으로 사라짐
			$("#mw").animate({
				left: "-150%"
			},400,"easeInElastic",function(){
				// 3. 쿨가이 등장 전 배경이미지 변경
				$("body").css({
					backgroundImage:"url(images/bg2.jpg)"});
				// 4. 쿨가이 등장!!!!
				$("#cool").animate({
					bottom: "-15%"
				},1200,"easeOutBack")
				.animate({
					bottom: "-5%"
				},800,"easeOutSine");//ani3
			});//ani2
		});//ani1
	});//click///
	
	
		
		////////////////쿨가이 위에 마우스가 움직이면 따라오면서 쿨가이 이미지 변경하기//////////////
		$("#cool").mousemove(function(e){
			var posX = e.pageX - $(this).width()/2;
			//쿨가이의 중앙에 오도록 크기의 절반을 빼줌!
			//posX를 퍼센트(%)로 변환
			// 현재위치/전체크기*100
			posX = posX/$(window).width()*100;
			
			
			console.log(posX);
			
			//쿨가이 위치 범위 지정하기
			if(posX>10 && posX<70){//10%~70% 사이범위
				$(this).css({left:posX+"%"});
			}///if//////
			
			/////쿨가이 구간별 이미지 변경하기//////
			if(posX > 10 && posX <= 15){
				$("img",this)
					.attr("src","images/CoolGuy1.png");
			}
			else if(posX > 15 && posX <= 20){
				$("img",this)
					.attr("src","images/CoolGuy2.png");
			}
			else if(posX > 20 && posX <= 25){
				$("img",this)
					.attr("src","images/CoolGuy3.png");
			}
			else if(posX > 25 && posX <= 30){
				$("img",this)
					.attr("src","images/CoolGuy4.png");
			}
			else if(posX > 30 && posX <= 35){
				$("img",this)
					.attr("src","images/CoolGuy5.png");
			}
			else if(posX > 35 && posX <= 40){
				$("img",this)
					.attr("src","images/CoolGuy6.png");
			}
			else if(posX > 40 && posX <= 45){
				$("img",this)
					.attr("src","images/CoolGuy7.png");
			}
			else if(posX > 45 && posX <= 50){
				$("img",this)
					.attr("src","images/CoolGuy8.png");
			}
			else if(posX > 50 && posX <= 55){
				$("img",this)
					.attr("src","images/CoolGuy9.png");
			}
			else if(posX > 55 && posX <= 60){
				$("img",this)
					.attr("src","images/CoolGuy10.png");
			}
			else if(posX > 60 && posX <= 65){
				$("img",this)
					.attr("src","images/CoolGuy11.png");
			}
			else if(posX > 65 && posX <= 70){
				$("img",this)
					.attr("src","images/CoolGuy12.png");
			}
			
			
			
			
		});///mousemove////////////
	
	///쿨가이 오르락 내리락/////
	$("#cool").click(function(){
		$(this).animate({
			bottom:"-20%"},300,"easeInOutCirc")
		.animate({
			bottom:"-2%"
		},300,"easeInOutCirc");
	});
		
	///메뉴 클릭시 메뉴 나왔다 들어갔다///////
	var msts=0;//0닫힘, 1열림
	$("#ham").click(function(){
		if(msts==0){//닫힘상태면 열어라
			$(this).next().animate({left:"0"},500);
			msts=1;//열림상태
		}
		else if(msts==1){//열림상태면 닫아라
			$(this).next().animate({left:"-100%"},500);
			msts=0;//닫힘상태
		}
		
	});///click///
	
		
	
	
	
	
	
});//jQB////////////////