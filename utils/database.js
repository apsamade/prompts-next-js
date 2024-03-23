import mongoose from 'mongoose';

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    mongoose.connect(process.env.MONGODB_URI).then(()=> {
        console.log('MongoDB connected')
    }).catch((err)=> {
        console.log(err)
    })
}