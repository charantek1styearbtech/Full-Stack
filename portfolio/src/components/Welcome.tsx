import { motion, useReducedMotion } from 'framer-motion';
import { socialLinks } from '../data/portfolio';
import HeroPortrait from './HeroPortrait';

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const stats = [
  ['Full-stack', 'React, Node, APIs'],
  ['AI', 'Gemini, ML, NLP'],
  ['CP', 'LeetCode, CodeChef'],
  ['Open source', 'Public work'],
];

const Welcome = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative isolate mx-auto px-4 pt-24 pb-14 sm:px-6 sm:pb-16 lg:px-8 lg:pt-32 lg:pb-20"
    >
      <div className="mx-auto max-w-7xl">
        <div
          className="
            grid
            grid-cols-[58%_42%]
            items-end
            gap-x-3
            lg:items-center
            lg:gap-x-8
          "
        >
          {/* Left Content */}
          <motion.div
            initial={reduceMotion ? { opacity: 1 } : 'hidden'}
            animate={reduceMotion ? { opacity: 1 } : 'visible'}
            variants={fadeUp}
            transition={{
              duration: 0.22,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="max-w-3xl"
          >
            <p className="mb-3 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-secondary sm:mb-4 sm:text-sm lg:mb-5">
              Software Engineer · NIT Warangal
            </p>

            <h1
              className="
                font-geist
                text-[clamp(1.25rem,5.8vw,3rem)]
                font-semibold
                leading-[1.04]
                tracking-[-0.07em]
                text-primary
                sm:text-[clamp(1.85rem,5.8vw,3.75rem)]
                sm:leading-[1]
                lg:text-7xl
                lg:leading-[0.95]
              "
            >
              Building full-stack products with engineering depth.
            </h1>

            <p className="mt-3 max-w-2xl text-[0.86rem] leading-[1.45] text-secondary sm:mt-4 sm:text-lg sm:leading-7 lg:mt-6 lg:text-xl lg:leading-8">
              Full-stack developer and AI enthusiast focused on scalable
              interfaces, intelligent systems, and product-quality execution.
            </p>

            <div className="mt-4 flex flex-wrap gap-2 sm:mt-5 lg:mt-9 lg:gap-3">
              {socialLinks.slice(0, 3).map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  target={
                    link.href.startsWith('http') ? '_blank' : undefined
                  }
                  rel={
                    link.href.startsWith('http')
                      ? 'noopener noreferrer'
                      : undefined
                  }
                  className="
                    inline-flex
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.04]
                    px-5
                    py-3
                    text-sm
                    font-medium
                    text-primary
                    transition-all
                    duration-200
                    hover:border-accent/60
                    hover:bg-accent
                    hover:text-white
                    active:scale-[0.98]
                  "
                >
                  {link.label}
                </a>
              ))}

              <a
                href="mailto:charantej928@gmail.com"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-full
                  bg-primary
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-background
                  transition-all
                  duration-200
                  hover:bg-accent
                  hover:text-white
                  active:scale-[0.98]
                "
              >
                Email
              </a>
            </div>
          </motion.div>

          {/* Right Portrait */}
          <HeroPortrait />
        </div>

        {/* Stats */}
        <motion.dl
          initial={reduceMotion ? { opacity: 1 } : 'hidden'}
          animate={reduceMotion ? { opacity: 1 } : 'visible'}
          variants={fadeUp}
          transition={{
            duration: 0.22,
            delay: 0.08,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            mt-4
            grid
            w-full
            grid-cols-2
            gap-px
            overflow-hidden
            rounded-2xl
            border
            border-white/10
            bg-white/5
            sm:grid-cols-4
          "
        >
          {stats.map(([label, value]) => (
            <div
              key={label}
              className="
                bg-surface
                px-5
                py-5
              "
            >
              <dt className="text-xs uppercase tracking-[0.18em] text-muted">
                {label}
              </dt>

              <dd className="mt-2 text-sm font-medium text-primary">
                {value}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
};

export default Welcome;