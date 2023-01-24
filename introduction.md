# Introdução ao TypeScript

TypeScript é um superconjunto de JavaScript, ou seja, um conjunto de ferramentas e formas mais eficientes de escrever código JavaScript, adicionando recursos que não estão presentes de maneira nativa na linguagem.

TypeScript adiciona uma tipagem estática ao JavaScript.

---
# Instalando o TypeScript

Não vamos intalar o TypeScript de maneira global, vamos intalar ele em cada projeto que for preciso utilizar.

Em uma pasta vamos instalar o TypeScript através do npm:

`npm install typescript -D`

O TypeScript é instalado como dev-dependencies

---

Nós não conseguimos utilizar a extensão code runner para executar os códigos de TypeScript, para isso temos um meio de transformar o código TypeScript em JavaScript e ai sim compilar no code runner.

Fazemos isso através do comando `npx tsc nome_do_arquivo.ts`

O comando acima vai gerar um arquivo com o mesmo nome, porém extensão js.

O TypeScript trabalha em script modules, que é esse compartilhamento de arquivos que estamos fazendo. Gerando um arquivo Js através do Ts.
E temos também o mod modules.
Para trabalhar com o mod modules basta importamos ou exportamos alguma informação:

```tsx
const nome = 'Maria'

export default nome;

```
