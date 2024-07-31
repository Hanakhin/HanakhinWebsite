import express, { Request, Response } from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
    host: "your-smtp-host",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: "your-email@example.com",
        pass: "your-password",
    },
});

app.post('/send-email', async (req: Request, res: Response) => {
    const { name, email, message } = req.body;

    try {
        await transporter.sendMail({
            from: '"Your Name" <your-email@example.com>',
            to: "recipient@example.com",
            subject: "New Contact Form Submission",
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        });

        res.status(200).send('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Error sending email');
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));