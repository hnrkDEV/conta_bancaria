import readline from "readline-sync";
import { colors } from "./src/util/Colors";
import { Conta } from "./src/models/Conta";

export function main() {
  let option: number;

  const conta1: Conta = new Conta(40028922, 722, 2, "João Henrique", 0);
  const conta2: Conta = new Conta(22982004, 122, 1, "Matheus Silva", 0);
  console.log(
    "\n****************************************************************"
  );
  conta1.depositar(5000);
  conta1.sacar(3000);
  conta1.visualizarConta();
  console.log(
    "\n****************************************************************"
  );
  // separar conta 1 da conta 2 -----------
  conta2.depositar(10000);
  conta2.sacar(6000);
  conta2.visualizarConta();
  console.log(
    "****************************************************************\n"
  );

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
        keyPress();
        break;
      case 2:
        console.log(
          colors.fg.whitestrong,
          "\n\nListar todas as Contas\n\n",
          colors.reset
        );
        keyPress();
        break;
      case 3:
        console.log(
          colors.fg.whitestrong,
          "\n\nConsultar dados da conta - por número\n\n",
          colors.reset
        );
        keyPress();
        break;
      case 4:
        console.log(
          colors.fg.whitestrong,
          "\n\nAtualizar dados da Conta\n\n",
          colors.reset
        );
        keyPress();
        break;
      case 5:
        console.log("\n\nApagar uma Conta\n\n", colors.reset);
        keyPress();
        break;
      case 6:
        console.log(colors.fg.whitestrong, "\n\nSaque\n\n", colors.reset);
        keyPress();
        break;
      case 7:
        console.log(colors.fg.whitestrong, "\n\nDepósito\n\n", colors.reset);
        keyPress();
        break;
      case 8:
        console.log(
          colors.fg.whitestrong,
          "\n\nTransferência entre Contas\n\n",
          colors.reset
        );
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
