import { useState } from "react";
import Perfil from "./Perfil.jsx";
import "./App.css";

function App() {

  const [pagina, setPagina] = useState("cardapio");
  const [total, setTotal] = useState(0);

const [alimentos, setAlimentos] = useState([
    {
      id: 1,
      nome: "Peixe betta assado",
      descricao: "Desfrute de um belo peixe assado direto da chapa.",
      imagem: "/peixebetta.png",
      disponivel: true,
    },
    {
      id: 2,
      nome: "Picanha na chapa",
      descricao: "Uma deliciosa picanha praticionada pelo L (de Death Note).",
      imagem: "/picanha.png",
      disponivel: true,
    },
    {
      id: 3,
      nome: "Nhoque ao sugo",
      descricao: "Nosso comida mais premium do menu.",
      imagem: "/nhoque.png",
      disponivel: false,
    },
  ]);

  function adicionarAlimento() {
    const novo = {
      id: alimentos.length + 1, nome: "teste", descricao: "teste", imagem: "", disponivel: true,
    };
    setAlimentos([...alimentos, novo]);
  }
  return (
    <>
      <nav>

        <button  onClick={() => setPagina("cardapio")}>Cardapio</button>
        <button  onClick={() => setPagina("contador")}>Contador</button>

      </nav>

      {pagina ===  "cardapio" &&
        <div className="perfil">
          <div className="painel">
            <button className="botao-comprar" onClick={adicionarAlimento}>
              Adicionar alimento
            </button>
            <div className="lista-perfis">
              {alimentos.map((comida) => (
                <Perfil
                  key={comida.id}
                  nome={comida.nome}
                  descricao={comida.descricao}
                  imagem={comida.imagem}
                  disponivel={comida.disponivel}
                />
              ))}
            </div>
          </div>
        </div>
        }

      {pagina === "contador" &&
        <div className="contador">
          <button className="menu" onClick={() => setTotal(total + 1)}>Adicionar</button>
          <button className="menu1" onClick={() =>{ if (total > 0){setTotal(total - 1)}}}>Remover</button>
          <h1 className="contador"> Contador: {total}</h1>

        </div>
      }
    </>
  );
}

export default App;