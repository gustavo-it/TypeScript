type TemNome = {nome: string};
type TemSobrenome = {sobrenome: string};
type TemIdade = {idade: number};

// Combinando os tipos
type Pessoa = TemNome & TemSobrenome & TemIdade;

const pessoa: Pessoa = {
    nome: 'Fernanda',
    idade: 23,
    sobrenome: 'Maria'
};

export { pessoa };