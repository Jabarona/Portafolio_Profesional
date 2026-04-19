import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <footer className="bg-surface-container-lowest w-full py-12 mt-20 relative tonal-shift-top">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-8 gap-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-lg font-bold text-primary font-headline"
        >
          JB
        </motion.div>

        <p className="font-body text-xs tracking-wide text-on-surface/50">
          © {new Date().getFullYear()} Logical Architect. Construido con precisión técnica.
        </p>

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
