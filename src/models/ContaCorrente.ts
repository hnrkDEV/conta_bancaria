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
    super(numero, agencia, tipo, titular, saldo);
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
    if (valor > this.saldo + this._limite) {
      console.log("Saldo insuficiente!");
    } else {
      this.saldo = this.saldo - valor;
      console.log(`Saque de R$${valor} realizado com sucesso!`);
    }
  }

  public visualizar(): void {
    super.visualizarConta();
    console.log(`Limite: R$${this._limite.toFixed(2)}`);
  }
}
