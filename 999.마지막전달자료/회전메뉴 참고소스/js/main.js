// JavaScript Document

$(function(){
	var scrollCount = 0;
	 $('#container').bind('mousewheel', function(e){
     if(e.originalEvent.wheelDelta < 0) {
         //scroll down
		 scrollCount++;
         console.log('Down');
         console.log(scrollCount);
     }else {
         //scroll up
		 scrollCount--;
         console.log('Up');
         console.log(scrollCount);
     }

     //prevent page fom scrolling
     return false;
 });
	
	
	$("#container").backstretch(["images/main.png"],{duration:2000, fade:2000});	
	
	$("#stage div").click(function(){
		var cid = $(this).attr("class");
		var no = 1;
		var time;
		if(cid == "pos2")
		{
			no = 1;
		}
		else if(cid=="pos4")
			no = 2;
		else if(cid=="pos3")
			no = 3;
		else{
			return false;
		}
		circleMenu(no);		
		
	});//menu Click
}); //jQb

//회전메뉴함수
function circleMenu(num){
	num--;//1씩감소
	$(".pos2").animate({//1번애니
		top : "-20px", left : "185px"
		//width : "140px", height : "140px"
	},{
		duration:1000,
		specialEasing:{top:"easeOutQuad",left:"easeInQuad"}
	});//1번
	
	$(".pos1").css({ backgroundImage:"url(images/s_circle.png)", top:"-13",left:"192px"})
	.animate({//2번애니
		top : "192px", left : "-13px", width:"25px", height:"25px"
	},{
		duration:1000,
		specialEasing:{top:"easeInQuad",left:"easeOutQuad"},
		complete:function(){
			$(this)//.html("<span>"+$(this).text()+"</span>")
			.animate({"font-size":"14px"},50);
			$(this).find("span").hide();
			$(this).hover(function(){
				$(this).find("span").show();
			},
			function(){
				$(this).find("span").hide();
			});
		}
	});//2번
	
	$(".pos3").css({ backgroundImage:"url(images/s_circle.png)"})
	.animate({//2번애니
		top : "397px", left : "192px"
	},{
		duration:1000,
		specialEasing:{top:"easeOutQuad",left:"easeInQuad"}
	});//3번
	
	$(".pos4").css({ backgroundImage:"url(images/s_circle.png)"})
	.animate({//2번애니
		top : "192px", left : "397px"
	},{
		duration:1000,
		specialEasing:{top:"easeInQuad",left:"easeOutQuad"},
		complete:function(){
			var pos1 = 	"#"+$(".pos1").attr("id");
			var pos2 = 	"#"+$(".pos2").attr("id");
			var pos3 = 	"#"+$(".pos3").attr("id");
			var pos4 = 	"#"+$(".pos4").attr("id");
			$(pos1).removeClass("pos1").addClass("pos3");
			$(pos2).removeClass("pos2").addClass("pos1");
			$(pos3).removeClass("pos3").addClass("pos4");
			$(pos4).removeClass("pos4").addClass("pos2");		
			
	
			if(num>0)
			{circleMenu(num);}
			else{
				$(".pos1").css({ backgroundImage:"url(images/circle.png)"})
				.animate({width:"40px",height:"40px",top:"-20px",left:"185px"},300,function(){
					$(this).html("<span>"+$(this).find("span").text()+"</span>").animate({"font-size":"20px"},100,
					function(){
						$(this).find("span").show().css({"top":"-90px","left":"-11px"});
					});
					var sts = $(this).text();
					if(sts == "About")
					{
						$("#stage").animate({left:"300px"},1000);
						$("#container").backstretch(["images/about.png"],{duration:2000, fade:2000});	
					}
					else if(sts == "Work")
					{
						$("#stage").animate({left:"300px"},1000);
						$("#container").backstretch(["images/works.png"],{duration:2000, fade:2000});	
					}
					else if(sts == "Contact")
					{
						$("#stage").animate({left:"300px"},1000);
						$("#container").backstretch(["images/about.png"],{duration:2000, fade:2000});	
					}
					else if(sts == "Home")
					{
						$("#stage").animate({left:"50%", transform:"translateX(-50%)"},1000);
						$("#container").backstretch(["images/main.png"],{duration:2000, fade:2000});	
					}
				});
			}
		}
	});//4번
}
