import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config({ path: './config.env' })+

mongoose.connect(process.env.uri)
    .then(() => {
        console.log('mongodb connected')
    })
    .catch(() => {
        console.log('failed to connect')
    })

const feedSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
})

let feed = mongoose.model('feedback', feedSchema)


export default feed