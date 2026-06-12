import { MouseEvent, useMemo } from 'react';
import type { CSSProperties } from 'react';
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'framer-motion';

type PortraitStyle = CSSProperties & {
  '--portrait-glow': string;
  '--portrait-rim': string;
};

const springConfig = {
  stiffness: 260,
  damping: 28,
  mass: 0.7,
};

const HeroPortrait = () => {
  const reduceMotion = useReducedMotion();

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const rotateY = useSpring(
    useTransform(pointerX, [-1, 1], [3, -3]),
    springConfig
  );

  const rotateX = useSpring(
    useTransform(pointerY, [-1, 1], [-3, 3]),
    springConfig
  );

  const translateX = useSpring(
    useTransform(pointerX, [-1, 1], [-8, 8]),
    springConfig
  );

  const translateY = useSpring(
    useTransform(pointerY, [-1, 1], [-8, 8]),
    springConfig
  );

  const handlePointerMove = (event: MouseEvent<HTMLDivElement>) => {
    if (reduceMotion) return;

    const rect = event.currentTarget.getBoundingClientRect();

    const x =
      ((event.clientX - rect.left) / rect.width - 0.5) * 2;

    const y =
      ((event.clientY - rect.top) / rect.height - 0.5) * 2;

    pointerX.set(x);
    pointerY.set(y);
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  const style = useMemo<PortraitStyle>(
    () => ({
      '--portrait-glow': 'rgba(99,102,241,0.22)',
      '--portrait-rim': 'rgba(190,190,255,0.18)',
    }),
    []
  );

  return (
    <div
      className="
        relative
        isolate
        h-[250px]
        w-full
        overflow-visible
        sm:h-[290px]
        md:h-[380px]
        lg:h-[85vh]
        lg:min-h-[760px]
      "
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      style={style}
      aria-hidden="true"
    >
      {/* Main Glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[18%]
          h-[28%]
          w-[38%]
          -translate-x-1/2
          rounded-full
          blur-3xl
        "
        style={{
          background:
            'radial-gradient(circle,var(--portrait-glow),rgba(99,102,241,0.08) 45%,transparent 70%)',
        }}
      />

      {/* Rim Glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-[58%]
          top-[14%]
          h-[26%]
          w-[26%]
          rounded-full
          blur-2xl
        "
        style={{
          background:
            'radial-gradient(circle,var(--portrait-rim),transparent 70%)',
        }}
      />

      <motion.div
        className="
          relative
          z-10
          h-full
          w-full
          -translate-y-20
        "
        style={{
          rotateX,
          rotateY,
          x: translateX,
          y: translateY,
        }}
        whileHover={
          reduceMotion
            ? { scale: 1 }
            : { scale: 1.02 }
        }
        transition={{
          duration: 0.2,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <img
          src="/sources/hero.png"
          alt="Charantej Reddy"
          draggable={false}
          className="
            absolute
            bottom-0
            right-[-8%]
            h-[98%]
            w-auto
            max-w-none
            select-none
            object-contain
            object-top
            drop-shadow-[0_40px_100px_rgba(0,0,0,0.65)]
            sm:right-[-10%]
            sm:h-[102%]
            md:right-[-10%]
            md:h-[106%]
            lg:right-[-12%]
            lg:h-[112%]
          "
        />

        {/* Bottom fade */}
        <div
          className="
            pointer-events-none
            absolute
            inset-x-0
            bottom-0
            h-1/3
            bg-gradient-to-t
            from-background
            via-background/70
            to-transparent
          "
        />
      </motion.div>
    </div>
  );
};

export default HeroPortrait;