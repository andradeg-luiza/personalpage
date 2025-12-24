import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 max-w-7xl mx-auto flex flex-col items-start"
    >
      <h2 className="text-4xl font-bold text-white mb-6">
        Let's <span className="text-pink-400">Connect</span>
      </h2>

      <p className="text-gray-300 text-lg max-w-xl leading-relaxed mb-10">
        I'm always open to new opportunities, collaborations, or just a friendly
        chat. Feel free to reach out through my social networks or send me a
        message.
      </p>

      {/* Social Icons */}
      <div className="flex items-center gap-6 mb-10">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-pink-400 transition-colors text-2xl"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-pink-400 transition-colors text-2xl"
        >
          <FaInstagram />
        </a>

        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-pink-400 transition-colors text-2xl"
        >
          <FaFacebook />
        </a>
      </div>

      {/* CTA Button */}
      <a
        href="mailto:seuemail@gmail.com"
        className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-md text-lg font-semibold transition-colors"
      >
        Send me an email
      </a>
    </section>
  );
}