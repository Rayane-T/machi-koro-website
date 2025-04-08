import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

const Play = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-japanese text-machi-text mb-6">
          {t.play.title}
        </h1>
        <p className="text-xl text-machi-text mb-8">
          {t.play.subtitle}
        </p>
      </motion.div>

      <div className="bg-machi-background rounded-lg shadow-xl p-6">
        <div className="aspect-w-16 aspect-h-9">
          {/* Here, we will integrate the Godot export */}
          <div className="w-full h-[600px] bg-machi-accent bg-opacity-20 rounded-lg flex items-center justify-center">
            <p className="text-machi-text text-xl">
              {t.play.gamePlaceholder}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-machi-text mb-4">
          {t.play.recommendation}
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-machi-primary text-machi-text px-6 py-3 rounded-lg shadow-lg hover:bg-opacity-80 transition-colors"
        >
          {t.play.downloadButton}
        </motion.button>
      </div>
    </div>
  );
};

export default Play; 