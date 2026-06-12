import { FormEvent, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setStatus('idle');

    const service_id = process.env.REACT_APP_EMAILJS_SERVICE_ID ?? '';
    const template_id = process.env.REACT_APP_EMAILJS_TEMPLATE_ID ?? '';
    const public_id = process.env.REACT_APP_EMAILJS_PUBLIC_ID ?? '';

    try {
      const templateParams = {
        from_name: name,
        to_name: 'Charan',
        message: message,
        from_email: email,
      };

      const response = await emailjs.send(service_id, template_id, templateParams, public_id);

      if (response.status === 200) {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Failed to send email:', error);
      setStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact-section" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-surface p-6 shadow-line sm:p-10 lg:p-12">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-secondary">Contact</p>
            <h2 className="mt-4 font-geist text-4xl font-semibold tracking-[-0.045em] text-primary sm:text-5xl">
              Have an opportunity or project to discuss?
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-secondary">
              I'm open to meaningful engineering conversations, product ideas, internships, and collaborations.
            </p>
            <a
              href="mailto:charantej928@gmail.com"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-background transition duration-200 hover:bg-accent hover:text-white active:scale-[0.98]"
            >
              Email me directly
            </a>
          </div>

          <form onSubmit={handleSubmit} className="rounded-3xl border border-white/10 bg-background/70 p-5 sm:p-6" aria-label="Contact form">
            <div className="grid gap-4">
              <label className="grid gap-2">
                <span className="text-sm font-medium text-primary">Name</span>
                <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={event => setName(event.target.value)}
                  required
                  className="rounded-2xl border border-white/10 bg-surface px-4 py-3 text-sm text-primary placeholder:text-muted transition duration-200 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-medium text-primary">Email</span>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={event => setEmail(event.target.value)}
                  required
                  className="rounded-2xl border border-white/10 bg-surface px-4 py-3 text-sm text-primary placeholder:text-muted transition duration-200 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-medium text-primary">Message</span>
                <textarea
                  placeholder="Tell me about the opportunity, project, or question."
                  value={message}
                  onChange={event => setMessage(event.target.value)}
                  required
                  rows={5}
                  className="resize-none rounded-2xl border border-white/10 bg-surface px-4 py-3 text-sm text-primary placeholder:text-muted transition duration-200 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                />
              </label>

              <button
                type="submit"
                disabled={isLoading}
                className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-primary hover:text-background disabled:cursor-not-allowed disabled:opacity-60 active:scale-[0.98]"
              >
                {isLoading ? 'Sending…' : 'Send message'}
              </button>

              <p aria-live="polite" className="min-h-5 text-sm">
                {status === 'success' && <span className="text-emerald-400">Message sent successfully.</span>}
                {status === 'error' && <span className="text-rose-400">Message could not be sent. Please email me directly.</span>}
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
