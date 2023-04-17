class Person{
    constructor(nome, idade, altura){
    this.nome = nome;
    this.idade = idade;
    this.altura = altura;
    }

    apresentar(){
        console.log(`Olá me chamo ${nome}, tenho ${idade} anos e tenho ${altura} de altura`)
    }
}

class Teacher extends Person{
    constructor(nome, idade, altura, profissao){
    super(nome, idade, altura)
    this.profissao  = profissao;
    }

    apresenta(){
        console.log(`Olá me chamo ${this.nome}, tenho ${this.idade} anos e tenho ${this.altura} de altura e sou ${this.profissao}`)
    }


}

const professor = new Teacher('Walberson', 24, '1,75', 'professor')

professor.apresenta();