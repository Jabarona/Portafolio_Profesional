import { motion } from 'framer-motion';
import { Terminal, Cloud } from 'lucide-react';
import { SnakeGame } from './SnakeGame';
import { useLanguage } from '../context/LanguageContext';

export const Hero = () => {
  const { t } = useLanguage();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };



  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-8 py-20 overflow-hidden" id="inicio">
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #c3f5ff 1px, transparent 0)', backgroundSize: '40px 40px' }}
      />

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        <motion.div
          className="lg:col-span-7 space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high border border-outline-variant/20">
            <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary">{t('hero.badge')}</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-headline font-bold text-on-surface leading-[0.95] tracking-tighter">
            {t('hero.title.1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container">{t('hero.title.2')}</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed">
            {t('hero.subtitle')}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-surface-container-low rounded-lg border border-outline-variant/10">
              <Terminal className="w-4 h-4 text-primary-container" />
              <span className="text-xs font-mono text-on-surface/80">python --version 3.12</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-surface-container-low rounded-lg border border-outline-variant/10">
              <Cloud className="w-4 h-4 text-primary-container" />
              <span className="text-xs font-mono text-on-surface/80">aws-region: us-east-1</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="lg:col-span-5 relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Snake Game Area */}
          <div className="w-full flex justify-center lg:justify-end">
            <SnakeGame />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
