import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/useLanguage";

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
      description: t('getintouch.subtitle'),
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
      description: t('getintouch.subtitle'),
      value: t('getintouch.address'),
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
      ),
      label: t('getintouch.phone'),
      description: t('getintouch.subtitle'),
      value: t('getintouch.phoneNumber'),
      href: `tel:${t('getintouch.phoneNumber')}`,
    },
  ];

  const socials = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
        </svg>
      ),
      label: t('getintouch.facebook'),
      href: "https://www.facebook.com/egymak",
      color: "bg-blue-600",
      hover: "hover:bg-blue-700",
      shadow: "shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50",
      border: "border-2 border-blue-400",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.326 3.608 1.3.975.975 1.239 2.242 1.301 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.326 2.633-1.3 3.608-.975.975-2.242 1.239-3.608 1.301-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.326-3.608-1.3-.975-.975-1.239-2.242-1.301-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.326-2.633 1.3-3.608.975-.975 2.242-1.239 3.608-1.301 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.67.014-4.947.072-1.314.064-2.568.304-3.51.668-.943.364-1.75.84-2.553 1.643-1.006 1.006-1.279 1.61-1.643 2.553-.364.942-.604 2.196-.668 3.51-.058 1.277-.072 1.688-.072 4.947s.014 3.67.072 4.947c.064 1.314.304 2.568.668 3.51.364.943.84 1.75 1.643 2.553 1.006 1.006 1.61 1.279 2.553 1.643.942.364 2.196.604 3.51.668 1.277.058 1.688.072 4.947.072s3.67-.014 4.947-.072c1.314-.064 2.568-.304 3.51-.668.943-.364 1.75-.84 2.553-1.643 1.006-1.006 1.279-1.61 1.643-2.553.364-.942.604-2.196.668-3.51.058-1.277.072-1.688.072-4.947s-.014-3.67-.072-4.947c-.064-1.314-.304-2.568-.668-3.51-.364-.943-.84-1.75-1.643-2.553-1.006-1.006-1.61-1.279-2.553-1.643-.942-.364-2.196-.604-3.51-.668-1.277-.058-1.688-.072-4.947-.072z" />
          <path d="M12 7.38c-2.968 0-5.375 2.408-5.375 5.375s2.407 5.375 5.375 5.375 5.375-2.407 5.375-5.375-2.407-5.375-5.375-5.375zm0 8.813c-2.202 0-3.99-1.788-3.99-3.99 0-2.202 1.788-3.99 3.99-3.99 2.202 0 3.99 1.788 3.99 3.99 0 2.202-1.788 3.99-3.99 3.99zm8.813-8.813c0 .964-.782 1.745-1.745 1.745-.963 0-1.745-.781-1.745-1.745 0-.964.782-1.745 1.745-1.745.963 0 1.745.781 1.745 1.745z" />
        </svg>
      ),
      label: t('getintouch.instagram'),
      href: "https://www.instagram.com/egymak",
      color: "bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600",
      hover: "hover:from-yellow-500 hover:via-pink-600 hover:to-purple-700",
      shadow: "shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50",
      border: "border-2 border-pink-400",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482A13.87 13.87 0 011.671 3.149a4.959 4.959 0 001.523 6.574 4.903 4.903 0 01-2.23-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 19.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 4.557z" />
        </svg>
      ),
      label: t('getintouch.twitter'),
      href: "https://twitter.com/egymak",
      color: "bg-sky-500",
      hover: "hover:bg-sky-600",
      shadow: "shadow-lg shadow-sky-500/30 hover:shadow-sky-500/50",
      border: "border-2 border-sky-400",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.368-.247-2.433-1.897-2.433-1.953 0-2.25 1.42-2.25 2.893v5.144h-3v-11h2.875v1.645h.04c.4-.675 1.365-1.897 3.535-1.897 3.792 0 4.5 2.241 4.5 5.33v6.522z" />
        </svg>
      ),
      label: t('getintouch.linkedin'),
      href: "https://www.linkedin.com/company/egymak",
      color: "bg-blue-700",
      hover: "hover:bg-blue-800",
      shadow: "shadow-lg shadow-blue-700/30 hover:shadow-blue-700/50",
      border: "border-2 border-blue-600",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
          <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM10.1 15.289V8.711L15.65 12l-5.55 3.289z" />
        </svg>
      ),
      label: t('getintouch.youtube'),
      href: "https://youtube.com/egymak",
      color: "bg-red-600",
      hover: "hover:bg-red-700",
      shadow: "shadow-lg shadow-red-500/30 hover:shadow-red-500/50",
      border: "border-2 border-red-400",
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-900">
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
              <span className="p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-700">
                {item.icon}
              </span>
              <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">{item.label}</h2>
              <p className="mt-2 text-gray-500 dark:text-gray-400">{item.description}</p>
              {item.href ? (
                <a
                  href={item.href}
                  className="mt-2 text-blue-500 dark:text-blue-500 hover:underline font-semibold"
                >
                  {item.value}
                </a>
              ) : (
                <p className="mt-2 text-blue-500 dark:text-blue-400 font-semibold">{item.value}</p>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Social Media Section */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
       

          <div className="flex flex-wrap justify-center gap-6 px-4">
            {socials.map((social, index) => (
              <motion.div
                key={social.label}
                className="relative group"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  type: "spring", 
                  stiffness: 120, 
                  damping: 15, 
                  delay: index * 0.1 
                }}
              >
                <motion.a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative flex items-center justify-center w-16 h-16 rounded-2xl ${social.color} ${social.hover} ${social.shadow} ${social.border} transition-all duration-300 group-hover:scale-110`}
                  title={social.label}
                  aria-label={social.label}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, 10, -10, 0],
                    transition: { duration: 0.6 }
                  }}
                >
                  {social.icon}
                 
                </motion.a>
                <motion.div 
                  className="absolute inset-0 rounded-2xl border-2 border-white opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1.1 }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 