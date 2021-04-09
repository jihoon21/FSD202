// 메인 페이지 JS - main.js


$(function(){///// jQB /////////////////
    
    /// 인트로 셋팅! /////////////////

    // 1. 인트로용 가림막(마우스 오버방지)만들기
    $("#ban").append("<div id='icv'></div>");
    $("#icv")
        .hide()
        .css({
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        background: "url(images/mainCon_bg2.jpg) no-repeat 50%/cover",
        zIndex: "9999999"
    }) ////////// css ////////////
    .append('<div class="icvtxt"><span></span><span></span></div>')
    .fadeIn(1000);
    
    $(".icvtxt").css({
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        width:"100%",
        whiteSpace:"nowrap",
        color: "#fff",
        textAlign: "center",
        lineHeight: "80px"
    })

    .find("span")
    .css({
        position:"relative",
        display:"block"
    })
    .first()
    .text("아름다운 동행, 셀트리온복지재단")
    .css({
        fontSize:"70px",
        top:"100px",
        fontWeight: "bold",
        opacity: 0 
    })
    .delay(2000)
    .animate({
        top:"0",
        opacity: 1 
    },300)
    .next()
    .text("더불어 살아가는 아름다운 사회를 위해 셀트리온복지재단이 앞장서겠습니다.")
    .css({
        fontSize: "20px",
        top:"100px",
        opacity: 0
    })
    .delay(2300)
    .animate({
        top:"0",
        opacity: 1 
    },300);
    
    
    
    
    
    // 2. 인트로 등장시 인트로이미지 확대
    setTimeout(function(){
        
        $("#icv").css({
            transform:"scale(2)",
            transition:"2s",
            opacity: 0
        }); //// css ///
        
    },3500); //// setTimeout /////
    
    
    // 3. 인트로 등장 후 커버없애기
    setTimeout(function(){
        $("#icv").remove();
    },5500); //// setTimeout ////
    
    
    
    
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


    //// 배너 클릭시 서브페이지 애니메이션하면서 보이기 ///
    $("#ban>ul>li").first().click(function(){

        location.href = "subpage.html";

    }); /////////// click //////////////////
    



    ///// 패밀리사이트 클릭시 메뉴 보이기 //////////////
    $("#family").click(function(){

        $(".sub").slideToggle(300)
        

    });///////// click /////////////
    
    
    
    
    
    
});/////////////// jQB //////////////////