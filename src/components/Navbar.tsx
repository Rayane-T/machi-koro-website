import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';
import { FaGlobe } from 'react-icons/fa';
import machiKoroLogo from '../assets/MACHI KORO.png';

const Navbar = () => {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  return (
    <nav className="bg-machi-primary py-4 px-6 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src={machiKoroLogo} 
            alt="MACHI KORO" 
            className="h-8 object-contain"
          />
        </Link>
        <div className="flex items-center space-x-8">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link to="/play" className="text-machi-text hover:text-machi-accent transition-colors text-lg font-medium">
              {t.nav.play}
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link to="/download" className="text-machi-text hover:text-machi-accent transition-colors text-lg font-medium">
              {t.nav.download}
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link to="/contact" className="text-machi-text hover:text-machi-accent transition-colors text-lg font-medium">
              {t.nav.contact}
            </Link>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 0.95 }}
            className="relative group"
          >
            <button 
              className="text-machi-text hover:text-machi-accent transition-colors text-lg font-medium flex items-center space-x-2"
              onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
            >
              <span className="text-xl">
                {language === 'en' ? '🇬🇧' : '🇫🇷'}
              </span>
              <span>{language.toUpperCase()}</span>
            </button>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 