
export default function Home() {
  return (
    <main style={{ position: 'relative', overflow: 'hidden' }}>

      {/* Background Glows */}
      <div style={{
        position: 'fixed',
        top: '-20%', left: '-10%',
        width: '50vw', height: '50vw',
        background: 'radial-gradient(circle, var(--primary-glow) 0%, transparent 70%)',
        filter: 'blur(100px)', zIndex: 0, opacity: 0.5
      }} />
      <div style={{
        position: 'fixed',
        bottom: '-20%', right: '-10%',
        width: '50vw', height: '50vw',
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)',
        filter: 'blur(100px)', zIndex: 0, opacity: 0.5
      }} />

      {/* Hero Section */}
      <section className="section animate" style={{ textAlign: 'center', paddingTop: '180px', minHeight: '90vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: 0.9, marginBottom: '20px' }}>
          Work <span className="gradient-text">Smarter</span>.<br />
          Live <span className="gradient-text">Better</span>.
        </h1>

        <p className="subtitle" style={{ fontSize: '1.2rem', marginBottom: '40px' }}>
          The AI-Powered Smart Desk Organizer that harmonizes your workspace health and productivity.
        </p>

        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginBottom: '80px' }}>
          <a href="#breakdown" className="glass" style={{
            padding: '16px 40px',
            fontSize: '1.1rem',
            fontWeight: '600',
            background: 'var(--primary)',
            border: 'none',
            color: 'white',
            borderRadius: '9999px',
            boxShadow: '0 0 20px rgba(6, 182, 212, 0.4)'
          }}>Explore the Project</a>

          <button style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '9999px',
            padding: '16px 40px',
            color: 'var(--text-muted)',
            fontWeight: '600',
            cursor: 'default'
          }}>v1.0 Prototype Live</button>
        </div>

        {/* Hero Dashboard Preview */}
        <div className="glass" style={{ padding: '10px', borderRadius: '24px', background: 'rgba(255,255,255,0.05)' }}>
          <img
            src={process.env.NODE_ENV === 'production' ? '/smart-desk-organizer/assets/dashboard.png' : '/assets/dashboard.png'}
            alt="Smart Desk Dashboard"
            className="img-preview"
            style={{ maxWidth: '1000px', boxShadow: 'none', border: 'none' }}
          />
        </div>
      </section>

      {/* Bento Grid Project Breakdown */}
      <section className="section" id="breakdown" style={{ position: 'relative' }}>
        <h2 className="title" style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '60px' }}>Project <span className="gradient-text">Breakdown</span></h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gridTemplateRows: 'repeat(2, 300px)',
          gap: '24px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {/* Part 1: Proposal (Large Left) */}
          <a href="/smart-desk-organizer/part-1" className="glass" style={{
            gridColumn: 'span 2', gridRow: 'span 2',
            padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
            background: 'linear-gradient(to top right, rgba(6,182,212,0.1), transparent)'
          }}>
            <span style={{ color: 'var(--cyan)', fontWeight: 'bold', marginBottom: '10px' }}>PART 01</span>
            <h3 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>The Proposal</h3>
            <p style={{ color: 'var(--text-muted)' }}>Problem Statement, Objectives, and the vision for a smarter workspace.</p>
          </a>

          {/* Part 2: Requirements (Top Right) */}
          <a href="/smart-desk-organizer/part-2" className="glass" style={{
            gridColumn: 'span 2',
            padding: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'center',
            position: 'relative', overflow: 'hidden'
          }}>
            <div style={{ position: 'absolute', top: '-20%', right: '-10%', fontSize: '10rem', opacity: 0.05, fontWeight: '900' }}>02</div>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '10px' }}>Requirements</h3>
            <p style={{ color: 'var(--text-muted)' }}>User Personas & Hardware Specs.</p>
            <span style={{ marginTop: 'auto', color: 'var(--purple)', fontWeight: 'bold' }}>View Analysis &rarr;</span>
          </a>

          {/* Part 3: Design (Bottom Right 1) */}
          <a href="/smart-desk-organizer/part-3" className="glass" style={{
            gridColumn: 'span 1',
            padding: '30px', display: 'flex', flexDirection: 'column',
            borderTop: '2px solid var(--green)'
          }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Design</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>UI Interfaces & Storyboards.</p>
          </a>

          {/* Part 4: Evaluation (Bottom Right 2) */}
          <a href="/smart-desk-organizer/part-4" className="glass" style={{
            gridColumn: 'span 1',
            padding: '30px', display: 'flex', flexDirection: 'column',
            borderTop: '2px solid var(--amber)'
          }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Evaluation</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Testing Results & Feedback.</p>
          </a>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section" id="features">
        <h2 className="title" style={{ marginBottom: '40px' }}>Core Ecosystem</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {[
            { t: 'Smart Item Tracking', d: 'Computer vision detection for lost items.', c: 'var(--cyan)' },
            { t: 'Health Assist', d: 'Medication reminders & posture analysis.', c: 'var(--green)' },
            { t: 'Gesture Control', d: 'Touch-free interaction for accessibility.', c: 'var(--purple)' },
          ].map((f, i) => (
            <div key={i} className="glass" style={{ padding: '30px', borderLeft: `4px solid ${f.c}` }}>
              <h3 style={{ marginBottom: '10px' }}>{f.t}</h3>
              <p style={{ color: 'var(--text-muted)' }}>{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="section" id="team" style={{ marginBottom: '100px' }}>
        <h2 className="title">The Team</h2>
        <div className="glass" style={{ padding: '40px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <tbody>
              {[
                { name: 'MUHAMMAD SYAFIQ BIN AB RAZAK', id: 'SX240659ECJHS04' },
                { name: 'MUHAMMAD BADRUL HISYAM BIN MAT ROSLI', id: 'SX231719ECJHF04' },
                { name: 'MUHAMMAD SYAZWAN BIN KAMARUZAMAN', id: 'SX240290ECRHS04' },
                { name: 'MUHAMMAD THAQIF BIN ABDUL AZIZ', id: 'SX231702ECJHF04' },
                { name: 'PUTRA NAZREEN HAFIZ BIN ABDUL KARIM', id: 'SX240247ECJHS04' }
              ].map((m, i) => (
                <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '20px', fontWeight: '500' }}>{m.name}</td>
                  <td style={{ padding: '20px', color: 'var(--text-muted)', fontFamily: 'monospace' }}>{m.id}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

    </main>
  );
}
