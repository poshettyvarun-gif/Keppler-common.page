import React from 'react';
import './astryx.css';

const steps = [
  ['Capture a selfie', 'Employees capture a selfie at check-in, adding visual context to attendance.'],
  ['Share location', 'The shared location connects the check-in to the assigned workplace.'],
  ['Record attendance', 'Selfie and location context come together for attendance review.'],
];

function SectionTitle({ label, title, children }) {
  return <div className="astryx-section-title"><p className="eyebrow">{label}</p><h2>{title}</h2>{children && <p>{children}</p>}</div>;
}

export default function AstryxPage() {
  return <div className="astryx-page" id="top">
    <header className="astryx-header"><a href="/" aria-label="KEPPLER AI home"><img src="/keppler-logo.png" alt="KEPPLER AI" /></a><span>KEPPLER ASTRYX</span></header>
    <main>
      <section className="astryx-hero">
        <img className="astryx-hero-image" src="/habitat-attendance.png" alt="Concept illustration of an employee selfie and location check-in on a phone" fetchPriority="high" />
        <div className="astryx-hero-copy"><p className="eyebrow">KEPPLER ASTRYX / EMPLOYEE ATTENDANCE</p><h1>Every check-in.<br /><em>A clearer picture.</em></h1><p>Attendance grounded in the workplace. Employees capture a selfie and share their location to help verify attendance at their assigned workplace.</p><div className="astryx-actions"><a className="button primary" href="#contact">Request a demo <span aria-hidden="true">↗</span></a><a className="astryx-text-link" href="#workflow">How it works <span aria-hidden="true">↓</span></a></div></div>
        <span className="astryx-concept">CONCEPT VISUAL</span>
      </section>

      <section className="astryx-section" id="workflow">
        <SectionTitle label="THE CHECK-IN WORKFLOW" title={<>A selfie. A location.<br /><em>One attendance record.</em></>} />
        <div className="astryx-steps">{steps.map(([title, text], i) => <article key={title}><span className="astryx-step-number">0{i + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="astryx-section astryx-context">
        <div className="astryx-context-image"><img src="/habitat-workplace-checkin.png" alt="Concept illustration of an employee taking a selfie at the workplace" loading="lazy" /><span className="astryx-concept">CONCEPT VISUAL</span></div>
        <div><SectionTitle label="ATTENDANCE, IN CONTEXT" title={<>People and place.<br /><em>A shared context.</em></>}>Bring selfie and location context together for attendance review.</SectionTitle><div className="astryx-context-points"><article><span>01</span><div><h3>A selfie at the moment.</h3><p>Camera-based check-in adds visual context to attendance.</p></div></article><article><span>02</span><div><h3>The workplace matters.</h3><p>Shared location connects a check-in to the assigned workplace.</p></div></article></div></div>
      </section>

      <section className="astryx-section astryx-workplaces">
        <SectionTitle label="MADE FOR REAL WORK" title={<>Clarity for<br /><em>enterprise teams.</em></>}>More context for managers. A consistent check-in for employees.</SectionTitle>
        <div className="astryx-workplace-grid">{['Distributed offices', 'Retail teams', 'Project sites', 'Service operations'].map((name, i) => <article key={name}><span>0{i + 1}</span><h3>{name}</h3></article>)}</div>
      </section>

      <section className="astryx-section astryx-contact" id="contact"><div><p className="eyebrow">GET IN TOUCH</p><h2>Bring clarity to<br /><em>workplace attendance.</em></h2><p>Tell us about your employee attendance needs. We’ll help you find the right path.</p></div><a className="astryx-email" href="mailto:info@thekeppler.com?subject=KEPPLER%20ASTRYX%20demo%20request">info@thekeppler.com <span aria-hidden="true">↗</span></a></section>
    </main>
    <footer className="astryx-footer"><a href="/">← All products</a><span>© {new Date().getFullYear()} KEPPLER AI</span><a href="#top">Back to top ↑</a></footer>
  </div>;
}
