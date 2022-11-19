export default function Carrinho(props) {
  return (
    <div>
      COMECO DO CARRINHO
      <ul>
        {props.carrinho.map((produto) => (
          <li>{produto}</li>
        ))}
      </ul>
      <button onClick={() => props.setCarrinho([])}>APAGAR carrinho</button>
      FIM DO CARRINHO
    </div>
  );
}
