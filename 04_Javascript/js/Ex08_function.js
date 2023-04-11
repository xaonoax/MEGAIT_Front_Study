/*
    Function Test
    Artist : J.Y.Ahn
*/
    
// overloading을 지원하지 않는다.
function add(num1, num2, num3){
    return num1 + num2 + num3;
}

function add(num1, num2){
    return num1 + num2;
}

console.log("[add(a, b)] " + add(1, 3));
console.log("[add(a, b, c)] " + add(1, 5, 5));

    
// 몇 개를 입력할지 모름
function add(...nums){
    let total = 0;
    for(let i=0;i<nums.length;i++){
        total += nums[i];
    }
    return total;
}
    
console.log("[add(...nums)] " + add(1, 3));
console.log("[add(...nums)] " + add(1, 3, 5));
    
// 나이, 이름, 성별을 입력받고 
// 이름이 없으면 "이름 없음", 성별이 없으면 "미선택" 출력하기
function introduce(age, ...args){
    let agemsg = age;
    let nameMsg = args[0]? args[0] : "이름 없음";
    let genderMsg = args[1]? args[1] : "미선택";
    let test = true? "True" : "False";

    console.log("[introduce] " + test);
    console.log("[introduce] " + args[0]);
    console.log("[introduce] " + age);
    console.log("[introduce] " + nameMsg);
    console.log("[introduce] " + genderMsg);

}

introduce(10);

function introduce(age, name, gender){
    let ageMsg = age + "세";
    let nameMsg;
    let genderMsg;

    if(arguments.length == 2){
        if(name.includes("남") || name.includes("여")){
            genderMsg = name;
            nameMsg = "이름 없음";
        }
        else{
            nameMsg = name;
            genderMsg = "미선택";
        }
    }
    else { // age만 들어오거나, 다 들어오거나
        nameMsg = name || "이름 없음";
        genderMsg = gender || "미선택";
    }

    console.log("[introduce] " + age);
    console.log("[introduce] " + nameMsg);
    console.log("[introduce] " + genderMsg);
}

introduce(900, 'Abraham');
introduce(108, "여");

// includes()
// 문자열 함수
// 조회할 값이 포함되어 있으면 ture 없으면 false return
console.log("ABCDE".includes("BCD"));  // true
console.log("ABCDE".includes("bcd"));  // flase
console.log("ABCDE".includes("BCE"));  // flase

// 초기갑 설정
// ""일 때의 처리, false를 의미
var testdata = "";
testdata = testdata || 10;
console.log("testdata : " + testdata);

// false : null, undefined, "", 0은 false로 취급
if(!undefined){
    console.log("undefined는 false");
}

// === : 값과 타입이 모두 같으면 true
let mydata;
console.log(mydata == undefined);
console.log(typeof(mydata) == 'undefined');

console.log("숫자 1과 문자'1'은 같은가? " + (1 == "1"));
console.log("숫자 1과 문자'1'은 완전히 같은가? " + (1 === "1"));
console.log("1 == true? " + (1==true));
console.log("2 == true? " + (2==true));
console.log("1 === true? " + (1 === true));

if(2){
    console.log("2는 true로 치는 거였네.");
}