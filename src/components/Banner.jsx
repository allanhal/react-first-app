import { useState } from "react";
let Banner = () => {
  // arrayUseState[0] - isSabado - VARIÁVEL/ESTADO
  // arrayUseState[1] - setIsSabado - MÉTODO/MODIFICA O ESTADO
  // TODA VEZ QUE EU MODIFICO O ESTADO DE UMA VARIAVEL
  // NO MEU COMPONENTE, ELE (O COMPONENTE) É RE-RENDERIZADO
  let [isSabado, setIsSabado] = useState();
  function esquerda() {
    setIsSabado(false);
  }
  function direita() {
    setIsSabado(true);
  }
  return (
    <div>
      <button onClick={esquerda}>Esquerda</button>
      <p>{isSabado ? "verdadeiro" : "falso"}</p>
      <button onClick={direita}>Direita</button>
    </div>
  );
};
export default Banner;
