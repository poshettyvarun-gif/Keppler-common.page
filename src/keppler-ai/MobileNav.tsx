import { useState } from 'react';

const links: [string, string][] = [
  ['#capabilities', 'Platform'],
  ['#languages', 'Languages'],
  ['#industries', 'Solutions'],
  ['#security', 'Security'],
  ['#contact', 'Contact'],
  ['/about-us/', 'About Us'],
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="nav-toggle"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>
      <nav className={open ? 'mobile-nav open' : 'mobile-nav'} aria-label="Mobile navigation">
        {links.map(([href, label]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
        ))}
        <div className="mobile-nav-actions">
          <a href="/login/" onClick={() => setOpen(false)}>Login</a>
          <a className="button small" href="/register/" onClick={() => setOpen(false)}>Register <span>↗</span></a>
        </div>
      </nav>
    </>
  );
}
