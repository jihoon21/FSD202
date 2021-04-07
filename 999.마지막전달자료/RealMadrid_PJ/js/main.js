$(document).ready(function(e) {
    //선수메뉴 표시자 움직이기
	var pbgi = ["2.VARANE","3.PEPE","8.KROOS","17.ARBELOA","23.DANILO"];
	$("#pmenu ul li").bind("mouseover",function(){
		var idx = $(this).index();//li순번
		//alert(idx);
		var lpos;//left위치값
		switch(idx){
			case 0:
				lpos="-0.4%";
				break;
			case 1:
				lpos="20.4%";
				break;
			case 2:
				lpos="40.4%";
				break;
			case 3:
				lpos="60.4%";
				break;
			case 4:
				lpos="80.4%";
				break;
		}//switch case문
		
		//위치이동
		$("#indic").stop().animate({left:lpos},400);
		//선수배경변경
		$(this).siblings().css("background","none");//현재선택빼고 나머지배경무
		$(this).css("background","url(images/"+pbgi[idx]+".png) -40px 0px/80% no-repeat");
		
		//선수순번 indic에 넣기
		$("#indic").attr("data-seq",idx+1);
		
	});//mouseover
	
	//표시자를 클릭하면 메인 화면의 선수박스가 이동함(크기조절)
	$("#indic").click(function(){
		var seq = Number($(this).attr("data-seq"));//선수순번셋팅
		//alert(seq);
		
		//주인공 player
		$("#player"+seq)
		.css("transition","all 0.6s")
		.attr("class","pos pos1")
		.find("span").show();//모든 텍스트 다 보이기
		
		//두번째 player
		var playerNext = "player"+ (seq+1);
		if(playerNext != "player6"){
			$("#"+playerNext)
			.css("transition","all 0.6s")
			.attr("class","pos pos2")
			.find("span").hide()
			.first().show();
		}
		
		//중간을 클릭한 경우처리
		for(var i=1;i<=5;i++){
			//break문 - for문을 빠져나감
			//continue -> 조건에 해당하는 것만 빼고 for문을 돔
			if(i==seq || i==seq+1)continue;
			if(i<seq){//선택된 것 보다 작은 번호는 pos0
				$("#player"+i)
				.css("transition","all 0.6s")
				.attr("class","pos pos0");//화면바깥으로~!
			}
			else if(i>seq){//선택된 것 보다 큰 번호는 pos3
				$("#player"+i)
				.css("transition","all 0.6s")
				.attr("class","pos pos3");//왼쪽위 투명하게
			}
			
			
			
		}
		
		
		
	});//표시자클릭
	
	
	
	
	
	
	
	
	
});//jQb