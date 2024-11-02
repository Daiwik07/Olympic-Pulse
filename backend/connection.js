import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config({path:'./config.env'})

mongoose.connect(process.env.uri)
.then(() => {
    console.log('mongodb connected')
})
.catch(() => {
    console.log('failed to connect')
})

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required:true
    },
    name: {
        type: String,
        required:true
    },
    pass: {
        type: String,
        required:true
    },
})

let user = mongoose.model('user', userSchema)


export default user


