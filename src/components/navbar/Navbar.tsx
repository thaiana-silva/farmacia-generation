import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCartSimple, UserCircle } from "@phosphor-icons/react";
import logo from "../../assets/logo.png";

function Navbar() {
  return (
    <>
      <div className="w-full bg-blue-900 text-white flex justify-center  py-4">
        <div className="container flex justify-between text-lg">
          <div className="flex items-center gap-4 m-2">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <Link to="/produtos" className="hover:underline">
              Produtos
            </Link>
            <Link to="/categorias" className="hover:underline">
              Categorias
            </Link>
            <Link to="/cadastroCategoria" className="hover:underline">
              Cadastrar Categoria
            </Link>
          </div>
          <Link to="/" className="text-2xl font-bold">
            <img src={logo} alt="Logo" className="h-24" />
          </Link>
          <div className="flex items-center gap-4 m-2">
            <input
              type="text"
              placeholder="Pesquisar"
              className="px-2 py-1 border border-gray-300 rounded"
            />
            <Link to="/carrinho">
              <ShoppingCartSimple size={32} weight="bold" />
            </Link>
            <Link to="/login">
              <UserCircle size={32} weight="bold" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
