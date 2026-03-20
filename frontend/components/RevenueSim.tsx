export function RevenueSim() {
  return (
    <section id="revenue">
      <div className="container">
        <div className="section-label">Revenue Simulation</div>
        <h2>収益シミュレーション</h2>
        <p className="section-desc">満席率100%の理論値ではなく、現実的な稼働率で計算。</p>

        <div className="table-wrap">
          <table>
            <thead><tr><th>項目</th><th>通常月（9ヶ月）</th><th>長期休暇（3ヶ月）</th></tr></thead>
            <tbody>
              <tr><td>平日売上</td><td>5,400円 × 14日 = 75,600円</td><td>× 50% = 37,800円</td></tr>
              <tr><td>週末売上</td><td>12,000円 × 8日 = 96,000円</td><td>× 50% = 48,000円</td></tr>
              <tr><td><strong>月間売上</strong></td><td><strong>171,600円</strong></td><td><strong>85,800円</strong></td></tr>
              <tr><td>経費</td><td>104,500円</td><td>104,500円</td></tr>
              <tr style={{ background: "#f0fdf4" }}><td><strong>月間利益</strong></td><td className="st st-yes"><strong>67,100円</strong></td><td className="st st-no"><strong>-18,700円</strong></td></tr>
            </tbody>
          </table>
        </div>

        <div className="grid-2" style={{ marginTop: "1rem" }}>
          <div className="stat-card">
            <div className="label">年間利益（サブスクなし）</div>
            <div className="val">57.6万</div>
          </div>
          <div className="stat-card" style={{ borderColor: "var(--text)" }}>
            <div className="label">年間利益（サブスク20人）</div>
            <div className="val" style={{ color: "var(--green)" }}>177.6万</div>
          </div>
        </div>

        <div className="card" style={{ borderLeft: "3px solid var(--red)", marginTop: "1rem" }}>
          <h3>💀 最悪シナリオ（LAGOSの「1日客1人」が来たら）</h3>
          <p className="text-sm-dim">大阪のLAGOSは開業後の6〜9月に「1日の客が1人の日」を経験。あなたにも起きうる。</p>
          <div className="table-wrap" style={{ marginTop: "0.5rem" }}>
            <table>
              <tbody>
                <tr><td>月間売上（稼働率30%）</td><td><strong>85,800円</strong></td></tr>
                <tr><td>経費</td><td>104,500円</td></tr>
                <tr style={{ background: "#fef2f2" }}><td><strong>月間赤字</strong></td><td className="st st-no"><strong>-18,700円/月</strong></td></tr>
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: "0.85rem", color: "var(--text-dim)", marginTop: "0.5rem" }}>→ 運転資金36万を確保していれば最悪シナリオでも1年以上耐えられる。間借りテストをしていればこのリスク自体を事前に検知できる。</p>
        </div>

        <div className="chart-wrap" style={{ margin: "1.5rem 0" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/chart-revenue.png" alt="Monthly revenue chart" />
        </div>

        <div className="box box-blue" style={{ marginTop: "1rem" }}>
          <h4>副業設計が現実的</h4>
          <p>月利益6.7万円のビジネスは本業にはならない。バイト＋シーシャ屋の2本柱、または週3〜4日営業のスモールビジネスとして設計するのが堅実。それでも年間57〜177万円の副収入は大きい。</p>
        </div>
      </div>
    </section>
  );
}
