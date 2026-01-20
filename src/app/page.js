
export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="section animate" style={{ textAlign: 'center', paddingTop: '160px' }}>
        <h1 className="title" style={{ fontSize: '4.5rem' }}>
          Work <span className="gradient-text">Smarter</span>,<br />
          Live <span className="gradient-text">Better</span>.
        </h1>
        <p className="subtitle">
          The Smart Desk Organizer & Productivity Assistant (SDO) combines physical organization with AI-driven tools to help students, professionals, and the elderly stay focused and healthy.
        </p>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
          <a href="#features" className="glass" style={{ padding: '15px 40px', fontWeight: '600' }}>Explore Features</a>
          <button style={{
            background: 'var(--primary)',
            border: 'none',
            borderRadius: '16px',
            padding: '15px 40px',
            color: 'white',
            fontWeight: '600',
            cursor: 'default',
            opacity: 0.8
          }}>Live Preview Below</button>
        </div>

        {/* Prototype Showcase */}
        <div style={{ marginTop: '60px', padding: '0 20px' }}>
          <img
            src={process.env.NODE_ENV === 'production' ? '/smart-desk-organizer/assets/dashboard.png' : '/assets/dashboard.png'}
            alt="Smart Desk Dashboard"
            className="img-preview"
            style={{ maxWidth: '1000px', margin: '0 auto' }}
          />
        </div>
      </section>

      {/* Problem Section */}
      <section className="section" id="problem">
        <div className="glass" style={{ padding: '60px', textAlign: 'center' }}>
          <h2 className="title" style={{ fontSize: '2.5rem' }}>The Challenge</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', lineHeight: '1.6' }}>
            "Many people struggle to keep their workspace tidy, manage their time well, and stay focused. For elderly users, there are extra challenges like remembering medicine and tracking health."
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="section" id="features">
        <h2 className="title">Key Features</h2>
        <p className="subtitle">Smart hardware integrated with a powerful mobile ecosystem.</p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px'
        }}>
          {[
            { title: 'Item Tracking', desc: 'The table knows when items are picked up or put back, helping you find things effortlessly.' },
            { title: 'Gesture Controls', desc: 'Control timers and features with simple hand movements, perfect for accessibility.' },
            { title: 'Stylus Support', desc: 'Write, draw, and take notes directly on the desk screen. Ideal for students and creators.' },
            { title: 'Projection Features', desc: 'Show schedules or shared documents on the desk or wall for group collaboration.' },
            { title: 'Health Tracking', desc: 'Medication reminders and posture monitoring via smartwatches and sensors.' },
            { title: 'Companion App', desc: 'Set goals, get notifications, and track your patterns in real-time from your phone.' }
          ].map((f, i) => (
            <div key={i} className="glass" style={{ padding: '30px' }}>
              <div style={{ color: 'var(--accent)', fontSize: '1.5rem', marginBottom: '15px', fontWeight: 'bold' }}>0{i + 1}</div>
              <h3 style={{ marginBottom: '10px' }}>{f.title}</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.5' }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Personas Section */}
      <section className="section" id="personas">
        <h2 className="title">Who is it for?</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
          {[
            { name: 'Adam Farhan (22)', role: 'University Student', goal: 'Improve focus and maintain a tidy desk during long study sessions.' },
            { name: 'Encik Roslan (63)', role: 'Elderly User', goal: 'Receive gentle reminders for posture and medication with a simplified interface.' },
            { name: 'Daniel Lim (32)', role: 'Remote Professional', goal: 'Maximize productivity with automated tracking and minimal distractions.' }
          ].map((p, i) => (
            <div key={i} className="glass" style={{ padding: '40px', borderTop: '4px solid var(--primary)' }}>
              <h3 className="gradient-text">{p.name}</h3>
              <div style={{ fontSize: '0.9rem', color: 'var(--primary)', marginBottom: '15px', fontWeight: 'bold' }}>{p.role}</div>
              <p style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>"{p.goal}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* Project Breakdown Section */}
      <section className="section animate" id="breakdown">
        <h2 className="title" style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '60px' }}>
          Project <span className="gradient-text">Breakdown</span>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          {[
            { tag: 'Part 1', title: 'The Proposal', href: '/part-1', desc: 'Problem statement, objectives, and proposed solution.' },
            { tag: 'Part 2', title: 'Requirements', href: '/part-2', desc: 'User personas, task analysis (HTA), and system specs.' },
            { tag: 'Part 3', title: 'Design', href: '/part-3', desc: 'Interface metaphors, storyboards, and prototyping.' },
            { tag: 'Part 4', title: 'Evaluation', href: '/part-4', desc: 'Usability testing, user feedback, and final results.' },
          ].map((item, i) => (
            <a href={`/smart-desk-organizer${item.href}`} key={i} className="glass" style={{ padding: '30px', textDecoration: 'none', transition: 'transform 0.3s', display: 'block' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 'bold' }}>{item.tag}</span>
              <h3 style={{ margin: '10px 0' }}>{item.title}</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{item.desc}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="section" id="team">
        <h2 className="title">Project Team</h2>
        <div className="glass" style={{ overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ background: 'rgba(255,255,255,0.05)' }}>
                <th style={{ padding: '20px' }}>Member Name</th>
                <th style={{ padding: '20px' }}>Student ID</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'MUHAMMAD SYAFIQ BIN AB RAZAK', id: 'SX240659ECJHS04' },
                { name: 'MUHAMMAD BADRUL HISYAM BIN MAT ROSLI', id: 'SX231719ECJHF04' },
                { name: 'MUHAMMAD SYAZWAN BIN KAMARUZAMAN', id: 'SX240290ECRHS04' },
                { name: 'MUHAMMAD THAQIF BIN ABDUL AZIZ', id: 'SX231702ECJHF04' },
                { name: 'PUTRA NAZREEN HAFIZ BIN ABDUL KARIM', id: 'SX240247ECJHS04' }
              ].map((m, i) => (
                <tr key={i} style={{ borderTop: '1px solid var(--border)' }}>
                  <td style={{ padding: '20px' }}>{m.name}</td>
                  <td style={{ padding: '20px', color: 'var(--text-muted)' }}>{m.id}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
