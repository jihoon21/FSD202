// 메인 페이지 JS - main.js


$(function(){///// jQB /////////////////

    // 메뉴버튼 클릭시
    $(".gnb").click(function(){
        
        $("#menu").animate({
            left: "0",
            height: "100vh"
        }, 800);
        
        $("body").css({
            overflow: "hidden"
        });
        
        
    }); /////////////// click //////////////////
    
    // 닫기버튼 클릭시
    $(".close").click(function(){
        
        
        
        $("#menu").animate({
            left: "100%"
        }, 800);
        
        
        
        $("body").css({
            overflow: "visible"
        });
        
        
    });//////// click //////////////
    
    


    ///// 패밀리사이트 클릭시 메뉴 보이기 //////////////
    $("#family").click(function(){

        $(".sub").slideToggle(300)
        

    });///////// click /////////////
    
    
    
    
    
    
});/////////////// jQB //////////////////