import { motion } from "framer-motion";

export default function DinoLabCompact() {
  return (
    <section
      id="dinolab"
      className="relative p-10 max-w-5xl mx-auto rounded-xl
                 bg-white/10 backdrop-blur-xl border border-[#C97A50]/40
                 shadow-[0_0_35px_rgba(201,122,80,0.35)]"
    >
      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* IMAGE COLUMN — agora carregando do public */}
        <div className="w-full h-full">
          <img
            src="/images/dinolab-hero.png"
            alt="Dino Expedition"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* TEXT COLUMN */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h3 className="text-3xl font-bold text-[#C97A50]">
            Dino Expedition
          </h3>

          <p className="text-[#D9C7B8]/90 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
            sapien vel augue fermentum tincidunt. Integer id lorem non urna
            facilisis volutpat.
          </p>

          <ul className="text-[#D9C7B8]/90 space-y-2 text-sm">
            <li>• Lorem ipsum dolor sit amet</li>
            <li>• Consectetur adipiscing elit sed do</li>
            <li>• Eiusmod tempor incididunt ut labore</li>
            <li>• Dolore magna aliqua enim ad minim</li>
            <li>• Quis nostrud exercitation ullamco</li>
            <li>• Laboris nisi ut aliquip ex ea commodo</li>
            <li>• Duis aute irure dolor in reprehenderit</li>
            <li>• Excepteur sint occaecat cupidatat non</li>
            <li>• Proident sunt in culpa qui officia</li>
          </ul>

          <p className="text-[#C97A50] font-medium pt-2">
            Lorem ipsum dolor sit amet.
          </p>
        </motion.div>
      </div>
    </section>
  );
}