import { Schema,model } from 'mongoose'

const ProdutoSchema = new Schema({
    nome: {type:String,request: true},
    preco: {type: Number,request:true,min:0},
    quantidade:{type:Number,request:true,min:0}
},{ timestamps:true});

export const Produto = model('Produto',ProdutoSchema);