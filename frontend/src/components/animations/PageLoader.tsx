import { motion, useReducedMotion } from "motion/react";

const cookieImage = "/images/LOGO/galletas.png";

function PageLoader() {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[180] bg-[#f4ede3]"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
      />
    );
  }

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[180] overflow-hidden"
    >
      {/* MITAD IZQUIERDA */}
      <motion.div
        className="absolute inset-y-0 left-0 w-1/2 overflow-hidden bg-[#f4ede3]"
        initial={{ x: "0%" }}
        animate={{ x: "-105%" }}
        transition={{
          duration: 0.72,
          delay: 0.34,
          ease: [0.76, 0, 0.24, 1],
        }}
      >
        <motion.img
          src={cookieImage}
          alt=""
          draggable={false}
          className="absolute left-full top-1/2 w-[min(78vw,620px)] max-w-none -translate-x-1/2 -translate-y-1/2 select-none drop-shadow-[0_24px_34px_rgba(77,42,25,0.22)] sm:w-[min(58vw,680px)]"
          initial={{ scale: 0.82, rotate: -2, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{
            duration: 0.34,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </motion.div>

      {/* MITAD DERECHA */}
      <motion.div
        className="absolute inset-y-0 right-0 w-1/2 overflow-hidden bg-[#f4ede3]"
        initial={{ x: "0%" }}
        animate={{ x: "105%" }}
        transition={{
          duration: 0.72,
          delay: 0.34,
          ease: [0.76, 0, 0.24, 1],
        }}
      >
        <motion.img
          src={cookieImage}
          alt=""
          draggable={false}
          className="absolute left-0 top-1/2 w-[min(78vw,620px)] max-w-none -translate-x-1/2 -translate-y-1/2 select-none drop-shadow-[0_24px_34px_rgba(77,42,25,0.22)] sm:w-[min(58vw,680px)]"
          initial={{ scale: 0.82, rotate: 2, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{
            duration: 0.34,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </motion.div>

      {/* DESTELLO CENTRAL */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-28 w-px -translate-x-1/2 -translate-y-1/2 bg-white/80 shadow-[0_0_45px_16px_rgba(255,255,255,0.38)]"
        initial={{ opacity: 0, scaleY: 0.2 }}
        animate={{
          opacity: [0, 1, 0],
          scaleY: [0.2, 1, 1.5],
        }}
        transition={{
          duration: 0.55,
          delay: 0.22,
          ease: "easeOut",
        }}
      />
    </div>
  );
}

export default PageLoader;
