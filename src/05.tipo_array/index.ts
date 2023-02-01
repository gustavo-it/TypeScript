// Duas formas de declarar um array

function multiplicaArgs(...args: Array<number>): number {
    return args.reduce((acumulador, valor) => acumulador * valor, 1);
}

function concatenaStrings(...args: string[]): string {
    return args.reduce((ac, valor) => ac + valor);
}

// Retornando um array de string
function toUpperCase(...args: string[]): string[] {
    // Recebe um array de string e retorna um array de string
    return args.map((valor) => valor.toUpperCase());
}

const upper = toUpperCase('a', 'b', 'c');
console.log(upper);

export { multiplicaArgs, concatenaStrings };