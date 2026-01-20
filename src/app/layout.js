import { Outfit, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata = {
  title: 'Smart Desk Organizer | SDO',
  description: 'AI-Powered Productivity & Health Assistant for your workspace.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${jakarta.variable}`}>
        {/* Navigation Dock */}
        <nav className="dock-nav animate-slide-down">
          <div className="dock-logo gradient-text">SDO</div>
          <div className="dock-links">
            <a href="/smart-desk-organizer/" className="nav-link">Home</a>
            <a href="/smart-desk-organizer/part-1" className="nav-link">Proposal</a>
            <a href="/smart-desk-organizer/part-2" className="nav-link">Specs</a>
            <a href="/smart-desk-organizer/part-3" className="nav-link">Design</a>
            <a href="/smart-desk-organizer/part-4" className="nav-link">Testing</a>
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
