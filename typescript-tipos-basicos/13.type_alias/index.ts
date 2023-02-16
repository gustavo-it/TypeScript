// Criando os alias
type Idade = number;
type Pessoa = {
    nome: string;
    idade: Idade;
    salario: number;
    corPreferida?: string;
};
// Utilizando o uniontype para passar em CorPreferida
// os valores de CorRGB e CorCMYK
type CorRGB = 'vermelho' | 'verde' | 'azul';
type CorCMYK = 'ciano' | 'magenta' | 'amarelo' | 'preto';
type CorPreferida = CorRGB | CorCMYK;

// Como queremos usar como referência o alias de objeto que criamos
// acima, precisamos indicar a nossa const que ele recebe o tipo Pessoa.
const pessoa: Pessoa = {
    nome: 'maria',
    idade: 22,
    salario: 10000
};

function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa {
    return {
        ...pessoa, corPreferida: cor
    };
}

console.log(setCorPreferida(pessoa, 'azul'));

export default { setCorPreferida };