import { useEffect, useState } from 'react';

type Sample = {
  id: string;
  number: string;
  category: string;
  title: string;
  description: string;
  flow: string;
  pageLabel: string;
  originalLabel: string;
  outputLabel: string;
  originalPreview: string;
  outputPreviews: string[];
  originalDownload: string;
  outputDownload: string;
};

const samples: Sample[] = [
  {
    id: 'attendance-register',
    number: '01',
    category: 'Handwritten register',
    title: 'Attendance register — OCR extraction',
    description: 'Handwritten attendance details converted into readable text and a structured table.',
    flow: 'Handwriting → Digital text',
    pageLabel: '1 output page',
    originalLabel: 'Original handwritten register',
    outputLabel: 'Keppler structured output',
    originalPreview: '/images/examples/attendance-register-original.jpg',
    outputPreviews: ['/images/examples/attendance-register-extracted.png'],
    originalDownload: '/documents/examples/attendance-register-original.jpg',
    outputDownload: '/documents/examples/attendance-register-output.pdf',
  },
  {
    id: 'telugu-legal-notes',
    number: '02',
    category: 'Telugu handwriting',
    title: 'Telugu legal notes — OCR extraction',
    description: 'Dense handwritten Telugu notes converted into editable text while preserving the original script.',
    flow: 'Telugu handwriting → DOCX',
    pageLabel: '2 output pages',
    originalLabel: 'Original Telugu notes',
    outputLabel: 'Keppler editable output',
    originalPreview: '/images/examples/telugu-legal-notes-original.jpg',
    outputPreviews: ['/images/examples/telugu-legal-notes-extracted.png'],
    originalDownload: '/documents/examples/telugu-legal-notes-original.jpg',
    outputDownload: '/documents/examples/telugu-legal-notes-output.docx',
  },
  {
    id: 'medical-prescription',
    number: '03',
    category: 'Medical handwriting',
    title: 'Handwritten prescription — OCR extraction',
    description: 'Clinical handwriting converted into clear digital text for review and downstream processing.',
    flow: 'Prescription → Digital text',
    pageLabel: '2 output pages',
    originalLabel: 'Original prescription',
    outputLabel: 'Keppler extracted output',
    originalPreview: '/images/examples/medical-prescription-original.jpg',
    outputPreviews: ['/images/examples/medical-prescription-extracted-1.png', '/images/examples/medical-prescription-extracted-2.png'],
    originalDownload: '/documents/examples/medical-prescription-original.jpg',
    outputDownload: '/documents/examples/medical-prescription-output.pdf',
  },
  {
    id: 'spanish-manuscript',
    number: '04',
    category: 'Historic manuscript',
    title: 'Spanish manuscript — OCR extraction',
    description: 'Aged handwritten Spanish content interpreted and converted into readable English text.',
    flow: 'Old Spanish → English',
    pageLabel: '2 output pages',
    originalLabel: 'Original Spanish manuscript',
    outputLabel: 'Keppler translated output',
    originalPreview: '/images/examples/spanish-manuscript-original.png',
    outputPreviews: ['/images/examples/spanish-manuscript-extracted-1.png', '/images/examples/spanish-manuscript-extracted-2.png'],
    originalDownload: '/documents/examples/spanish-manuscript-original.png',
    outputDownload: '/documents/examples/spanish-manuscript-output.pdf',
  },
];

export default function DocumentSamples() {
  const [activeSample, setActiveSample] = useState<Sample | null>(null);

  useEffect(() => {
    if (!activeSample) return;
    const closeOnEscape = (event: KeyboardEvent) => event.key === 'Escape' && setActiveSample(null);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [activeSample]);

  return (
    <div className="document-samples" id="document-examples">
      <div className="section-heading sample-intro">
        <p className="kicker">Real Document Examples</p>
        <h2>See the original. <em>Inspect the output.</em></h2>
      </div>

      <div className="sample-grid">
        {samples.map((sample) => (
          <article className="sample-card" key={sample.id}>
            <div className="sample-card-top">
              <img src={sample.originalPreview} alt="" />
              <span>{sample.category}</span>
              <b>{sample.number}</b>
            </div>
            <h3>{sample.title}</h3>
            <p>{sample.description}</p>
            <div className="sample-meta"><span>{sample.flow}</span><span>▧ {sample.pageLabel}</span></div>
            <button type="button" className="sample-button" onClick={() => setActiveSample(sample)}>◎ View sample</button>
          </article>
        ))}
      </div>

      {activeSample && (
        <div className="sample-modal" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && setActiveSample(null)}>
          <div className="sample-dialog" role="dialog" aria-modal="true" aria-labelledby="sample-dialog-title">
            <header>
              <div><p className="kicker">Document sample {activeSample.number}</p><h2 id="sample-dialog-title">{activeSample.title}</h2></div>
              <button type="button" className="sample-close" onClick={() => setActiveSample(null)} aria-label="Close sample">×</button>
            </header>
            <div className="sample-compare">
              <section>
                <div className="viewer-heading"><b>{activeSample.originalLabel}</b><span>Source</span></div>
                <div className="document-viewer original"><img src={activeSample.originalPreview} alt={activeSample.originalLabel} /></div>
              </section>
              <section>
                <div className="viewer-heading"><b>{activeSample.outputLabel}</b><span>Processed</span></div>
                <div className="document-viewer output">{activeSample.outputPreviews.map((preview, index) => <img src={preview} alt={`${activeSample.outputLabel}, page ${index + 1}`} key={preview} />)}</div>
              </section>
            </div>
            <div className="sample-actions">
              <a className="button secondary" href={activeSample.originalDownload} download>Download original ↓</a>
              <a className="button" href={activeSample.outputDownload} download>Download output ↓</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
