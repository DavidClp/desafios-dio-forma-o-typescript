export abstract class DioAccount {
  private readonly name: string;
  private readonly accountNumber: number;
  private balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  getName = (): string => {
    return this.name;
  }

  deposit = (value: number): void => {
    if (this.validateStatus()) {
      const newBalance = this.balance + value;
      this.setBalance(newBalance);

      console.log('Valor Depositado Com Sucesso!');
      console.log("Seu Saldo Atual: ", this.balance);
      console.log("------------------------------------------------");
    }
  }

  withdraw = (value: number): void => {
    if (this.validateStatus()) {
      if (value >= this.balance){
        console.log('Saldo menor que o valor solicitado para saque');
        console.log("------------------------------------------------");
        return;
      }

      const newBalance = this.balance - value;

      this.setBalance(newBalance);
      console.log('Valor Sacado Com Sucesso!');
      console.log("Seu Saldo Atual: ", newBalance);
      console.log("------------------------------------------------");
    }
  }

  getBalance = (): number => {
    return this.balance;
  }

  setBalance = (balance: number): void => {
    this.balance = balance;
  }

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error('Conta inválida');
  }
}
