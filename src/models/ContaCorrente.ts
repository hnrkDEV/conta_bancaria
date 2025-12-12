import { Conta } from "./Conta";

export class ContaCorrente extends Conta {
  //atributos
  private _limite: number;

  //construtor
  constructor(
    numero: number,
    agencia: number,
    tipo: number,
    titular: string,
    saldo: number,
    limite: number
  ) {
    super(numero, agencia, tipo, titular, saldo + limite); // aqui tive que passar o limite somando com o saldo pra que o saldo total apareça corretamente
    this._limite = limite;
  }

  //Getter & Setters
  public get limite(): number {
    return this._limite;
  }
  public set limite(limite: number) {
    this._limite = limite;
  }
  //métodos
  public sacar(valor: number): void {
    console.log("Bateu aqui no sacar");
    /*if (valor > this.saldo  + this._limite <- estava com isso antes, mas não precisa mais, pois o saldo já considera o limite
    ) {
      console.log("Saldo insuficiente!");
    } */
    if (valor < this.limite) {
      this.limite = this.limite - valor;
      this.saldo = this.saldo - valor;
      console.log(`Saque de R$${valor} realizado com sucesso!`);
    } else {
      this.limite = 0;
      this.saldo = this.saldo - valor;
      console.log(`Saque de R$${valor} realizado com sucesso!`);
    }
  }

  public visualizar(): void {
    super.visualizarConta();
    console.log(`Limite: R$${this._limite.toFixed(2)}`);
  }
}
