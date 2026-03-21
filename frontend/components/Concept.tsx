export function Concept() {
  return (
    <section id="concept">
      <div className="container">
        <div className="section-label">Concept</div>
        <h2>ビジネスモデル</h2>
        <p className="section-desc">シーシャだけ置いて、飲食は持ち込み。許認可・初期投資・ランニングコスト全部軽い。</p>

        <div className="grid-3">
          <div className="stat-card">
            <div className="label">月間売上（現実的）</div>
            <div className="val">17.2万</div>
            <div className="sub">平日5,400円×14日 + 週末12,000円×8日</div>
          </div>
          <div className="stat-card">
            <div className="label">月間経費</div>
            <div className="val" style={{ color: 'var(--red)' }}>10.5万</div>
            <div className="sub">家賃6 + 光熱1.5 + 原価2 + 雑費1</div>
          </div>
          <div className="stat-card">
            <div className="label">月間利益</div>
            <div className="val" style={{ color: 'var(--green)' }}>6.7万</div>
            <div className="sub">+ サブスク収入で上乗せ</div>
          </div>
        </div>

        <div className="box box-green" style={{ marginTop: '1rem' }}>
          <h4>持ち込みスタイルのメリット</h4>
          <ul className="cl" style={{ marginTop: '0.25rem' }}>
            <li>飲食店営業許可が不要（の可能性） → 保健所の設備基準を満たす必要なし</li>
            <li>深夜酒類提供届出が不要 → 酒を店が提供しない</li>
            <li>内装費が大幅削減 → 厨房不要、ソファとシーシャ台だけ</li>
            <li>物件の選択肢が広がる → 「飲食店可」じゃなくてもOKの可能性</li>
            <li>「コンビニで好きなもの買ってダラダラ」は大学生に最高の体験</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
