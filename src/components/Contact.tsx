import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

interface StatusMessage {
    type: 'success' | 'error' | null;
    content: string;
}

const Contact: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [statusMessage, setStatusMessage] = useState<StatusMessage>({ type: null, content: '' });

    const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:3001';

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatusMessage({ type: null, content: '' });

        try {
            const response = await fetch(`${apiUrl}/send-email`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, subject, message }),
            });

            if (response.ok) {
                setStatusMessage({ type: 'success', content: 'Message envoyé avec succès !' });
                setName('');
                setEmail('');
                setSubject('');
                setMessage('');
            } else {
                throw new Error('Erreur lors de l\'envoi du message');
            }
        } catch (error) {
            console.error('Erreur:', error);
            setStatusMessage({ type: 'error', content: 'Une erreur est survenue, veuillez réessayer.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-20">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center text-black">Contactez-moi</h2>
                <div className="glass p-8 rounded-xl shadow-lg max-w-2xl mx-auto bg-white bg-opacity-20 backdrop-blur-lg">
                    {statusMessage.type && (
                        <div className={`mb-4 p-3 rounded ${
                            statusMessage.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                        }`}>
                            {statusMessage.content}
                        </div>
                    )}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-black mb-2">Nom</label>
                            <input
                                id="name"
                                type="text"
                                className="glass w-full p-2 rounded bg-white bg-opacity-40 text-black"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-black mb-2">Email</label>
                            <input
                                id="email"
                                type="email"
                                className="glass w-full p-2 rounded bg-white bg-opacity-40 text-black"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="subject" className="block text-black mb-2">Sujet</label>
                            <input
                                id="subject"
                                type="text"
                                className="glass w-full p-2 rounded bg-white bg-opacity-40 text-black"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-black mb-2">Message</label>
                            <textarea
                                id="message"
                                className="glass w-full p-2 rounded h-32 bg-white bg-opacity-40 text-black resize-none"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className={`glass px-6 py-3 rounded-full text-black hover:bg-white hover:bg-opacity-30 transition duration-300 flex items-center justify-center ${isSubmitting ? 'animate-pulse' : 'hover:scale-105'}`}
                            disabled={isSubmitting}
                        >
                            <span className="mr-2">Envoyer</span>
                            <FaPaperPlane className={`transition-transform duration-300 ${isSubmitting ? 'translate-x-1' : ''}`} />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;