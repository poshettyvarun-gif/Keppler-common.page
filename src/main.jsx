import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const productLinks = {
  ai: 'https://keppler-page.vercel.app/#top',
  astryx: 'https://vercel.com/kalpratechh/location-tracker',
};

function Arrow({ small = false }) {
  return <svg className={small ? 'arrow small' : 'arrow'} viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" /></svg>;
}

function Mark() {
  return <a className="mark" href="#top" aria-label="KEPPLER AI home"><span className="mark-shape">K</span><span>KEPPLER<span className="mark-ai"> AI</span></span></a>;
}

function Pill({ children, dark = false }) {
  return <span className={`pill${dark ? ' dark' : ''}`}><i />{children}</span>;
}

function ProductSelect() {
  const [value, setValue] = useState('');
  function change(event) {
    const chosen = event.target.value;
    setValue(chosen);
    if (chosen) window.location.assign(productLinks[chosen]);
  }
  return <label className="product-select"><span className="select-label">Explore a product</span><select aria-label="Choose a Keppler product" value={value} onChange={change}><option value="">Select KEPPLER AI or ASTRYX</option><option value="ai">KEPPLER AI — Document intelligence</option><option value="astryx">KEPPLER ASTRYX — Attendance</option></select><span className="select-chevron">⌄</span></label>;
}

function Reveal({ children, className = '' }) {
  return <div className={`reveal ${className}`}>{children}</div>;
}

function DocumentVisual() {
  return <div className="doc-visual" aria-label="Illustration of a document becoming structured data"><div className="paper"><div className="paper-cap">SOURCE DOCUMENT</div><div className="paper-lines"><b>Onboarding form</b><span /><span className="long" /><span /><div className="paper-table"><i /><i /><i /><i /><i /><i /></div></div><div className="scan-line" /></div><div className="data-card"><div className="data-top"><span>AI EXTRACT</span><b>LIVE</b></div><div className="data-row"><em>name</em><strong>structured</strong></div><div className="data-row"><em>fields</em><strong>recognized</strong></div><div className="data-row"><em>table</em><strong>preserved</strong></div><div className="data-bars"><i /><i /><i /><i /></div></div><span className="float-tag tag-one">MULTILINGUAL</span><span className="float-tag tag-two">JSON · CSV · XML</span></div>;
}

function AttendanceVisual() {
  return <div className="attendance-visual" aria-label="Illustration of attendance verification at a workplace"><div className="glow" /><div className="map"><div className="map-road r1" /><div className="map-road r2" /><div className="map-road r3" /><div className="map-label">WORKPLACE ZONE</div><div className="pin"><div className="pin-inner">✓</div></div><div className="radius" /></div><div className="selfie-card"><div className="selfie-head" /><div className="selfie-body" /><span>SELFIE VERIFIED</span><b>09:02 AM</b></div><div className="verified"><i>✓</i> Attendance recorded</div></div>;
}

const ocrFeatures = [
  ['AI-trained OCR', 'Extracts text from scanned PDFs, images, photos, and complex documents with layout fidelity.'],
  ['Multilingual understanding', 'Designed for global and Indian scripts, including mixed-language documents on one page.'],
  ['Structured outputs', 'Preserves tables, fields, and relationships for JSON, CSV, or XML workflows.'],
  ['Enterprise APIs', 'Supports batch pipelines and real-time document processing through REST APIs.'],
];

const attendanceFeatures = [
  ['Location-aware check-in', 'Captures an employee’s shared location at the time they record attendance.'],
  ['Selfie confirmation', 'A camera-based check-in creates a clear record alongside the attendance event.'],
  ['Assigned workplace context', 'Helps teams validate presence against the workplace an employee is assigned to.'],
  ['Operational visibility', 'Gives managers a practical attendance record for distributed teams and sites.'],
];

function FeatureGrid({ items, accent }) {
  return <div className={`feature-grid ${accent}`}>{items.map(([title, text], index) => <Reveal key={title}><article className="feature"><span className="feature-number">0{index + 1}</span><h3>{title}</h3><p>{text}</p></article></Reveal>)}</div>;
}

