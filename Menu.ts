import readline from "readline-sync";
import { colors } from "./src/util/Colors";
import { Conta } from "./src/models/Conta";
import { ContaCorrente } from "./src/models/ContaCorrente";
import { ContaPoupanca } from "./src/models/ContaPoupança";
import { ContaController } from "./src/controller/ContaController";

export function main() {
  /* 
  //aqui criando duas contas para testar
  const contaCorrente: ContaCorrente = new ContaCorrente(
    1234,
    567,
    1,
    "João Henrique Cavalcanti da Silva",
    10000,
    5000
  );
  const contaPoupanca: ContaPoupanca = new ContaPoupanca(
    4321,
    765,
    2,
    "Maria da Silva",
    20000,
    15
  );

  console.log(
    "\n****************************************************************"
  );
  contaCorrente.depositar(5000);
  contaCorrente.sacar(3000);
  contaCorrente.visualizar();
  console.log(
    "\n****************************************************************"
  );
  // separar conta 1 da conta 2 -----------
  contaPoupanca.depositar(10000);
  contaPoupanca.sacar(6000);
  contaPoupanca.visualizar();
  console.log(
    "****************************************************************\n"
  );

  contaPoupanca.visualizarConta();
  contaCorrente.visualizarConta(); */

  let contas: ContaController = new ContaController();

  let acc1 = contas.cadastrar(
    new ContaCorrente(contas.gerarNumeroConta(), 123, 1, "Cliente 1", 1000, 500)
  );
  let acc2 = contas.cadastrar(
    new ContaCorrente(contas.gerarNumeroConta(), 123, 1, "Cliente 2", 2000, 500)
  );
  let acc3 = contas.cadastrar(
    new ContaPoupanca(contas.gerarNumeroConta(), 456, 2, "Cliente 3", 5600, 30)
  );
  let acc4 = contas.cadastrar(
    new ContaPoupanca(contas.gerarNumeroConta(), 456, 2, "Cliente 4", 3000, 10)
  );

  contas.listarTodas();

  let option, numero, agencia, tipo, saldo, limite, aniversario: number;
  let titular: string;
  const tiposContas = ["Conta Corrente", "Conta Poupanca"];

  while (true) {
    console.log(
      colors.bg.black,
      colors.fg.yellow,
      "***************************************************************"
    );
    console.log(
      "                                                               "
    );
    console.log(
      "                    Banco do Brazil com Z                      "
    );
    console.log(
      "                                                               "
    );
    console.log(
      "***************************************************************"
    );
    console.log(
      "                                                               "
    );
    console.log(
      "                 1 - Criar conta                               "
    );
    console.log(
      "                 2 - Listar todas as Contas                    "
    );
    console.log(
      "                 3 - Buscar Conta por Número                   "
    );
    console.log(
      "                 4 - Atualizar Dados da Conta                  "
    );
    console.log(
      "                 5 - Apagar Conta                              "
    );
    console.log(
      "                 6 - Sacar                                     "
    );
    console.log(
      "                 7 - Depositar                                 "
    );
    console.log(
      "                 8 - Transferir valores entre Contas           "
    );
    console.log(
      "                 9 - Sair                                      "
    );
    console.log(
      "                                                               "
    );
    console.log(
      "***************************************************************",
      colors.reset
    );

    option = readline.questionInt("Entre com a opcao desejada: ");

    if (option === 9) {
      console.log(
        colors.fg.greenstrong,
        "\nBanco do Brazil com Z - O seu futuro começa aqui;"
      );
      console.log("", colors.reset);
      sobre();
      process.exit(0);
    }

    switch (option) {
      case 1:
        console.log(colors.fg.whitestrong, "\n\nCriar Conta\n\n", colors.reset);
        console.log("Digite o numero da agência:");
        agencia = readline.questionInt();

        console.log("Digite o nome do titular da conta:");
        titular = readline.question();

        console.log("Digite o tipo da Conta: ");
        tipo = readline.keyInSelect(tiposContas, "", { cancel: false }) + 1;

        console.log("Digite o saldo inicial da Conta:");
        saldo = readline.questionFloat();

        if (tipo === 1) {
          console.log("Digite o limite de crédito da Conta Corrente:");
          limite = readline.questionFloat();
          contas.cadastrar(
            new ContaCorrente(
              contas.gerarNumeroConta(),
              agencia,
              tipo,
              titular,
              saldo,
              limite
            )
          );
        } else {
          console.log("Digite o dia do aniversário da Conta Poupança:");
          aniversario = readline.questionInt();
          contas.cadastrar(
            new ContaPoupanca(
              contas.gerarNumeroConta(),
              agencia,
              tipo,
              titular,
              saldo,
              aniversario
            )
          );
        }

        console.log(contas);
        console.log("conta criada com sucesso!");

        keyPress();
        break;

      case 2:
        console.log(
          colors.fg.whitestrong,
          "\n\nListar todas as Contas\n\n",
          colors.reset
        );
        contas.listarTodas();
        keyPress();
        break;

      case 3:
        console.log(
          colors.fg.whitestrong,
          "\n\nConsultar dados da conta - por número\n\n",
          colors.reset
        );
        console.log("Digite o número da conta:");
        numero = readline.questionInt();
        contas.procurarPorNumero(numero);
        keyPress();
        break;

      case 4:
        console.log(
          colors.fg.whitestrong,
          "\n\nAtualizar dados da Conta\n\n",
          colors.reset
        );
        console.log("Digite o numero da conta:");
        numero = readline.questionInt();

        let conta = contas.buscarContasArray(numero);

        if (conta != null) {
          console.log("Digite o numero da agência:");
          agencia = readline.questionInt();
          console.log("Digite o nome do titular da conta:");
          titular = readline.question();
          console.log("Digite o saldo da Conta:");
          saldo = readline.questionFloat();

          tipo = conta.tipo;
          if (tipo === 1) {
            console.log("Digite o limite de crédito da Conta Corrente:");
            limite = readline.questionFloat();
            contas.atualizar(
              new ContaCorrente(numero, agencia, tipo, titular, saldo, limite)
            );
          } else {
            console.log("Digite o dia do aniversário da Conta Poupança:");
            aniversario = readline.questionInt();
            contas.atualizar(
              new ContaPoupanca(
                numero,
                agencia,
                tipo,
                titular,
                saldo,
                aniversario
              )
            );
          }
          conta = contas.buscarContasArray(numero);
          conta?.visualizarConta();
          keyPress();
        }
        break;

      case 5:
        console.log("\n\nApagar uma Conta\n\n", colors.reset);
        console.log("Digite o número da conta:");
        numero = readline.questionInt();
        console.log("Confirma a exclusão da conta " + numero + " ? ");
        console.log("1 - Sim");
        console.log("2 - Não");
        let confirma = readline.questionInt();
        if (confirma === 1) {
          contas.deletar(numero);
          console.log("Conta excluída com sucesso!");
        } else {
          console.log("Exclusão de conta cancelada!");
        }
        keyPress();
        break;
      case 6:
        console.log(colors.fg.whitestrong, "\n\nSaque\n\n", colors.reset);
        console.log("Digite o número da conta:");
        numero = readline.questionInt();
        console.log("Digite o valor do saque:");
        let valorSaque = readline.questionFloat();
        contas.sacar(numero, valorSaque);
        keyPress();
        break;
      case 7:
        console.log(colors.fg.whitestrong, "\n\nDepósito\n\n", colors.reset);
        console.log("Digite o número da conta:");
        numero = readline.questionInt();
        console.log("Digite o valor do depósito:");
        let valorDeposito = readline.questionFloat();
        contas.depositar(numero, valorDeposito);
        keyPress();
        break;
      case 8:
        console.log(
          colors.fg.whitestrong,
          "\n\nTransferência entre Contas\n\n",
          colors.reset
        );
        console.log("Digite o número da conta de origem:");
        const numeroOrigem = readline.questionInt();
        console.log("Digite o número da conta de destino:");
        const numeroDestino = readline.questionInt();
        console.log("Digite o valor da transferência:");
        const valorTransferencia = readline.questionFloat();
        contas.transferir(numeroOrigem, numeroDestino, valorTransferencia);

        keyPress();
        break;
      default:
        console.log(
          colors.fg.whitestrong,
          "\nOpcao inválida!\n\n",
          colors.reset
        );
        keyPress();
        break;
    }
  }
}

function sobre(): void {
  console.log(
    "\n***************************************************************"
  );
  console.log(
    "Projeto desenvolvido por: João Henrique Cavalcanti da Silva - joaos3@genstudents.org"
  );
  console.log("Generation Brasil - generation@generation.org");
  console.log("github.com/hrnkDEV");
  console.log(
    "***************************************************************"
  );
}

function keyPress(): void {
  console.log(colors.reset, "");
  console.log("\nPressione enter para continuar...");
  readline.prompt();
}

main();
