console.log("working fine and great to hear it.")

interface IbankAccount {
    Debit: string
    Credit: string
}


class BankAccount<IbankAccount> {
    AccountBalance!: number

    BankAccount() {
        this.AccountBalance = 100;
    }

    Debit(amount: number) {
        let statement = "Sorry, you have insuifficient Balance";

        if (amount > 0) {

            statement = "The amount you entered is wrong";

            if (this.AccountBalance > amount) {
                this.AccountBalance = this.AccountBalance - amount;
                statement = "The transaction is successfully! new account balance is " + this.AccountBalance
            }
            else {
                statement = "You don't have enough money to do this transaction"
            }
        }
        return statement;
    }

    Credit(amount: number) {
        let statement = "Transaction Failed!"

        if (amount > 0) {
            this.AccountBalance = this.AccountBalance + amount
        }

        statement = "Your account has been credit successfully"
        return statement;
    }


}


class Customer {
    FirstName!: "Harish";
    LastName!: "vithal";
    Gender!: "male";
    Age!: 19;
    MobileNumber!: "0336343918";
    bankAccount!: BankAccount<IbankAccount>

    CustomerInfo(): string {
        return `Name: ${this.FirstName} ${this.LastName}
                Age: ${this.Age}
                Gender: ${this.Gender}
                Mobile: ${this.MobileNumber}
                Account Balance: ${this.bankAccount.AccountBalance}
        `
    }

}


let customer = new Customer();
console.log(customer.FirstName);

let bankAccount = new BankAccount();
console.log(bankAccount.AccountBalance)