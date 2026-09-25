const CONTACT_EMAIL = 'info@thekeppler.com';

export default function ContactForm() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name') ?? '');
    const email = String(data.get('email') ?? '');
    const subject = String(data.get('subject') ?? '');
    const message = String(data.get('message') ?? '');
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h3>Send us a message</h3>
      <label>Full Name<input name="name" placeholder="Your full name" required /></label>
      <label>Email Address<input type="email" name="email" placeholder="you@company.com" required /></label>
      <label>Subject<input name="subject" placeholder="How can we help?" required /></label>
      <label>Your Message<textarea name="message" placeholder="Tell us about your documents..." rows={5} required /></label>
      <button className="button" type="submit">Send Message <span>↗</span></button>
    </form>
  );
}
