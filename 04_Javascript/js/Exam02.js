document.getElementById("change").onclick = getResult;

function getResult(){
    const input = document.querySelector("input[name='input']");
    const val = input.value
    console.log("Customer Input : " + val);
    changeToKR(val);
}

function changeToKR(number){
    const p = document.getElementById("result");
    const div = document.getElementById("round");
    var result = "";

    number = number.trim();  // number에서 공백 제거
    if(isNaN(number)){
        console.log("숫자가 아닙니다.");
        p.innerHTML = "숫자를 입력하세요.";
        div.innerHTML = "4";
        return;
    }

    number = parseFloat(number);
    console.log("입력숫자 : " + number);

    var check = false;
    // ex) 0.1, .1
    if(number < 1){
        result += "영";
        check = true;
    }

    number = number + "";
    hangul = "영일이삼사오육칠팔구";

    div.innerHTML = "3";

    for(let i in number){
        console.log("i = " + i);
        if(check){
            check = false;
            
            continue;
        }
        
        let char = hangul[number.charAt(i)]

        /* 아래거나 이거 둘 중 하나
        if(!char){
            char = "점";
            result += "점";
        }
        else{
        result += char;
        }
        */

        if(!char){
            char = "점";
            div.innerHTML = "2";
        }

        result += char;

        console.log("char = " + char);
    }

    p.innerHTML = result;
}