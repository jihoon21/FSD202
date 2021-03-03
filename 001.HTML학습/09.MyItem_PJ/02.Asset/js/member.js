//// 회원가입 페이지 JS - member.js ///////

$(function () { ///// jQB /////////////////
    /*
    [ 입력폼의 유효성 검사 ]
    - 검사원리 : 입력창에 클릭 또는 탭하여 입력 가능상태(커서가 깜박이는 상태)를 포커스 상태라고 함. 이 포커스 상태에서 다른 부분이 클릭(탭)되면 포커스가 풀리게 됨. 이 상태를 블러(blur)상태라고 함
    이렇게 이벤트가 블러로 발생할때 유효성 검사를 시행함
    - 이벤트 대상선정 : 입력요소 중 text, password
    input[type=text],input[type=password]
    - 제이쿼리 사용 메서드 : blur()
    
    -> 주의사항: 숨겨진 이메일 직접입력 input요소를 제외해야한다!
    input[type=text][id!=email2]
    input요소인데 type속성값이 text이고 id값이 email2가 아닌것
    -> != 은 제이쿼리에서 지원하는 연산자임!
    */
    $("input[type=text][id!=email2],input[type=password]")
        .blur(function () {

            // 블러가 발생한 요소의 아이디값
            // current id 현재아이디
            let cid = $(this).attr("id");
            // attr(속성명) -> 선택요소의 속성값을 읽어옴
            // attr(속성명,속성값) -> 선택요소의 속성셋팅

            // 블러가 발생한 요소의 값
            // current value 현재값
            let cv;

            // 아이디나 비밀번호는 모든 공백제거(groSpace함수)
            // 이름은 앞뒤공백만 제거, 중간공백 허용(trim함수)
            if (cid === "mnm") cv = $(this).val().trim();
            else cv = groSpace($(this).val());

            // val() -> 선택요소에 입력된 값을 읽어옴
            // val(값) -> 선택요소에 값 셋팅
            // trim() -> 문자 앞뒤공백제거
            // gro space(값) - 모든공백제거함수(우리가만든것!)


            // 공백제거 후 다시넣기
            $(this).val(cv);

            //console.log("블러발생!"+cid+"/값:"+cv);

            // 메시지 요소
            let msg = $(this).siblings(".msg");

            // 0. 빈값일 경우 "필수입력" 메시지 띄우기! //
            if (cv === "") {
                msg.text("필수입력");
                // siblings(요소이름) - 형제요소 중 특정요소

                // 불통과 상태값 변경!
                pass = false;

            } ///////// if문 : 빈값일때 ///////////

            /// 1. 아이디일때 검사하기 /////////
            else if (cid === "mid") {
                ////console.log("아이디검사:"+validReg(cv,cid));

                // 유효성 검사결과가 true이면 ////
                if (validReg(cv, cid)) {
                    msg
                        .html('<b>훌륭한 아이디네요~!</b>');
                } /////// if문 : 아이디검사결과 true ////
                // 아이디 유효성검사 불통과시 ////////
                else {
                    msg
                        .text("아이디는 6~10자 영문자 또는 숫자");

                    // 불통과 상태값 변경!
                    pass = false;

                } //////// else문 : 아이디검사결과 false ////

            } ////// else if문 : 아이디검사 ///////

            /// 2. 비밀번호 검사하기 ///////////
            else if (cid === "mpw") {

                // 비번검사 결과가 false일때(!NOT 결과가 반대)
                if (!validReg(cv, cid)) {
                    msg
                        .text("특수문자,문자,숫자 포함 형태의 5~15자리");

                    // 불통과 상태값 변경!
                    pass = false;

                } //// if문 : 비번검사 결과가 false일때 /////
                // 비번검사 결과가 true일때
                else { // 출력 메시지 지우기
                    msg.empty();
                } ///// else문 : 비번검사결과 true ////// 

            } //////// else if문 : 비밀번호검사 /////////

            /// 3. 비밀번호 확인 검사하기 //////////
            else if (cid === "mpw2") {

                // 비밀번호 입력값과 불일치하면
                if (cv !== $("#mpw").val()) {
                    msg.text("비밀번호가 일치하지 않습니다!");

                    // 불통과 상태값 변경!
                    pass = false;

                } //// if문 : 비밀번호와 확인값 불일치 ///
                else {
                    msg.empty();
                } ///// else문 : 비밀번호와 확인 일치 ///

            } ///// else if문 : 비밀번호확인 검사 ////////

            // 빈값이 아닐때 메시지 지우기 ///
            else {
                // 이메일검사는 별도의 메시지를 띄우므로 지우기를 하지 않는다!
                if (cid !== "email1") msg.empty();
                // empty() - 내용지우기
            } //////// else : 빈값이 아닐때 ///////



        }); /////////// blur ///////////////////////////
    ///////////////////////////////////////////////

    ///////////////////////////////////////////////
    //////// 이메일 관련 요소 변수 ///////////////////

    // 이메일 앞주소
    let eml1 = $("#email1");
    // 이메일 뒷주소(자유입력)
    let eml2 = $("#email2");
    // 이메일 뒷주소(선택박스)
    let seleml = $("#seleml")

    /////////////////////////////////////////////////
    ////////// 이메일 검사 함수 ///////////////////////
    /*//////////////////////////////////////////////
        함수명: chkEml
        기능: 이메일 검사 후 메시지 보여주기
    */ //////////////////////////////////////////////
    let chkEml = function (addr) { //addr - 이메일주소

        // 이메일 정규식 검사함수 호출!

        // 검사결과
        let res = validReg(addr, "eml");
        console.log("이메일결과:" + res);

        // 이메일 검사결과 메시지 찍기 ////
        if (res) { // 통과시

            eml1.siblings(".msg").html('<b>적합한 이메일형식입니다!</b>');

        } ////// if문 - 이메일 통과시 ///////
        else { // 불통과시

            eml1.siblings(".msg").text("맞지않는 이메일형식입니다");

            // 불통과 상태값 변경!
            pass = false;

        } ///// else문 - 이메일 불통과시 ///////

    }; //////// chkEml 함수 /////////////////////////
    ///////////////////////////////////////////////


    /////////////////////////////////////////////////
    /////////// 키보드 입력시 이메일 체크하기 ///////////
    ////////////////////////////////////////////////
    /////// 키보드 관련 이벤트 종류 : keypress, keyup, keydown
    // 1. keypress : 키가 눌려졌을때
    // 2. keyup : 키가 눌렸다가 올라올때
    // 3. keydown : 키가 눌려져 내려갈때
    // - 과연 글자가 입력되는 순간은 어떤 이벤트 적용해야할까?
    // -> 현재 입력문자를 바로 반영하려면 "keyup" 이벤트를 사용한다!

    // 이벤트 대상: #email1, #email2
    $("#email1, #email2").on("keyup", function () {

        // 앞쪽 이메일 내용 읽어오기
        let eml1_val = eml1.val();

        //console.log("이메일앞주소:"+eml1_val);

        // 이메일 뒷주소 셋팅하기~!
        // 구분: #email1이 입력되면 선택박스의 값이 뒷주소
        //      #email2가 입력되면 이것이 뒷주소!
        // 조건연산자 사용하기 -> 비?집:놀이동산;
        // 이메일 뒷주소 값
        let ev = $(this).attr("id") === "email1" ?
            seleml.val() : eml2.val();

        //console.log("이메일뒷주소:"+ev);

        // 조건연산자를 변수에 할당하는 경우
        //    변수 = 조건?실행문1:실행문2;
        // 조건연산자의 결과가 변수에 할당된다!

        // ★★★선택박스의 선택값의 value가 "free"(직접입력)일때
        // 선택박스가 아닌 직접입력박스의 값을 뒷주소로 해야한다!
        if (seleml.val() === "free") ev = eml2.val();

        // 이메일 전체 주소 조합하기!!
        let comp = eml1_val + "@" + ev;
        //console.log("이멜주소"+comp);

        // 이메일 검사함수호출!!(메시지출력)
        chkEml(comp);


    }); ////////////// 키보드 이벤트함수 /////////////
    ///////////////////////////////////////////////



    /////////////////////////////////////////////////
    //////// 선택박스 변경시 이메일 검사 ////////////////
    /////////////////////////////////////////////////
    // 검사시점: 선택박스 변경할때
    // 이벤트: change
    // 이벤트대상: #seleml -> seleml변수
    seleml.change(function () {

        // 이메일 앞주소값 가져오기
        let eml1_val = eml1.val();

        // 선택박스 선택값 가져오기
        let seleml_val = $(this).val();

        //console.log("이메일:"+eml1_val+"@"+seleml_val);

        // 선택옵션별 분기문 //////////

        // 1. "선택해주세요"를 선택한 경우
        if (seleml_val === "init") {

            // 메시지 띄우기
            eml1.siblings(".msg").text("이메일 옵션선택 필수!");

            // 불통과 상태값 변경!
            pass = false;

            // 입력창 숨기기
            eml2.fadeOut(500);

        } /////// if문 - init 선택시 ///////////

        // 2. "직접입력"을 선택한 경우
        else if (seleml_val === "free") {

            // 입력창 보이기
            eml2.fadeIn(500);
            // 기존 출력 메시지 지우기
            eml1.siblings(".msg").empty();

        } ///// else if문 - free 선택시 ////////
        else { // 이메일 검사하기:직접입력이 아닌 선택일 경우 ///

            // 입력창 숨기기
            eml2.fadeOut(500);

            // 이메일 전체 주소 조합하기!!
            let comp = eml1_val + "@" + seleml_val;
            //console.log("이멜주소"+comp);

            // 이메일 검사함수호출!!(메시지출력)
            chkEml(comp);

        } ////// else문 - 그 밖의 이메일 주소일때 //////



    }); ////////// change 이벤트 함수 //////////////////
    /////////////////////////////////////////////////


    ////////////////////////////////////////////////////
    ////// 가입하기(submit) 버튼 클릭시 ///////////////////
    ////////////////////////////////////////////////////
    // 전체검사의 원리 : 
    // 전역변수 pass를 설정하여 true를 주고 검사중간에 문제가 생기면 false로 변경하여 유효성검사 통과여부를 판단한다
    /////////////////////////////////////////////////////
    // 전체검사의 방법 : 기존 blur이벤트나 change, keyup 이벤트등을 강제로 발생하여 전체검사를 실행한다!
    // 기존의 검사루트를 그대로 활용한다!(별도검사코드 만들지않음!)
    /////////////////////////////////////////////////////

    // 검사용변수
    let pass;

    // 이벤트 대상: #btnj
    $("#btnj").click(function (e) { // e-이벤트전달변수

        // 1. 서브밋페이지 전송막기
        e.preventDefault();

        // 2. pass 통과여부변수에 true 설정하기
        pass = true;
        
        // 3. 입력창 blur 이벤트 발생시키기(전체검사)
        // 대상: input[type=text][id!=email2],input[type=password]
        // 방법: trigger 메서드로 대상요소에 blur이벤트를 강제발생시킴!
        // 주의사항: 검사대상에서 숨겨놓은 email2를 반드시 뺌
        // 항목제외 -> [id!=email2]
        $("input[type=text][id!=email2],input[type=password]").trigger("blur");
        
        // 4. 이메일 검사를 위해 선택박스에 change 이벤트 발생시키기
        seleml.trigger("change");
        
        // 5. 이메일 직접입력일때와 아닐때를 구분하여 keyup 이벤트를 발생시키기
        //직접입력일때는 뒷주소에 발생!
        if(seleml.val()==="free")
            eml2.trigger("keyup");
        //직접입력이 아닐때는 앞주소에 발생!
        else
            eml1.trigger("keyup");
        
        console.log("통과여부:"+pass);
        
        /////////////////////////////////
        // 이메일 검사결과 메시지 찍기 //////
        if(pass) { // 통과시
            // 원래는 PHP DB입력 처리 페이지로 가야함
            // 지금은 바로 로그인 페이지로 감!
            
            // 가입축하 메시지
            alert("회원가입을 축하드립니다~! 짝짝짝!!")
            
            // 로그인 페이지로 이동
            //location.href = "login.html";
            location.replace("login.html");
            /*
                location.href 는 이전페이지로 돌아갈 수 있다
                그런데 민감한 데이터를 입력 후 이전페이지로 가게 되면
                비밀번호는 리셋되었지만 나머지 정보는 다시 볼 수 있다
                이런 경우 location.replace(이동할주소페이지)를
                사용하면 이전페이지로 갈 수 없다!
            */
            
        } ///////// if //////////////
        else { // 불통과시
            alert("입력을 수정하세요~!");
            
        } /////////// else ////////////
        
        

    }); //////// click /////////////




}); /////////////// jQB ///////////////////////////////////

