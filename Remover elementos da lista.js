let grupo1js = "1, 2, 3";
let grupo2js = "4, 5, 6";

let listaGrupo1js = [];
let listaGrupo2js = [];

listaGrupo1js.push(grupo1js);
listaGrupo2js.push(grupo2js);
console.log(`Grupo 1 contido no JavaScript: ${listaGrupo1js}`);
console.log(`Grupo 2 contido no JavaScript: ${listaGrupo2js}`);

document.getElementById('grupo1-js').innerHTML = `${listaGrupo1js}`;
document.getElementById('grupo2-js').innerHTML = `${listaGrupo2js}`;

let concatJS = listaGrupo1js.concat(` ${listaGrupo2js}`);
console.log(concatJS);

document.getElementById('resultado-js').innerHTML = `O resultado do Método concat() com Grupo 1 e Grupo 2 é: ${concatJS}.`;

concatJS.pop();
console.log(`Lista depois da remoção do último item: ${concatJS}`);

console.log('--------------------------------------');

function usuario() {
    let grupo1usuario = document.getElementById('grupo1-usuario').value;
    let grupo2usuario = document.getElementById('grupo2-usuario').value;

    let listaGrupo1usuario = [];
    let listaGrupo2usuario = [];

    listaGrupo1usuario.push(grupo1usuario);
    listaGrupo2usuario.push(grupo2usuario);
    console.log(`Grupo 1 fornecido pelo usuário: ${listaGrupo1usuario}`);
    console.log(`Grupo 2 fornecido pelo usuário: ${listaGrupo2usuario}`);

    document.getElementById('grupo1-usuario').innerHTML = 'grupo1usuario';
    document.getElementById('grupo2-usuario').innerHTML = 'grupo2usuario';

    let concatUsuario = listaGrupo1usuario.concat(` ${listaGrupo2usuario}`);
    console.log(concatUsuario);

    document.getElementById('resultado-usuario').innerHTML = `O resultado do Método concat() com Grupo 1 e Grupo 2 é: ${concatUsuario}.`;

    concatUsuario.pop();
    console.log(`Lista depois da remoção do último item: ${concatUsuario}`);
}

