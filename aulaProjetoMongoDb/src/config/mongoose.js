import mongoose  from 'mongoose';
import dotenv from 'dotenv';
dotenv.confi();

co MONGO_URI - process.env.MONGO_URI || 'mongodb://localhost:27017/meubanco';

export async function connectDB(){
    try{
        await mongoose.connect(MONGO_URI,{
            useNewUrlParser: true,
            useUnifieldopology: true
        });
        console.log('MongoDB conectado em ',MONGO_URI);
        
        }catch (err){
            console.log('Erro ao conectar ao MongoDB',err);
            process.exit(1);
    }
}