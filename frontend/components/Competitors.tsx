export function Competitors() {
  return (
    <section id="competitors">
      <div className="container">
        <div className="section-label">Competitors</div>
        <h2>盛岡の既存シーシャ店</h2>
        <p className="section-desc">全店が中央通・内丸・菜園に集中。上田・本町エリアにはゼロ。</p>

        <div className="comp-grid">
          <div className="comp-card"><h4>hookapooka</h4><div className="loc">中央通1-11-7</div><div className="desc">シーシャ1,500円 + ドリンク500円</div></div>
          <div className="comp-card"><h4>popo sheesha</h4><div className="loc">内丸4-14 2F</div><div className="desc">シーシャ1,800円 + ワンドリンク500円〜</div></div>
          <div className="comp-card"><h4>BLACK Rabbit</h4><div className="loc">中央通1-7-13</div><div className="desc">シーシャ2,000円 + ドリンク400円〜</div></div>
          <div className="comp-card"><h4>シーシャヤ ミント</h4><div className="loc">菜園2-4-11</div><div className="desc">シーシャ1,500円〜 / 飲み放題付4,000円</div></div>
        </div>

        <div className="chart-wrap" style={{ margin: "1.5rem 0" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/chart-map.png" alt="Competitor distance map" />
        </div>

        <div className="chart-wrap" style={{ margin: "1rem 0" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/chart-competitor.png" alt="Competitor price comparison" />
        </div>

        <div className="table-wrap" style={{ marginTop: "1rem" }}>
          <table>
            <thead><tr><th></th><th>既存店（中央通）</th><th>BiPシーシャ</th><th>差</th></tr></thead>
            <tbody>
              <tr><td><strong>1人</strong></td><td>~2,500円</td><td><strong>2,200円</strong></td><td className="st st-yes">300円安い</td></tr>
              <tr><td><strong>3人</strong></td><td>~7,500円</td><td><strong>5,000円</strong></td><td className="st st-yes">33%安い</td></tr>
              <tr style={{ background: "#f0fdf4" }}><td><strong>5人</strong></td><td>~12,500円</td><td><strong>6,000円</strong></td><td style={{ color: "var(--green)", fontWeight: 700 }}>52%安い</td></tr>
              <tr><td><strong>空間</strong></td><td>他の客あり</td><td><strong>完全貸切</strong></td><td>—</td></tr>
              <tr><td><strong>飲食</strong></td><td>店のドリンク必須</td><td><strong>持ち込みOK</strong></td><td>—</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
