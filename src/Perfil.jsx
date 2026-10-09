import { useState } from "react";

function Estrutura({ nome, descricao, imagem, disponivel }) {
  const [comprado, setComprado] = useState(false);
  const noEstoque = disponivel && !comprado;
  return (
    <section className={noEstoque ? "card" : "card card-esgotado"}>
      <div className="imagemDePerfil">
        <img src={imagem} alt={nome} />
      </div>
      <h2 className="nome">{nome}</h2>
      <p className="descricao">{descricao}</p>
      {noEstoque ? ( <span className="selo disponivel">
          Disponível
        </span>
      ) : ( <span className="semEstoque">
          Esgotado
        </span>
      )}
      {noEstoque && (
        <button className="botao-comprar"
          onClick={() => setComprado(true)}>
          Comprar
        </button>
      )}
    </section>
  );
}

export default Estrutura;