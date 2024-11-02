import express from 'express'
import cors from "cors"
import user from "./connection.js"
import feed from "./feedback.js"
import nodemailer from 'nodemailer'
import {getGroqChatCompletion} from './chatgpt.js'

const app = express()
const PORT = 3000

app.use(express.json())
app.use(cors())

app.get("/", cors(), (req, res) => {
    
})

app.post("/login", async (req, res) => {
    const { data } = req.body;

    try {
        const check = await user.findOne({ email: data.email });

        if (check) {
            if (check.pass === data.pass) {
                let transporter = nodemailer.createTransport({
                    service: 'gmail',
                    host: "smtp.gmail.com",
                    port: 587,
                    auth: {
                        user: "guptarakshitgupta7@gmail.com",
                        pass: "cmcg vvrn djqe uygd"
                    }
                });

                const mailOptions = {
                    from: '"Olympic Pulse"<guptarakshitgupta7@gmail.com>',
                    to: data.email,
                    subject: "Login Alert - Olympic Pulse",
                    text: `Dear ${data.name},\n\nThis is a confirmation that your account was just logged into on Olympic Pulse.\n\nIf this was you, no further action is needed. If you did not log in, please contact our support team immediately at guptarakshitgupta7@gmail.com.\n\nBest regards,\nOlympic Pulse`,
                    html: `
                        <html>
                        <body>
                            <div class="container">
                                <h1>Login Alert</h1>
                                <p>Dear ${data.name},</p>
                                <p>This is a confirmation that your account was just logged into on Olympic Pulse.</p>
                                <p>If this was you, no further action is needed. If you did not log in, please contact our support team immediately at guptarakshitgupta7@gmail.com.</p>
                                <p>Best regards,<br>Olympic Pulse</p>
                                <div class="footer">
                                    <p>Olympic Pulse | <a href="http://localhost:5173/">http://localhost:5173/</a></p>
                                    <p>If you have any questions, contact us at guptarakshitgupta7@gmail.com.</p>
                                </div>
                            </div>
                        </body>
                        </html>
                    `
                };

                const sendmail = async () => {
                    try {
                        await transporter.sendMail(mailOptions);
                        console.log('Email sent');
                    } catch (error) {
                        console.error(error);
                    }
                };

                await sendmail();
                return res.json("exist");
            } else {
                return res.json("pass incorrect");
            }
        } else {
            return res.json("noexist");
        }
    } catch (e) {
        console.log(e);
        return res.status(500).json("error");
    }
});


