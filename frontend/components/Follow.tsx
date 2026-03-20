export function Follow() {
  return (
    <section id="follow" style={{ borderBottom: 'none' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <div className="section-label">Follow the Build</div>
        <h2>進捗を追う</h2>
        <p className="section-desc" style={{ maxWidth: '480px', margin: '0 auto 1.5rem' }}>このプロジェクトはリアルタイムで進行中。<br />保健所の返答も、物件の内見結果も、テスト営業の売上も、全部公開する。</p>

        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
          <a
            href="https://www.instagram.com/konaito_/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.6rem 1.25rem',
              background: 'var(--text)',
              color: '#fff',
              borderRadius: '8px',
              fontSize: '0.85rem',
              fontWeight: 700,
              textDecoration: 'none',
              transition: 'opacity 0.15s',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
            Instagram をフォロー
          </a>
          <a
            href="https://github.com/konaito/gandai-shisha"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.6rem 1.25rem',
              border: '1px solid var(--text)',
              color: 'var(--text)',
              borderRadius: '8px',
              fontSize: '0.85rem',
              fontWeight: 700,
              textDecoration: 'none',
              transition: 'background 0.15s, color 0.15s',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" /></svg>
            GitHub でソースを見る
          </a>
        </div>

        <div className="grid-2" style={{ textAlign: 'left' }}>
          <div className="card">
            <h3>Instagram</h3>
            <p className="text-sm-dim">日々の進捗、テスト営業の様子、失敗談、数字の公開。ストーリーズで保健所の電話結果とか、物件内見のリアクションとか、全部流す。</p>
          </div>
          <div className="card">
            <h3>GitHub</h3>
            <p className="text-sm-dim">このサイト自体のソースコード。チャート生成スクリプト、料金シミュレーション、全部オープンソース。AIとの対話でどう作ったかも、コミット履歴でわかる。</p>
          </div>
        </div>

        <div className="box box-gray" style={{ marginTop: '1rem', textAlign: 'left' }}>
          <h4>Build in Publicの約束</h4>
          <p>都合の悪い数字も隠さない。テスト営業で客が来なかったら「来なかった」と書く。保健所にNGを食らったら「食らった」と書く。成功も失敗も全部見せる。それがBuild in Public。</p>
        </div>
      </div>
    </section>
  );
}
