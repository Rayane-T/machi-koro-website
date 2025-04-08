import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';
import { FaGamepad, FaDownload, FaEnvelope } from 'react-icons/fa';
import wpmachikoro from '../assets/wpmachikoro.png';

const Home = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${wpmachikoro})` }}>
      <div className="min-h-screen bg-gradient-to-b from-machi-background/80 to-machi-primary/80">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative container mx-auto px-4 py-12 text-center"
          >
            <h1 className="text-5xl font-japanese text-machi-text mb-4 drop-shadow-lg">
              {t.home.title}
            </h1>
            <p className="text-xl text-machi-text mb-8 max-w-2xl mx-auto">
              {t.home.subtitle}
            </p>
          </motion.div>
        </div>

        {/* Features Section */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/40 backdrop-blur-lg p-6 rounded-2xl shadow-xl border-2 border-white/30"
            >
              <div className="text-4xl text-machi-text mb-4 flex justify-center">
                <FaGamepad />
              </div>
              <h2 className="text-2xl font-japanese text-machi-text mb-3 text-center">
                {t.home.play.title}
              </h2>
              <p className="text-machi-text mb-6 text-center">
                {t.home.play.description}
              </p>
              <div className="text-center">
                <Link
                  to="/play"
                  className="inline-block bg-machi-primary text-white px-6 py-2 rounded-full hover:bg-machi-secondary transition-colors duration-75 shadow-lg hover:shadow-xl"
                >
                  {t.home.play.button}
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white/40 backdrop-blur-lg p-6 rounded-2xl shadow-xl border-2 border-white/30"
            >
              <div className="text-4xl text-machi-text mb-4 flex justify-center">
                <FaDownload />
              </div>
              <h2 className="text-2xl font-japanese text-machi-text mb-3 text-center">
                {t.home.download.title}
              </h2>
              <p className="text-machi-text mb-6 text-center">
                {t.home.download.description}
              </p>
              <div className="text-center">
                <Link
                  to="/download"
                  className="inline-block bg-machi-primary text-white px-6 py-2 rounded-full hover:bg-machi-secondary transition-colors duration-75 shadow-lg hover:shadow-xl"
                >
                  {t.home.download.button}
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white/40 backdrop-blur-lg p-6 rounded-2xl shadow-xl border-2 border-white/30"
            >
              <div className="text-4xl text-machi-text mb-4 flex justify-center">
                <FaEnvelope />
              </div>
              <h2 className="text-2xl font-japanese text-machi-text mb-3 text-center">
                {t.home.contact.title}
              </h2>
              <p className="text-machi-text mb-6 text-center">
                {t.home.contact.description}
              </p>
              <div className="text-center">
                <Link
                  to="/contact"
                  className="inline-block bg-machi-primary text-white px-6 py-2 rounded-full hover:bg-machi-secondary transition-colors duration-75 shadow-lg hover:shadow-xl"
                >
                  {t.home.contact.button}
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 