app.post("/register", async (req, res) => {
    const {data} = req.body
    console.log(data)
    try {
        const check = await user.findOne({ email: data.email })
        if (check) {
            return res.json("user already exist")
        }
        else {
            const respose = await user.insertMany({ email: data.email, name: data.name, pass: data.pass })
            console.log(respose)
            let transporter = nodemailer.createTransport({
                service: 'gmail',
                host: "smtp.gmail.com",
                port: 587,
                auth: {
                    user: "guptarakshitgupta7@gmail.com",
                    pass: "cmcg vvrn djqe uygd"
                }
            })


            const mailOptions = {
                from: '"Olympic Pulse"<guptarakshitgupta7@gmail.com>',
                to: data.email,  // The recipient's email address
                subject: "Welcome to Olympic Pulse!",
                text: `Dear ${data.name},\n\nWelcome to Olympic Pulse! Your account has been successfully created.\n\nYou can now log in and explore all the features and services we offer.\n\nIf you have any questions, feel free to contact us at guptarakkshitgupta7@gmail.com.\n\nBest regards,\nOlympic Pulse`, // Fallback plain text version
                html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Welcome to Olympic Pulse</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f4;
                    margin: 0;
                    padding: 20px;
                }
                .container {
                    background-color: #ffffff;
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                    max-width: 600px;
                    margin: auto;
                }
                h1 {
                    color: #333333;
                }
                p {
                    color: #555555;
                    font-size: 16px;
                }
                .footer {
                    font-size: 14px;
                    color: #888888;
                    margin-top: 20px;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Welcome to Olympic Pluse!</h1>
                <p>Dear ${data.name},</p>
                <p>Your account has been successfully created. You can now explore all the features and services we offer.</p>
                <p>If you have any questions or need assistance, feel free to reach out to us at guptarakshitgupta7@gmail.com.</p>
                <p>Thank you for joining us! We look forward to having you as a valued member of our community.</p>
                <p>Best regards,<br>Olympic Pulse</p>
                <hr/>
                <div class="footer">
                    <p>Olympic Pulse | <a href="http://localhost:5173/">http://localhost:5173/</a></p>
                    <p>If you have any questions, contact us at guptarakshitgupta7@gmail.com.</p>
                </div>
            </div>
        </body>
        </html>
    `,
            };


            const sendmail = async (transporter, mailOptions) => {
                try {
                    await transporter.sendMail(mailOptions)
                    console.log('Email Has been sent')
                }
                catch (error) {
                    console.error(error)
                }
            }
            let mail = await sendmail(transporter, mailOptions)
            console.log(mail)
            return res.json("Successfully Send")
        }
    }
    catch (error) {
        return console.log(error)
    }
})

app.post("/feed", async (req, res) => {
    const {data} = req.body
    console.log(data)
    try {
            const respose = await feed.insertMany({ email: data.email, name: data.name, message: data.message })
            console.log(respose)
            let transporter = nodemailer.createTransport({
                service: 'gmail',
                host: "smtp.gmail.com",
                port: 587,
                auth: {
                    user: "guptarakshitgupta7@gmail.com",
                    pass: "cmcg vvrn djqe uygd"
                }
            })


            const mailOptions = {
                from: '"Olympic Pulse"<guptarakshitgupta7@gmail.com>',
                to: data.email,  // The recipient's email address
                subject: "Thank You for Your Feedback!",
                text: `Dear ${data.name},\n\nThank you for taking the time to provide us with your valuable feedback. We truly appreciate your insights and suggestions, and they help us improve our services on Olympic Pulse.\n\nIf you have any more thoughts or questions, feel free to reach out to us at guptarakshitgupta7@gmail.com.\n\nBest regards,\nThe Olympic Pulse Team`, // Fallback plain text version
                html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Thank You for Your Feedback!</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f4;
                    margin: 0;
                    padding: 20px;
                }
                .container {
                    background-color: #ffffff;
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                    max-width: 600px;
                    margin: auto;
                }
                h1 {
                    color: #333333;
                }
                p {
                    color: #555555;
                    font-size: 16px;
                }
                .footer {
                    font-size: 14px;
                    color: #888888;
                    margin-top: 20px;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Thank You for Your Feedback!</h1>
                <p>Dear ${data.name},</p>
                <p>Thank you for taking the time to provide us with your valuable feedback. We truly appreciate your insights and suggestions, and they help us improve our services on Olympic Pulse.</p>
                <p>If you have any more thoughts or questions, feel free to reach out to us at <a href="mailto:guptarakshitgupta7@gmail.com">guptarakshitgupta7@gmail.com</a>.</p>
                <p>Best regards,<br>The Olympic Pulse Team</p>
                <div class="footer">
                    <p>Olympic Pulse | <a href="http://localhost:5173/">http://localhost:5173/</a></p>
                    <p>If you have any questions, contact us at <a href="mailto:guptarakshitgupta7@gmail.com">guptarakshitgupta7@gmail.com</a>.</p>
                </div>
            </div>
        </body>
        </html>
    `,
            };



            const sendmail = async (transporter, mailOptions) => {
                try {
                    await transporter.sendMail(mailOptions)
                    console.log('Email Has been sent')
                }
                catch (error) {
                    console.error(error)
                }
            }
            let mail = await sendmail(transporter, mailOptions)
            console.log(mail)
            return res.json("Successfully Send")
        }
    
    catch (error) {
        return console.log(error)
    }
})

app.post('/ai', async (req, res) => {
    let {data}  = req.body;
    
    try {
        const chatCompletion = await getGroqChatCompletion(data.ques,data.name);
        let response = chatCompletion.choices[0]?.message?.content || ""
        console.log(response)

        return res.json(response)
    }
    catch (error) {
        console.log(error)
    }
})

app.listen(PORT, () => {
    console.log(`Your server is running on port ${PORT}`)
})