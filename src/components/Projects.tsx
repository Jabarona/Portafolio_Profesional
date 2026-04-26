import { motion } from 'framer-motion';
import { Network, Lock, Smartphone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Projects = () => {
  const { t } = useLanguage();

  const projectsData = [
    {
      title: t('project.1.title'),
      desc: t('project.1.desc'),
      tech: ['React', 'Node.js', 'JavaScript', 'PostgreSQL', 'MercadoPago', 'Docker'],
      repoLink: 'https://github.com/Jabarona/TesscoChile',
      webLink: 'https://www.tesscochile.cl',
      icon: <Network className="w-10 h-10 text-primary-container" />,
      bgImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80"
    },
    {
      title: t('project.2.title'),
      desc: t('project.2.desc'),
      tech: ['Python', 'Django', 'PostgreSQL', 'Bootstrap', 'JavaScript'],
      repoLink: '#',
      webLink: '',
      icon: <Lock className="w-10 h-10 text-primary-container" />,
      bgImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
    },
    {
      title: t('project.3.title'),
      desc: t('project.3.desc'),
      tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'JavaScript'],
      repoLink: '#',
      webLink: '',
      icon: <Smartphone className="w-10 h-10 text-primary-container" />,
      bgImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80"
    }
  ];

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
            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6 tracking-tight">
              {t('projects.title1')} <span className="text-primary-container">{t('projects.title2')}</span>
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              {t('projects.subtitle')}
            </p>
          </div>
          <div className="flex gap-4">
            <div className="h-[1px] w-32 bg-outline-variant/30 hidden lg:block self-center mr-4"></div>
            <span className="text-xs font-mono uppercase tracking-widest text-primary">{t('projects.repoCount')}</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {projectsData.map((project, index) => {
            const isFeatured = index === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className={`group relative overflow-hidden bg-surface-container-highest rounded-xl p-8 transition-all border border-outline-variant/5 hover:border-primary/20 flex flex-col ${isFeatured ? 'md:col-span-12 min-h-[400px]' : 'md:col-span-6 min-h-[480px]'}`}
              >
                <img
                  className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale group-hover:grayscale-0 group-hover:opacity-30 transition-all duration-700"
                  alt="project background"
                  src={project.bgImage}
                />
                <div className={`absolute inset-0 z-0 ${isFeatured ? 'bg-gradient-to-t md:bg-gradient-to-r from-surface-container-highest via-surface-container-highest/90 to-surface-container-highest/20' : 'bg-gradient-to-t from-surface-container-highest via-surface-container-highest/90 to-surface-container-highest/20'}`}></div>

                <div className={`flex flex-col h-full justify-between gap-8 relative z-10 ${isFeatured ? 'w-full md:w-2/3' : 'w-full flex-1'}`}>
                  <div>
                    <div className="flex justify-between items-start mb-6 gap-4">
                      <h3 className={`${isFeatured ? 'text-3xl' : 'text-2xl'} font-headline font-bold leading-tight`}>{project.title}</h3>
                      <div className="shrink-0">{project.icon}</div>
                    </div>
                    <p className={`text-on-surface-variant text-sm leading-relaxed ${isFeatured ? 'mb-8 max-w-2xl' : 'mb-6'}`}>
                      {project.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map(tech => (
                        <span key={tech} className="px-2 py-1 bg-surface-container-low text-[10px] font-bold uppercase tracking-wider text-primary rounded">{tech}</span>
                      ))}
                    </div>
                  </div>

                  <div className={`flex ${isFeatured ? 'flex-col sm:flex-row gap-4 mt-8' : 'flex-col gap-3 mt-auto'}`}>
                    {project.repoLink && (
                      <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className={`block py-3 bg-primary text-on-primary font-bold text-xs uppercase tracking-widest rounded transition-all hover:bg-primary-container text-center ${isFeatured ? 'px-6' : 'w-full'}`}>{t('projects.viewArchitecture')}</a>
                    )}
                    {project.webLink && (
                      <a href={project.webLink} target="_blank" rel="noopener noreferrer" className={`block py-3 border border-outline-variant/30 text-primary font-bold text-xs uppercase tracking-widest rounded hover:bg-surface-container-high transition-all text-center ${isFeatured ? 'px-6' : 'w-full'}`}>{t('projects.documentation')}</a>
                    )}
                  </div>
                </div>
                <div className="absolute -inset-4 bg-primary/0 opacity-0 group-hover:opacity-10 transition-opacity duration-1000 -z-0 blur-2xl"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
