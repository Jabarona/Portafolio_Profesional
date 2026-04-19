import { motion } from 'framer-motion';
import { Terminal, Cloud, Code2, Database, LayoutTemplate, Server, Box, Zap } from 'lucide-react';

export const Hero = () => {
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

  const skills = [
    { icon: Code2, label: 'Python' },
    { icon: Cloud, label: 'AWS' },
    { icon: Database, label: 'SQL' },
    { icon: LayoutTemplate, label: 'React' },
    { icon: Server, label: 'Node.js' },
    { icon: Box, label: 'Docker' },
    { icon: LayoutTemplate, label: 'K8s' },
    { icon: Zap, label: 'Go' },
  ];

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
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary">Sistema En Línea</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-headline font-bold text-on-surface leading-[0.95] tracking-tighter">
            Diseñando Arquitecturas <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container">Lógicas</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed">
            Construyo sistemas distribuidos y resilientes que acortan la brecha entre la lógica abstracta y la ejecución de alto rendimiento.
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
          {/* Code Snippet Glassmorphism */}
          <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/10 shadow-2xl overflow-hidden group hover:border-primary/30 transition-colors duration-500">
            <div className="bg-surface-container-high px-4 py-3 flex gap-2 items-center">
              <div className="w-3 h-3 rounded-full bg-error/80"></div>
              <div className="w-3 h-3 rounded-full bg-tertiary-container/80"></div>
              <div className="w-3 h-3 rounded-full bg-primary-container/80"></div>
              <span className="ml-4 text-[10px] font-mono text-outline uppercase tracking-widest">architect_core.go</span>
            </div>
            <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto">
              <div className="flex gap-4"><span className="text-outline/30 select-none">01</span><span className="text-primary-container">func</span> <span className="text-on-surface">InitializeCore() {'{'}</span></div>
              <div className="flex gap-4"><span className="text-outline/30 select-none">02</span><span className="pl-4 text-on-surface">node := NewOrchestrator(</span></div>
              <div className="flex gap-4"><span className="text-outline/30 select-none">03</span><span className="pl-8 text-on-surface">Config.Master,</span></div>
              <div className="flex gap-4"><span className="text-outline/30 select-none">04</span><span className="pl-8 text-on-surface">Security.VoidVault,</span></div>
              <div className="flex gap-4"><span className="text-outline/30 select-none">05</span><span className="pl-4 text-on-surface">)</span></div>
              <div className="flex gap-4"><span className="text-outline/30 select-none">06</span><span className="pl-4 text-on-surface">node.SpinUp()</span></div>
              <div className="flex gap-4"><span className="text-outline/30 select-none">07</span><span className="text-on-surface">{'}'}</span></div>
            </div>
          </div>

          {/* Skills Matrix */}
          <div className="mt-8 grid grid-cols-4 gap-4">
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.label}
                  whileHover={{ y: -5, backgroundColor: 'var(--color-surface-container-high)' }}
                  className="p-4 bg-surface-container-low rounded-lg flex flex-col items-center gap-2 border border-outline-variant/5 transition-colors group cursor-pointer"
                >
                  <Icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-bold tracking-tighter uppercase text-on-surface/50 group-hover:text-on-surface/80">{skill.label}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
