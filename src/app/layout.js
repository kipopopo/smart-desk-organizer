import './globals.css';

export const metadata = {
  title: 'Smart Desk Organizer | SDO',
  description: 'AI-Powered Productivity & Health Assistant for your workspace.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="glass" style={{
          position: 'fixed',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '90%',
          maxWidth: '1200px',
          zIndex: 1000,
          padding: '15px 30px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ fontWeight: 'bold', fontSize: '1.5rem' }} className="gradient-text">SDO</div>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="/smart-desk-organizer/">Home</a>
            <a href="/smart-desk-organizer/part-1">Part 1: Proposal</a>
            <a href="/smart-desk-organizer/part-2">Part 2: Requirements</a>
            <a href="/smart-desk-organizer/part-3">Part 3: Design</a>
            <a href="/smart-desk-organizer/part-4">Part 4: Evaluation</a>
          </div>
        </nav>
        {children}
        <footer style={{ padding: '40px', textAlign: 'center', borderTop: '1px solid var(--border)', marginTop: '80px' }}>
          <p className="gradient-text" style={{ fontWeight: 'bold', marginBottom: '10px' }}>Smart Desk Organizer & Productivity Assistant</p>
          <p style={{ color: 'var(--text-muted)' }}>&copy; 2026 UTM HCI Project Group SDO. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
