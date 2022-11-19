import Busca from "./Busca";
import Carrinho from "./Carrinho";
import "./BuscaPerfilCarrinho.css";

export default function BuscaPerfilCarrinho(props) {
  return (
    <div className="busca-perfil-carrinho">
      <Busca placeholder="chuchu" />
      <div className="perfil">{props.usuario.abbr}</div>
      <Carrinho carrinho={props.carrinho} setCarrinho={props.setCarrinho} />
    </div>
  );
}
