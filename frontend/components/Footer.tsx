"use client";

import Script from "next/script";

export function Footer() {
  return (
    <>
      <footer>
        <p><strong>BiPシーシャ</strong> — Build in Public Shisha / 2026年3月作成</p>
        <p style={{ marginTop: '0.25rem' }}>完全AI駆動。物件探しから料金設計まで全プロセスをAIと一緒に構築。</p>
        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', marginTop: '0.75rem' }}>
          <a href="https://www.instagram.com/konaito_/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-dim)', fontSize: '0.75rem' }}>Instagram</a>
          <span style={{ color: 'var(--border)' }}>|</span>
          <a href="https://github.com/konaito/gandai-shisha" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-dim)', fontSize: '0.75rem' }}>GitHub</a>
        </div>
        <p style={{ marginTop: '0.5rem', fontSize: '0.65rem' }}>※ 物件情報は調査時点のものです。法務・許認可は必ず管轄行政機関に直接確認してください。</p>
      </footer>
      <Script src="/_vercel/insights/script.js" strategy="lazyOnload" />
    </>
  );
}
