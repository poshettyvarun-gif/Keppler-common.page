import DocumentSamples from './DocumentSamples';

const Logo = () => (
  <img src="/images/keppler-ai-wordmark.png" alt="Keppler AI — Intelligence for every document" />
);

export default function Home() {
  return (
    <main>

      <section className="hero" id="top">
        <div className="hero-copy reveal">
          <p className="eyebrow"><span>✦</span> Keppler — Multilingual AI OCR Platform</p>
          <h1>Read anything.<br /><em>In any language.</em><br />At scale.</h1>
          <p className="lede">Keppler is a standalone AI-powered OCR engine that extracts, understands, and structures text from complex, low-quality, and legacy documents with enterprise-grade accuracy, speed, and security.</p>
          <div className="hero-actions"><a className="button" href="#contact">Request a Demo <span>↗</span></a><a className="button secondary" href="#capabilities">View Platform <span>↓</span></a></div>
          <div className="trust-row">
            <div><b>AI-trained, not rule-based</b><span>Handles multilingual, low-quality, and legacy documents without brittle templates.</span></div>
            <div><b>Enterprise-grade delivery</b><span>Built for speed, security, and accuracy at production scale.</span></div>
          </div>
        </div>
        <div className="hero-visual reveal delay-1">
          <div className="specimen-frame">
            <div className="specimen-label"><span>Document Specimen</span><span>No. 01</span></div>
            <div className="doc-card" aria-label="Keppler OCR processing a multilingual document">
              <div className="doc-card-bar">
                <span className="brandmark"><i />Keppler OCR</span>
                <span className="processing"><i />AI OCR</span>
              </div>
              <div className="doc-card-body">
                <div className="doc-preview">
                  <div className="doc-label"><span>Source</span><span>Multilingual document · PDF</span></div>
                  <div className="scan-window">
                    <div className="doc-lines">{Array.from({ length: 7 }).map((_, i) => <i key={i} />)}</div>
                    <div className="scan-line" aria-hidden="true" />
                  </div>
                  <div className="doc-scripts">
                    <span>अ</span><span>త</span><span>அ</span><span>ع</span>
                  </div>
                </div>
                <div className="doc-extract">
                  <div className="doc-label"><span>Extracted Data</span><span>JSON</span></div>
                  <div className="field blue"><b>Output</b><span>JSON · CSV · XML</span></div>
                  <div className="field red"><b>Modes</b><span>Batch · Real-time</span></div>
                  <div className="field green"><b>Security</b><span>Encrypted</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="capabilities">
        <div className="section-heading">
          <p className="kicker">Why Keppler</p>
          <h2>Solves multilingual, low-quality, and legacy documents with <em>AI-trained models</em> instead of rules.</h2>
          <p>Keppler extracts, understands, and structures complex content while preserving tables, fields, and intent across languages and scripts.</p>
        </div>
        <div className="feature-grid three">
          <article className="feature-card"><span className="card-num">01</span><div className="icon">✦</div><h3>AI-first engine</h3><p>Purpose-built OCR models for multilingual and mixed-language pages.</p><a href="#capabilities">Explore platform <span>→</span></a></article>
          <article className="feature-card"><span className="card-num">02</span><div className="icon">◎</div><h3>Enterprise accuracy</h3><p>Reliable performance on low-quality scans, photos, and handwritten forms.</p><a href="#capabilities">See capabilities <span>→</span></a></article>
          <article className="feature-card"><span className="card-num">03</span><div className="icon">⌘</div><h3>Structured outputs</h3><p>JSON, CSV, and XML with intact tables, fields, and relationships.</p><a href="#capabilities">View outputs <span>→</span></a></article>
        </div>

        <div className="subsection">
          <div className="subsection-heading split"><div><p className="kicker">Platform</p><h3>Core capabilities that keep your documents <em>production-ready.</em></h3></div><p>From first scan to structured output, Keppler combines accuracy, context, and format fidelity in one enterprise engine.</p></div>
          <div className="cap-list">
            {[
              ['⌁','Advanced AI OCR','High accuracy on scanned PDFs, images, and photos with layout fidelity.'],
              ['文','Multilingual & script-aware','Understands global and Indian scripts, including mixed pages.'],
              ['✎','Handwritten text recognition','Reads forms, registers, and notes without custom templates.'],
              ['▦','Intelligent document structuring','Outputs JSON, CSV, and XML with preserved tables and fields.'],
              ['↔','Enterprise APIs','REST APIs for batch pipelines and real-time processing.'],
              ['✓','Output you can trust','Accurate tables, special characters, and field-level confidence.']
            ].map(([icon,title,copy],i)=><article className="cap-row" key={title}><span className="num">0{i+1}</span><div className="icon2">{icon}</div><div className="body"><h3>{title}</h3><p>{copy}</p></div></article>)}
          </div>
        </div>
      </section>

      <section className="section" id="languages">
        <div className="coverage-block">
          <div className="lang-directory">
            <div className="lang-stat"><b>10</b><span>Languages<br/>supported</span></div>
            <div className="lang-chip-row">
              <span className="lang-chip core">✦ Any Script — Mixed-language ready</span>
              {[['EN','English'],['ES','Spanish'],['FR','French'],['HI','Hindi'],['TE','Telugu'],['TA','Tamil'],['KN','Kannada'],['MR','Marathi'],['BN','Bengali'],['AR','Arabic']].map(([code, name]) => (
                <span className="lang-chip" key={code}><b>{code}</b>{name}</span>
              ))}
            </div>
          </div>
          <div className="language-copy">
            <p className="kicker">Supported Languages</p><h2>Global coverage with strong <em>Indian language support.</em></h2>
            <p>English, Spanish, French, Hindi, Telugu, Tamil, Kannada, Marathi, Bengali, Arabic (optional modules). Keppler supports mixed-language documents on the same page.</p>
            <p className="checkline">✓ Mixed-language pages supported</p>
          </div>
        </div>

        <div className="subsection" id="industries">
          <div className="subsection-heading"><p className="kicker">Industries & Use Cases</p><h3>Built for teams who need <em>accuracy, scale, and compliance.</em></h3></div>
          <div className="industry-list">
            {[
              ['01','Government','Digitize legacy citizen records and archives at speed.','Archives · Citizen records'],
              ['02','Healthcare','Process medical records, prescriptions, and EMR ingestion securely.','Prescriptions · EMR'],
              ['03','Banking & BFSI','Automate KYC, forms, and statements with audit-ready outputs.','KYC · Statements'],
              ['04','Legal','Turn contracts, affidavits, and court records into searchable data.','Contracts · Court records'],
              ['05','Oil & Gas','Extract technical logs, reports, and legacy field data.','Logs · Field reports'],
              ['06','Enterprise ops','Standardize document processing across teams and regions.','Forms · Operations']
            ].map(([n,title,copy,tags])=><article key={title}><span>{n}</span><h3>{title}</h3><p>{copy}</p><small>{tags}</small><b>↗</b></article>)}
          </div>
        </div>
      </section>

      <section className="section">
        <DocumentSamples />

        <div className="subsection security-block" id="security">
          <div className="subsection-heading security-copy">
            <p className="kicker">Security & Compliance</p>
            <h3>Designed for sensitive, <em>regulated data.</em></h3>
            <p>Encryption at rest and in transit, role-based access, and audit logging are baked in. HIPAA-aligned and GDPR-ready architecture keeps your teams compliant.</p>
          </div>
          <div className="security-panel">
            {['Encryption at rest and in transit','Role-based access controls','Audit logging and traceability','HIPAA-aligned & GDPR-ready'].map((x,i)=><div key={x}><span>0{i+1}</span><b>{x}</b><i>✓</i></div>)}
          </div>
        </div>
      </section>

      <section className="section choose-cta">
        <div className="section-heading"><p className="kicker">Why Enterprises Choose Keppler</p><h2>Superior multilingual accuracy with an <em>API-first design</em> and enterprise security.</h2><p>Strong Indian language OCR, scalable processing, and flexible deployments give teams the control they need.</p></div>
        <div className="pill-row"><span>Multilingual accuracy</span><span>API-first architecture</span><span>Indian language strength</span><span>Enterprise security</span><span>Batch & real-time</span></div>
      </section>

      <section className="section contact" id="contact">
        <div className="contact-info"><p className="kicker">Get in Touch</p><h2>Let’s make your documents <em>useful.</em></h2><p>Tell us what you’re processing and where the complexity lies. Our OCR experts will help you find the right path.</p><a href="mailto:info@thekeppler.com" className="email-link">info@thekeppler.com <span>↗</span></a>
          <div className="address-grid">
            {[
              ['USA','13111 Westheimer Rd., Suite 311','Houston, TX, 77077'],
              ['India','Flat 301, 10-1-6&7, Ram Krishna Sadan','Sai Krupa Enclave Colony, Khajaguda, Hyderabad 500032'],
            ].map(([name, l1, l2], i) => (
              <address key={name}><span>0{i + 1}</span><b>{name}</b>{l1}<br />{l2}</address>
            ))}
          </div>
        </div>
      </section>

      <footer><div className="footer-top"><div className="footer-brand"><a className="brand" href="#top"><Logo/></a><p>Multilingual AI OCR engine that reads anything, in any language, at enterprise scale.</p></div><div><h3>Platform</h3><a href="#capabilities">Capabilities</a><a href="#languages">Language Support</a><a href="#security">Security & Compliance</a></div><div><h3>Company</h3><a href="/about-us">About Us</a><a href="#contact">Contact</a><a href="https://kalpratech.com/careers/">Careers ↗</a></div><div><h3>Developers</h3><span>API Docs</span><span>SDKs</span><a href="/contact-us">Talk to Experts</a></div></div><div className="footer-bottom"><span>© 2025 Keppler OCR. All rights reserved.</span><a href="#top">Back to top ↑</a></div></footer>
    </main>
  );
}
