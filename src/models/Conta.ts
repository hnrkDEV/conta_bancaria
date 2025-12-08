export class Conta {
  //atributos
  private _numero: number;
  private _agencia: number;
  private _tipo: number;
  private _titular: string;
  private _saldo: number;

  //construtor
  constructor(
    numero: number,
    agencia: number,
    tipo: number,
    titular: string,
    saldo: number
  ) {
    this._numero = numero;
    this._agencia = agencia;
    this._tipo = tipo;
    this._titular = titular;
    this._saldo = saldo;
  }

  //Getter & Setters
  public get numero(): number {
    return this._numero;
  }
  public get agencia(): number {
    return this._agencia;
  }
  public get tipo(): number {
    return this._tipo;
  }
  public get titular(): string {
    return this._titular;
  }
  public get saldo(): number {
    return this._saldo;
  }

  public set numero(numero: number) {
    this._numero = numero;
  }
  public set agencia(agencia: number) {
    this._agencia = agencia;
  }
  public set tipo(tipo: number) {
    this._tipo = tipo;
  }
  public set titular(titular: string) {
    this._titular = titular;
  }
  public set saldo(saldo: number) {
    this._saldo = saldo;
  }

  //métodos
  visualizarConta() {
    let tipo: string = "";

    switch (this._tipo) {
      case 1:
        tipo = "Conta corrente";
      case 2:
        tipo = "Conta poupança";

        break;

      default:
        break;
    }
    console.log(`numero da conta: ${this._numero}`);
    console.log(`numero da agencia: ${this._agencia}`);
    console.log(`tipo da conta: ${tipo}`);
    console.log(`nome do titular: ${this._titular}`);
    console.log(`saldo total da conta: ${this._saldo}`);
  }

  depositar(valor: number) {
    if (valor === 0 || valor < 0) {
      console.log(
        "Valor inserido inválido, por favor, deposite um valor positivo"
      );
    } else {
      this._saldo = this._saldo + valor;
      console.log(
        `Valor depositado com sucesso! seu saldo atual: ${this._saldo}`
      );
    }
  }

  sacar(valor: number) {
    if (this._saldo < 0) {
      console.log("você não possui saldo suficiente para realizar esse saque.");
    } else {
      this._saldo = this._saldo - valor;
      console.log(`valor sacado: ${valor} \nsaldo atual: ${this._saldo}`);
    }
  }
}
