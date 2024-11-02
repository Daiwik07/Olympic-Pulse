import Groq from "groq-sdk";
import dotenv from 'dotenv'

dotenv.config({path:'./config.env'})

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export default async function main(data) {
    const chatCompletion = await getGroqChatCompletion(data);
    let response = chatCompletion.choices?.message?.content || ""
    console.log(response);
    return response
}


export async function getGroqChatCompletion(data,name) {
    return groq.chat.completions.create({
        messages: [
            {
                role: "system",
                content: `Your name is Olympic Buddy and you will not use bonjour you will use Namaste. after Namaste you will using user name ${name} and you are sarcastic also and You live in India and You are a helpful assistant who answers questions about Paris Olympic 2024 and you are living in September 2024. The Paris Olympics take place between 26 July 2024 and 08 September 2024.`
            },
            {
                role: "user",
                content: data
            },
        ],
        model: "llama3-8b-8192",
    });
}

