class CurrentAccount {
  accountNumber: number;
  name: string;
  balance: number;

  constructor(accountNumber: number, name: string, balance?: number) {
    this.accountNumber = accountNumber;
    this.name = name;
    this.balance = balance ?? 0;
  }

  changeName(name: string): void {
    this.name = name;
  }

  deposit(amount: number): void {
    if (amount < 0) {
      return;
    }

    this.balance += amount;
    console.log(`Depósito de ${amount} reais. Saldo atual: R$ ${this.balance.toFixed(2)}`);
  }

  withdraw(amount: number): void {
    if (amount > this.balance) {
      return;
    }

    this.balance -= amount;
    console.log(`Saque de ${amount} reais. Saldo atual: R$ ${this.balance.toFixed(2)}`);
  }
}

export default CurrentAccount;