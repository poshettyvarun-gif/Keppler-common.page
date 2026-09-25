import React from 'react';
import './site-footer.css';

const links = [
  ['01', 'Document OCR', 'KEPPLER AI', '/keppler-ai'],
  ['02', 'Employee Attendance', 'KEPPLER ASTRYX', '/keppler-astryx'],
  ['03', 'Audio & Video to Text', 'Spoken words. Written clarity.', '/audio-video-to-text'],
];

export default function SiteFooter() {
  return <footer className="shared-footer">
    <div className="shared-footer-main">
      <div className="shared-footer-brand"><a href="/" aria-label="KEPPLER AI home"><img src="/keppler-logo.png" alt="KEPPLER AI" /></a><h2>Three products.<br />One clearer way <em>to work.</em></h2><p>Document intelligence. Workplace clarity. Spoken words to text.</p><a className="shared-footer-home" href="/#products">Explore the portfolio <span aria-hidden="true">↗</span></a></div>
      <nav className="shared-footer-products" aria-label="Footer products"><h3>OUR PRODUCTS</h3>{links.map(([number, name, description, href]) => <a key={href} href={href}><span className="shared-footer-number">{number}</span><span><strong>{name}</strong><small>{description}</small></span><span aria-hidden="true">↗</span></a>)}</nav>
      <div className="shared-footer-contact"><h3>LET’S TALK</h3><p>Tell us about your business needs. We’ll help you find the right solution.</p><a className="shared-footer-email" href="mailto:info@thekeppler.com">info@thekeppler.com <span aria-hidden="true">↗</span></a><a className="shared-footer-contact-link" href="/#contact">Get in touch <span aria-hidden="true">→</span></a></div>
    </div>
    <div className="shared-footer-offices"><div><span>01 / USA</span><address>13111 Westheimer Rd., Suite 311<br />Houston, TX, 77077</address></div><div><span>02 / INDIA</span><address>Flat 301, 10-1-6&amp;7, Ram Krishna Sadan<br />Sai Krupa Enclave Colony, Khajaguda, Hyderabad 500032</address></div></div>
    <div className="shared-footer-bottom"><span>© {new Date().getFullYear()} KEPPLER AI. All rights reserved.</span><a href="#top">Back to top <span aria-hidden="true">↑</span></a></div>
  </footer>;
}
