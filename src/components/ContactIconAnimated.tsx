import { motion } from "framer-motion";
import { AtSign, Phone, Mail, PointerIcon } from "lucide-react";

const cards = [
  { icon: AtSign, delay: 0.3 },
  { icon: Phone, delay: 0.5 },
  { icon: Mail, delay: 0.7 },
];

const popcornVariant = {
  hidden: { scale: 0, opacity: 0, rotate: -15 },
  visible: (delay: number) => ({
    scale: 1,
    opacity: 1,
    rotate: 0,
    transition: {
      type: "spring" as const,
      stiffness: 400,
      damping: 15,
      delay,
    },
  }),
};

const ContactIconAnimated = () => {
  return (
    <div className="relative w-[420px] h-[420px]">
      {/* @ card - top left */}
      <motion.div
        custom={cards[0].delay}
        variants={popcornVariant}
        initial="hidden"
        animate="visible"
        className="absolute top-0 left-0 w-[180px] h-[160px] rounded-2xl border-[3px] border-white/80 flex items-center justify-center"
      >
        <AtSign className="w-20 h-20 text-white/80" strokeWidth={2.2} />
      </motion.div>

      {/* Phone card - top right */}
      <motion.div
        custom={cards[1].delay}
        variants={popcornVariant}
        initial="hidden"
        animate="visible"
        className="absolute top-0 right-[40px] w-[180px] h-[160px] rounded-2xl border-[3px] border-white/80 flex items-center justify-center"
      >
        <Phone className="w-20 h-20 text-white/80" strokeWidth={2.2} />
      </motion.div>

      {/* Mail card - bottom left */}
      <motion.div
        custom={cards[2].delay}
        variants={popcornVariant}
        initial="hidden"
        animate="visible"
        className="absolute bottom-[40px] left-0 w-[180px] h-[160px] rounded-2xl border-[3px] border-white/80 flex items-center justify-center"
      >
        <Mail className="w-20 h-20 text-white/80" strokeWidth={2.2} />
      </motion.div>

      {/* Hand / Pointer - bottom right */}
      <motion.div
        custom={0.9}
        variants={popcornVariant}
        initial="hidden"
        animate="visible"
        className="absolute bottom-0 right-0"
      >
        <PointerIcon className="w-44 h-44 text-white" strokeWidth={1.8} />
      </motion.div>
    </div>
  );
};

export default ContactIconAnimated;
