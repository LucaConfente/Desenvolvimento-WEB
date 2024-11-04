
/*
window.onload = function(){
    const nome = document.querySelector("#container > h1");
    nome.innerHTML = "Nome da atleta";
}
*/

const container = document.getElementById('container');

const pega_json = async (caminho) => {
    const resposta = await fetch(caminho);
    const dados = await resposta.json();
    return dados
};
const trataClick = ( e ) => {
    const id = e.currentTarget.dataset.id;
    const artigo = e.currentTarget;

                      /* console.log(e.target.currentTarget.dataset.nome);   console.log(e.target.closest('article')); Outro modo de fazer */
        /* cookie */
        document.cookie = `id=${id}`
        document.cookie = `nome=${artigo.dataset.nome}`

        /* session*/
        sessionStorage.setItem('id', id);
        sessionStorage.setItem('nome', artigo.dataset.nome);
        sessionStorage.setItem('atleta', JSON.stringify(artigo.dataset));

        /* local */

        localStorage.setItem('id', id);

        window.location = `outra.html?id=${id}`
}
const montaCartao = (atleta) => {
    

    const cartao = document.createElement('article');
    const nome = document.createElement('h1');
    const imagem = document.createElement('img');
    const descri = document.createElement('p');
  /*  const link = document.createElement("a") */

    nome.innerHTML = atleta.nome;
    cartao.appendChild(nome);

    imagem.src = atleta.imagem;
    cartao.appendChild(imagem);

    descri.innerHTML = atleta.detalhes;
    cartao.appendChild(descri);

   /* link.innerHTML = "Saiba mais..."
    link.href = `outra.html?id=${atleta.id}&altura=${atleta.altura}`
    cartao.appendChild(link); */

    cartao.onclick = trataClick
    cartao.dataset.id = atleta.id;
    cartao.dataset.nome = atleta.nome;
    cartao.dataset.caminhoImagem = atleta.imagem;
    container.appendChild(cartao); 

};

pega_json("https://botafogo-atletas.mange.li/2024-1/masculino").then(
    (obj) => {
        console.log('isso imprime depois');
        obj.forEach( (elemento) => montaCartao(elemento));

    }
);



