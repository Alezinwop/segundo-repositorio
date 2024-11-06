function criaCartao (item, pergunta,resposta) {
    //console.log(item,pergunta, resposta)
    
    let flashcard = document.getElementById('flashcard');
    let cartao = document.createElement('article');

    cartao.className = 'cartao';

    cartao.innerHTML = 
   <div class="cartao__conteudo">
        <h3>Missão</h3>
    </div>
    <div class="cartao__conteudo__pergunta">
      <p>Saiba qual é a Missão de noesaaaaa</p>  
    </div>

    <div class="cartao__conteudo__resposta"> 
        <p> Nossa Missão é ...</p>
     </div>
    </div>

    flashcard.appendChield(cartao);
 




}