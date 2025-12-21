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

const btnAdicionar = document.querySelector(".botaoAdicionar");
const container = document.querySelector(".CardPrincipal");
  let totalCards = 0;
  const LIMITE = 5;

  btnAdicionar.addEventListener("click", () => {
    if (totalCards >= LIMITE) {
      alert("Voce pode adicionar só até 5 cards");
      return;
    }

    container.insertAdjacentHTML(
      "beforeend",
      `
        <div class="cardGeral">
          <div class="cards">
            <p class="textCard"></p>
          </div>
          <div class="acoes">
            <button class="btnEditar">Editar</button>
            <button class="btnExcluir">Excluir</button>
          </div>
        </div>
      `
    );
    totalCards++;
  });

// ================================
// VERIFICAÇÃO DE BOTÃO
// ================================

function verificaButton() {
  const valor = Number(pCard.textContent);

  if (valor === 0) {
    mudaValordoCard();
  } else {
    adicionaCard();
  }
}
