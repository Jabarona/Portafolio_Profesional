import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cloud, BookOpen, Bot } from 'lucide-react';
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

  const [terminalLines, setTerminalLines] = useState<number>(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setTerminalLines(1), 800);
    const timer2 = setTimeout(() => setTerminalLines(2), 1800);
    const timer3 = setTimeout(() => setTerminalLines(3), 2800);
    const timer4 = setTimeout(() => setTerminalLines(4), 3800);
    const timer5 = setTimeout(() => setTerminalLines(5), 4800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, []);

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

          <motion.div variants={itemVariants} className="flex flex-col gap-3 pt-6">
            <p className="text-xs font-bold uppercase tracking-widest text-primary">{t('hero.status.title' as any)}</p>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-4 py-2 bg-surface-container-low rounded-lg border border-outline-variant/10 shadow-sm hover:border-primary/20 transition-colors cursor-default">
                <BookOpen className="w-4 h-4 text-primary-container" />
                <span className="text-xs font-mono font-medium text-on-surface/90">{t('hero.status.1' as any)}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-surface-container-low rounded-lg border border-outline-variant/10 shadow-sm hover:border-primary/20 transition-colors cursor-default">
                <Bot className="w-4 h-4 text-primary-container" />
                <span className="text-xs font-mono font-medium text-on-surface/90">{t('hero.status.2' as any)}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-surface-container-low rounded-lg border border-outline-variant/10 shadow-sm hover:border-primary/20 transition-colors cursor-default">
                <Cloud className="w-4 h-4 text-primary-container" />
                <span className="text-xs font-mono font-medium text-on-surface/90">{t('hero.status.3' as any)}</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="lg:col-span-5 relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {/* Hacker Terminal */}
          <div className="w-full flex justify-center lg:justify-end">
            <div className="w-full max-w-[500px] bg-surface-container-lowest rounded-xl overflow-hidden border border-outline-variant/20 shadow-2xl">
              {/* Terminal Header */}
              <div className="bg-surface-container-high px-4 py-3 flex items-center gap-2 border-b border-outline-variant/10">
                <div className="w-3 h-3 rounded-full bg-error/80"></div>
                <div className="w-3 h-3 rounded-full bg-[#f5a623]/80"></div>
                <div className="w-3 h-3 rounded-full bg-[#7ed321]/80"></div>
                <span className="ml-2 text-[10px] font-mono text-outline uppercase tracking-widest flex-1 text-center pr-8">Jarvi_Terminal_tty1</span>
              </div>
              {/* Terminal Body */}
              <div className="p-6 font-mono text-sm md:text-base leading-loose text-on-surface-variant h-[280px] flex flex-col">
                {terminalLines >= 1 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-2 text-primary">
                    {t('hero.terminal.init')}
                  </motion.div>
                )}
                {terminalLines >= 2 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-2 text-on-surface">
                    {t('hero.terminal.auth')}
                  </motion.div>
                )}
                {terminalLines >= 3 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-2 text-on-surface">
                    {t('hero.terminal.role')}
                  </motion.div>
                )}
                {terminalLines >= 4 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-2 text-on-surface">
                    {t('hero.terminal.modules')}
                  </motion.div>
                )}
                {terminalLines >= 5 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-2 text-primary-container font-bold">
                    {t('hero.terminal.status')}
                  </motion.div>
                )}
                
                {/* Blinking Cursor */}
                {terminalLines < 5 && (
                  <motion.div 
                    animate={{ opacity: [1, 0] }} 
                    transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }} 
                    className="w-2.5 h-5 bg-primary inline-block mt-2 align-middle"
                  />
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
