import "./App.css";
import Banner from "./components/Banner.jsx";
import Institucional from "./components/Institucional";
import BuscaPerfilCarrinho from "./components/BuscaPerfilCarrinho/BuscaPerfilCarrinho";
import { useState } from "react";

function App() {
  const [usuario, setUsuario] = useState({
    id: 2,
    abbr: "aa",
    nome: "Allan",
    idade: 20,
    hobby: ["futebol", "musica", "tenis"],
  });

  const [carrinho, setCarrinho] = useState(["tenis", "chapeu", "casaco"]);
  return (
    <div>

      <div className="header">
        {JSON.stringify(usuario)}
        <Banner usuario={usuario} />
        <BuscaPerfilCarrinho usuario={usuario} carrinho={carrinho} setCarrinho={setCarrinho} />
      </div>
    </div>
  );
}

export default App;
