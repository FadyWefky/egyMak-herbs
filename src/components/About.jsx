import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/useLanguage";
import aboutImage from "../assets/about.jpeg"; 

const aboutVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const paperVariants = {
  hidden: { opacity: 0, y: 60, rotate: -8, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      delay: i * 0.25,
      type: "spring",
      stiffness: 120,
    },
  }),
};

export default function About() {
  const { t } = useLanguage();
  const alt = t("aboutImageAlt");
  const papers = [
    t("aboutParagraph1"),
    t("aboutParagraph2"),
    t("aboutParagraph3"),
  ];
  return (
    <section className="max-w-5xl mx-auto py-20 px-4 flex flex-col md:flex-row items-center gap-14">
      <motion.div
        className="flex-1"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={aboutVariants}
      >

        <div className="mb-20 text-center">
            
          <h2 className="text-4xl md:text-5xl font-bold herb-gradient-text mb-4">
          {t("aboutTitle")} 
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col gap-8">
          {papers.map((text, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={paperVariants}
              className="relative bg-card/80 border border-border shadow-xl rounded-2xl my-4 px-4 py-6 text-lg text-foreground backdrop-blur-lg overflow-hidden"
              style={{ zIndex: 10 - i, boxShadow: `0 12px 40px 0 hsla(210, 82%, 22%, 0.1)` }}
            >
              <span className="absolute start-4 top-4 w-8 h-8 bg-accent/15 rounded-full shadow-inner -rotate-12" style={{ zIndex: -1, opacity: 0.85 }} />
              {text}
            </motion.div>
          ))}
        </div>
      </motion.div>
      <motion.div
        className="flex-1 flex justify-center items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={aboutVariants}
      >
        <motion.img
          src={aboutImage}
          alt={alt}
          className="rounded-xl shadow-2xl w-full max-w-md object-cover border-4 border-primary/20"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
        />
      </motion.div>
    </section>
  );
}
