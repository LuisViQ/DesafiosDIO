import { BonusAccount } from './class/BonusAccount'
import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
peopleAccount.deposit(100)
peopleAccount.withdraw(50)
peopleAccount.getBalance()

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(500)
companyAccount.getLoan(200)
companyAccount.withdraw(100)
companyAccount.getBalance()

const bonusAccount: BonusAccount = new BonusAccount('Cliente Bonus', 30)
bonusAccount.deposit(100)
bonusAccount.getBalance()
bonusAccount.withdraw(40)
