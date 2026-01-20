'use client';

export default function Part1() {
    const basePath = process.env.NODE_ENV === 'production' ? '/smart-desk-organizer' : '';

    return (
        <main className="section animate" style={{ paddingTop: '120px' }}>
            <h1 className="title">Part 1: <span className="gradient-text">Project Proposal</span></h1>

            {/* Hero Concept Image */}
            <div className="glass" style={{ padding: '20px', marginBottom: '40px', textAlign: 'center' }}>
                <img
                    src={`${basePath}/assets/smart-desk-concept.png`}
                    alt="Smart Desk Organizer Concept"
                    style={{ width: '100%', maxWidth: '700px', borderRadius: '16px' }}
                />
                <p style={{ color: 'var(--text-muted)', marginTop: '15px', fontStyle: 'italic' }}>
                    Concept: AI-Powered Smart Desk with integrated touchscreen and holographic notifications
                </p>
            </div>

            <div className="glass" style={{ padding: '40px', marginBottom: '40px' }}>
                <h2 style={{ marginBottom: '20px' }}>1. Problem Statement</h2>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
                    Many people such as students, working adults, and older folks struggle to keep their workspace tidy,
                    manage their time well, and stay focused. For elderly users, there are extra challenges like
                    remembering to take medicine, keeping track of their health, and staying in touch with family.
                    Regular desk organizers don't have smart features that support productivity, health, or accessibility.
                    Most desks don't have interactive surfaces for writing, drawing, or sharing ideas.
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '40px' }}>
                <div className="glass" style={{ padding: '30px' }}>
                    <h2 style={{ marginBottom: '20px' }}>2. Objectives</h2>
                    <ul style={{ color: 'var(--text-muted)', paddingLeft: '20px', lineHeight: '1.8' }}>
                        <li>Build a smart desk organizer for physical and digital clutter.</li>
                        <li>Include sensors, gesture controls, stylus support, and AI.</li>
                        <li>Provide personalized reminders for productivity and health.</li>
                        <li>Enable remote checking of desk items via mobile app.</li>
                        <li>Offer interactive surfaces for collaboration and creative tasks.</li>
                    </ul>
                </div>
                <div className="glass" style={{ padding: '30px' }}>
                    <h2 style={{ marginBottom: '20px' }}>3. Proposed Solution</h2>
                    <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
                        A smart desk with built-in sensors, voice control, and a stylus-optimized touchscreen.
                        Integrated with mobile apps and smartwatches, the system tracks items, reminds users of
                        deadlines/medication, and uses AI to provide helpful wellness tips.
                    </p>
                </div>
            </div>

            <div className="glass" style={{ padding: '40px', marginBottom: '40px' }}>
                <h2 style={{ marginBottom: '20px' }}>4. Key Features</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                    <div>
                        <h4 style={{ color: 'var(--accent)' }}>Item Tracking</h4>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Detects when items are picked up or returned.</p>
                    </div>
                    <div>
                        <h4 style={{ color: 'var(--accent)' }}>Gesture Controls</h4>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Hands-free timer and feature management.</p>
                    </div>
                    <div>
                        <h4 style={{ color: 'var(--accent)' }}>Stylus Support</h4>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Digital ink for student and professional use.</p>
                    </div>
                    <div>
                        <h4 style={{ color: 'var(--accent)' }}>Medication Tracking</h4>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Health-focused reminders for elderly users.</p>
                    </div>
                </div>
            </div>

            <div className="glass" style={{ padding: '40px' }}>
                <h2 style={{ marginBottom: '20px' }}>5. Expected Impact</h2>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
                    The project aligns with global goals including <strong>Quality Education</strong> (study optimization),
                    <strong>Decent Work</strong> (productivity), and <strong>Reduced Inequalities</strong> (accessibility features for disabled and elderly users).
                </p>
            </div>
        </main>
    );
}
