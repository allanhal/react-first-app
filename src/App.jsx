import "./App.css";
import Banner from "./components/Banner.jsx";
import Institucional from "./components/Institucional";
import BuscaPerfilCarrinho from "./components/BuscaPerfilCarrinho/BuscaPerfilCarrinho";

function App() {
  return (
    <div>
      <div className="header">
        <Banner />
        <Institucional />
        <BuscaPerfilCarrinho />
      </div>
    </div>
  );
}

export default App;
