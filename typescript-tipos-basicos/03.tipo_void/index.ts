function semRetorno(...args: string[]): void {
    console.log(args.join(' '));
}

let pessoa = {
    nome: 'Maria',
    sobrenome: 'Fernanda',

    exibirNome(): void {
        console.log(this.nome + ' ' + this.sobrenome);
    },
};

semRetorno('maria', 'antonieta');
pessoa.exibirNome();

export { pessoa };