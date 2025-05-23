import { Produto } from "../models/Produto";

export const produtoRepository = {
    async criar(data){
        const p = new Produto(data);
        return p.save();
    },
    async listarTodos(){
        return Produto.find().lean();
    },
    async buscarPorId(id){
        return Produto.findById(id).lean();
    },
    async atualizar(id,data){
        return Produto.findByIdAndUpate(id,data, { new: true, runValidators: true}).lean();
    },
    async deletar(id){
        return Produto.findByIdAndDelete(id).lean();
    }
};