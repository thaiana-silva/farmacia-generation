import Categoria from "./Categoria";
interface Produto {
  id: number;
  nome: string;
  descricao: string;
  quantidade: number;
  laboratorio: string;
  preco: number;
  foto: string;
  categoria: Categoria | null;
}

export default Produto;
