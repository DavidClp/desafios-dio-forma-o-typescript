import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { PromotionalAccount } from './class/PromotionalAccount'

const peopleAccount1: PeopleAccount = new PeopleAccount(1, 'David', 1023)
peopleAccount1.deposit(100)
peopleAccount1.withdraw(50)
peopleAccount1.withdraw(150)

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(5000)
companyAccount.getLoan(10000)

const promotionalAccount: PromotionalAccount = new PromotionalAccount('Nathalia', 20999)
promotionalAccount.deposit(100)
