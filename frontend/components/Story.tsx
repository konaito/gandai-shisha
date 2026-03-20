export function Story() {
  return (
    <section id="story">
      <div className="container">
        <div className="section-label">Story</div>
        <h2>なぜ作るのか</h2>

        <div className="box box-gray">
          <h4>問題</h4>
          <p>東京でめっちゃシーシャ行ってた。でも岩手大学から盛岡大通りは遠い。既存のシーシャ店は全部繁華街にある。大学の近くにない。</p>
        </div>
        <div className="box box-gray">
          <h4>解法</h4>
          <p>じゃあ作る。岩手大学徒歩圏内に、完全AI駆動で貸切シーシャを。飲食は持ち込み。許認可も物件探しも料金設計も、全部AIと一緒にやる。そのプロセスを全公開する。Build in Public。</p>
        </div>
        <div className="box box-gray">
          <h4>文脈</h4>
          <p>時定数がゼロに近づく世界で、同じ場所に集まって同じ空気を吸う体験の価値は上がる一方だと思っている。パーソナライゼーションが進むほど、「同じ空間で同じ時間を過ごす」こと自体が希少になる。まずはシーシャから。</p>
        </div>
        <div className="box box-blue">
          <h4>Build in Publicとは</h4>
          <p>事業の構想・調査・意思決定のプロセスを、完成を待たずにリアルタイムで全公開する手法。失敗も数字も全部見せる。このページ自体がそのプロダクト。物件探しも料金設計も原価計算も、全部AIと一緒にやった過程がそのまま載っている。</p>
        </div>
        <div className="box box-gray">
          <h4>もう一つの動機</h4>
          <p>東京で3年間AIと一緒に働いてきて、こいつの凄さを肌で知っている。物件探し、料金設計、原価計算、競合調査、法務確認、デザイン、このサイト自体——全部AIとの対話だけで作った。この過程を見せること自体が、AIが何をできるかのデモになる。盛岡の人にも、岩大の友達にも、「AIってこういうことができるんだ」を体感してほしい。</p>
        </div>
        <a href="https://www.instagram.com/p/DWDnGWvDpE8/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block' }}>
          <blockquote style={{ margin: '1rem 0 0 0', padding: '1.25rem 1.5rem', borderLeft: '3px solid var(--border)', background: '#f9f9f9', borderRadius: '0 8px 8px 0', cursor: 'pointer' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/instagram-ai.png"
              alt="AIに仕事奪われた"
              style={{ width: '100%', borderRadius: '6px', marginBottom: '1rem' }}
            />
            <p style={{ fontSize: '0.9rem', color: 'var(--text)' }}>
              3年前にChatGPTがリリースされ、2,3年後にはAIに仕事奪われると焦って、休学、岩手を飛び出し、東京で戦ってたんですが、予想通り無事AIに仕事奪われた（解雑されたとかではないです）ので、大学に戻ってきました。
            </p>
            <p style={{ fontSize: '0.9rem', marginTop: '0.75rem', color: 'var(--text)' }}>
              東京でも「数学勉強したい」「物理勉強したい」ってずっと言ってたので、本望。岩手でいっぱい勉強したいと思います。
            </p>
            <p style={{ fontSize: '0.9rem', marginTop: '0.75rem', color: 'var(--text)' }}>
              東京で仲良くしてくれた人ありがとうございました。友達がみんな院進すると思ったら、安心して休学、挑戦できた。ありがたい。みんなはあと1年だけどまたよろしくお願いします。
            </p>
            <p style={{ fontSize: '0.9rem', marginTop: '0.75rem', color: 'var(--text-dim)', fontStyle: 'italic' }}>
              予言して行動して的中させて帰ってきたやつ流石に説得力ある説
            </p>
            <p style={{ marginTop: '0.75rem', fontSize: '0.8rem', color: 'var(--text-dim)' }}>
              — @konaito_ · Instagram, 2026.3
            </p>
          </blockquote>
        </a>
      </div>
    </section>
  );
}
