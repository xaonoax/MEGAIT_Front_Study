/*
    object
    Artist : J.Y.Ahn
*/
var account1 = {
    owner: "이선생",
    code: "2132",
    balance: 983242312,
    deposit: function(money){ this.balance += money; },
    withdraw: function(money){ this.balance -= money; },
    get_balance: function(){ return this.balance; }
}

document.write("<h3> 계좌전체정보 : " + account1 + "</h3>");
document.write("<h3> 고객명 : " + account1.owner + "</h3>");
document.write("<h3> 고객명 : " + account1['owner'] + "</h3>");
account1.deposit(50000);
document.write("<h3> 현재잔고 : " + account1.get_balance() + "</h3>");