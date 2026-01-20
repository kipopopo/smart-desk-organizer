'use client';

export default function Part2() {
    const basePath = process.env.NODE_ENV === 'production' ? '/smart-desk-organizer' : '';

    return (
        <main className="section animate" style={{ paddingTop: '120px' }}>
            <h1 className="title">Part 2: <span className="gradient-text">Establishing Requirements</span></h1>

            <section style={{ marginBottom: '60px' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>1. User Personas</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                    {[
                        {
                            name: 'Adam Farhan',
                            age: 22,
                            role: 'University Student',
                            emoji: '🎓',
                            desc: 'Spends long hours studying and experiences desk clutter and poor posture. Needs focus and time management.',
                            goals: ['Improve focus', 'Manage desk clutter', 'Reduce physical discomfort']
                        },
                        {
                            name: 'Encik Roslan',
                            age: 63,
                            role: 'Retired Officer',
                            emoji: '👴',
                            desc: 'Has mild joint stiffness and reduced eyesight. Prefers simple technology and needs comfort/safety reminders.',
                            goals: ['Maintain comfort', 'Gentle break reminders', 'Accessibility help']
                        },
                        {
                            name: 'Daniel Lim',
                            age: 32,
                            role: 'Software Developer',
                            emoji: '💻',
                            desc: 'Remote worker facing burnout. Needs automation, ergonomic tracking, and minimal distractions.',
                            goals: ['Maximize productivity', 'Ergonomic posture', 'Automated patterns']
                        }
                    ].map((u, i) => (
                        <div key={i} className="glass" style={{ padding: '30px' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '15px' }}>{u.emoji}</div>
                            <h3 className="gradient-text">{u.name}, {u.age}</h3>
                            <p style={{ fontSize: '0.9rem', fontWeight: 'bold', color: 'var(--primary)', marginBottom: '10px' }}>{u.role}</p>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '20px' }}>{u.desc}</p>
                            <ul style={{ fontSize: '0.85rem', color: 'var(--text-muted)', paddingLeft: '20px' }}>
                                {u.goals.map((g, j) => <li key={j}>{g}</li>)}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            <section style={{ marginBottom: '60px' }}>
                <h2 style={{ marginBottom: '30px' }}>2. Hierarchical Task Analysis (HTA)</h2>
                <div className="glass" style={{ padding: '40px', textAlign: 'center' }}>
                    <h3 style={{ marginBottom: '20px' }}>Task: Managing Daily Work Sessions</h3>
                    <img
                        src={`${basePath}/assets/hta-diagram.png`}
                        alt="HTA Diagram - Managing Daily Work Sessions"
                        style={{ width: '100%', maxWidth: '800px', borderRadius: '12px', margin: '0 auto' }}
                    />
                    <p style={{ color: 'var(--text-muted)', marginTop: '20px', fontSize: '0.9rem' }}>
                        Visual representation of the task hierarchy for daily work session management
                    </p>
                </div>
            </section>

            <section>
                <h2 style={{ marginBottom: '30px' }}>3. System Requirements</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                    <div className="glass" style={{ padding: '30px' }}>
                        <h3>Functional (FR)</h3>
                        <ul style={{ color: 'var(--text-muted)', marginTop: '15px', paddingLeft: '20px' }}>
                            <li>Automatic session detection.</li>
                            <li>Ergonomic posture monitoring.</li>
                            <li>Adaptive break management.</li>
                            <li>Item reachability assistance.</li>
                        </ul>
                    </div>
                    <div className="glass" style={{ padding: '30px' }}>
                        <h3>Non-Functional (NFR)</h3>
                        <ul style={{ color: 'var(--text-muted)', marginTop: '15px', paddingLeft: '20px' }}>
                            <li>Minimal disruption (Context-aware).</li>
                            <li>Accessibility support (Voice/Large text).</li>
                            <li>Real-time responsiveness (&lt; 3s).</li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    );
}
