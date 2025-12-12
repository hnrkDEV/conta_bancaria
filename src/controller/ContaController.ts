import { Conta } from "../models/Conta";
import { ContaCorrente } from "../models/ContaCorrente";
import { ContaPoupanca } from "../models/ContaPoupança";
import { ContaRepository } from "../repository/ContaRepository";

export class ContaController implements ContaRepository {
  private contas: Array<Conta> = [];
  numeroConta: number = 0;

  procurarPorNumero(numero: number): void {
    if (this.buscarContasArray(numero) !== null) {
      console.log("Conta encontrada!:");
      this.buscarContasArray(numero)?.visualizarConta();
    }
  }

  listarTodas(): void {
    this.contas.map((conta) => {
      return conta.visualizarConta();
    });
  }

  cadastrar(conta: Conta): void {
    this.contas.push(conta);
    console.log("Conta cadastrada com sucesso!");
  }

  atualizar(conta: Conta): void {
    this.contas.forEach((contaArray, index) => {
      if (contaArray.numero === conta.numero) {
        this.contas[index] = conta;
        console.log("Conta atualizada com sucesso!");
      }
    });
  }

  deletar(numero: number): void {
    this.contas.forEach((contaArray, index) => {
      if (contaArray.numero === numero) {
        this.contas.splice(index, 1);
        console.log("Conta deletada com sucesso!");
      }
    });
  }

  sacar(numero: number, valor: number): void {
    const conta = this.buscarContasArray(numero);

    /*     if (conta instanceof ContaCorrente && !(valor > conta.saldo)) {
      //tinha feito o typeOf para somar o limite com o saldo, mas com a mudança de lógica ficou desnecessário
      conta.sacar(valor);
      console.log("Saque realizado com sucesso!");
      return;
    } else {
      console.log("Saldo insuficiente!");
    }
    if (conta instanceof ContaPoupanca && valor < conta.saldo) {
      conta.sacar(valor);
      console.log("Saque realizado com sucesso!");
      return;
    } */
    conta?.sacar(valor);
  }

  depositar(numero: number, valor: number): void {
    const conta = this.buscarContasArray(numero);
    if (conta != null) {
      conta.depositar(valor);
    }
  }
  transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
    const contaOrigem = this.buscarContasArray(numeroOrigem);
    const contaDestino = this.buscarContasArray(numeroDestino);
    if (contaOrigem != null && contaDestino != null) {
      if (
        contaOrigem instanceof ContaCorrente &&
        valor < contaOrigem.saldo // estava com "+ contaOrigem.limite", porém, como o saldo já está considerando o limite, não precisa somar novamente
      ) {
        contaOrigem.sacar(valor);
        contaDestino.depositar(valor);
        console.log("Transferência realizada com sucesso!");
        return;
      } else if (
        contaOrigem instanceof ContaPoupanca &&
        valor < contaOrigem.saldo
      ) {
        contaOrigem.sacar(valor);
        contaDestino.depositar(valor);
        console.log("Transferência realizada com sucesso!");
        return;
      }
    }
  }

  public buscarContasArray = (numero: number): Conta | null => {
    for (let conta of this.contas) {
      if (conta.numero === numero) {
        return conta;
      }
    }
    return null;
  };

  public gerarNumeroConta = (): number => {
    return ++this.numeroConta;
  };
}
