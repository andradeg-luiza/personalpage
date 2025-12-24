import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="
        py-32 px-6 max-w-7xl mx-auto
        relative
      "
    >
      {/* Glow decorativo */}
      <div
        className="
          absolute bottom-10 right-0 w-72 h-72
          bg-pink-500/20 blur-[120px] rounded-full pointer-events-none
        "
      ></div>

      {/* Título */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="
          text-4xl font-bold text-white mb-12
          drop-shadow-[0_0_12px_rgba(255,77,184,0.35)]
          relative z-10
        "
      >
        Get in <span className="text-pink-400">Touch</span>
      </motion.h2>

      {/* Card de contato */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
        viewport={{ once: true }}
        className="
          bg-white/5 backdrop-blur-xl
          border border-white/10
          rounded-xl p-10
          shadow-[0_0_20px_rgba(255,77,184,0.15)]
          hover:shadow-[0_0_30px_rgba(255,77,184,0.35)]
          transition-all
          relative z-10
          max-w-xl
        "
      >
        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          I'm always open to discussing new opportunities, collaborations, or
          answering any questions you may have. Feel free to reach out.
        </p>

        {/* Botão de email */}
        <motion.a
          href="mailto:seuemail@gmail.com"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="
            inline-block
            bg-gradient-to-r from-pink-500 to-purple-600
            hover:from-pink-400 hover:to-purple-500
            text-white px-8 py-3 rounded-md text-lg font-semibold
            shadow-[0_0_20px_rgba(255,77,184,0.45)]
            hover:shadow-[0_0_30px_rgba(255,77,184,0.6)]
            transition-all
          "
        >
          Send me an email →
        </motion.a>
      </motion.div>
    </section>
  );
}