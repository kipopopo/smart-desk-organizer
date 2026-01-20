'use client';
import './globals.css';

import { useState } from 'react';

export default function RootLayout({ children }) {
  const basePath = process.env.NODE_ENV === 'production' ? '/smart-desk-organizer' : '';
  const [isOpen, setIsOpen] = useState(false);

  return (
    <html lang="en">
      <head>
        <title>Smart Desk Organizer | SDO</title>
        <meta name="description" content="AI-Powered Productivity & Health Assistant for your workspace." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        {/* Navigation Dock */}
        <nav className={`dock-nav animate-slide-down ${isOpen ? 'mobile-active' : ''}`}>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
            <div className="dock-logo gradient-text">SDO</div>
            <button
              className="mobile-menu-btn"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              )}
            </button>
          </div>

          <div className={`dock-links ${isOpen ? 'mobile-open' : ''}`}>
            <a href={`${basePath}/`} className="nav-link" onClick={() => setIsOpen(false)}>Home</a>
            <a href={`${basePath}/part-1`} className="nav-link" onClick={() => setIsOpen(false)}>Proposal</a>
            <a href={`${basePath}/part-2`} className="nav-link" onClick={() => setIsOpen(false)}>Specs</a>
            <a href={`${basePath}/part-3`} className="nav-link" onClick={() => setIsOpen(false)}>Design</a>
            <a href={`${basePath}/part-4`} className="nav-link" onClick={() => setIsOpen(false)}>Testing</a>
          </div>
        </nav>

        {children}

        <footer style={{ padding: '60px 20px', textAlign: 'center', borderTop: '1px solid var(--border-light)', marginTop: '80px', background: 'var(--card-bg)' }}>
          <p className="gradient-text" style={{ fontWeight: '800', fontSize: '1.2rem', marginBottom: '10px' }}>Smart Desk Organizer</p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Designed by UTM HCI Project Group &copy; 2026.</p>
        </footer>
      </body>
    </html>
  );
}
