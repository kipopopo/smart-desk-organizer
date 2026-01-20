'use client';

export default function Part3() {
    const basePath = process.env.NODE_ENV === 'production' ? '/smart-desk-organizer' : '';

    return (
        <main className="section animate" style={{ paddingTop: '120px' }}>
            <h1 className="title">Part 3: <span className="gradient-text">Design & Prototyping</span></h1>

            {/* Prototype Gallery */}
            <section style={{ marginBottom: '60px' }}>
                <h2 style={{ marginBottom: '30px', textAlign: 'center' }}>Interactive Prototype Gallery</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px' }}>
                    {[
                        { name: 'Dashboard', file: 'dashboard.png', desc: 'Central hub for all widgets and quick access features' },
                        { name: 'Find Lost Items', file: 'find-items.png', desc: 'AI-powered item tracking with desk inventory map' },
                        { name: 'Health Assist', file: 'health-assist.png', desc: 'Medication reminders and vital sign monitoring' },
                        { name: 'Settings', file: 'settings.png', desc: 'Personalization and accessibility configuration' }
                    ].map((screen, i) => (
                        <div key={i} className="glass" style={{ padding: '20px', textAlign: 'center' }}>
                            <img
                                src={`${basePath}/assets/${screen.file}`}
                                alt={screen.name}
                                className="img-preview"
                                style={{ width: '100%', borderRadius: '12px', marginBottom: '15px' }}
                            />
                            <h4 style={{ color: 'var(--primary)', marginBottom: '8px' }}>{screen.name}</h4>
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{screen.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section style={{ marginBottom: '60px' }}>
                <h2 style={{ marginBottom: '30px' }}>1. Interface Metaphors</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                    {[
                        { m: 'Color Language', d: 'Consistent visual code (Cyan for interaction, Green for wellness, Red for critical).', icon: '🎨' },
                        { m: 'Home Icon', d: 'Safe harbor for returning to dashboard.', icon: '🏠' },
                        { m: 'Microphone', d: 'Designates system-wide voice utility.', icon: '🎙️' },
                        { m: 'Magnifying Glass', d: 'The "seeking" metaphor for item tracking.', icon: '🔍' },
                        { m: 'Projector Symbol', d: 'Literal representation of casting capabilities.', icon: '📽️' },
                        { m: 'Heart Icon', d: 'Universal symbol for biological health monitoring.', icon: '❤️' }
                    ].map((item, i) => (
                        <div key={i} className="glass" style={{ padding: '20px' }}>
                            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>{item.icon}</div>
                            <h4 style={{ color: 'var(--primary)' }}>{item.m}</h4>
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{item.d}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section style={{ marginBottom: '60px' }}>
                <h2 style={{ marginBottom: '30px' }}>2. User Scenarios (Storyboards)</h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px' }}>

                    {/* Scenario 1 */}
                    <div className="glass" style={{ padding: '40px' }}>
                        <h3 style={{ marginBottom: '20px' }}>Scenario 1: Smart Item Checking</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', alignItems: 'center' }}>
                            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
                                <strong>Mariah (Student)</strong> is heading to class. The SDO notifies her smartphone that her "Wallet" is still on the desk.
                                She checks the <strong style={{ color: 'var(--cyan)' }}>Desk Inventory Map</strong> to confirm the location.
                            </p>
                            <img
                                src={`${basePath}/assets/find-items.png`}
                                alt="Find Lost Items Interface"
                                className="img-preview"
                            />
                        </div>
                    </div>

                    {/* Scenario 2 */}
                    <div className="glass" style={{ padding: '40px' }}>
                        <h3 style={{ marginBottom: '20px' }}>Scenario 2: Health Assistance</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', alignItems: 'center' }}>
                            <img
                                src={`${basePath}/assets/health-assist.png`}
                                alt="Health Assist Interface"
                                className="img-preview"
                            />
                            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
                                <strong>Karim (Elderly User)</strong> needs to manage his health. The <strong style={{ color: 'var(--green)' }}>Health Assist</strong> center
                                provides clear medication reminders and real-time vital monitoring with large, accessible visuals.
                            </p>
                        </div>
                    </div>

                    {/* Scenario 3 - NEW */}
                    <div className="glass" style={{ padding: '40px' }}>
                        <h3 style={{ marginBottom: '20px' }}>Scenario 3: Productivity Dashboard</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', alignItems: 'center' }}>
                            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
                                <strong>Daniel (Professional)</strong> starts his work day. The <strong style={{ color: 'var(--primary)' }}>Dashboard</strong> shows
                                his tasks, calendar events, and focus timer. He can quickly check deadlines and manage his workflow without leaving the desk.
                            </p>
                            <img
                                src={`${basePath}/assets/dashboard.png`}
                                alt="Dashboard Interface"
                                className="img-preview"
                            />
                        </div>
                    </div>

                    {/* Scenario 4 - NEW */}
                    <div className="glass" style={{ padding: '40px' }}>
                        <h3 style={{ marginBottom: '20px' }}>Scenario 4: Personalized Settings</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', alignItems: 'center' }}>
                            <img
                                src={`${basePath}/assets/settings.png`}
                                alt="Settings Interface"
                                className="img-preview"
                            />
                            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
                                <strong>Encik Roslan</strong> adjusts his preferences via <strong style={{ color: 'var(--accent)' }}>Settings</strong>.
                                Large fonts, high contrast mode, and voice control are enabled for maximum accessibility.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            <section>
                <h2 style={{ marginBottom: '30px' }}>3. Prototype Design Justification</h2>
                <div className="glass" style={{ padding: '40px' }}>
                    <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
                        The design applies <strong>Gestalt Principles</strong> (Proximity for grouping widgets, Similarity for themed buttons)
                        and <strong>Shneiderman's 8 Golden Rules</strong> (Striving for consistency, offering informative feedback, and reducing short-term memory load)
                        to create a transparent and empowering user experience.
                    </p>
                </div>
            </section>
        </main>
    );
}
