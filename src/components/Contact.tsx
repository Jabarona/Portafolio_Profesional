import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Code2, Briefcase, MessageCircle, Mail, CheckCircle2 } from 'lucide-react';
import santiagoMap from '../assets/Santiago.webp';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';

export const Contact = () => {
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
      // 1. Guardar en Firebase
      await addDoc(collection(db, 'mensajes'), {
        ...formData,
        timestamp: serverTimestamp()
      });

      // 2. Enviar correo vía Web3Forms
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
        alert("El mensaje se guardó en la base de datos, pero hubo un problema enviando el correo. Revisa la consola.");
      }

      setIsSuccess(true);
      setFormData({ nombre: '', email: '', telefono: '', mensaje: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error('Error al enviar mensaje:', error);
      alert('Hubo un error al enviar el mensaje. Por favor intenta de nuevo.');
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-headline font-bold mb-6">Establecer <span className="text-primary-container">Conexión</span></h2>
          <p className="text-on-surface-variant max-w-xl mx-auto">
            ¿Interesado en colaboración, consultoría técnica, o simplemente discutir el futuro de la arquitectura de sistemas? Contáctame a través de la terminal abajo.
          </p>
        </motion.div>

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
                    <CheckCircle2 className="w-5 h-5 text-primary-container" />
                    <span className="font-mono text-sm">Transmisión completada exitosamente.</span>
                  </motion.div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-primary">Identidad</label>
                    <input
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      className="w-full bg-surface-container-lowest border-none focus:ring-1 focus:ring-primary-container p-4 text-on-surface rounded placeholder:text-outline/30 font-mono text-sm transition-all"
                      placeholder="Nombre Completo"
                      type="text"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-primary">Email</label>
                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-surface-container-lowest border-none focus:ring-1 focus:ring-primary-container p-4 text-on-surface rounded placeholder:text-outline/30 font-mono text-sm transition-all"
                      placeholder="Correo Electrónico"
                      type="email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-primary">Numero de Telefono (Opcional)</label>
                  <input
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    className="w-full bg-surface-container-lowest border-none focus:ring-1 focus:ring-primary-container p-4 text-on-surface rounded placeholder:text-outline/30 font-mono text-sm transition-all"
                    placeholder="123456789"
                    type="tel"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-primary">Transmisión</label>
                  <textarea
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    className="w-full bg-surface-container-lowest border-none focus:ring-1 focus:ring-primary-container p-4 text-on-surface rounded placeholder:text-outline/30 font-mono text-sm transition-all resize-none"
                    placeholder="Contenido del mensaje..."
                    rows={6}
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary font-headline font-bold uppercase tracking-[0.2em] rounded shadow-lg shadow-primary-container/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Procesando...' : 'Ejecutar Envío'}
                </motion.button>
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
                { icon: Code2, label: 'GitHub', value: '/LogicalArch' },
                { icon: Briefcase, label: 'LinkedIn', value: '/in/logarch' },
                { icon: MessageCircle, label: 'X / Twitter', value: '@logarch_dev' },
                { icon: Mail, label: 'Email', value: 'root@sys.io' }
              ].map((social, idx) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={idx}
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
