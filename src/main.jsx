import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import SiteFooter from './components/SiteFooter.jsx';
import KepplerPage from './keppler-ai/page.tsx';
import AstryxPage from './astryx/AsTryxPage.jsx';
import TranscriptionPage, { TranscriptPreview } from './transcription/TranscriptionPage.jsx';
import './keppler-ai/styles.css';

const products = {
  ai: { name: 'KEPPLER AI', url: '/keppler-ai' },
  transcription: { name: 'Audio & Video to Text', url: '/audio-video-to-text' },
  astryx: { name: 'KEPPLER ASTRYX', url: '/keppler-astryx' },
};
function Arrow({ diagonal = false }) {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d={diagonal ? 'M5 19 19 5M6 5h13v13' : 'M4 12h15m-6-6 6 6-6 6'} /></svg>;
}
function Icon({ type }) {
  const paths = { audio: 'M4 10v4m4-8v12m4-15v18m4-15v12m4-8v4', document: 'M7 3h7l4 4v14H7zM14 3v5h4M10 12h5m-5 4h5', location: 'M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0ZM14 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0' };
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d={paths[type]} /></svg>;
}
function Logo() {
  return <a className="logo" href="/#top" aria-label="KEPPLER AI home"><img src="/keppler-logo.png" alt="KEPPLER AI" /></a>;
}
function ProductSelect() {
  return <label className="product-select"><span>YOUR NEXT MOVE</span><select defaultValue="" aria-label="Choose a product to visit" onChange={e => { if (products[e.target.value]) window.location.assign(products[e.target.value].url); }}><option value="" disabled>Select a product ↗</option><option value="ai">KEPPLER AI — Documents</option><option value="transcription">Audio &amp; Video to Text</option><option value="astryx">KEPPLER ASTRYX — Attendance</option></select></label>;
}
function ProjectsDropdown({ onNavigate, active }) {
  const [expanded, setExpanded] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const closeOnOutsideClick = event => {
      if (!dropdownRef.current?.contains(event.target)) setExpanded(false);
    };
    const closeOnEscape = event => {
      if (event.key === 'Escape') setExpanded(false);
    };
    document.addEventListener('pointerdown', closeOnOutsideClick);
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      document.removeEventListener('pointerdown', closeOnOutsideClick);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, []);

  const closeMenu = () => {
    setExpanded(false);
    onNavigate();
  };

  return <div className="projects-dropdown" ref={dropdownRef}>
    <button className={`projects-trigger${active ? ' is-current' : ''}`} type="button" aria-expanded={expanded} aria-controls="projects-list" onClick={() => setExpanded(value => !value)}>
      Features <span className="projects-chevron" aria-hidden="true" />
    </button>
    {expanded && <div className="projects-list" id="projects-list">
      <div className="projects-menu-heading"><span>THE KEPPLER PORTFOLIO</span><span>03</span></div>
      <a href="/keppler-ai" onClick={closeMenu}><span className="project-menu-visual"><img src="/habitat-documents.png" alt="" /></span><span className="project-menu-copy">Document OCR<small>Multilingual AI OCR Platform</small></span><Arrow diagonal /></a>
      <a href="/audio-video-to-text" onClick={closeMenu}><span className="project-menu-visual audio-wave" aria-hidden="true"><i /><i /><i /><i /><i /></span><span className="project-menu-copy">Audio &amp; Video to Text<small>Turn audio and video into text</small></span><Arrow diagonal /></a>
      <a href="/keppler-astryx" onClick={closeMenu}><span className="project-menu-visual"><img src="/habitat-attendance.png" alt="" /></span><span className="project-menu-copy">Employee Attendance<small>KEPPLER ASTRYX</small></span><Arrow diagonal /></a>
    </div>}
  </div>;
}
function getActiveNav() {
  if (['/keppler-ai', '/keppler-astryx', '/audio-video-to-text'].includes(window.location.pathname)) return 'features';
  if (window.location.hash === '#about') return 'about';
  if (window.location.hash === '#contact') return 'contact';
  if (['#products', '#keppler-ai', '#astryx', '#audio-video'].includes(window.location.hash)) return 'features';
  return 'home';
}
function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(getActiveNav);
  useEffect(() => {
    const updateActive = () => setActive(getActiveNav());
    window.addEventListener('hashchange', updateActive);
    window.addEventListener('popstate', updateActive);
    return () => {
      window.removeEventListener('hashchange', updateActive);
      window.removeEventListener('popstate', updateActive);
    };
  }, []);
  return <header className="header"><Logo /><button className="menu-toggle" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? 'Close' : 'Menu'} <span>{open ? '−' : '+'}</span></button><nav className={open ? 'open' : ''} aria-label="Main navigation"><div className="nav-primary"><a className={`nav-contact nav-home${active === "home" ? " is-current" : ""}`} href="/#top" aria-current={active === "home" ? "page" : undefined} onClick={() => { setActive("home"); setOpen(false); }}>Home</a><a className={`nav-contact${active === "about" ? " is-current" : ""}`} href="/#about" aria-current={active === "about" ? "location" : undefined} onClick={() => { setActive("about"); setOpen(false); }}>About Us</a><ProjectsDropdown active={active === "features"} onNavigate={() => setOpen(false)} /><a className={`nav-contact${active === "contact" ? " is-current" : ""}`} href="/#contact" aria-current={active === "contact" ? "location" : undefined} onClick={() => { setActive("contact"); setOpen(false); }}>Contact</a></div><div className="nav-actions"><div className="nav-account-group" aria-label="Account"><button className="nav-account" type="button" disabled>Sign in</button></div><a className="nav-cta" href="/#products" onClick={() => setOpen(false)}>Explore products <Arrow diagonal /></a></div></nav></header>;
}
function Hero() {
  return <section className="hero" aria-labelledby="hero-title"><div className="habitat-scene"><img className="hero-image" src="/habitat-hero.png" alt="Concept illustration of documents and employee check-ins in a connected workplace" fetchPriority="high" /><div className="hero-wash" /><div className="hero-copy"><p className="eyebrow"><span className="brand-strokes">///</span> THREE PRODUCTS. ONE WORKPLACE.</p><h1 id="hero-title">Documents. Recordings.<br /><em>People at work.</em></h1><p className="hero-description">Extract information from documents, turn recordings into text, and verify employee attendance with selfie and location context.</p><a className="button primary" href="#products">Explore the products <Arrow /></a><div className="hero-signature"><span /> BUILT AROUND YOUR ENTERPRISE</div></div><a className="scene-label scene-doc" href="#keppler-ai"><span className="scene-icon"><Icon type="document" /></span><span><small>01 / DOCUMENT INTELLIGENCE</small><strong>Documents to data</strong></span><Arrow diagonal /></a><a className="scene-label scene-people" href="#astryx"><span className="scene-icon"><Icon type="location" /></span><span><small>02 / EMPLOYEE ATTENDANCE</small><strong>Selfie + location check-in</strong></span><Arrow diagonal /></a><span className="scene-caption">A connected workplace, imagined.</span></div><div className="product-dock" id="products"><div className="dock-intro"><span className="eyebrow">THE KEPPLER PORTFOLIO</span><h2>Three products.<br />Different tasks.</h2></div><a className="dock-product" href="#keppler-ai"><Icon type="document" /><span><strong>KEPPLER AI</strong><small>Extract data from documents</small></span><Arrow diagonal /></a><a className="dock-product" href="#astryx"><Icon type="location" /><span><strong>KEPPLER ASTRYX</strong><small>Attendance with workplace context</small></span><Arrow diagonal /></a><a className="dock-product" href="#audio-video"><Icon type="audio" /><span><strong>AUDIO &amp; VIDEO TO TEXT</strong><small>Turn recorded speech into text</small></span><Arrow diagonal /></a><ProductSelect /></div></section>;
}
const productData = [
  { id: 'keppler-ai', number: '01', name: 'KEPPLER AI', label: 'DOCUMENT INTELLIGENCE', title: <>From document<br /><em>to usable data.</em></>, description: 'Turn complex documents into information your business can use. AI-powered OCR reads, extracts, and structures content from scanned, handwritten, and multilingual material.', image: '/habitat-documents.png', alt: 'Sculptural document sheets with translucent blue information layers', href: products.ai.url, link: 'Explore KEPPLER AI', steps: ['Read', 'Extract', 'Structure'], features: [['PDFs, photos, and handwriting.', 'Process PDFs, images, photos, and handwritten documents.'], ['Multiple languages on one page.', 'Work with global and Indian scripts, including mixed-language pages.'], ['Structured output for your systems.', 'Structured JSON, CSV, and XML output with REST API integration.']], useCases: ['Records & archives', 'KYC & statements', 'Healthcare documents', 'Legal files'], benefit: 'Less time finding information. More time putting it to work.', icon: 'document' },
  { id: 'astryx', number: '02', name: 'KEPPLER ASTRYX', label: 'EMPLOYEE ATTENDANCE', title: <>A check-in with<br /><em>selfie and location.</em></>, description: 'Attendance grounded in the workplace. Employees capture a selfie and share their location to help verify attendance at their assigned workplace.', image: '/habitat-attendance.png', alt: 'Employee selfie check-in on a phone in a bright contemporary workplace', href: products.astryx.url, link: 'Request a demo', steps: ['Capture a selfie', 'Share location', 'Record attendance'], features: [['A selfie at check-in.', 'Camera-based check-in adds visual context to attendance.'], ['Location at the workplace.', 'Shared location connects a check-in to the assigned workplace.'], ['Both details in one review.', 'Bring selfie and location context together for attendance review.']], useCases: ['Distributed offices', 'Retail teams', 'Project sites', 'Service operations'], benefit: 'More context for managers. A consistent check-in for employees.', icon: 'location' },
  { id: 'audio-video', number: '03', name: 'AUDIO & VIDEO TO TEXT', label: 'AUDIO & VIDEO TRANSCRIPTION', title: <>Your recordings,<br /><em>in words.</em></>, description: 'Turn speech from audio and video recordings into text. Bring the words in your recordings into a format you can read, review, and refer back to.', href: products.transcription.url, link: 'Explore transcription', steps: ['Start with a recording', 'Convert to text', 'Read & review'], features: [['Audio becomes readable.', 'Convert spoken content in audio recordings into a written transcript.'], ['Video, in words.', 'Refer back to the spoken content in a video as text.'], ['A reference for your team.', 'Review the transcript alongside the original recording.']], useCases: ['Meetings & discussions', 'Interviews', 'Training sessions', 'Presentations'], benefit: 'Another way to revisit recorded discussions and spoken information.', icon: 'audio' },
];
function ProductSection({ product: p }) {
  return <section className={`product-section ${p.id}`} id={p.id} aria-labelledby={`${p.id}-title`}><div className="product-scene reveal">{p.id === "audio-video" ? <div className="home-transcription-preview"><TranscriptPreview /></div> : <img src={p.image} alt={p.alt} loading="lazy" />}<div className="product-wash" /><div className="product-copy"><p className="eyebrow"><span className="product-number">{p.number}</span>{p.label}</p><p className="product-name">{p.name}</p><h2 id={`${p.id}-title`}>{p.title}</h2><p className="product-description">{p.description}</p><a className="button primary" href={p.id === "astryx" ? "#contact" : p.href}>{p.link}<Arrow diagonal={p.id !== "astryx"} /></a></div><div className="workflow" aria-label={`${p.name} workflow`}>{p.steps.map((step, i) => <React.Fragment key={step}><span><b>0{i + 1}</b>{step}</span>{i < 2 && <Arrow />}</React.Fragment>)}</div><span className="visual-note">CONCEPT VISUAL</span></div>{p.id !== "audio-video" && <div className="product-details"><div className="feature-grid">{p.features.map(([title, text], i) => <article className="feature reveal" key={title}><span className="feature-index">{p.number}.{i + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div><div className="use-cases reveal"><span className="eyebrow">MADE FOR REAL WORK</span><div>{p.useCases.map(x => <span key={x}>{x}</span>)}</div></div><div className="benefit reveal"><Icon type={p.icon} /><p>{p.benefit}</p><a href={p.href} aria-label={`Visit ${p.name}`}><Arrow diagonal /></a></div></div>}</section>;
}
function AboutSection() {
  return <section className="about-section reveal" id="about" aria-labelledby="about-title">
    <div className="about-identity"><span className="about-identity-label">KEPPLER / 03 PRODUCTS</span><img src="/keppler-logo.png" alt="KEPPLER AI — Intelligence for every document" loading="lazy" /></div>
    <div className="about-content"><p className="eyebrow">ABOUT US</p><h2 id="about-title">What we build.</h2><p>KEPPLER develops enterprise tools for document processing, audio and video transcription, and employee attendance.</p><div className="about-lines"><span><b>01</b> Document intelligence</span><span><b>02</b> Employee attendance</span><span><b>03</b> Audio &amp; video to text</span></div></div>
  </section>;
}
function ContactSection() {
  function prepareMessage(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = `${data.get('message')}\n\n${data.get('name')}\n${data.get('email')}`;
    window.location.href = `mailto:info@thekeppler.com?subject=${encodeURIComponent(data.get('subject'))}&body=${encodeURIComponent(body)}`;
  }
  return <section className="contact-section" id="contact" aria-labelledby="contact-title">
    <div className="contact-heading reveal"><p className="eyebrow">GET IN TOUCH</p><h2 id="contact-title">Let’s make your<br />work <em>clearer.</em></h2><p>Tell us about your business needs. We’ll help you find the right solution.</p></div>
    <div className="contact-surface reveal">
      <div className="contact-details"><a className="contact-email" href="mailto:info@thekeppler.com">info@thekeppler.com <Arrow diagonal /></a><div className="contact-office"><span className="eyebrow">01 / USA</span><address>13111 Westheimer Rd., Suite 311<br />Houston, TX, 77077</address></div><div className="contact-office"><span className="eyebrow">02 / INDIA</span><address>Flat 301, 10-1-6&7, Ram Krishna Sadan<br />Sai Krupa Enclave Colony, Khajaguda,<br />Hyderabad 500032</address></div></div>
      <form className="contact-form" onSubmit={prepareMessage}><h3>Send us a message</h3><div className="contact-fields"><label>Full name<input name="name" autoComplete="name" placeholder="Your full name" required maxLength={120} /></label><label>Email address<input name="email" type="email" autoComplete="email" placeholder="you@company.com" required maxLength={254} /></label><label className="contact-wide">Subject<input name="subject" placeholder="How can we help?" required maxLength={200} /></label><label className="contact-wide">Your message<textarea name="message" placeholder="Tell us about your requirements…" required rows={4} maxLength={4000} /></label></div><div className="contact-submit"><button className="button primary" type="submit">Send message <Arrow diagonal /></button><span>Opens your email app to send.</span></div></form>
    </div>
  </section>;
}
function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return <div id="top"><a className="skip-link" href="#products">Skip to products</a><Header /><main><Hero /><div className="section-bridge"><span>DOCUMENTS. PEOPLE. SPOKEN WORDS.</span><span>EXPLORE ALL THREE PRODUCTS <Arrow /></span></div>{productData.map(p => <ProductSection product={p} key={p.id} />)}<AboutSection /><ContactSection /><section className="closing"><p className="eyebrow">FIND THE RIGHT PRODUCT</p><h2>Choose the tool<br /><em>for the work.</em></h2><div><a className="button secondary" href={products.ai.url}>KEPPLER AI <Arrow diagonal /></a><a className="button secondary" href={products.astryx.url}>KEPPLER ASTRYX <Arrow diagonal /></a><a className="button secondary" href={products.transcription.url}>Audio &amp; Video to Text <Arrow diagonal /></a></div></section></main></div>;
}
const route = window.location.pathname.replace(/\/$/, '');
const isKepplerAiRoute = route === '/keppler-ai';
const isAstryxRoute = route === '/keppler-astryx';
const isTranscriptionRoute = route === '/audio-video-to-text';
if (isTranscriptionRoute) {
  document.title = 'Audio & Video to Text — KEPPLER AI';
  document.querySelector('meta[name="description"]')?.setAttribute('content', 'Turn spoken content from audio and video recordings into readable text. Explore audio and video transcription with KEPPLER.');
}
if (isAstryxRoute) {
  document.title = 'KEPPLER ASTRYX — Employee Attendance';
  document.querySelector('meta[name="description"]')?.setAttribute('content', 'Employee attendance with selfie and location context at the assigned workplace. Explore KEPPLER ASTRYX.');
}
if (isKepplerAiRoute) {
  document.title = 'Keppler OCR — Multilingual AI OCR Platform';
  document.querySelector('meta[name="description"]')?.setAttribute('content', 'AI-powered OCR that reads, understands, and structures complex documents in any language at enterprise scale.');
  document.querySelector('link[rel="icon"]')?.setAttribute('href', '/keppler-ai/favicon.svg');
}
createRoot(document.getElementById('root')).render(<>{isKepplerAiRoute ? <><Header /><div className="keppler-ai-page"><KepplerPage /></div></> : isAstryxRoute ? <><Header /><AstryxPage /></> : isTranscriptionRoute ? <><Header /><TranscriptionPage /></> : <App />}<SiteFooter /></>);
