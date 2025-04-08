import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';
import { FaEnvelope, FaGithub, FaDiscord } from 'react-icons/fa';
import wpmachikoro from '../assets/wpmachikoro.png';

const Contact = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${wpmachikoro})` }}>
      <div className="min-h-screen bg-gradient-to-b from-machi-background/80 to-machi-primary/80">
        <div className="container mx-auto px-4 py-12">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <h1 className="text-5xl font-japanese text-machi-text mb-4 text-center drop-shadow-lg">
              {t.contact.title}
            </h1>
            <p className="text-xl text-machi-text mb-8 text-center max-w-2xl mx-auto">
              {t.contact.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/40 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/20"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-machi-text font-medium mb-2">
                    {t.contact.form.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/40 border border-white/40 text-machi-text placeholder-machi-text/70 focus:outline-none focus:border-machi-accent focus:ring-2 focus:ring-machi-accent/20 transition-all"
                    placeholder={t.contact.form.namePlaceholder}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-machi-text font-medium mb-2">
                    {t.contact.form.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/40 border border-white/40 text-machi-text placeholder-machi-text/70 focus:outline-none focus:border-machi-accent focus:ring-2 focus:ring-machi-accent/20 transition-all"
                    placeholder={t.contact.form.emailPlaceholder}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-machi-text font-medium mb-2">
                    {t.contact.form.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-white/40 border border-white/40 text-machi-text placeholder-machi-text/70 focus:outline-none focus:border-machi-accent focus:ring-2 focus:ring-machi-accent/20 transition-all resize-none"
                    placeholder={t.contact.form.messagePlaceholder}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-machi-primary text-white py-3 px-6 rounded-xl hover:bg-machi-secondary transition-colors duration-75 shadow-lg hover:shadow-xl font-bold text-lg"
                >
                  {t.contact.form.submit}
                </button>
              </form>
            </motion.div>

            {/* Other Contact Methods */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white/40 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/20"
            >
              <h2 className="text-2xl font-japanese text-machi-text mb-6 text-center">
                {t.contact.other.title}
              </h2>
              <div className="space-y-6">
                <a href={t.contact.other.email.link} className="block">
                  <div className="flex items-center space-x-4 p-4 rounded-xl bg-white/40 border border-white/30 hover:bg-white/50 transition-colors duration-200">
                    <FaEnvelope className="text-2xl text-machi-text" />
                    <div>
                      <h3 className="text-machi-text font-medium">{t.contact.other.email.title}</h3>
                      <p className="text-machi-text font-semibold">{t.contact.other.email.address}</p>
                    </div>
                  </div>
                </a>
                <a href={t.contact.other.github.link} target="_blank" rel="noopener noreferrer" className="block">
                  <div className="flex items-center space-x-4 p-4 rounded-xl bg-white/40 border border-white/30 hover:bg-white/50 transition-colors duration-200">
                    <FaGithub className="text-2xl text-machi-text" />
                    <div>
                      <h3 className="text-machi-text font-medium">{t.contact.other.github.title}</h3>
                      <p className="text-machi-text font-semibold">{t.contact.other.github.username}</p>
                    </div>
                  </div>
                </a>
                <a href={t.contact.other.discord.link} target="_blank" rel="noopener noreferrer" className="block">
                  <div className="flex items-center space-x-4 p-4 rounded-xl bg-white/40 border border-white/30 hover:bg-white/50 transition-colors duration-200">
                    <FaDiscord className="text-2xl text-machi-text" />
                    <div>
                      <h3 className="text-machi-text font-medium">{t.contact.other.discord.title}</h3>
                      <p className="text-machi-text font-semibold">{t.contact.other.discord.username}</p>
                    </div>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 