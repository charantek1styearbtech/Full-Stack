import { codingProfiles } from '../data/portfolio';

const CodingProfiles = () => {
  return (
    <footer className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] border border-white/10 bg-surface/70 p-6 sm:p-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-muted">Competitive programming</p>
            <h3 className="mt-3 font-geist text-2xl font-semibold tracking-[-0.03em] text-primary">Profiles that show consistency.</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {codingProfiles.map(profile => (
              <a
                key={profile.name}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 bg-background px-4 py-2 text-sm font-medium text-secondary transition duration-200 hover:border-accent/60 hover:bg-accent hover:text-white active:scale-[0.98]"
              >
                {profile.name}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-sm text-muted">
          Made with care by Charantej Reddy · © {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
};

export default CodingProfiles;
