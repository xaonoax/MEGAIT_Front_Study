// Date Object
// var 객체명 = new Date();

// Date Object의 주요 메서드
// getFullYear() : 4자리 연도
// getMonth() : 0~11 사이의 정수(현재월 +1 필요)
// getDate() : 한 달 내의 날짜
// getDay() : 한 주의 요일(0:일요일)
// getHours() : 시간(0~23)
// getMinutes() : 분(0~59)
// getSeconds() : 초(0~59)
// getMilliseconds() : 0~999
// getTime() : 1970년 1월 1일 0시 0분 0초 기준의 현재 밀리초
// get -> set 메서드들이 존재

var now = new Date();
console.log(now.toUTCString());  // 영국의 그리니치 천문대 기준시각(국제 표준 시간)
console.log(now.toLocaleString());
console.log(now.toLocaleTimeString());