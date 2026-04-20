import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import profileImg1 from '../assets/JarviBarona.jpeg';
import profileImg2 from '../assets/Santiago.webp';
import profileImg3 from '../assets/hero.png';
import { useLanguage } from '../context/LanguageContext';

const PHOTOS = [profileImg1, profileImg2, profileImg3];

export const About = () => {
  const { t } = useLanguage();
  const [photoIndex, setPhotoIndex] = useState(0);

  const handlePhotoClick = () => {
    setPhotoIndex((prev) => (prev + 1) % PHOTOS.length);
  };
  return (
    <section className="py-32 px-8 overflow-hidden" id="sobre-mí">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            <div className="sticky top-32">
              <div className="relative aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-xl rotate-6 transition-transform duration-500 hover:rotate-12"></div>
                <div className="absolute inset-0 border border-primary/20 rounded-xl -rotate-3 transition-transform duration-500 hover:-rotate-6"></div>
                <div 
                  className="relative h-full w-full overflow-hidden rounded-xl bg-surface-container-high shadow-2xl cursor-pointer group"
                  onClick={handlePhotoClick}
                >
                  <AnimatePresence mode="wait">
                    <motion.img 
                      key={photoIndex}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                      className="w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-700" 
                      alt="Professional portrait" 
                      src={PHOTOS[photoIndex]} 
                    />
                  </AnimatePresence>
                </div>
              </div>
              <div className="mt-12 space-y-6">
                <h2 className="text-4xl font-headline font-bold leading-none">{t('about.title1')} <span className="text-primary">{t('about.title2')}</span></h2>
                <p className="text-on-surface-variant leading-relaxed">
                  {t('about.desc')}
                </p>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-7 space-y-20">
            {/* Skill Stack Categorization */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              <div className="space-y-6">
                <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-primary">{t('about.lang')}</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm font-medium"><span className="w-1.5 h-1.5 bg-primary-container rounded-full"></span> Python / Go</li>
                  <li className="flex items-center gap-3 text-sm font-medium"><span className="w-1.5 h-1.5 bg-primary-container rounded-full"></span> Rust</li>
                  <li className="flex items-center gap-3 text-sm font-medium"><span className="w-1.5 h-1.5 bg-primary-container rounded-full"></span> TypeScript</li>
                  <li className="flex items-center gap-3 text-sm font-medium"><span className="w-1.5 h-1.5 bg-primary-container rounded-full"></span> SQL / NoSQL</li>
                </ul>
              </div>
              <div className="space-y-6">
                <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-primary">{t('about.frameworks')}</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm font-medium"><span className="w-1.5 h-1.5 bg-primary-container rounded-full"></span> React / Next.js</li>
                  <li className="flex items-center gap-3 text-sm font-medium"><span className="w-1.5 h-1.5 bg-primary-container rounded-full"></span> Node.js / Express</li>
                  <li className="flex items-center gap-3 text-sm font-medium"><span className="w-1.5 h-1.5 bg-primary-container rounded-full"></span> Django / FastAPI</li>
                  <li className="flex items-center gap-3 text-sm font-medium"><span className="w-1.5 h-1.5 bg-primary-container rounded-full"></span> gRPC / Protobuf</li>
                </ul>
              </div>
              <div className="space-y-6">
                <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-primary">{t('about.tools')}</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm font-medium"><span className="w-1.5 h-1.5 bg-primary-container rounded-full"></span> Docker / K8s</li>
                  <li className="flex items-center gap-3 text-sm font-medium"><span className="w-1.5 h-1.5 bg-primary-container rounded-full"></span> Terraform</li>
                  <li className="flex items-center gap-3 text-sm font-medium"><span className="w-1.5 h-1.5 bg-primary-container rounded-full"></span> AWS / GCP</li>
                  <li className="flex items-center gap-3 text-sm font-medium"><span className="w-1.5 h-1.5 bg-primary-container rounded-full"></span> CI/CD Pipelines</li>
                </ul>
              </div>
            </motion.div>

            {/* Career Trace Timeline */}
            <div className="space-y-12">
              <motion.h3 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-2xl font-headline font-bold"
              >
                {t('about.trace1')} <span className="text-primary-container">{t('about.trace2')}</span>
              </motion.h3>
              
              <div className="relative pl-8 border-l border-outline-variant/30 space-y-16">
                
                {[
                  {
                    period: '2021 — PRESENTE',
                    title: t('job.1.title'),
                    company: 'GlobalScale Systems',
                    desc: t('job.1.desc'),
                    active: true
                  },
                  {
                    period: '2018 — 2021',
                    title: t('job.2.title'),
                    company: 'DataStream Corp',
                    desc: t('job.2.desc'),
                    active: false
                  },
                  {
                    period: '2015 — 2018',
                    title: t('job.3.title'),
                    company: 'Incepto Solutions',
                    desc: t('job.3.desc'),
                    active: false
                  }
                ].map((job, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="relative group"
                  >
                    <div className={`absolute -left-[37px] top-0 w-4 h-4 rounded-full border-4 border-background transition-colors duration-300 ${job.active ? 'bg-primary-container group-hover:bg-primary' : 'bg-surface-variant group-hover:bg-primary/50'}`}></div>
                    <div className="space-y-2">
                      <span className={`text-[10px] font-mono uppercase ${job.active ? 'text-primary' : 'text-outline'}`}>{job.period}</span>
                      <h4 className="text-xl font-bold">{job.title}</h4>
                      <p className="text-sm text-primary/60 font-medium">{job.company}</p>
                      <p className="text-on-surface-variant text-sm leading-relaxed mt-4">
                        {job.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
                
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
