
export default function Part3() {
    return (
        <main className="section animate" style={{ paddingTop: '120px' }}>
            <h1 className="title">Part 3: <span className="gradient-text">Design & Prototyping</span></h1>

            <section style={{ marginBottom: '60px' }}>
                <h2 style={{ marginBottom: '30px' }}>1. Interface Metaphors</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                    {[
                        { m: 'Color Language', d: 'Consistent visual code (Cyan for interaction, Green for wellness, Red for critical).' },
                        { m: 'Home Icon', d: 'Safe harbor for returning to dashboard.' },
                        { m: 'Microphone', d: 'Designates system-wide voice utility.' },
                        { m: 'Magnifying Glass', d: 'The "seeking" metaphor for item tracking.' },
                        { m: 'Projector symbol', d: 'Literal representation of casting capabilities.' },
                        { m: 'Heart Icon', d: 'Universal symbol for biological health monitoring.' }
                    ].map((item, i) => (
                        <div key={i} className="glass" style={{ padding: '20px' }}>
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
                        <h3>Scenario 1: Smart Item Checking</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', alignItems: 'center', marginTop: '20px' }}>
                            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
                                <strong>Mariah (Student)</strong> is heading to class. The SDO notifies her smartphone that her "Wallet" is still on the desk.
                                She checks the <strong style={{ color: 'var(--cyan)' }}>Desk Inventory Map</strong> to confirm the location.
                            </p>
                            <img
                                src={process.env.NODE_ENV === 'production' ? '/smart-desk-organizer/assets/find-items.png' : '/assets/find-items.png'}
                                alt="Find Lost Items Interface"
                                className="img-preview"
                            />
                        </div>
                    </div>

                    {/* Scenario 2 */}
                    <div className="glass" style={{ padding: '40px' }}>
                        <h3>Scenario 2: Health Assistance</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', alignItems: 'center', marginTop: '20px' }}>
                            <img
                                src={process.env.NODE_ENV === 'production' ? '/smart-desk-organizer/assets/health-assist.png' : '/assets/health-assist.png'}
                                alt="Health Assist Interface"
                                className="img-preview"
                            />
                            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
                                <strong>Karim (Elderly User)</strong> needs to manage his health. The <strong style={{ color: 'var(--green)' }}>Health Assist</strong> center
                                provides clear medication reminders and real-time vital monitoring with large, accessible visuals.
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
                        and <strong>Shneiderman’s 8 Golden Rules</strong> (Striving for consistency, offering informative feedback, and reducing short-term memory load)
                        to create a transparent and empowering user experience.
                    </p>
                </div>
            </section>
        </main>
    );
}
