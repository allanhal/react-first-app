import Busca from "./Busca";
import "./BuscaPerfilCarrinho.css"

export default function BuscaPerfilCarrinho() {
  return (
    <div className="busca-perfil-carrinho">
      <Busca placeholder="chuchu"/>
      <div className="perfil">Perfil</div>
      <div className="carrinho fundo-verde">Carrinho</div>
    </div>
  );
}
