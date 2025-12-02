import { DioAccount } from "./DioAccount"

export class BonusAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }

  deposit(amount: number): void {
    const amountWithBonus = amount + 10
    super.deposit(amountWithBonus)
  }
}
