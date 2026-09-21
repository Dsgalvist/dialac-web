import { motion, useReducedMotion } from "motion/react";

const cookieImage = "/images/LOGO/galletas.png";

const crumbs = [
  { x: -172, y: -106, size: 8, delay: 0.04 },
  { x: 164, y: -82, size: 6, delay: 0.08 },
  { x: -142, y: 112, size: 5, delay: 0.12 },
  { x: 180, y: 96, size: 9, delay: 0.16 },
  { x: -212, y: 16, size: 6, delay: 0.2 },
  { x: 218, y: 6, size: 5, delay: 0.24 },
];

function PageLoaderOption2() {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[180] bg-[#f3e8dc]"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
      />
    );
  }

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[180] overflow-hidden [perspective:1400px]"
      initial={{ opacity: 1 }}
      animate={{ opacity: [1, 1, 0] }}
      transition={{
        duration: 1.48,
        times: [0, 0.88, 1],
        ease: "easeOut",
      }}
    >
      {/* PUERTA IZQUIERDA */}
      <motion.div
        className="absolute inset-y-0 left-0 w-1/2 origin-left overflow-hidden bg-[#f3e8dc] [backface-visibility:hidden]"
        initial={{ rotateY: 0 }}
        animate={{ rotateY: 92 }}
        transition={{
          duration: 0.82,
          delay: 0.52,
          ease: [0.76, 0, 0.24, 1],
        }}
      >
        <div className="absolute -right-28 top-1/2 h-[34rem] w-[34rem] -translate-y-1/2 rounded-full border-[70px] border-dialac-brown/[0.06]" />

        <motion.img
          src={cookieImage}
          alt=""
          draggable={false}
          className="absolute left-full top-1/2 w-[min(80vw,650px)] max-w-none -translate-x-1/2 -translate-y-1/2 select-none drop-shadow-[0_26px_38px_rgba(74,39,21,0.28)] sm:w-[min(57vw,700px)]"
          initial={{ opacity: 0, scale: 0.68, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </motion.div>

      {/* PUERTA DERECHA */}
      <motion.div
        className="absolute inset-y-0 right-0 w-1/2 origin-right overflow-hidden bg-[#ead4c0] [backface-visibility:hidden]"
        initial={{ rotateY: 0 }}
        animate={{ rotateY: -92 }}
        transition={{
          duration: 0.82,
          delay: 0.52,
          ease: [0.76, 0, 0.24, 1],
        }}
      >
        <div className="absolute -left-28 top-1/2 h-[34rem] w-[34rem] -translate-y-1/2 rounded-full border-[70px] border-white/20" />

        <motion.img
          src={cookieImage}
          alt=""
          draggable={false}
          className="absolute left-0 top-1/2 w-[min(80vw,650px)] max-w-none -translate-x-1/2 -translate-y-1/2 select-none drop-shadow-[0_26px_38px_rgba(74,39,21,0.28)] sm:w-[min(57vw,700px)]"
          initial={{ opacity: 0, scale: 0.68, rotate: 10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </motion.div>

      {/* MIGAS FLOTANTES */}
      <motion.div
        className="absolute inset-0 z-20"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.22, delay: 0.66 }}
      >
        {crumbs.map((crumb, index) => (
          <motion.span
            key={`${crumb.x}-${crumb.y}`}
            className="absolute left-1/2 top-1/2 rounded-[42%_58%_36%_64%] bg-dialac-brown shadow-[0_4px_9px_rgba(71,37,21,0.25)]"
            style={{
              width: crumb.size,
              height: crumb.size,
            }}
            initial={{
              x: 0,
              y: 0,
              opacity: 0,
              scale: 0,
              rotate: 0,
            }}
            animate={{
              x: crumb.x,
              y: crumb.y,
              opacity: [0, 1, 1],
              scale: [0, 1.2, 1],
              rotate: index % 2 === 0 ? 150 : -150,
            }}
            transition={{
              duration: 0.48,
              delay: crumb.delay,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        ))}
      </motion.div>

      {/* SELLO CENTRAL */}
      <motion.div
        className="absolute left-1/2 top-[calc(50%+min(29vw,355px))] z-30 -translate-x-1/2 sm:top-[calc(50%+min(22vw,280px))]"
        initial={{ opacity: 0, y: 12, scale: 0.9 }}
        animate={{ opacity: [0, 1, 1, 0], y: 0, scale: 1 }}
        transition={{
          duration: 0.82,
          times: [0, 0.25, 0.65, 1],
          ease: "easeOut",
        }}
      >
        <div className="whitespace-nowrap rounded-full border border-dialac-brown/20 bg-white/85 px-5 py-2 font-display text-[10px] font-bold uppercase tracking-[0.22em] text-dialac-brown-dark shadow-[0_12px_28px_rgba(70,38,22,0.15)] backdrop-blur-md sm:text-xs">
          Preparando tu experiencia
        </div>
      </motion.div>
    </motion.div>
  );
}

export default PageLoaderOption2;
