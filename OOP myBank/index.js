"use strict";
console.log("working fine and great to hear it.");
class BankAccount {
    BankAccount() {
        this.AccountBalance = 100;
    }
    Debit(amount) {
        let statement = "Sorry, you have insuifficient Balance";
        if (amount > 0) {
            statement = "The amount you entered is wrong";
            if (this.AccountBalance > amount) {
                this.AccountBalance = this.AccountBalance - amount;
                statement = "The transaction is successfully! new account balance is " + this.AccountBalance;
            }
            else {
                statement = "You don't have enough money to do this transaction";
            }
        }
        return statement;
    }
    Credit(amount) {
        let statement = "Transaction Failed!";
        if (amount > 0) {
            this.AccountBalance = this.AccountBalance + amount;
        }
        statement = "Your account has been credit successfully";
        return statement;
    }
}
class Customer {
    CustomerInfo() {
        return `Name: ${this.FirstName} ${this.LastName}
                Age: ${this.Age}
                Gender: ${this.Gender}
                Mobile: ${this.MobileNumber}
                Account Balance: ${this.bankAccount.AccountBalance}
        `;
    }
}
let customer = new Customer();
console.log(customer.FirstName);
let bankAccount = new BankAccount();
console.log(bankAccount.AccountBalance);
