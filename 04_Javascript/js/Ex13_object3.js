// 기차 등급별 좌석 구현
// 3명의 고객 존재

orient_express = new Object();
guest1 = {name:"Kim", age:70, level:1}
guest2 = {name:"Lee", age:592, level:2}
guest3 = {name:"Park", age:1423, level:3}

orient_express.passenger1 = guest1;
orient_express.passenger2 = guest2;
orient_express.passenger3 = guest3;

document.write("<br><hr><h3>오리엔트특급열차 승객리스트</h3><hr><br>");
document.write("<h4>" + orient_express.passenger1.name + "(" + orient_express.passenger1.age + ")</h4>");
document.write("<h4>" + orient_express.passenger2.name + "(" + orient_express.passenger2.age + ")</h4>");
document.write("<h4>" + orient_express.passenger3.name + "(" + orient_express.passenger3.age + ")</h4>");