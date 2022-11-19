import { useEffect, useState } from "react";
// arrayUseState[0] - contador - VARIÁVEL/ESTADO
// arrayUseState[1] - setContador - MÉTODO/MODIFICA O ESTADO
// TODA VEZ QUE EU MODIFICO O ESTADO DE UMA VARIAVEL
// NO MEU COMPONENTE, ELE (O COMPONENTE) É RE-RENDERIZADO
const Banner = (props) => {
  const mensagens = props.usuario.hobby;
  // useState - componente - guardar estado de uma variavel
  // useEffect - componente - realizar algum código, caso alguma variavel seja modificada
  // useContext - vários componentes - "useState" global
  const [contador, setContador] = useState(0);
  const [exibirBotoes, setExibirBotoes] = useState(false);

  useEffect(() => {
    console.log("executei o useEffect");
  }, []); // Com o array vazio esse useEffect é executado ao inicializar o Banner

  // useEffect(() => {
  //   console.log("modifiquei o contador", contador);
  // }, [contador]); // Esse useEffect só será executado quando o contador for modificado

  // useEffect(() => {
  //   console.log("modifiquei o exibirBotoes", exibirBotoes);
  // }, [exibirBotoes]); // Esse useEffect só será executado quando o exibirBotoes for modificado
  useEffect(() => {
    console.log("modifiquei o contador OU o exibirBotoes");
    console.log("contador", contador);
    console.log("exibirBotoes", exibirBotoes);
  }, [contador, exibirBotoes]); // Esse useEffect só será executado quando o contador OU o exibirBotoes for modificado

  return (
    <div>
      <button onClick={() => setExibirBotoes(!exibirBotoes)}>
        ExibirBotoes
      </button>
      {exibirBotoes && (
        <button
          onClick={() => {
            contador === 0
              ? setContador(mensagens.length - 1)
              : setContador(contador - 1);
          }}
        >
          diminuir
        </button>
      )}
      <p>{mensagens[contador]}</p>
      {exibirBotoes && (
        <button
          onClick={() => {
            contador === mensagens.length - 1
              ? setContador(0)
              : setContador(contador + 1);
          }}
        >
          aumentar
        </button>
      )}
    </div>
  );
};
export default Banner;
