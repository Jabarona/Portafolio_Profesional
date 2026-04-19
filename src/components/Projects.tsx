import { motion } from 'framer-motion';
import { Network, Lock, Activity, ArrowRight } from 'lucide-react';

export const Projects = () => {
  return (
    <section className="py-32 px-8 bg-surface-container-low relative" id="proyectos">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8"
        >
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6 tracking-tight">Ecosistema <span className="text-primary-container">de Ingeniería</span></h2>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              Una colección curada de proyectos de infraestructura, sistemas distribuidos y contribuciones open-source.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="h-[1px] w-32 bg-outline-variant/30 hidden lg:block self-center mr-4"></div>
            <span className="text-xs font-mono uppercase tracking-widest text-primary">Repositorios: 42</span>
          </div>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Project 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="md:col-span-8 group relative overflow-hidden bg-surface-container-highest rounded-xl p-8 transition-all border border-outline-variant/5 hover:border-primary/20"
          >
            <div className="flex flex-col h-full justify-between gap-12 relative z-10">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-3xl font-headline font-bold">SkyNet Orchestrator</h3>
                  <Network className="w-10 h-10 text-primary-container" />
                </div>
                <p className="text-on-surface-variant mb-8 max-w-lg">
                  Un sistema de gestión de nodos distribuidos para entornos de nube híbrida. Maneja failover automatizado y rebalanceo de cargas de trabajo con latencia sub-ms.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-surface-container-low text-[10px] font-bold uppercase tracking-wider text-primary rounded">Go</span>
                  <span className="px-3 py-1 bg-surface-container-low text-[10px] font-bold uppercase tracking-wider text-primary rounded">gRPC</span>
                  <span className="px-3 py-1 bg-surface-container-low text-[10px] font-bold uppercase tracking-wider text-primary rounded">Redis</span>
                </div>
              </div>
              <div className="flex gap-4">
                <button className="px-6 py-3 bg-primary text-on-primary font-bold text-xs uppercase tracking-widest rounded transition-all hover:bg-primary-container">Ver Arquitectura</button>
                <button className="px-6 py-3 border border-outline-variant/30 text-primary font-bold text-xs uppercase tracking-widest rounded hover:bg-surface-container-high transition-all">Documentación</button>
              </div>
            </div>
            {/* Hover Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/0 via-primary/5 to-primary-container/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-0 blur-2xl"></div>
          </motion.div>

          {/* Project 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -4 }}
            className="md:col-span-4 group relative overflow-hidden bg-surface-container-high rounded-xl p-8 transition-all border border-outline-variant/5 hover:border-primary/20"
          >
            <div className="flex flex-col h-full justify-between">
              <div>
                <div className="mb-6 flex justify-between">
                  <h3 className="text-2xl font-headline font-bold">VoidVault Auth</h3>
                  <Lock className="w-6 h-6 text-primary/40" />
                </div>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                  Proveedor de autenticación Zero-Trust utilizando capas de encriptación multi-tenant.
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-full h-1 bg-surface-container-lowest rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '85%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="h-full bg-primary-container"
                  />
                </div>
                <div className="flex justify-between text-[10px] font-mono text-outline">
                  <span>PUNTUACIÓN DE SEGURIDAD: 98%</span>
                  <span>v2.1.0</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Project 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="md:col-span-4 group bg-surface-container-high rounded-xl p-8 transition-all border border-outline-variant/5 hover:border-primary/20"
          >
            <div className="flex flex-col h-full justify-between">
              <div>
                <div className="mb-6 flex justify-between">
                  <h3 className="text-2xl font-headline font-bold">QuantumAnalytics</h3>
                  <Activity className="w-6 h-6 text-primary/40" />
                </div>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                  Motor de procesamiento de flujo de datos en tiempo real capaz de +1M RPS.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-surface-container-low text-[10px] font-bold uppercase tracking-wider text-primary rounded">Python</span>
                <span className="px-3 py-1 bg-surface-container-low text-[10px] font-bold uppercase tracking-wider text-primary rounded">Apache Kafka</span>
              </div>
            </div>
          </motion.div>

          {/* Project 4 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-8 bg-surface-container-highest rounded-xl overflow-hidden relative group"
          >
            <img 
              className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale group-hover:grayscale-0 group-hover:opacity-30 transition-all duration-700" 
              alt="abstract high tech" 
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-highest via-surface-container-highest/80 to-transparent z-0"></div>
            <div className="relative z-10 p-8 flex flex-col h-full justify-center">
              <h3 className="text-3xl font-headline font-bold mb-4">NeuralMesh Network</h3>
              <p className="text-on-surface-variant max-w-md mb-6">
                Stack de red de bajo nivel optimizado para edge computing y comunicaciones de malla IoT de baja latencia.
              </p>
              <a className="text-primary-container font-bold text-sm tracking-widest flex items-center gap-2 group/link cursor-pointer w-fit" href="#">
                EXPLORAR REPOSITORIO
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
