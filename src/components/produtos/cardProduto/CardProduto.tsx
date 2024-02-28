import React from "react";
import Produto from "../../../models/Produto";

interface CardProdutoProps {
  produto: Produto;
}

function CardProduto({ produto }: CardProdutoProps) {
  return (
    <div className="bg-white rounded-md p-4 shadow-md mb-4">
      <img
        src={produto.foto}
        alt={produto.nome}
        className="w-full h-48 object-cover mb-4"
      />
      <h3 className="text-lg font-semibold mb-2">{produto.nome}</h3>
      <p className="text-gray-600 mb-2">{produto.descricao}</p>
      <p className="text-gray-800 font-bold">{produto.preco}</p>
      <div className="flex justify-between mt-4">
        <button className="w-full bg-indigo-400 text-white py-2 rounded hover:bg-blue-600 flex items-center justify-center m-2">
          Adicionar ao Carrinho
        </button>
        <button className="w-full bg-indigo-400 text-white rounded hover:bg-blue-600 flex items-center justify-center m-2">
          Comprar Agora
        </button>
      </div>
    </div>
  );
}

export default CardProduto;
