
export default function Part2() {
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
                            desc: 'Spends long hours studying and experiences desk clutter and poor posture. Needs focus and time management.',
                            goals: ['Improve focus', 'Manage desk clutter', 'Reduce physical discomfort']
                        },
                        {
                            name: 'Encik Roslan',
                            age: 63,
                            role: 'Retired Officer',
                            desc: 'Has mild joint stiffness and reduced eyesight. Prefers simple technology and needs comfort/safety reminders.',
                            goals: ['Maintain comfort', 'Gentle break reminders', 'Accessibility help']
                        },
                        {
                            name: 'Daniel Lim',
                            age: 32,
                            role: 'Software Developer',
                            desc: 'Remote worker facing burnout. Needs automation, ergonomic tracking, and minimal distractions.',
                            goals: ['Maximize productivity', 'Ergonomic posture', 'Automated patterns']
                        }
                    ].map((u, i) => (
                        <div key={i} className="glass" style={{ padding: '30px' }}>
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
                <div className="glass" style={{ padding: '40px' }}>
                    <h3>Task: Managing Daily Work Sessions</h3>
                    <div style={{ marginTop: '20px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                        <p><strong>0. Manage daily study/work session</strong></p>
                        <p style={{ marginLeft: '20px' }}>1. Prepare for session (Sit, arrange materials, activate mode)</p>
                        <p style={{ marginLeft: '20px' }}>2. Begin session (Start focus timer, display status)</p>
                        <p style={{ marginLeft: '20px' }}>3. Perform activities (Reading, typing, switching between materials)</p>
                        <p style={{ marginLeft: '20px' }}>4. Receive assistance (Focus reminders, posture alerts)</p>
                        <p style={{ marginLeft: '20px' }}>5. Manage breaks (Detect end of focus, suggest rest)</p>
                        <p style={{ marginLeft: '20px' }}>6. End session (Save data, return to idle)</p>
                    </div>
                </div>
            </section>

            <section>
                <h2 style={{ marginBottom: '30px' }}>3. System Requirements</h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
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
