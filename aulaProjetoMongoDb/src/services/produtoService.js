import { Produto } from "../models/Produto";
import { produtoRepository } from "../repositories/produtoRepository";

export const produtoService = {
    async criarProduto(dto){
    if(dto.preco < 0 ) throw new Error('Preco egaticos ão permitido');
    return produtoRepository.criar(dto);
  },
  async listarProdutos(){
    return produtoRepository.listarTodos();
  },
  async obterProduto(id){
    const p = await produtoRepository.buscarPorId(id);
    if(!p) throw new Error('Produto não encontrado');
    return p;
  },
  async atualizarProduto(id,dto){
    return Produto.findByIdAndUpdate(id,dto);
  },
  async removerProduto(id{
    return produtoRepository.deletar(id);
  }
}