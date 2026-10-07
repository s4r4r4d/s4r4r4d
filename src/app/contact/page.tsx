'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import Image from 'next/image';

const EMAIL = 'sara.radojicic@gmail.com';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<{ ok: boolean; text: string } | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        try {
            await emailjs.send(
                'service_hg19xrj',
                'template_cxs3hkh',
                {
                    to_email: EMAIL,
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                },
                'gLbar4MQ5dKyruQmS'
            );
            setStatus({ ok: true, text: 'Thank you for your message. I will get back to you as soon as possible.' });
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            // surface what actually failed instead of a generic message
            const detail = (error as { text?: string })?.text;
            setStatus({
                ok: false,
                text: detail
                    ? `Could not send: ${detail}. Please write to me directly at ${EMAIL}.`
                    : `Could not send your message. Please write to me directly at ${EMAIL}.`,
            });
            console.error('EmailJS send failed', error);
        } finally {
            setLoading(false);
        }
    };

    const field = 'w-full bg-transparent border-0 border-b border-[#dddddd] px-0 py-3 text-[#333333] ' +
        'placeholder:text-[#c4c4c4] font-light focus:outline-none focus:border-[#333333] transition-colors';
    const labelCls = 'block text-xs uppercase tracking-widest text-[#999999] mb-1';

    return (
        <div className="border-b border-b-[#dddddd] pt-10 sm:pt-14 bg-white">
            <div className="max-w-7xl mx-auto px-6 sm:px-8">
                <div className="flex flex-col-reverse sm:flex-row justify-center items-center gap-6 sm:gap-16 py-2">
                    <motion.div
                        className="w-full min-w-0 sm:w-auto mx-auto py-10"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold text-[#333333]">contact.</h1>
                        <p className="text-[#757575] text-base sm:text-lg mt-1 font-light max-w-prose">
                            Get in touch with me via{' '}
                            <a
                                href="https://www.linkedin.com/in/sara-radojicic/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#333333] border-b border-[#cccccc] hover:border-[#333333] transition-colors"
                            >
                                LinkedIn
                            </a>
                            {' '}or{' '}
                            <a
                                href="#email"
                                className="text-[#333333] border-b border-[#cccccc] hover:border-[#333333] transition-colors"
                            >
                                send me an email
                            </a>
                            .
                        </p>
                    </motion.div>
                    <motion.div
                        className="w-full max-w-[18rem] sm:max-w-xs mx-auto pt-4 sm:pt-6"
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
            <div id="email" className="bg-[#fafafa] border-t border-t-[#dddddd] scroll-mt-20">
                <motion.div
                    className="max-w-6xl mx-auto px-6 sm:px-8 py-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                >
                    <div className="grid lg:grid-cols-[0.75fr_1fr] gap-12 lg:gap-24">
                        <div>
                            <h2 className="text-4xl sm:text-5xl font-semibold text-[#333333] mb-4">
                                Let&rsquo;s talk
                            </h2>
                            <p className="text-[#757575] font-light leading-relaxed">
                                Tell me what you are working on and I will get back to you.
                            </p>

                            <div className="mt-8 flex items-center gap-3">
                                <span className="relative flex h-2.5 w-2.5 shrink-0">
                                    <motion.span
                                        aria-hidden="true"
                                        className="absolute inline-flex h-full w-full rounded-full bg-[#4C8C5A]"
                                        animate={{ scale: [1, 2.6], opacity: [0.45, 0] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
                                    />
                                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#4C8C5A]" />
                                </span>
                                <span className="text-sm text-[#333333]">Open to new opportunities</span>
                            </div>
                            <p className="mt-2 ml-[22px] text-sm text-[#999999] font-light">
                                Usually replies within a day
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="w-full">
                            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-8">
                                <div>
                                    <label htmlFor="name" className={labelCls}>Name</label>
                                    <input
                                        id="name"
                                        type="text"
                                        name="name"
                                        placeholder="Ana Novak"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className={field}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className={labelCls}>Email</label>
                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        placeholder="example@gmail.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className={field}
                                    />
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="message" className={labelCls}>Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        placeholder="What are you working on?"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className={`${field} resize-none`}
                                    />
                                </div>
                            </div>

                            {status && (
                                <p className={`mt-8 text-sm font-light ${status.ok ? 'text-[#333333]' : 'text-[#D1514A]'}`}>
                                    {status.text}
                                </p>
                            )}

                            <div className="flex justify-start sm:justify-end mt-10">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="group relative overflow-hidden rounded-full bg-[#333333] px-10 py-4
                                               text-sm tracking-wide text-white
                                               disabled:opacity-50 disabled:pointer-events-none"
                                >
                                    <span
                                        aria-hidden="true"
                                        className="absolute inset-0 translate-y-full bg-[#9E3B37]
                                                   transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)]
                                                   group-hover:translate-y-0"
                                    />
                                    <span className="relative block h-5 overflow-hidden leading-5">
                                        <span className="block transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:-translate-y-5">
                                            {loading ? 'Sending' : 'Send message'}
                                        </span>
                                        <span
                                            aria-hidden="true"
                                            className="block transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:-translate-y-5"
                                        >
                                            {loading ? 'Sending' : 'Send message'}
                                        </span>
                                    </span>
                                </button>
                            </div>
                        </form>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
