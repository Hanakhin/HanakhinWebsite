import React, { useState } from 'react';

const Contact: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [subject, setSubject] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log('ok')
        try {
            const response = await fetch('http://localhost:3001/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, message }),
            });

            if (response.ok) {
                alert('Message envoyé avec succès !');
                setName('');
                setEmail('');
                setMessage('');
                setSubject('');
            } else {
                throw new Error('Erreur lors de l\'envoi du message');
            }
        } catch (error) {
            console.error('Erreur:', error);
            alert('Une erreur est survenue, veuillez réessayer.');
        }
    };

    return (
        <section id="contact" className="py-20">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">Contactez-moi</h2>
                <div className="glass p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Nom"
                            className="glass w-full p-2 mb-4 rounded"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="glass w-full p-2 mb-4 rounded"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                        type="text"
                        placeholder="subject"
                        className="glass w-full p-2 mb-4 rounded"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        required
                        />
                        <textarea
                            placeholder="Message"
                            className="glass w-full p-2 mb-4 rounded h-32"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        ></textarea>
                        <button type="submit" className="glass px-6 py-3 rounded-full text-gray-800 hover:bg-white hover:bg-opacity-30 transition duration-300">Envoyer</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;