export function UnitEconomics() {
  return (
    <section id="unit-economics">
      <div className="container">
        <div className="section-label">Unit Economics</div>
        <h2>原価構造と利益率</h2>
        <p className="section-desc">シーシャの原価率は15〜25%。飲食業で最も利益率が高い業態のひとつ。</p>

        <h3>シーシャ1台1セッションの原価</h3>
        <div className="table-wrap" style={{ marginTop: "0.5rem" }}>
          <table>
            <thead><tr><th>項目</th><th>数量</th><th>単価</th><th>小計</th></tr></thead>
            <tbody>
              <tr><td>フレーバー</td><td>10g</td><td>~25円/g</td><td><strong>250円</strong></td></tr>
              <tr><td>ココナッツ炭</td><td>6個</td><td>~12円/個</td><td><strong>72円</strong></td></tr>
              <tr><td>マウスピース</td><td>1〜2個</td><td>~12円</td><td><strong>18円</strong></td></tr>
              <tr><td>その他消耗品</td><td>—</td><td>—</td><td><strong>5円</strong></td></tr>
              <tr style={{ background: "#f7f7f7" }}><td colSpan={3}><strong>合計</strong></td><td><strong>~345円</strong></td></tr>
            </tbody>
          </table>
        </div>

        <div className="chart-wrap" style={{ margin: "1rem 0" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/chart-cost.png" alt="Cost breakdown" />
        </div>

        <div className="table-wrap">
          <table>
            <thead><tr><th>シナリオ</th><th>売上</th><th>原価</th><th>粗利</th><th>原価率</th></tr></thead>
            <tbody>
              <tr><td>ソロ（1人）</td><td>2,200円</td><td>345円</td><td className="st st-yes">1,855円</td><td>16%</td></tr>
              <tr><td>デュオ（2人）</td><td>3,200円</td><td>345円</td><td className="st st-yes">2,855円</td><td>11%</td></tr>
              <tr style={{ background: "#f0fdf4" }}><td><strong>グループ（3人・2台）</strong></td><td><strong>5,000円</strong></td><td>690円</td><td className="st st-yes"><strong>4,310円</strong></td><td>14%</td></tr>
              <tr><td>パーティ（6人・4台）</td><td>8,000円</td><td>1,380円</td><td className="st st-yes">6,620円</td><td>17%</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
