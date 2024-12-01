import { DioAccount } from "./DioAccount"

export class PromotionalAccount extends DioAccount {
  private PROMOTIONAL_DEPOSIT_PLUS = 10;

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  deposit = (value: number): void => {
    if (this.validateStatus()) {
      let newBalance = this.getBalance() + value;

      if(this.PROMOTIONAL_DEPOSIT_PLUS) {
        newBalance+= this.PROMOTIONAL_DEPOSIT_PLUS;

      }

      this.setBalance(newBalance);

      console.log('Valor Depositado Com Sucesso!');
      console.log("Seu Saldo Atual: ", this.getBalance());
      console.log("------------------------------------------------");
    }
  }
}