/*사이트만들기 - main.js*/

$(function () {

    ////////////////////////////////////////////
    // 탭메뉴 클릭시 이동 /////////////////////////
    $(".tabTit a").click(function (e) {
        e.preventDefault();

        let idx = $(this).parent().index();
        console.log("순번:" + idx);

        $(this).parent().addClass("on").siblings().removeClass("on");

        $(".tabTxt li").eq(idx).addClass("on").siblings().removeClass("on");

    }); ///////// click //////////





    ////////////////////////////////////////////
    // 하단 관련기관 사이트 이동박스 ///////////////
    $("#select").change(function () {
        console.log("gogo");
        var url = $(this).val();

        if (url !== "uu")
            window.open().location.href = url;
    }) //////////// change //////////

    $(".gnb > ul").hover(
        function () {
            $("#top").addClass("on");
        },
        function () {
            $("#top").removeClass("on");
        }); ///// hover ////////

    
    var sldProt = 0;

    $(".rb").click(function (e) {
        e.preventDefault();
        //광클금지
        if(sldProt===1) return false;
        sldProt=1;
        setTimeout(function(){sldProt=0;},800);
        
                
        clearAuto();

        $(".slider").animate({
            left: "-100%"
        }, 800, function () {
            $(this).append($("li", this).first())
                .css({
                    left: "0"
                });
        }); ////// animate //////

    }); /////////// click ///////////////

    $(".lb").click(function (e) {
        
        e.preventDefault();
        // 광클금지
        if(sldProt===1) return false;
        sldProt=1;
        setTimeout(function(){sldProt=0;},800);
        // 자동넘기기
        clearAuto();

        $(".slider").prepend($(".slider>li").last())
            .css({
                left: "-100%"
            })
            .animate({
                left: "0%"
            }, 800); ////// animate //////

    }); /////////// click ///////////////


    // 인터벌함수(지우기위해 만든변수)
    let autoI;
    /*////////////////////////////////////////////////
        함수명: autoSlide
        기능: 자동넘기기 셋팅함수(인터벌함수)
    */ ////////////////////////////////////////////////
    let autoSlide = function () {
        autoI = setInterval(function () {
            $(".slider").animate({
                left: "-100%"
            }, 800, function () {
                $(this).append($("li", this).first())
                    .css({
                        left: "0"
                    });
            }); ////// animate //////
        }, 3000);
    }; ////////// autoSlide함수 ////////////
    ///////////////////////////////////////
    // 할당형함수 아래에서 처음 호출해야함!
    autoSlide(); //최초호출!


    // 타임아웃변수(쓰나미방지용 지우기변수)
    let autoT;
    /*//////////////////////////////////////////////
        함수명: clearAuto
        기능: 자동넘김 지우기함수(클리어인터벌함수)
    */ ////////////////////////////////////////////////
    let clearAuto = function () {

        // 자동넘김 할당된 변수를 지운다(autoI)
        clearInterval(autoI);
        // 타임아웃 실행쓰나미 방지용 타임아웃 지우기를 꼭한다
        clearTimeout(autoT);

        // 안건드리면 5초 후 다시 자동호출하기
        // 매번 호출될때 위에서 지우므로 단 하나만 남아있음!
        autoT = setTimeout(autoSlide, 5000);

    }; ////////// clearAuto함수 ///////////////////
    /////////////////////////////////////////////




}); //////////jQB ////////////////////





///// 로드구역 //////////////////////////////
window.addEventListener("DOMContentLoaded", function () {

    // 1. 로드구역확인
    console.log("로딩완료!");

    //    /*// 2. 이벤트 대상선정: .btn
    //    var btn = document.querySelectorAll('.btn');
    //
    //    // 3. 이벤트 종류: click
    //
    //    // (1)왼쪽버튼 /////////////////
    //    btn[0].onclick = function () {
    //
    //        // 자동넘김 지우기
    //        clearAuto();
    //
    //        // 이동함수호출
    //        goSlide(0);
    //
    //        // a요소 클릭시 이동속성 없애기!
    //        return false;
    //    }; ///////// click 함수 //////////
    //
    //    // (2)오른쪽버튼 //////////////////
    //    btn[1].onclick = function () {
    //
    //        // 자동넘김 지우기
    //        clearAuto();
    //
    //        // 이동함수호출
    //        goSlide(1);
    //
    //        // a요소 클릭시 이동속성 없애기!
    //        return false;
    //    }; //////////// click 함수 ///////////*/

}); ///////// 로드구역 //////////////////////
///////////////////////////////////////////


