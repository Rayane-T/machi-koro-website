import React from 'react';
import { motion } from 'framer-motion';
import { FaWindows, FaApple, FaLinux } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

const Download = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-japanese text-machi-text mb-6">
          {t.download.title}
        </h1>
        <p className="text-xl text-machi-text mb-8">
          {t.download.subtitle}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-machi-secondary p-6 rounded-lg shadow-lg text-center"
        >
          <FaWindows className="text-5xl mx-auto mb-4 text-machi-text" />
          <h2 className="text-2xl font-japanese text-machi-text mb-4">{t.download.windows.title}</h2>
          <p className="text-machi-text mb-4">{t.download.version} 1.0.0</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-machi-accent text-white px-6 py-2 rounded hover:bg-opacity-80 transition-colors"
          >
            {t.download.windows.button}
          </motion.button>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-machi-accent p-6 rounded-lg shadow-lg text-center"
        >
          <FaApple className="text-5xl mx-auto mb-4 text-machi-text" />
          <h2 className="text-2xl font-japanese text-machi-text mb-4">{t.download.macos.title}</h2>
          <p className="text-machi-text mb-4">{t.download.version} 1.0.0</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-machi-primary text-machi-text px-6 py-2 rounded hover:bg-opacity-80 transition-colors"
          >
            {t.download.macos.button}
          </motion.button>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-machi-primary p-6 rounded-lg shadow-lg text-center"
        >
          <FaLinux className="text-5xl mx-auto mb-4 text-machi-text" />
          <h2 className="text-2xl font-japanese text-machi-text mb-4">{t.download.linux.title}</h2>
          <p className="text-machi-text mb-4">{t.download.version} 1.0.0</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-machi-secondary text-machi-text px-6 py-2 rounded hover:bg-opacity-80 transition-colors"
          >
            {t.download.linux.button}
          </motion.button>
        </motion.div>
      </div>

      <div className="mt-12 bg-machi-background p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-japanese text-machi-text mb-4">{t.download.instructions.title}</h2>
        <div className="space-y-4 text-machi-text">
          {t.download.instructions.steps.map((step, index) => (
            <p key={index}>{step}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Download; 