function ProductSection({ id, eyebrow, title, description, href, cta, visual, items, accent, useCases, benefits }) {
  return <section className={`product-section ${accent}`} id={id}><div className="section-shell"><div className="product-intro"><Reveal><Pill dark={accent === 'astryx'}>{eyebrow}</Pill></Reveal><Reveal><h2>{title}</h2></Reveal><Reveal><p className="lede">{description}</p></Reveal><Reveal><a className={`text-link ${accent === 'astryx' ? 'light' : ''}`} href={href} target="_blank" rel="noreferrer">{cta}<Arrow small /></a></Reveal></div><Reveal className="visual-wrap">{visual}</Reveal></div><FeatureGrid items={items} accent={accent} /><div className="details-row"><div><span className="detail-label">USE CASES</span><p>{useCases}</p></div><div><span className="detail-label">ENTERPRISE BENEFIT</span><p>{benefits}</p></div></div></section>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('in-view'); }), { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return <main id="top"><header><div className="nav-shell"><Mark /><button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation"><span /><span /></button><nav className={menuOpen ? 'open' : ''}><a href="#keppler-ai" onClick={() => setMenuOpen(false)}>KEPPLER AI</a><a href="#astryx" onClick={() => setMenuOpen(false)}>ASTRYX</a><a href="#why-keppler" onClick={() => setMenuOpen(false)}>WHY KEPPLER</a></nav><a className="nav-cta" href="#products">Explore products <Arrow small /></a></div></header>
    <section className="hero"><div className="hero-grid" /><div className="hero-content"><Reveal><Pill>ENTERPRISE INTELLIGENCE, CLARIFIED</Pill></Reveal><Reveal><h1>Turn the moments that matter into <span>clear decisions.</span></h1></Reveal><Reveal><p className="hero-copy">KEPPLER brings document intelligence and workplace attendance into a single, focused enterprise portfolio—built to make operations more legible, reliable, and ready to move.</p></Reveal><Reveal className="hero-actions"><ProductSelect /><a href="#products" className="primary-button">Meet the products <Arrow /></a></Reveal></div><div className="hero-orbit" aria-hidden="true"><div className="orbit-ring ring-a" /><div className="orbit-ring ring-b" /><div className="orbit-core"><span>01</span><b>INTELLIGENCE<br />IN MOTION</b></div><div className="orbit-node node-a"><i />DOCS</div><div className="orbit-node node-b"><i />PEOPLE</div><div className="orbit-label">KEPPLER<br />ENTERPRISE<br />SYSTEMS</div></div><div className="hero-footer"><span>SCROLL TO EXPLORE</span><span className="scroll-line" /><span>01 / 02</span></div></section>
    <section className="statement" id="products"><Pill>ONE COMPANY · TWO PRODUCTS</Pill><h2>Intelligence for what’s <em>on the page</em> and who’s <em>on site.</em></h2><p>Two distinct products. One purpose: give enterprise teams a more dependable view of their work.</p></section>
    <ProductSection id="keppler-ai" eyebrow="01 · KEPPLER AI" title={<>Make every document <span>operational.</span></>} description="AI-powered OCR and document intelligence for teams processing multilingual, low-quality, handwritten, and legacy documents at enterprise scale." href={productLinks.ai} cta="Visit KEPPLER AI" visual={<DocumentVisual />} items={ocrFeatures} accent="ocr" useCases="Archives and citizen records · Medical records and prescriptions · KYC and statements · Contracts and court records · Operations" benefits="Move complex documents into searchable, structured information while retaining the context teams depend on." />
    <ProductSection id="astryx" eyebrow="02 · KEPPLER ASTRYX" title={<>Attendance, <span>grounded in place.</span></>} description="A location- and camera-based attendance experience for enterprise teams. Employees record a selfie and share their location to help verify attendance at their assigned workplace." href={productLinks.astryx} cta="Explore ASTRYX" visual={<AttendanceVisual />} items={attendanceFeatures} accent="astryx" useCases="Field teams · Distributed offices · Retail locations · Facilities and service operations · Project sites" benefits="Build a consistent, context-rich attendance record without turning everyday workforce operations into a manual reconciliation exercise." />
    <section className="why" id="why-keppler"><div><Pill>WHY KEPPLER</Pill><h2>Enterprise clarity, without the clutter.</h2></div><div className="why-points"><article><b>01</b><h3>Focused products</h3><p>Purpose-built tools for two essential operational signals: documents and attendance.</p></article><article><b>02</b><h3>Designed for complexity</h3><p>Clear workflows for real-world documents, distributed teams, and enterprise contexts.</p></article><article><b>03</b><h3>Built to integrate</h3><p>Products designed to fit the way teams already process information and manage operations.</p></article></div></section>
    <section className="closing"><div className="closing-grid" /><Pill dark>THE NEXT SIGNAL IS CLEAR</Pill><h2>Find the product that fits your operation.</h2><div className="closing-links"><a href={productLinks.ai} target="_blank" rel="noreferrer">KEPPLER AI <Arrow small /></a><a href={productLinks.astryx} target="_blank" rel="noreferrer">KEPPLER ASTRYX <Arrow small /></a></div></section>
    <footer><Mark /><p>Enterprise intelligence for documents and attendance.</p><span>© 2026 KEPPLER AI</span></footer>
  </main>;
}

createRoot(document.getElementById('root')).render(<App />);
