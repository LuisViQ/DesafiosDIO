export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }

  getName(): string {
    return this.name
  }

  deposit(amount: number): void {
    if (this.validateStatus()) {
      this.balance += amount
      console.log(`Voce depositou ${amount}. Saldo atual: ${this.balance}`)
    }
  }

  withdraw(amount: number): void {
    if (!this.validateStatus()) {
      return
    }

    if (this.balance >= amount) {
      this.balance -= amount
      console.log(`Voce sacou ${amount}. Saldo atual: ${this.balance}`)
    } else {
      console.log('Saldo insuficiente para saque')
    }
  }

  getBalance(): void {
    console.log(this.balance)
  }

  protected validateStatus(): boolean {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta invalida')
  }
}
