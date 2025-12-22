import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/useLanguage";
import { Leaf, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';


export default function GetInTouch() {
  const { t } = useLanguage();

  const contacts = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      ),
      label: t('getintouch.email'),
      description: t('getintouch.subtitleMail'),
      value: t('getintouch.emailAddress'),
      href: `mailto:${t('getintouch.emailAddress')}`,
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      ),
      label: t('getintouch.location'),
      description: t('getintouch.subtitleLocation'),
      value: t('getintouch.address'),
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
      ),
      label: t('getintouch.phone'),
      description: t('getintouch.subtitlePhone'),
      value: t('getintouch.phoneNumber'),
      href: `tel:${t('getintouch.phoneNumber')}`,
    },
  ];



  const socialLinks = [
      { icon: Facebook, href: '#', color: 'hover:text-blue-500' },
      { icon: Instagram, href: '#', color: 'hover:text-pink-500' },
      { icon: Twitter, href: '#', color: 'hover:text-blue-400' }
    ];

  return (
    <section id="contact" className="bg-background mb-6">
      <div className="container px-6 py-8 mx-auto">
        {/* Header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className={`text-center mb-16`}>
            <h2 className="text-4xl md:text-5xl font-bold herb-gradient-text mb-4">
              {t('getintouch.title')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          <p className="my-2 text-gray-500 dark:text-gray-400">{t('getintouch.subtitle')}</p>
          </div>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          className="flex flex-row justify-center gap-10 space-x-6 mt-10 flex-wrap"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.2 }}
        >
          {contacts.map((item, index) => (
            <motion.div
              key={item.label}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
              }}
              animate={{
                y: [0, -12, 0],
                scale: [1, 1.03, 1],
                transition: {
                  repeat: Infinity,
                  duration: 3,
                  delay: index * 0.4,
                  ease: "easeInOut",
                },
              }}
              className={`flex flex-col items-center justify-center text-center p-6 rounded-2xl shadow-xl bg-clip-padding bg-gradient-to-r ${item.gradient} w-64`}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" }}
            >
              <span className="p-3 text-primary rounded-full bg-accent/20">
                {item.icon}
              </span>
              <h2 className="mt-4 text-lg font-bold text-primary">{item.label}</h2>
              <p className="mt-2 text-muted-foreground">{item.description}</p>
              {item.href ? (
                <a
                  href={item.href}
                  className="mt-2 text-primary hover:text-primary/80 hover:underline font-semibold transition-colors duration-300"
                >
                  {item.value}
                </a>
              ) : (
                <p className="mt-2 text-primary font-semibold">{item.value}</p>
              )}
            </motion.div>
          ))}
        </motion.div>

      {/* Social Media Section */}
<motion.div 
  className="mt-16 text-center"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  <div className="inline-flex flex-col items-center">
    <h4 className="text-2xl font-medium text-primary uppercase tracking-wider mb-4">
      {t('followUs')}
    </h4>
    <div className="flex gap-3 space-x-6">
      {socialLinks.map((social, index) => (
        <motion.a
          key={index}
          href={social.href}
          className={`
            w-12 h-12 rounded-2xl flex items-center justify-center
            bg-secondary text-foreground
            hover:bg-primary hover:text-primary-foreground
            transition-colors duration-300
          `}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
          aria-label={social.name}
        >
          <social.icon className="w-7 h-7" />
        </motion.a>
      ))}
    </div>
  </div>
</motion.div>
      </div>
    </section>
  );
} 