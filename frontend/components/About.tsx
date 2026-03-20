export function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="section-label">About</div>
        <h2>誰が作っているのか</h2>

        <div className="card" style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <div style={{ flex: '0 0 auto' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/profile.jpg"
              alt="Kota"
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '1px solid var(--border)',
              }}
            />
          </div>
          <div style={{ flex: 1, minWidth: '200px' }}>
            <h3 style={{ marginBottom: '0.15rem' }}>Kota</h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', marginBottom: '0.75rem' }}>
              岩手大学 理工学部 ／ <a href="https://www.instagram.com/konaito_/" target="_blank" rel="noopener noreferrer">@konaito_</a>
            </p>
            <p style={{ fontSize: '0.85rem', lineHeight: 1.75 }}>
              ChatGPTリリース直後に「AIに仕事を奪われる」と確信し、大学を休学して東京へ。3年間AIスタートアップで働いた後、予言通りAIに仕事を奪われて岩手に帰還。現在は数学と物理を勉強しながら、AIと一緒に貸切シーシャ事業を構想中。このサイトの全セクション——物件探し、料金設計、原価計算、競合調査、デザイン——はすべてAIとの対話で作られている。
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.75rem', flexWrap: 'wrap' }}>
              <span className="tag">AI</span>
              <span className="tag">数学・物理</span>
              <span className="tag">Build in Public</span>
              <span className="tag">シーシャ</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
