import { useState } from "react";
let Banner = () => {
  // arrayUseState[0] - isSabado - VARIÁVEL/ESTADO
  // arrayUseState[1] - setIsSabado - MÉTODO/MODIFICA O ESTADO
  // TODA VEZ QUE EU MODIFICO O ESTADO DE UMA VARIAVEL
  // NO MEU COMPONENTE, ELE (O COMPONENTE) É RE-RENDERIZADO
  const mensagens = [
    "Promocao 1,99",
    "Frete Gratis para todo o brasil, menos metade do brasil",
    "Envio em até 2hrs",
  ];
  let [contador, setContador] = useState(0);
  return (
    <div>
      <button
        onClick={() =>
          contador === 0
            ? setContador(mensagens.length - 1)
            : setContador(contador - 1)
        }
      >
        diminuir
      </button>
      <p>{mensagens[contador]}</p>
      <button
        onClick={() =>
          contador === mensagens.length - 1
            ? setContador(0)
            : setContador(contador + 1)
        }
      >
        aumentar
      </button>
    </div>
  );
};
export default Banner;
