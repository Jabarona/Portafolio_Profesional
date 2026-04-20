import { motion } from 'framer-motion';

import { useLanguage } from '../context/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-surface-container-lowest w-full py-12 mt-20 relative tonal-shift-top">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-8 gap-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-headline font-bold text-primary tracking-tighter">JB</h3>
          <p className="text-on-surface-variant text-sm">{t('footer.desc')}</p>
        </motion.div>

        <div className="text-sm font-mono text-outline">
          © {new Date().getFullYear()} JB. {t('footer.rights')}
        </div>

        <div className="flex gap-8">
          {['GitHub', 'LinkedIn', 'Twitter', 'Email'].map((item) => (
            <a
              key={item}
              className="font-body text-xs tracking-wide text-on-surface/50 hover:text-primary transition-all cursor-pointer"
              href="#"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
