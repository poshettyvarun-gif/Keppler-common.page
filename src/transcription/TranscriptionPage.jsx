import React, { useState } from 'react';
import '../astryx/astryx.css';
import './transcription.css';

function Waveform() {
  return <div className="transcript-wave" aria-hidden="true">{[18,30,45,24,58,36,68,44,28,55,74,42,62,32,50,70,38,24,54,35,64,46,26,40].map((height, i) => <i key={i} style={{ '--bar-height': `${height}px`, '--bar-delay': `${i * .08}s` }} />)}</div>;
}

export function TranscriptPreview() {
  const [source, setSource] = useState('audio');
  return <div className="transcript-preview">
    <div className="transcript-preview-top"><span>FROM RECORDING TO TEXT</span><span>ILLUSTRATION</span></div>
    <div className="transcript-tabs" aria-label="Choose an illustrative source">
      <button type="button" aria-pressed={source === 'audio'} onClick={() => setSource('audio')}>Audio</button>
      <button type="button" aria-pressed={source === 'video'} onClick={() => setSource('video')}>Video</button>
    </div>
    <div className={`transcript-source ${source}`}>
      {source === 'video' && <div className="transcript-video-symbol" aria-hidden="true"><span>▶</span><i /><i /><i /></div>}
      <Waveform />
      <p>{source === 'audio' ? 'Spoken words in an audio recording' : 'Spoken words in a video recording'}</p>
    </div>
    <div className="transcript-connector" aria-hidden="true">↓</div>
    <div className="transcript-output"><span>ILLUSTRATIVE TRANSCRIPT</span><p>“Let’s review the next steps and bring the team together for a follow-up discussion.”</p><div aria-hidden="true"><i /><i /><i /></div></div>
  </div>;
}

export default function TranscriptionPage() {
  return <div className="astryx-page transcription-page" id="top"><main>
    <section className="transcription-hero">
      <div className="transcription-hero-copy"><p className="eyebrow">KEPPLER / AUDIO &amp; VIDEO TO TEXT</p><h1>Spoken words.<br /><em>Written clarity.</em></h1><p>Turn speech from audio and video recordings into text. Bring the words in your recordings into a format you can read, review, and refer back to.</p><div className="astryx-actions"><a className="button primary" href="#contact">Request a demo <span aria-hidden="true">↗</span></a><a className="astryx-text-link" href="#workflow">How it works <span aria-hidden="true">↓</span></a></div></div>
      <TranscriptPreview />
    </section>

    <section className="astryx-section transcription-inputs"><div className="astryx-section-title"><p className="eyebrow">TWO SOURCES. ONE READABLE FORMAT.</p><h2>From what you hear<br /><em>to what you can read.</em></h2></div><div className="transcription-input-grid">
      <article><span className="transcription-source-icon" aria-hidden="true">♫</span><span className="transcription-index">01 / AUDIO</span><h3>Audio to text</h3><p>Convert spoken content in audio recordings into a written transcript for reading and review.</p></article>
      <article><span className="transcription-source-icon" aria-hidden="true">▷</span><span className="transcription-index">02 / VIDEO</span><h3>Video to text</h3><p>Convert the speech in a video recording into text, so you can refer back to the words as well as the recording.</p></article>
    </div></section>

    <section className="astryx-section transcription-workflow" id="workflow"><div className="astryx-section-title"><p className="eyebrow">THE TRANSCRIPTION WORKFLOW</p><h2>A recording becomes<br /><em>a written reference.</em></h2></div><div className="astryx-steps">{[
      ['Start with a recording', 'Use an audio or video recording containing the speech you want to transcribe.'],
      ['Convert speech to text', 'The spoken content is converted into a written transcript.'],
      ['Read and review', 'Review the text alongside your recording and refer back to the content when needed.'],
    ].map(([title, description], i) => <article key={title}><span className="astryx-step-number">0{i + 1}</span><h3>{title}</h3><p>{description}</p></article>)}</div></section>

    <section className="astryx-section astryx-workplaces"><div className="astryx-section-title"><p className="eyebrow">PUT YOUR RECORDINGS TO WORK</p><h2>Keep the conversation<br /><em>within reach.</em></h2><p>Written transcripts give teams another way to revisit recorded discussions and spoken information.</p></div><div className="astryx-workplace-grid">{['Meetings & discussions', 'Interviews', 'Training sessions', 'Presentations'].map((name, i) => <article key={name}><span>0{i + 1}</span><h3>{name}</h3></article>)}</div></section>

    <section className="astryx-section astryx-contact" id="contact"><div><p className="eyebrow">GET IN TOUCH</p><h2>Bring your recordings<br /><em>into the conversation.</em></h2><p>Tell us about your audio and video transcription needs. We’ll help you find the right path.</p></div><a className="astryx-email" href="mailto:info@thekeppler.com?subject=Audio%20and%20Video%20to%20Text%20demo%20request">info@thekeppler.com <span aria-hidden="true">↗</span></a></section>
  </main></div>;
}
