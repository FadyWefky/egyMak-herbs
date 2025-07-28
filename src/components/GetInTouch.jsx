
const contactVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";

export default function GetInTouch() {
  const { t } = useLanguage();
  const contacts = [
    {
      icon: "📍",
      label: t("location"),
      value: t("address"),
    },
    {
      icon: "📞",
      label: t("phone"),
      value: t("phoneNumber"),
      href: `tel:${t("phoneNumber")}`,
    },
    {
      icon: "✉️",
      label: t("email"),
      value: t("emailAddress"),
      href: `mailto:${t("emailAddress")}`,
    },
  ];
  const socials = [
    {
      icon: "fab fa-facebook-f",
      label: t("facebook"),
      href: "https://www.facebook.com/egymak",
    },
    {
      icon: "fab fa-instagram",
      label: t("instagram"),
      href: "https://www.instagram.com/egymak",
    },
    {
      icon: "fab fa-twitter",
      label: t("twitter"),
      href: "https://twitter.com/egymak",
    },
    {
      icon: "fab fa-linkedin-in",
      label: t("linkedin"),
      href: "https://www.linkedin.com/company/egymak",
    },
  ];

  return (
    <section className="max-w-5xl mx-auto py-20 px-4 flex flex-col items-center">
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
          {t("getInTouch")}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-700 mx-auto rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full mb-14">
        {contacts.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.7, delay: index * 0.18, type: "spring", stiffness: 80, damping: 18 }}
            className="relative bg-white/90 backdrop-blur-lg border border-green-100 shadow-xl rounded-2xl px-7 py-8 text-base md:text-lg text-gray-800 flex flex-col items-center gap-2 min-h-[120px] hover:scale-[1.03] transition-transform"
            style={{ zIndex: 10 - index }}
          >
            <span className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-green-200 to-green-400 shadow-lg text-3xl">
              {item.icon}
            </span>
            <span className="font-semibold text-green-700 mt-10 mb-1">{item.label}</span>
            {item.href ? (
              <a href={item.href} className="text-green-900 hover:underline break-all">
                {item.value}
              </a>
            ) : (
              <span className="text-green-900 break-all">{item.value}</span>
            )}
          </motion.div>
        ))}
      </div>

      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h3 className="text-lg font-semibold text-green-700 mb-6">
          {t("socialMedia")}
        </h3>
        <div className="flex justify-center gap-8">
          {socials.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.7, delay: index * 0.18, type: "spring", stiffness: 80, damping: 18 }}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white/90 shadow-lg text-2xl text-green-600 hover:bg-green-100 hover:text-green-800 transition-colors"
              title={social.label}
              style={{ zIndex: 10 - index }}
            >
              <i className={social.icon}></i>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}