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

        {/* IMAGE COLUMN — no border, no rounding */}
        <div className="w-full h-full">
          <img
            src="src/assets/images/dinolab-hero.png"
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
            A scientific exploration game where you travel through realistic
            prehistoric biomes to discover, study, and document real dinosaur
            species. Your ultimate goal is to complete the Primeval Encyclopedia.
          </p>

          <ul className="text-[#D9C7B8]/90 space-y-2 text-sm">
            <li>• Customize your explorer and begin your journey</li>
            <li>• Calm, observe, and bond with dinosaurs through the Enchantment System</li>
            <li>• Collect Scientific Cards with real-world data and illustrations</li>
            <li>• Explore biomes inspired by paleoclimate research</li>
            <li>• Face dynamic weather events that change gameplay</li>
            <li>• Build and upgrade your base: camp, lab, and care area</li>
            <li>• Experience realistic dinosaur behavior and growth</li>
            <li>• Progress through skills, tools, knowledge, and reputation</li>
            <li>• Fair monetization: cosmetics only, no dinosaur skins</li>
          </ul>

          <p className="text-[#C97A50] font-medium pt-2">
            Discover. Explore. Learn.
          </p>
        </motion.div>
      </div>
    </section>
  );
}