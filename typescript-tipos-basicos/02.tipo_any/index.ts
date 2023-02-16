/*
- Any representa uma falta de tipo ou qualquer tipo, ou seja, qualquer coisa.
- Em alguns casos o TypeScript não consegue identificar o tipo da sua 
variável ou do seu parâmetro na função.
- Não é bom você ter esse tipo no seu código.
- Utilize any apenas em último caso.
*/

function showMessage(msg: any) {
    return msg;
}
