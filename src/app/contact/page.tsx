'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        
        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                {
                    to_email: 'sara.radojicic@gmail.com',
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                },
                process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
            );
            setStatus('Thank you for your message! I will get back to you as soon as possible.');
            setFormData({ name: '', email: '', message: ''});
        } catch (error) {
            setStatus('Failed to send email. Please try again later.');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return(
        <div className="min-h-screen border-b border-b-border-light pt-5 bg-white">
            <div className="max-w-7xl mx-auto px-8 ">
                <div className="flex flex-col-reverse sm:flex-row justify-center items-start py-5">
                    <motion.div 
                        className="mx-auto py-20"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h1 className="text-7xl font-semibold text-text-primary">contact.</h1>
                        <p className="text-text-light text-lg mt-1 mb-10 font-light">
                            Get in touch with me via social media <br/>
                            or send me and email.
                        </p>
                      
                        <motion.div 
                            className="flex gap-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        >
                            <a
                                href="https://www.linkedin.com/in/sara-radojicic-110360383/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center hover:opacity-70 transition">
                                <Image
                                    src="/linkedin.png"
                                    alt="LinkedIn"
                                    width={24}
                                    height={24}
                                    priority
                                />
                            </a>
                        </motion.div>
                    </motion.div>
                    <motion.div 
                        className="w-80 mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    >
                        <Image
                            src="/ContactImage.png"
                            alt="Profile"
                            width={500}
                            height={300}
                            className="w-full h-auto"
                        />
                    </motion.div>
                </div>
            </div>  
            <div className="bg-background-main border-t border-t-border-light">
                <motion.div 
                    className="max-w-7xl mx-auto px-8 py-20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                >
                    <div className="flex flex-col items-center">
                        <h2 className="text-4xl font-semibold text-text-primary mb-12">Send me an email</h2>

                        <form onSubmit={handleSubmit} className="w-full">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                                <div className="flex flex-col gap-8">
                                    <div>
                                        <label className="block text-text-primary focus:outline-none font-normal mb-2">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Ana Novak"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border rounded-lg bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-text-primary font-normal mb-2">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="example@gmail.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg bg-white border focus:outline-none border-gray-300 focus:ring-2 focus:ring-gray-200"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-text-primary font-normal mb-2">Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        className="w-full px-4 py-3 border rounded-lg bg-white focus:outline-none border-gray-300 focus:ring-2 focus:ring-gray-200"
                                    />
                                </div>
                            </div>

                            {status && (
                                <p className={`mb-4 ${status.includes('message') ? 'text-text-primary font-light' : 'text-red-600'}`}>
                                    {status}
                                </p>
                            )}
                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="bg-gray-800 text-white px-8 py-3 rounded-lg font-normal hover:bg-gray-900 transition disabled:opacity-70 w-50"
                                >
                                    {loading ? 'Sending...' : 'Send message'}
                                </button>
                            </div>
                        </form>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}