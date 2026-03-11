import { Phone } from "lucide-react";

const ClickToCall = () => {
  return (
    <a
      href="tel:+33669209788"
      className="fixed bottom-[5.5rem] right-6 z-40 md:hidden w-14 h-14 rounded-full shadow-[0_8px_25px_-5px_hsl(145_60%_30%/0.4)] flex items-center justify-center hover:scale-110 active:scale-95 transition-transform"
      style={{ background: "linear-gradient(135deg, hsl(145 60% 40%), hsl(145 60% 25%))" }}
      aria-label="Appeler KF Services"
    >
      <Phone className="w-6 h-6 text-white" />
    </a>
  );
};

export default ClickToCall;
