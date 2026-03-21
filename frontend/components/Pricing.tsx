export function Pricing() {
  return (
    <section id="pricing">
      <div className="container">
        <div className="section-label">Pricing</div>
        <h2>料金設計</h2>
        <p className="section-desc">「貸切4,000円」のキャッチは残しつつ、実態は利益が出る3プラン構成。</p>

        <div className="plan-grid">
          <div className="plan-card">
            <div className="plan-label">Solo / Duo</div>
            <h3>ソロ / デュオ</h3>
            <div className="plan-sub">1〜2人 / 90分</div>
            <div className="plan-price">2,200円〜</div>
            <div className="plan-per">利用料1,000円/人 + シーシャ1,200円</div>
          </div>
          <div className="plan-card featured">
            <div className="plan-label" style={{ color: "var(--text)" }}>Most Popular</div>
            <h3>グループ貸切</h3>
            <div className="plan-sub">3〜5人 / 120分</div>
            <div className="plan-price">4,000円〜</div>
            <div className="plan-per">シーシャ1台込み / 追加1,000円/台</div>
            <div style={{ marginTop: "0.5rem" }}><span className="tag tag-green">3人+2台=5,000円 → 1人1,667円</span></div>
          </div>
          <div className="plan-card">
            <div className="plan-label">Party</div>
            <h3>パーティ貸切</h3>
            <div className="plan-sub">6人〜 / 180分</div>
            <div className="plan-price">6,000円〜</div>
            <div className="plan-per">シーシャ2台込み / 追加1,000円/台</div>
            <div style={{ marginTop: "0.5rem" }}><span className="tag tag-green">6人+4台=8,000円 → 1人1,333円</span></div>
          </div>
        </div>

        <h3 style={{ marginTop: "1.5rem", marginBottom: "0.5rem" }}>オプション</h3>
        <div className="table-wrap">
          <table>
            <thead><tr><th>項目</th><th>料金</th><th>原価</th></tr></thead>
            <tbody>
              <tr><td>延長</td><td><strong>500円</strong>/30分</td><td>—</td></tr>
              <tr><td>アイスホース</td><td><strong>200円</strong></td><td>~0円</td></tr>
              <tr><td>フレーバーMIX</td><td><strong>200円</strong></td><td>+50円</td></tr>
              <tr><td>トップ替え</td><td><strong>800円</strong></td><td>+300円</td></tr>
              <tr><td>デクラウド（ニコチンフリー）</td><td><strong>+300円</strong></td><td>+100円</td></tr>
            </tbody>
          </table>
        </div>

        <h3 style={{ marginTop: "1.5rem", marginBottom: "0.25rem" }}>月額サブスク</h3>
        <p style={{ fontSize: "0.85rem", color: "var(--text-dim)", marginBottom: "0.5rem" }}>長期休暇の売上減を吸収する仕組み。20人加入で月10万の固定収入。</p>
        <div className="grid-2">
          <div style={{ background: "var(--tag-bg)", borderRadius: "8px", padding: "1rem", textAlign: "center" }}>
            <div style={{ fontSize: "0.7rem", color: "var(--text-dim)" }}>シーシャパス</div>
            <div style={{ fontSize: "1.5rem", fontWeight: 800 }}>3,000円<span style={{ fontSize: "0.8rem", fontWeight: 400, color: "var(--text-dim)" }}>/月</span></div>
            <div style={{ fontSize: "0.75rem", color: "var(--text-dim)" }}>月4回スペース利用料無料</div>
          </div>
          <div style={{ background: "var(--tag-bg)", borderRadius: "8px", padding: "1rem", textAlign: "center", border: "1px solid var(--text)" }}>
            <div style={{ fontSize: "0.7rem", color: "var(--text-dim)" }}>フリーパス</div>
            <div style={{ fontSize: "1.5rem", fontWeight: 800 }}>5,000円<span style={{ fontSize: "0.8rem", fontWeight: 400, color: "var(--text-dim)" }}>/月</span></div>
            <div style={{ fontSize: "0.75rem", color: "var(--text-dim)" }}>月4回シーシャ1台込み（通常の43%OFF）</div>
          </div>
        </div>

        <p style={{ textAlign: "center", color: "var(--text-dim)", fontSize: "0.8rem", marginTop: "1rem" }}>※ 飲食持ち込み自由・ゴミはお持ち帰り / 20歳未満の方はご入場いただけません</p>
      </div>
    </section>
  );
}
