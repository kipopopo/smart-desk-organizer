
export default function Part4() {
    return (
        <main className="section animate" style={{ paddingTop: '120px' }}>
            <h1 className="title">Part 4: <span className="gradient-text">Evaluation & Feedback</span></h1>

            <section style={{ marginBottom: '60px' }}>
                <h2 style={{ marginBottom: '30px' }}>1. Usability Testing Results</h2>
                <div className="glass" style={{ padding: '40px' }}>
                    <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ background: 'rgba(255,255,255,0.05)' }}>
                                <th style={{ padding: '15px' }}>Task</th>
                                <th style={{ padding: '15px' }}>Finding</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ borderBottom: '1px solid var(--border)' }}>
                                <td style={{ padding: '15px' }}>Item Tracking</td>
                                <td style={{ padding: '15px', color: 'var(--text-muted)' }}>Highly useful for preventing misplaced items; need clear onboarding for tagging.</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid var(--border)' }}>
                                <td style={{ padding: '15px' }}>Interaction (Voice/Gesture)</td>
                                <td style={{ padding: '15px', color: 'var(--text-muted)' }}>Voice is preferred for accessibility; gestures need better sensitivity adjustment.</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid var(--border)' }}>
                                <td style={{ padding: '15px' }}>Health Assist</td>
                                <td style={{ padding: '15px', color: 'var(--text-muted)' }}>Clear icons and colors help elderly users feel confident.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section style={{ marginBottom: '60px' }}>
                <h2 style={{ marginBottom: '30px' }}>2. User Feedback</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                    <div className="glass" style={{ padding: '30px' }}>
                        <p style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>"The integration is smooth and would definitely improve productivity."</p>
                        <p style={{ marginTop: '10px', fontWeight: 'bold' }}>- Daniel (Student)</p>
                    </div>
                    <div className="glass" style={{ padding: '30px' }}>
                        <p style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>"Gesture sensitivity could be improved, but voice control is a win."</p>
                        <p style={{ marginTop: '10px', fontWeight: 'bold' }}>- Haziq (IT Support)</p>
                    </div>
                    <div className="glass" style={{ padding: '30px' }}>
                        <p style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>"Helpful for visibility, but suggest even larger text options."</p>
                        <p style={{ marginTop: '10px', fontWeight: 'bold' }}>- User 3 (Accessibility focus)</p>
                    </div>
                </div>
            </section>

            <section>
                <h2 style={{ marginBottom: '30px' }}>3. Conclusion & Future Work</h2>
                <div className="glass" style={{ padding: '40px' }}>
                    <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
                        The SDO prototype successfully demonstrates the value of an AI-powered workspace.
                        Future improvements will focus on refining hardware sensors, improving gesture recognition
                        reliability, and adding more granular health data synchronization.
                    </p>
                </div>
            </section>
        </main>
    );
}
