class BankAccount {

    //Private fields using #
    #accountNumber;
    #balance;
    #accountHolderName;

//Encapsulation need to use constructor to access private vars
    constructor(accountNumber, balance, accountHolderName) {
        this.#accountNumber = accountNumber
        this.#balance = balance
        this.#accountHolderName = accountHolderName

    }
    deposit(amount) {
        this.balance += amount
        console.log(`Deposited: ${amount}`)
    }
    withdraw(amount) {

        if (this.#balance > amount) {
            this.#balance -= amount
            console.log(`Withdrawn: ${amount}`)
        } else if (this.#balance < amount) {
            console.log(`Insufficient funds to Withdraw tried to withdraw ${amount}`)
        }
    }
    getBalance() {
        console.log(`Account Balance: ${this.#balance}`)
    }

    getAccountNo() {
        console.log(`Account Number: ${this.#accountNumber}`)
    }

    getAccountName() {
        console.log(`Account Holder Name: ${this.#accountHolderName}`)
    }
}

const accountOne = new BankAccount('J123', 1500, 'James Brown')
accountOne.deposit(500);

accountOne.withdraw(11500);

accountOne.getBalance();
accountOne.getAccountName()
accountOne.getAccountNo()