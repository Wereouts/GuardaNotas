// ================================
// CONTADOR DE CARACTERES DO INPUT
// ================================

const input = document.getElementById("novaNota");
const contador = document.querySelector(".quatidadeDeCaractere");
const limite = 200;

function atualizaValor() {
    const valorInput = input.value.length;
    contador.textContent = `${valorInput}/${limite}`;
}

input.addEventListener("input", () => {
    atualizaValor();
});

// ================================
// ATUALIZA TEXTO DO CARD
// ================================

const pCard = document.querySelector(".textCard");

function mudaValordoCard() {
    const valorInput = input.value;
    pCard.textContent = `${valorInput}`;
}

// ================================
// ADIÇÃO DE CARDS
// ================================

const container = document.querySelector(".CardPrincipal");

let totalCards = 0;
const LIMITE = 5;

function verificaButton() {
    const valorInput = input.value;

    if (valorInput.length === 0) {
        return;
    }

    if (totalCards >= LIMITE) {
        alert("Voce pode adicionar só até 5 cards");
        return;
    }

    container.insertAdjacentHTML(
        "beforeend",
        `
        <div class="cardGeral" id="id-${totalCards}">
          <div class="cards">
            <p class="textCard">${valorInput}</p>
          </div>
          <div class="acoes">
            <button class="btnEditar" onclick="editaCard(this)">Editar</button>
            <button class="btnExcluir" onclick="excluirCard(this)">Excluir</button>
          </div>
        </div>
      `
    );
    input.value = "";
    atualizaValor();
    totalCards++;
};

function editaCard(botaoClicado) {

    const card = botaoClicado.closest(".cardGeral");

    const paragrafo = card.querySelector(".textCard");
    paragrafo.contentEditable = "true";
    paragrafo.focus();


}



function excluirCard(botaoClicado) {
    const card = botaoClicado.closest(".cardGeral");
    if (card) {
        card.remove();
    }


}

function excluirTodosCards () {
    const confirmar = confirm("Tem certeza que deseja excluir todos os cards?")
    if (!confirmar) {
        return;
    }

    const todosCards = document.querySelectorAll('.cardGeral');

    todosCards.forEach(card => {
        card.remove();

    });

    totalCards = 0;
        
}
