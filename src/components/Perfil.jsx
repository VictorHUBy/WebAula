function Perfil(props) {
  return (
    <div className="perfil-card" style={{ backgroundColor: props.cor || "#222" }}>
      <div className="imagemDePerfil">
        <img src={props.imagem} alt="Foto de perfil" />
      </div>

      <h1>{props.nome}</h1>
      <p className="nome">{props.email}</p>
      <p className="descricao">{props.descricao}</p>
    </div>
  );
}

export default Perfil;