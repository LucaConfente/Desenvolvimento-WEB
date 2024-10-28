
/*
window.onload = function(){
    const nome = document.querySelector("#container > h1");
    nome.innerHTML = "Nome da atleta";
}
*/

const container = document.getElementById('container');
const montaCartao = (atleta) => `
    <article>
        <h1>${atleta.nome}<h1>
        <img src=${atleta.imagem}>
        <p>${atleta.detalhes}</p>
    </article>
    `;
let conteudo = ''

/*
for(let i=0;i < dados.length; i++){

    let atleta = dados[i];

    conteudo += `
        <h1>${atleta.nome}<h1>
        <img src=${atleta.imagem}>
        <p>${atleta.detalhes}</p>
    `
}
container.innerHTML = conteudo;
*/
dados.forEach((elemento) => conteudo += montaCartao(elemento));

container.innerHTML = conteudo;

