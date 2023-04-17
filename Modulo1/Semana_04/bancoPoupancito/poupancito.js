

class Account {
  constructor(pswrd, balance = 0) {
    this._balance = balance;
    this._pswrd = pswrd;
  }

  deposito(pswrd, money) {
    if (pswrd === this._pswrd) {
      this._balance += money;
      console.log(`Depósito de ${money} realizado com sucesso!`);
      console.log(`Novo saldo: ${this._balance}`);
    } else {
      console.log('pswrd incorreta. Operação não realizada.');
    }
  }

  retirada(pswrd, money) {
    if (pswrd === this._pswrd) {
      if (money > this._balance) {
        console.log('Saldo insuficiente. Operação não realizada.');
      } else {
        this._balance -= money;
        console.log(`Retirada de ${money} realizada com sucesso!`);
        console.log(`Novo saldo: ${this._balance}`);
      }
    } else {
      console.log('pswrd incorreta. Operação não realizada.');
    }
  }

}

class Savings extends Account {
  constructor(pswrd, balance, deposito, retirada) {
    super(pswrd, balance, deposito, retirada);
  }

  atualizarJuros() {
    const juros = this._balance * 0.007;
    this._balance += juros;
    console.log(`Juros de ${juros} aplicados com sucesso!`);
    console.log(`Novo saldo: ${this._balance}`);
  }
}

class SavingsPremium extends Savings {
  constructor(pswrd, balance) {
    super(pswrd, balance);
  }

  atualizarJuros() {
    const juros = this._balance * 0.12;
    this._balance += juros;
    console.log(`Juros de ${juros} aplicados com sucesso!`);
    console.log(`Novo saldo: ${this._balance}`);
  }
}

// Instanciação do objeto contaCorrente
const contaCorrente = new Account('1234', 1000);
const poupanca = new Savings('1234', 1000, 500, 200)
const poupancaPremium = new SavingsPremium('1234', 1300)


// Teste das operações
contaCorrente.deposito('1234', 500); // Depósito de 500. Novo saldso: 1500
contaCorrente.deposito('4321', 100); // senha incorreta. Operação não realizada.
contaCorrente.retirada('1234', 2000); // Saldo insuficiente. Operação não realizada.
contaCorrente.retirada('1234', 800); // Retirada de 800. Novo saldo: 700

poupanca.atualizarJuros();
poupanca.atualizarJuros();
poupanca.atualizarJuros();
poupanca.atualizarJuros();

poupancaPremium.atualizarJuros();
poupancaPremium.atualizarJuros();
poupancaPremium.atualizarJuros();
poupancaPremium.atualizarJuros();
