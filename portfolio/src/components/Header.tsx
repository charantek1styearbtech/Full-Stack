import { useEffect, useState } from 'react';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about-section', label: 'About' },
  { id: 'projects-section', label: 'Projects' },
  { id: 'llm-interface', label: 'AI Chat' },
  { id: 'contact-section', label: 'Contact' },
];

const Header = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const visibleEntry = entries.find(entry => entry.isIntersecting);
        if (visibleEntry?.target.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: '-35% 0px -55% 0px',
        threshold: 0.01,
      },
    );

    navItems.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          aria-label="Charantej Reddy home"
          className="font-geist text-lg font-semibold tracking-tight text-primary transition-colors duration-200 hover:text-accent"
        >
          RCTR
        </a>

        <nav aria-label="Primary navigation" className="hidden items-center gap-1 md:flex">
          {navItems.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`rounded-full px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                activeSection === item.id
                  ? 'bg-white/10 text-primary'
                  : 'text-secondary hover:bg-white/5 hover:text-primary'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="/files/Resume.pdf"
          download
          className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-background transition duration-200 hover:bg-accent hover:text-white active:scale-[0.98]"
        >
          Resume
        </a>
      </div>
    </header>
  );
};

export default Header;
