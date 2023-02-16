function createPerson(firstname: string, lastname:string): {
    firstname: string;
    lastname?:string;
} {
    return {
        firstname,
        lastname,
    };
}
// Nessa função eu estou indicando que vou retornar um objeto
// Informando que o campo lastname é opcional


function squareOf(x: any) {
    if(typeof x === 'number') return x * x;
    return null;
}

export { createPerson, squareOf };