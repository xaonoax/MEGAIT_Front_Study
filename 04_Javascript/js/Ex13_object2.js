var account2 = new Object();
account2.owner = "바르다김선생";
account2.balance = 90;
account2.deposit = deposit;
account2.withdraw = withdraw;

function deposit(money){
    this.balance += money;
}

function withdraw(money){
    if(this.balance >= money){
        this.balance -= money;
        return money;
    }
    else{
        var real_money = this.balance;
        this.balance = 0;
        return real_money;
    }
}

account2.deposit(50000);
document.write("<hr>");
document.write("<h3> 고객명 : " + account2.owner + "</h3>");
document.write("<h3> 현재잔고 : " + account2.balance + "</h3>");
document.write("<h3> 10만원 인출시도 : " + account2.withdraw(100000) + "원 출금</h3>");
document.write("<h3> 현재잔고 : " + account2.balance + "</h3>");