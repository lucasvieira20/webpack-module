export default class Pessoa{
    constructor(nome,age){
        this.nome = nome,
        this.age = age
    }

    toString(){
        return `Pessoa : ${this.nome} idade : ${this.age}`
    }

    verifyAge(){
        if(this.age > 18){
            console.log('Maior de Idade');
        }
    }
}