/*/////////////////////////////////////
    함수명: groSpace(get rid of space)
    기능: 문자의 모든 공백을 제거하여 리턴함
*/ /////////////////////////////////////
function groSpace(val) { // val - 전달변수(처리할값)
    // 정규식 문법 - 슬래쉬 사이에 표현
    // \s - 스페이스를 의미, g - 전역플래그(모두찾음)
    // new value 새로운값
    let newval = val.replace(/\s/g, "");
    // 넘어온 문자값에서 스페이스를 모두 찾아 없애라!

    // 호출한 곳으로 값을 가지고 돌아가라!
    return newval;


} //////// groSpace 함수 //////////////////
//////////////////////////////////////




/*////////////////////////////////////////
    함수명:validReg
    기능: 값에 맞는 형식을 검사하여 리턴함
    (주의: 정규식을 따옴표로 싸지말자!-싸면 문자가됨)
*/ ////////////////////////////////////////
function validReg(val, cid) {
    // val - 검사할 값, cid - 처리구분아이디
    //console.log(val+"/"+cid);

    // 정규식 변수
    let reg;

    switch (cid) {
        case "mid": //아이디
            reg = /^[a-z0-9]{6,10}$/g;
            //아이디는 6~10자 영문자 또는 숫자
            break;
        case "mpw": //비밀번호
            reg = /^.*(?=^.{5,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=\*]).*$/;
            //특수문자,문자,숫자 포함 형태의 5~15자리 이내의 암호 정규식
            // 특수문자중 \* (역슬래쉬별)은 특수문자처리임
            // *은 모든이라는 뜻으로사용되기때문!
            break;
        case "eml": //이메일
            reg = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
            break;

    } ///// switch case문 ///////

    //console.log("정규식:"+reg);
    // 검사결과 리턴
    // test(값) 값을 검사하여 
    // true/false 리턴하는 JS내장함수
    return reg.test(val);

} ///////////// validReg 함수 //////////////
//////////////////////////////////////////
//////////////////////////////////////////
