import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaPaperPlane } from 'react-icons/fa';
import NavButton from "./NavButton.tsx";

interface StatusMessage {
    type: 'success' | 'error' | null;
    content: string;
}

const Contact: React.FC<{onPageChange:(direction : 'prev' | 'next')=>void}> = ({onPageChange}) => {
    const form = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [statusMessage, setStatusMessage] = useState<StatusMessage>({ type: null, content: '' });

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatusMessage({ type: null, content: '' });

        emailjs
            .sendForm( import.meta.env.VITE_EMAILJS_SERVICE_ID ,import.meta.env.VITE_EMAILJS_TEMPLATE_ID, form.current!, import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
            .then(
                () => {
                    setStatusMessage({ type: 'success', content: 'Message envoyé avec succès !' });
                    form.current!.reset();
                },
                (error) => {
                    setStatusMessage({ type: 'error', content: `Erreur lors de l'envoi du message: ${error}` });
                }
            )
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <section id="contact" className="py-20">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center text-black">Contactez-moi</h2>
                <NavButton onPageChange={onPageChange} />
                <div className="glass p-8 rounded-xl shadow-lg max-w-2xl mx-auto bg-white bg-opacity-20 backdrop-blur-lg">
                    {statusMessage.type && (
                        <div className={`mb-4 p-3 rounded ${
                            statusMessage.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                        }`}>
                            {statusMessage.content}
                        </div>
                    )}
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="mb-4">
                            <label htmlFor="user_name" className="block text-black mb-2">Nom</label>
                            <input
                                id="user_name"
                                type="text"
                                name="user_name"
                                className="glass w-full p-2 rounded bg-white bg-opacity-40 text-black"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="user_email" className="block text-black mb-2">Email</label>
                            <input
                                id="user_email"
                                type="email"
                                name="user_email"
                                className="glass w-full p-2 rounded bg-white bg-opacity-40 text-black"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="subject" className="block text-black mb-2">Sujet</label>
                            <input
                                id="subject"
                                type="text"
                                name="subject"
                                className="glass w-full p-2 rounded bg-white bg-opacity-40 text-black"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-black mb-2">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                className="glass w-full p-2 rounded h-32 bg-white bg-opacity-40 text-black resize-none"
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
