import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Send, CheckCircle, MapPin, Code2, Briefcase, Mail } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { useLanguage } from '../context/LanguageContext';
import santiagoMap from '../assets/Santiago.webp';

export const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nombre || !formData.email || !formData.mensaje) return;

    setIsSubmitting(true);
    try {
      await addDoc(collection(db, 'mensajes'), {
        ...formData,
        timestamp: serverTimestamp()
      });

      const web3FormsData = {
        access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
        subject: "Nuevo mensaje de contacto desde tu Portafolio",
        from_name: "Portafolio Web",
        ...formData
      };

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(web3FormsData)
      });

      const json = await res.json();
      if (!json.success) {
        console.error("Error desde Web3Forms:", json);
      }

      setIsSuccess(true);
      setFormData({ nombre: '', email: '', telefono: '', mensaje: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error('Error al enviar mensaje:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-32 px-8 bg-surface-container-lowest" id="contacto">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-xl mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="p-3 bg-surface-container-high rounded-lg border border-outline-variant/10">
              <Terminal className="w-6 h-6 text-primary-container" />
            </div>
            <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tight">
              {t('contact.title1')} <span className="text-primary-container">{t('contact.title2')}</span>
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-on-surface-variant text-lg"
          >
            {t('contact.desc')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="bg-surface-container-low p-8 md:p-12 rounded-xl border border-outline-variant/10 shadow-2xl">
              <form className="space-y-8" onSubmit={handleSubmit}>
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-primary-container/20 border border-primary-container text-on-surface rounded-lg flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary-container" />
                    <span className="font-mono text-sm">{t('contact.success')}</span>
                  </motion.div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2 relative group">
                    <label className="text-[10px] font-mono text-primary uppercase tracking-widest bg-surface-container-low px-2 absolute -top-2 left-4 z-10">{t('contact.name')}</label>
                    <input 
                      type="text" 
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      className="w-full bg-surface-container-high border border-outline-variant/20 rounded-lg px-6 py-4 text-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all group-hover:border-outline-variant/40"
                    />
                  </div>
                  <div className="space-y-2 relative group">
                    <label className="text-[10px] font-mono text-primary uppercase tracking-widest bg-surface-container-low px-2 absolute -top-2 left-4 z-10">{t('contact.email')}</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-surface-container-high border border-outline-variant/20 rounded-lg px-6 py-4 text-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all group-hover:border-outline-variant/40"
                    />
                  </div>
                </div>

                <div className="space-y-2 relative group">
                  <label className="text-[10px] font-mono text-primary uppercase tracking-widest bg-surface-container-low px-2 absolute -top-2 left-4 z-10">{t('contact.phone')}</label>
                  <input 
                    type="tel" 
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    className="w-full bg-surface-container-high border border-outline-variant/20 rounded-lg px-6 py-4 text-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all group-hover:border-outline-variant/40"
                  />
                </div>

                <div className="space-y-2 relative group">
                  <label className="text-[10px] font-mono text-primary uppercase tracking-widest bg-surface-container-low px-2 absolute -top-2 left-4 z-10">{t('contact.msg')}</label>
                  <textarea 
                    rows={5}
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    className="w-full bg-surface-container-high border border-outline-variant/20 rounded-lg px-6 py-4 text-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none group-hover:border-outline-variant/40"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex justify-center items-center gap-3 bg-gradient-to-r from-primary to-primary-container text-on-primary py-4 rounded-lg font-bold uppercase tracking-widest text-xs hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-on-primary border-t-transparent rounded-full animate-spin"></div>
                      {t('contact.sending')}
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      {t('contact.send')}
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="bg-surface-container-low rounded-xl overflow-hidden h-72 relative grayscale hover:grayscale-0 transition-all duration-700 border border-outline-variant/10 group">
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-background/60 backdrop-blur-[2px] group-hover:bg-background/20 transition-all duration-500">
                <MapPin className="w-10 h-10 text-primary-container mb-4" />
                <p className="text-sm font-bold uppercase tracking-widest">Santiago, Chile</p>
                <p className="text-xs text-on-surface font-mono">33.4489° S, 70.6693° W</p>
              </div>
              <img
                className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
                alt="Map of Santiago"
                src={santiagoMap}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Code2, label: 'GitHub', value: 'Ver Repositorio', link: 'https://github.com/Jabarona' },
                { icon: Briefcase, label: 'LinkedIn', value: 'Ver Perfil', link: 'https://www.linkedin.com/in/jarvi-barona-burbano-4a0998252' },
                { icon: FaWhatsapp, label: 'WhatsApp', value: 'Enviar Mensaje', link: 'https://wa.me/5693108550' },
                { icon: Mail, label: 'Email', value: 'Escribir Correo', link: 'mailto:jarvistevel@hotmail.com' }
              ].map((social, idx) => {
                const Icon = social.icon;
                const isMailto = social.link.startsWith('mailto:');
                return (
                  <motion.a
                    key={idx}
                    href={social.link}
                    target={isMailto ? "_self" : "_blank"}
                    rel={isMailto ? "" : "noopener noreferrer"}
                    whileHover={{ y: -2 }}
                    className="p-6 bg-surface-container-low rounded-xl border border-outline-variant/5 flex items-center gap-4 group transition-all hover:bg-surface-container-high hover:border-primary/20 cursor-pointer"
                  >
                    <Icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="text-[10px] font-bold text-outline uppercase tracking-widest">{social.label}</p>
                      <p className="text-sm font-mono text-on-surface-variant group-hover:text-primary-container transition-colors">{social.value}</p>
                    </div>
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
