import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { capabilities, certifications } from '../data/portfolio';

const About = () => {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  const [triggerLabel, setTriggerLabel] = useState('');
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const reduceMotion = useReducedMotion();

  const closePopup = () => {
    setHoveredImage(null);
    setTriggerLabel('');
    triggerRef.current?.focus();
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && hoveredImage) {
        closePopup();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [hoveredImage]);

  return (
    <section id="about-section" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <motion.div
        initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
        whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-3xl"
      >
        <p className="text-sm font-medium uppercase tracking-[0.28em] text-secondary">About</p>
        <h2 className="mt-4 font-geist text-4xl font-semibold tracking-[-0.045em] text-primary sm:text-5xl">
          Engineering across interfaces, intelligence, and systems.
        </h2>
        <p className="mt-6 text-lg leading-8 text-secondary">
          I'm a software developer who contributes to the tech world by solving complex problems with practical, product-minded solutions.
          Currently pursuing a Bachelor's in Technology at National Institute of Technology Warangal, specializing in full-stack development and artificial intelligence.
        </p>
      </motion.div>

      <div className="mt-14 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <motion.aside
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
          whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.22, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl border border-white/10 bg-surface p-6 shadow-line sm:p-8"
        >
          <h3 className="font-geist text-2xl font-semibold tracking-[-0.03em] text-primary">Education</h3>
          <ol className="mt-8 space-y-6">
            {[
              ['BTech', 'National Institute of Technology Warangal'],
              ['10+2', 'Narayana Jr College'],
              ['0-10', "ST. Joseph's Public School"],
            ].map(([stage, institution]) => (
              <li key={stage} className="relative border-l border-white/10 pl-5">
                <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-accent" aria-hidden="true" />
                <p className="text-sm font-medium uppercase tracking-[0.16em] text-secondary">{stage}</p>
                <p className="mt-2 text-base leading-7 text-primary">{institution}</p>
              </li>
            ))}
          </ol>
        </motion.aside>

        <div className="space-y-6">
          <motion.section
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.22, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl border border-white/10 bg-surface p-6 shadow-line sm:p-8"
          >
            <h3 className="font-geist text-2xl font-semibold tracking-[-0.03em] text-primary">Capabilities</h3>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {capabilities.map(capability => (
                <article key={capability.title} className="rounded-2xl border border-white/10 bg-background p-5">
                  <h4 className="text-base font-semibold text-primary">{capability.title}</h4>
                  <p className="mt-3 text-sm leading-6 text-secondary">{capability.description}</p>
                  <ul className="mt-4 space-y-2">
                    {capability.evidence.map(item => (
                      <li key={item} className="flex gap-2 text-sm leading-6 text-muted">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.22, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl border border-white/10 bg-surface p-6 shadow-line sm:p-8"
          >
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <h3 className="font-geist text-2xl font-semibold tracking-[-0.03em] text-primary">Certifications</h3>
                <p className="mt-3 text-sm leading-6 text-secondary">Verified learning across core engineering, AI, mobile, cloud, and full-stack development.</p>
              </div>
            </div>

            <div className="mt-8 divide-y divide-white/10">
              {certifications.map(cert => (
                <div key={cert.name} className="flex flex-col gap-4 py-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-medium text-primary">{cert.name}</p>
                    <p className="mt-1 text-sm text-secondary">{cert.org}</p>
                  </div>
                  <button
                    ref={triggerRef}
                    type="button"
                    onClick={() => {
                      setTriggerLabel(cert.name);
                      setHoveredImage(cert.image);
                    }}
                    aria-label={`View ${cert.name} certificate`}
                    className="inline-flex w-fit items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-primary transition duration-200 hover:border-accent/60 hover:bg-accent hover:text-white active:scale-[0.98]"
                  >
                    View certificate
                  </button>
                </div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>

      {hoveredImage && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="certificate-title"
          onClick={closePopup}
        >
          <div
            className="relative w-full max-w-3xl rounded-3xl border border-white/10 bg-surface p-4 shadow-soft"
            onClick={event => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={closePopup}
              aria-label={`Close ${triggerLabel} certificate preview`}
              className="absolute -right-3 -top-3 flex h-10 w-10 items-center justify-center rounded-full bg-accent text-xl font-semibold text-white transition duration-200 hover:bg-white hover:text-background active:scale-95"
            >
              ×
            </button>
            <h3 id="certificate-title" className="sr-only">
              {triggerLabel} certificate preview
            </h3>
            <img src={hoveredImage} alt={`${triggerLabel} certificate`} className="max-h-[82vh] w-full rounded-2xl object-contain" />
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
