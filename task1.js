"use strict";
const input = document.querySelector("#input");
const depositButton = document.querySelector("#deposit-button");
const withdrawButton = document.querySelector("#withdraw-button");
const bankAccount = {
  ownerName: "Anya",
  accountNumber: 1626929,
  balance: 100,
  deposit(money) {
    this.balance = this.balance + money;
    alert(this.balance);
  },
  withdraw(money) {
    if (money <= this.balance) {
      this.balance = this.balance - money;
      alert(this.balance);
    } else {
      alert("МАЛООООООО");
    }
  },
};
const depositeHandler = () => {
  const depositeValue = parseFloat(input.value);
  bankAccount.deposit(depositeValue);
};
const withdrawHandler = () => {
  console.log(input.value);
  const withdrawValue = parseFloat(input.value);
  bankAccount.withdraw(withdrawValue);
};
depositButton.addEventListener("click", depositeHandler);
withdrawButton.addEventListener("click", withdrawHandler);
