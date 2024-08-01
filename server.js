import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

// Charger les variables d'environnement
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Configurer le transporteur Nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

// Route pour envoyer des emails
app.post('/send-email', async (req, res) => {
    const { name, email, message,subject } = req.body;

    try {
        await transporter.sendMail({
            from: `"${name}" <${process.env.SMTP_USER}>`, // Remplacez par votre nom
            to: "snow44111@gmail.com", // Remplacez par l'adresse du destinataire
            subject: `subject: ${subject}`,
            text: `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`,
        });

        res.status(200).send('Email envoyé avec succès');
    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'email:', error);
        res.status(500).send('Erreur lors de l\'envoi de l\'email');
    }
});

// Démarrer le serveur
const PORT = 3001;
app.listen(PORT, () => console.log(`Serveur en cours d'exécution sur le port ${PORT}`));
