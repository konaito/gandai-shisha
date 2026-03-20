export function Ventilation() {
  return (
    <section id="ventilation">
      <div className="container">
        <div className="section-label">Ventilation</div>
        <h2>換気設備</h2>
        <p className="section-desc">ここだけはケチるな。シーシャ炭はCOを大量に発生させる。換気不足は一発で廃業 or 事故。</p>

        <div className="table-wrap">
          <table>
            <thead><tr><th>項目</th><th>必要スペック（30〜40m²）</th></tr></thead>
            <tbody>
              <tr><td>必要排気量</td><td><strong>800〜1,200 m³/h 以上</strong></td></tr>
              <tr><td>換気回数</td><td><strong>10〜15回/時間</strong></td></tr>
              <tr><td>入口風速</td><td><strong>0.2m/s以上</strong>（法的基準）</td></tr>
            </tbody>
          </table>
        </div>

        <div className="vent-diagram">{`┌──────────────────────────────────────┐
│  【天井付近】                          │
│  排気ファン ×2〜3台 → ダクト → 屋外排気  │
│                                        │
│     🪑 ソファ   🪑 ソファ   🪑 ソファ   │
│       💨          💨          💨        │
│     シーシャ台  シーシャ台  シーシャ台    │
│                                        │
│  【壁面下部】                          │
│  ←── 自然給気口（入口付近）             │
│                                        │
│  ⚠️ CO検知器 ×2台                     │
└──────────────────────────────────────┘
  ※ 排気口と給気口は対角線上に配置`}</div>

        <div className="table-wrap">
          <table>
            <thead><tr><th>パターン</th><th>費用</th><th>備考</th></tr></thead>
            <tbody>
              <tr><td><strong>居抜き（ダクト既存）</strong></td><td><strong>50〜100万円</strong></td><td>← これを狙う</td></tr>
              <tr><td>スケルトン（壁出し排気）</td><td>80〜150万円</td><td>2026年の資材高騰込み</td></tr>
              <tr><td style={{ color: "var(--red)" }}>地下物件</td><td>200万円〜</td><td>避けるべき</td></tr>
            </tbody>
          </table>
        </div>

        <div className="box box-red">
          <h4>CO（一酸化炭素）中毒に注意</h4>
          <p>5年半で64件のCO中毒事故。全国店舗の6割で症状経験あり。シーシャ1回で紙巻きタバコ4〜5本分のCOが発生。<strong>CO検知器は必ず2台以上設置。</strong></p>
        </div>
      </div>
    </section>
  );
}
