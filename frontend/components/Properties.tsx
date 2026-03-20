export function Properties() {
  return (
    <section id="properties">
      <div className="container">
        <div className="section-label">Properties</div>
        <h2>候補物件ランキング</h2>
        <p className="section-desc">用途地域・岩手大学からの距離・家賃を総合評価。近隣商業地域の本町通が最有力。</p>

        <div className="table-wrap" style={{ marginBottom: "1.5rem" }}>
          <table>
            <thead><tr><th>物件</th><th>用途地域</th><th>岩大から</th><th>シーシャ店</th><th>深夜営業</th></tr></thead>
            <tbody>
              <tr><td><strong>サニーフラット</strong></td><td><span className="tag tag-green">近隣商業</span></td><td>徒歩15分</td><td className="st st-yes">制限なし</td><td className="st st-yes">可能</td></tr>
              <tr><td><strong>本町通 貸店舗</strong></td><td><span className="tag tag-green">近隣商業</span></td><td>徒歩13〜19分</td><td className="st st-yes">制限なし</td><td className="st st-yes">可能</td></tr>
              <tr><td><strong>藤田テナント</strong></td><td><span className="tag tag-orange">住居専用（推定）</span></td><td>徒歩3〜5分</td><td className="st st-maybe">500m²以下</td><td className="st st-no">不可</td></tr>
              <tr><td><strong>上田 飲食店可</strong></td><td><span className="tag tag-orange">住居専用（推定）</span></td><td>徒歩3〜5分</td><td className="st st-maybe">500m²以下</td><td className="st st-no">不可</td></tr>
              <tr><td><strong>館向町</strong></td><td><span className="tag">第一種住居</span></td><td>徒歩20〜30分</td><td className="st st-yes">3,000m²以下</td><td className="st st-no">不可</td></tr>
            </tbody>
          </table>
        </div>

        <div className="card" style={{ borderLeft: "3px solid var(--green)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: "1rem", alignItems: "start" }}>
            <a href="https://www.urban777.com/rent/detail/30077-187-07c56188" target="_blank" rel="noopener noreferrer">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/img/sani-flatto.jpg" alt="サニーフラット" style={{ width: "100%", borderRadius: "6px", border: "1px solid var(--border)", objectFit: "cover", aspectRatio: "4/3" }} />
            </a>
            <div>
              <h3>1位: サニーフラット 1F — 5.5万円/月</h3>
              <p className="text-sm-dim">盛岡市本町通2丁目3-30 / 28.98m² / 近隣商業地域 / 敷金0・礼金0・即入居可</p>
              <p style={{ fontSize: "0.85rem" }}>用途地域の制限なし。初期費用ゼロが最大の魅力。「撤退のしやすさ」という最強の武器。</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: "1rem", alignItems: "start" }}>
            <a href="https://www.falcon-estate.co.jp/kasi-tenpo/detail-68e7173d9eb40a371bf700df/" target="_blank" rel="noopener noreferrer">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/img/honchodori.jpeg" alt="本町通2丁目 貸店舗" style={{ width: "100%", borderRadius: "6px", border: "1px solid var(--border)", objectFit: "cover", aspectRatio: "4/3" }} />
            </a>
            <div>
              <h3>2位: 本町通2丁目 貸店舗 — 6万円/月</h3>
              <p className="text-sm-dim">盛岡市本町通2丁目 / 64.80m² / 近隣商業地域</p>
              <p style={{ fontSize: "0.85rem" }}>6万円で65m²は破格。広さを活かしてゆったりした貸切空間を作れる。</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: "1rem", alignItems: "start" }}>
            <a href="https://www.falcon-estate.co.jp/kasi-tenpo/detail-664afbbb85daa51085a8428e/" target="_blank" rel="noopener noreferrer">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/img/fujita.jpeg" alt="藤田テナント 4号" style={{ width: "100%", borderRadius: "6px", border: "1px solid var(--border)", objectFit: "cover", aspectRatio: "4/3" }} />
            </a>
            <div>
              <h3>3位: 藤田テナント 4号 — 6.5万円/月</h3>
              <p className="text-sm-dim">盛岡市上田2丁目 / 39.70m² / 第二種中高層住居専用地域（推定）</p>
              <p style={{ fontSize: "0.85rem" }}>岩手大学から徒歩3〜5分。距離は最強だが住居専用地域のためリスクあり。</p>
            </div>
          </div>
        </div>

        <h3 style={{ marginTop: "1.5rem", marginBottom: "0.75rem" }}>物件検索サイト・不動産会社</h3>
        <div className="link-grid">
          <a href="https://www.tenantmorioka.com/" target="_blank" className="link-card"><strong>テナント盛岡</strong><span>盛岡テナント専門38年 / TEL: 019-629-3010</span></a>
          <a href="https://morioka.tenant-nw.jp/" target="_blank" className="link-card"><strong>テナントショップ盛岡</strong><span>盛岡のテナント専門サイト</span></a>
          <a href="https://www.prowise.info/" target="_blank" className="link-card"><strong>プロワイズ</strong><span>開店フルサポート（融資・内装・許認可）</span></a>
          <a href="https://www.athome.co.jp/rent_store/bar-gy/iwate/morioka-city/list/" target="_blank" className="link-card"><strong>アットホーム（バー向け）</strong><span>盛岡市のバー・スナック出店可物件</span></a>
          <a href="https://www.athome.co.jp/rent_store/inuki-kd/iwate/morioka-city/list/" target="_blank" className="link-card"><strong>アットホーム（居抜き）</strong><span>盛岡市の居抜き物件</span></a>
          <a href="https://www2.wagmap.jp/morioka-sp/" target="_blank" className="link-card"><strong>もりおか便利マップ</strong><span>用途地域を番地レベルで確認</span></a>
        </div>
      </div>
    </section>
  );
}
