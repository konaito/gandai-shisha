export function RealCases() {
  return (
    <section id="real-cases">
      <div className="container">
        <div className="section-label">Real Cases</div>
        <h2>実例から学ぶ — 失敗と成功</h2>
        <p className="section-desc">全国のシーシャ屋のリアルな体験談を調査。教訓をプラン全体に反映済み。</p>

        <div className="grid-3" style={{ marginBottom: "1.5rem" }}>
          <div className="stat-card">
            <div className="label">全国シーシャ店舗数</div>
            <div className="val">~1,600</div>
            <div className="sub">2024年10月。東京はスタバ超え</div>
          </div>
          <div className="stat-card" style={{ borderColor: "var(--red)" }}>
            <div className="label">年間閉店数</div>
            <div className="val" style={{ color: "var(--red)" }}>~40店</div>
            <div className="sub">2023年〜 淘汰フェーズ</div>
          </div>
          <div className="stat-card" style={{ borderColor: "var(--red)" }}>
            <div className="label">CO中毒事故（5年半）</div>
            <div className="val" style={{ color: "var(--red)" }}>64件</div>
            <div className="sub">41件が救急搬送。8割が20代</div>
          </div>
        </div>

        <h3 style={{ marginBottom: "0.75rem" }}>失敗</h3>

        <div className="card" style={{ borderLeft: "3px solid var(--red)" }}>
          <h3>チルイン（都内12店舗）— 売上9.4億から破産</h3>
          <p className="text-sm-dim">「シーシャのあるリビング」で12店舗まで急拡大。ピーク9.4億→競合増加で8.2億に低下→2026年3月破産。負債2.5億。</p>
          <p style={{ fontSize: "0.85rem", marginTop: "0.25rem" }}><strong>教訓:</strong> 急拡大は競争激化で致命傷。→ BiPシーシャは1店舗のスモールビジネス。この罠には落ちない。</p>
        </div>
        <div className="card" style={{ borderLeft: "3px solid var(--red)" }}>
          <h3>B-Side（六本木）— 3年で心が折れた</h3>
          <p className="text-sm-dim">経営不振ではなく「疲弊」で閉店。1人で3年3ヶ月休みなし。スタッフに任せると売上30%に暴落。</p>
          <p style={{ fontSize: "0.85rem", marginTop: "0.25rem" }}><strong>教訓:</strong> 属人経営は体力の限界で終わる。→ 週3〜4日の副業設計で回避。</p>
        </div>
        <div className="card" style={{ borderLeft: "3px solid var(--red)" }}>
          <h3>ばんびえん（高田馬場）— 軌道に乗るまで2年</h3>
          <p className="text-sm-dim">初日38,500円→翌日10,500円に急落。パイプ10本しかなく客に提供不能。ソファが買えない。消費税を理解してなくて大打撃。</p>
          <p style={{ fontSize: "0.85rem", marginTop: "0.25rem" }}><strong>教訓:</strong> 運転資金は最低6ヶ月分。→ 初期投資とは別に36万を確保。</p>
        </div>
        <div className="card" style={{ borderLeft: "3px solid var(--red)" }}>
          <h3>Luna（愛媛県松山市）— 4ヶ月で閉店</h3>
          <p className="text-sm-dim">タコス×シーシャ。地方でニッチ×ニッチは成立しなかった。</p>
          <p style={{ fontSize: "0.85rem", marginTop: "0.25rem" }}><strong>教訓:</strong> 地方では1つのニッチに全振り。→ 「シーシャ×学生」に集中。余計な要素を足すな。</p>
        </div>

        <h3 style={{ marginTop: "2rem", marginBottom: "0.75rem" }}>成功</h3>

        <div className="card" style={{ borderLeft: "3px solid var(--green)" }}>
          <h3>KIMET（浅草・10席）— 「聖地」になった男</h3>
          <p className="text-sm-dim">シーシャ歴22年のシノ氏。10席の完全予約制で常に予約困難。「神のシーシャ」で全国から愛好家が訪れる。</p>
          <p style={{ fontSize: "0.85rem", marginTop: "0.25rem" }}><strong>学び:</strong> 圧倒的品質があれば10席でもブランドになる。シーシャの作り方を死ぬほど練習しろ。</p>
        </div>
        <div className="card" style={{ borderLeft: "3px solid var(--green)" }}>
          <h3>LAGOS（大阪・心斎橋）— 脱サラの半年記録</h3>
          <p className="text-sm-dim">6〜9月はギリギリ黒字。1日の客が1人の日も。10月にようやく売上過去最高。Instagram動画が最高13,000再生。</p>
          <p style={{ fontSize: "0.85rem", marginTop: "0.25rem" }}><strong>学び:</strong> 最初の半年は地獄。運転資金と精神力がすべて。副業なら精神的にも耐えやすい。</p>
        </div>

        <h3 style={{ marginTop: "2rem", marginBottom: "0.75rem" }}>業界リスク</h3>
        <div className="table-wrap">
          <table>
            <thead><tr><th>リスク</th><th>内容</th><th>BiPシーシャへの影響</th></tr></thead>
            <tbody>
              <tr><td>たばこ税増税</td><td>2027〜2029年に段階的に増税</td><td className="st st-maybe">中 — 原価率が低いので吸収可能</td></tr>
              <tr><td>規制強化</td><td>厚労省が新型たばこ規制を議論中</td><td className="st st-maybe">中 — 将来対象になる可能性</td></tr>
              <tr><td>市場飽和（都市部）</td><td>東京はスタバ超え。淘汰フェーズ</td><td className="st st-yes">低 — 盛岡は4店のみ</td></tr>
              <tr style={{ background: "#fef2f2" }}><td><strong>CO中毒事故</strong></td><td>5年半で64件。店舗の6割で症状経験</td><td className="st st-no"><strong>最大 — 事故=即廃業</strong></td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
