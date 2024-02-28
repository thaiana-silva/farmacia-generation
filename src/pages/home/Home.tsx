import React from "react";
import BannerCarrossel from "../../components/carrossel/bannerCarrossel/BannerCarrossel";
import CardCategoria from "../../components/categoria/cardCategoria/CardCategoria";
import CardProduto from "../../components/produtos/cardProduto/CardProduto";
import remedios from "../../assets/remedios.jpg";
import Categoria from "../../models/Categoria";

function Home() {
  const categorias: Categoria[] = [
    {
      id: 1,
      nome: "Anti-Inflamatórios",
      descricao: "Descrição da categoria 1",
    },
    {
      id: 2,
      nome: "Calmantes",
      descricao: "Descrição da categoria 2",
    },
    {
      id: 3,
      nome: "Multivitamínicos",
      descricao: "Descrição da categoria 3",
    },
    {
      id: 4,
      nome: "Dermocosméticos",
      descricao: "Descrição da categoria 4",
    },
  ];

  return (
    <div className="py-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <BannerCarrossel />
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Compre Por Categoria</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categorias.map((categoria) => (
              <CardCategoria key={categoria.id} categoria={categoria} />
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Compre Por Produtos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {/* Exemplo de cards de produtos */}
            <CardProduto
              produto={{
                id: 1,
                nome: "Produto 1",
                descricao: "Descrição do produto 1",
                foto: remedios,
                laboratorio: "Laboratório do Produto 1",
                preco: 10.99,
                quantidade: 30,
                categoria: {
                  id: 1,
                  nome: "Categoria 1",
                  descricao: "Descrição da categoria 1",
                },
              }}
            />
            <CardProduto
              produto={{
                id: 2,
                nome: "Produto 2",
                descricao: "Descrição do produto 2",
                foto: remedios,
                laboratorio: "Laboratório do Produto 2",
                preco: 15.99,
                quantidade: 20,
                categoria: {
                  id: 2,
                  nome: "Categoria 2",
                  descricao: "Descrição da categoria 2",
                },
              }}
            />
            <CardProduto
              produto={{
                id: 3,
                nome: "Produto 3",
                descricao: "Descrição do produto 3",
                foto: remedios,
                laboratorio: "Laboratório do Produto 3",
                preco: 20.99,
                quantidade: 50,
                categoria: {
                  id: 3,
                  nome: "Categoria 3",
                  descricao: "Descrição da categoria 3",
                },
              }}
            />
            <CardProduto
              produto={{
                id: 4,
                nome: "Produto 4",
                descricao: "Descrição do produto 4",
                foto: remedios,
                laboratorio: "Laboratório do Produto 4",
                preco: 45.99,
                quantidade: 10,
                categoria: {
                  id: 4,
                  nome: "Categoria 4",
                  descricao: "Descrição da categoria 4",
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
