import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/useLanguage";
import SectionTitle from "./SectionTitle";
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { SOCIAL_URLS } from "../constants/social";


export default function GetInTouch() {
  const { t, language } = useLanguage();

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
      { icon: Facebook, href: SOCIAL_URLS.facebook, name: t('getintouch.facebook') },
      { icon: Instagram, href: SOCIAL_URLS.instagram, name: t('getintouch.instagram') },
      { icon: Twitter, href: SOCIAL_URLS.twitter, name: t('getintouch.twitter') }
    ];

  return (
    <section id="contact" className="bg-muted/30 mb-6" dir={language === "ar" ? "rtl" : "ltr"}>
      <div className="container px-6 py-8 mx-auto">
        {/* Header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionTitle title={t('getintouch.title')} align="center" className="!mb-4" />
          <p className="mx-auto max-w-xl text-center text-muted-foreground">{t('getintouch.subtitle')}</p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          className="flex flex-row justify-center gap-8 md:gap-10 mt-10 flex-wrap"
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
              className="flex flex-col items-center justify-center text-center p-6 rounded-2xl shadow-xl border border-border/80 bg-card w-64 transition-shadow duration-300"
              whileHover={{ scale: 1.05, boxShadow: "0 16px 40px hsla(210, 82%, 22%, 0.12)" }}
            >
              <span className="p-3 text-primary rounded-full bg-accent/15">
                {item.icon}
              </span>
              <h2 className="mt-4 text-lg font-bold text-primary">{item.label}</h2>
              <p className="mt-2 text-muted-foreground">{item.description}</p>
              {item.href ? (
                <a
                  href={item.href}
                  className="mt-2 text-accent hover:text-primary hover:underline font-semibold transition-colors duration-300"
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
    <h4 className="text-2xl font-semibold text-primary uppercase tracking-wider mb-4">
      {t('followUs')}
    </h4>
    <div className="flex gap-3 justify-center flex-wrap">
      {socialLinks.map((social, index) => (
        <motion.a
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="
            w-12 h-12 rounded-2xl flex items-center justify-center
            bg-secondary text-foreground border border-border/60
            hover:bg-primary hover:text-primary-foreground hover:border-primary
            transition-colors duration-300
          "
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