// 배너순번 전역변수
var bseq = 0;

function goSlide(gubun) { //gubun(왼쪽:0,오른쪽:1)

    // 1. 함수호출, 전달값 확인
    console.log("슬라이드이동!" + gubun);

    // 2. 변경대상: .slider li
    var tg = document.querySelectorAll('.slider li');
    console.log("슬라이드개수:" + tg.length);

    // 2. 버튼 구분하여 배너순번 증감하기
    // 오른쪽버튼(gubun이 1이면 true)
    if (gubun) {

        // 확인
        console.log("오른쪽!");
        // 배너순번 증가
        bseq++;
        // 한계수 설정(마지막 컬렉션번호 다음번호이면 처음으로!)
        if (bseq === tg.length) bseq = 0;

    } /////// if ////////
    // 왼쪽버튼
    else {
        // 확인
        console.log("왼쪽!!");
        // 배너순번 감소
        bseq--;
        // 한계수 설정(0보다작은 -1일경우 끝번호로!)
        if (bseq === -1) bseq = tg.length - 1;
        // 마지막 컬렉션 번호는 개수보다 1작다!
    } ////// else ///////

    // 변경된 배너순번 확인
    console.log("배너순번" + bseq);

    // 4. 해당순번에 class="on" 넣기

    // 클래스 전부 지우기 /////
    for (var x of tg) {
        x.classList.remove("on");
    } ////// for of문 ////////

    // 선정된 변경대상 tg에 class를 넣어준다
    // tg[bseq]는 해당순번의 li요소
    tg[bseq].classList.add("on");
    /*
    [ 선택요소에 class 제어하기 ]
    classList를 사용하여 원하는 class를 제어한다!
        1) add(클래스명) : 클래스 넣기
        2) remove(클래스명) : 클래스 제거하기
        3) toggle(클래스명) : 지정된 클래스가 없으면 넣고 있으면 제거함(토글기능)
        - 토글기능이란? 전등불켜기 버튼처럼 켰다/껏다하는 단순 전환 기능을 한가지 버튼으로 할때 토글버튼이라고 흔히 부른다!
    */


} //////// goSlide 함수 //////////////////
//////////////////////////////////////


// 인터벌함수(지우기위해 만든변수)
var autoI;
/*////////////////////////////////////////////////
    함수명: autoSlide
    기능: 자동넘기기 셋팅함수(인터벌함수)
*/ ////////////////////////////////////////////////
var autoSlide = function () {
    autoI = setInterval(function () {
        goSlide(1); //오른쪽방향 넘기기
    }, 3000);
}; ////////// autoSlide함수 ////////////
///////////////////////////////////////
// 할당형함수 아래에서 처음 호출해야함!
//autoSlide(); //최초호출!


// 타임아웃변수(쓰나미방지용 지우기변수)
var autoT;
/*//////////////////////////////////////////////
    함수명: clearAuto
    기능: 자동넘김 지우기함수(클리어인터벌함수)
*/ ////////////////////////////////////////////////
var clearAuto = function () {

    // 자동넘김 할당된 변수를 지운다(autoI)
    clearInterval(autoI);
    // 타임아웃 실행쓰나미 방지용 타임아웃 지우기를 꼭한다
    clearTimeout(autoT);

    // 안건드리면 5초 후 다시 자동호출하기
    // 매번 호출될때 위에서 지우므로 단 하나만 남아있음!
    autoT = setTimeout(autoSlide, 5000);

}; ////////// clearAuto함수 ///////////////////
/////////////////////////////////////////////
