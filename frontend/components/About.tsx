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
              alt="Kota Naito"
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
            <h3 style={{ marginBottom: '0.15rem' }}>内藤 剛汰（Kota Naito）</h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', marginBottom: '0.75rem' }}>
              岩手大学 理工学部 数理・物理コース 3年 ／ <a href="https://www.instagram.com/konaito5/" target="_blank" rel="noopener noreferrer">@konaito5</a> ／ <a href="https://github.com/konaito" target="_blank" rel="noopener noreferrer">GitHub</a>
            </p>
            <p style={{ fontSize: '0.85rem', lineHeight: 1.75 }}>
              神奈川県川崎市出身、24歳。岩手大学を2年で休学し、<a href="https://42tokyo.jp/" target="_blank" rel="noopener noreferrer">42Tokyo</a>でプログラミングを習得。その後東京でAIスタートアップを起業。3年間AIと一緒に働き続けた結果、予言通りAIに仕事を奪われて岩手に帰還。3年生として復学し、数学と物理を勉強しながらAIと一緒に貸切シーシャ事業を構想中。
            </p>
            <p style={{ fontSize: '0.85rem', lineHeight: 1.75, marginTop: '0.5rem' }}>
              このサイトの全セクション——物件探し、料金設計、原価計算、競合調査、デザイン——はすべてAIとの対話で作られている。
            </p>

            <div style={{ marginTop: '1rem' }}>
              <p style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-dim)', marginBottom: '0.35rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Tech Stack</p>
              <div style={{ display: 'flex', gap: '0.25rem', flexWrap: 'wrap' }}>
                <span className="tag">React / Next.js</span>
                <span className="tag">TypeScript</span>
                <span className="tag">Flutter</span>
                <span className="tag">Node.js / Bun</span>
                <span className="tag">Supabase</span>
                <span className="tag">Firebase</span>
                <span className="tag">Docker</span>
                <span className="tag">LangChain</span>
                <span className="tag">MCP</span>
              </div>
            </div>

            <div style={{ marginTop: '0.75rem' }}>
              <p style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-dim)', marginBottom: '0.35rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Interests</p>
              <div style={{ display: 'flex', gap: '0.25rem', flexWrap: 'wrap' }}>
                <span className="tag">AI / ML</span>
                <span className="tag">Web3</span>
                <span className="tag">Build in Public</span>
                <span className="tag">シーシャ</span>
                <span className="tag">数学・物理</span>
                <span className="tag">ハッカソン</span>
              </div>
            </div>
          </div>
        </div>

        <div className="box box-gray" style={{ marginTop: '0.5rem' }}>
          <h4>経歴</h4>
          <div style={{ fontSize: '0.85rem', lineHeight: 1.9 }}>
            <p><strong>2021</strong> — 岩手大学 理工学部 数理・物理コース 入学</p>
            <p><strong>2022</strong> — 2年で休学。42Tokyoでプログラミングを習得</p>
            <p><strong>2023</strong> — 東京でAIスタートアップを起業</p>
            <p><strong>2024-25</strong> — AIプロダクト開発。React, Next.js, Flutter, LangChain等を駆使</p>
            <p><strong>2026.3</strong> — 「AIに仕事を奪われた」ため岩手に帰還。3年生として復学、シーシャ事業を構想開始</p>
          </div>
        </div>
      </div>
    </section>
  );
}
