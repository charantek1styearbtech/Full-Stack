import { motion, useReducedMotion } from 'framer-motion';
import { projects } from '../data/portfolio';

const Projects = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="projects-section" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <motion.div
        initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
        whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-3xl"
      >
        <p className="text-sm font-medium uppercase tracking-[0.28em] text-secondary">Selected work</p>
        <h2 className="mt-4 font-geist text-4xl font-semibold tracking-[-0.045em] text-primary sm:text-5xl">
          Projects framed as product systems.
        </h2>
        <p className="mt-6 text-lg leading-8 text-secondary">
          Each build is presented through the problem it addresses, the solution shape, the architecture, and the impact.
        </p>
      </motion.div>

      <div className="mt-14 space-y-6">
        {projects.map((project, index) => {
          const featured = index === 0;

          return (
            <motion.article
              key={project.id}
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 22 }}
              whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.24, delay: featured ? 0.04 : 0, ease: [0.16, 1, 0.3, 1] }}
              className={`rounded-[2rem] border border-white/10 bg-surface p-6 shadow-line sm:p-8 ${
                featured ? 'lg:grid lg:grid-cols-[0.82fr_1.18fr] lg:gap-10' : ''
              }`}
            >
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.24em] text-muted">
                  {String(index + 1).padStart(2, '0')} / {featured ? 'Featured build' : 'Case study'}
                </p>
                <h3 className="mt-4 font-geist text-3xl font-semibold tracking-[-0.04em] text-primary sm:text-4xl">
                  {project.title}
                </h3>
                <p className="mt-5 text-base leading-7 text-secondary">{project.description}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map(technology => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 bg-background px-3 py-1 text-xs font-medium text-secondary"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              <div className={`mt-8 grid gap-4 ${featured ? 'lg:mt-0' : 'md:grid-cols-2'}`}>
                <ProjectDetail label="Problem" value={project.problem} />
                <ProjectDetail label="Solution" value={project.solution} />
                <ProjectDetail label="Architecture" value={project.architecture} list />
                <ProjectDetail label="Impact" value={project.impact} list />
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
};

const ProjectDetail = ({
  label,
  value,
  list = false,
}: {
  label: string;
  value: string | string[];
  list?: boolean;
}) => {
  const items = Array.isArray(value) ? value : [value];

  return (
    <div className="rounded-2xl border border-white/10 bg-background/70 p-5">
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">{label}</p>
      {list ? (
        <ul className="mt-4 space-y-3">
          {items.map(item => (
            <li key={item} className="flex gap-3 text-sm leading-6 text-secondary">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-4 text-sm leading-6 text-secondary">{items[0]}</p>
      )}
    </div>
  );
};

export default Projects;
