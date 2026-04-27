import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import type { TranslationKey } from '../context/translations';

export const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="fixed top-0 w-full z-50 glass-panel">
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center"
        >
          <a href="#" className="flex items-center justify-center hover:scale-105 transition-transform duration-300">
            <img src="/logo.svg" alt="Jarvi Barona Logo" className="w-11 h-11 drop-shadow-[0_0_8px_rgba(0,229,255,0.3)]" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="hidden md:flex items-center gap-8"
        >
          {['home', 'projects', 'about', 'contact'].map((item) => (
            <a
              key={item}
              className="font-headline tracking-tight text-sm uppercase transition-all duration-300 text-on-surface/70 hover:text-primary-container active:scale-95"
              href={`#${t(`nav.${item}` as TranslationKey).toLowerCase().replace(' ', '-')}`}
            >
              {t(`nav.${item}` as TranslationKey)}
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4"
        >
          {/* Botones de Idioma */}
          <div className="flex items-center gap-1 bg-surface-container-high p-1 rounded-lg border border-outline-variant/10">
            <button
              onClick={() => setLanguage('es')}
              className={`px-2 py-1 rounded transition-colors text-sm ${language === 'es' ? 'bg-primary-container text-on-primary-container shadow-sm' : 'text-on-surface-variant hover:text-on-surface opacity-50 hover:opacity-100'}`}
              title="Español"
            >
              🇪🇸
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-2 py-1 rounded transition-colors text-sm ${language === 'en' ? 'bg-primary-container text-on-primary-container shadow-sm' : 'text-on-surface-variant hover:text-on-surface opacity-50 hover:opacity-100'}`}
              title="English"
            >
              🇺🇸
            </button>
          </div>

          <button
            className="bg-gradient-to-br from-primary to-primary-container text-on-primary font-headline text-xs uppercase tracking-widest px-6 py-3 rounded-lg font-bold shadow-lg shadow-primary-container/20 active:scale-95 transition-transform hover:scale-105"
          >
            {t('nav.resume')}
          </button>
        </motion.div>
      </nav>
    </header>
  );
};
