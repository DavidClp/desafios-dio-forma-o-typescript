import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (value: number): void => {
    if (this.validateStatus()) {
      const newBalance = this.getBalance() + value;

      this.setBalance(newBalance);

      console.log('Emprestimo Realizado Com Sucesso!');
      console.log("Seu Saldo Atual: ", this.getBalance());
      console.log("------------------------------------------------");
    }
  }
}
