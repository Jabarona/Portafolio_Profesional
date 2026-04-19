import { motion } from 'framer-motion';

export const Navbar = () => {
  return (
    <header className="fixed top-0 w-full z-50 glass-panel">
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold tracking-tighter text-primary font-headline"
        >
          JB
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="hidden md:flex items-center gap-8"
        >
          {['Inicio', 'Proyectos', 'Sobre mí', 'Contacto'].map((item) => (
            <a
              key={item}
              className="font-headline tracking-tight text-sm uppercase transition-all duration-300 text-on-surface/70 hover:text-primary-container active:scale-95"
              href={`#${item.toLowerCase().replace(' ', '-')}`}
            >
              {item}
            </a>
          ))}
        </motion.div>

        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-gradient-to-br from-primary to-primary-container text-on-primary font-headline text-xs uppercase tracking-widest px-6 py-3 rounded-lg font-bold shadow-lg shadow-primary-container/20 active:scale-95 transition-transform hover:scale-105"
        >
          Currículum
        </motion.button>
      </nav>
    </header>
  );
};
