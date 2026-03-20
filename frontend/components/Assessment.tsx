export function Assessment() {
  return (
    <section id="assessment">
      <div className="container">
        <div className="section-label">Overall Assessment</div>
        <h2>総合評価</h2>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <div className="score">8 / 10</div>
          <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>副業としては超アリ。低投資・高マージン・ブルーオーシャン。</p>
        </div>

        <div className="table-wrap">
          <table>
            <thead><tr><th>項目</th><th>評価</th><th>コメント</th></tr></thead>
            <tbody>
              <tr><td>コンセプト</td><td className="st st-yes">◎</td><td>貸切×持ち込み×大学至近は既存店が手を出せないポジション</td></tr>
              <tr><td>料金設計</td><td className="st st-yes">◎</td><td>3プラン+サブスクで健全な利益構造</td></tr>
              <tr><td>原価構造</td><td className="st st-yes">◎</td><td>原価率11-17%は飲食業最高水準</td></tr>
              <tr><td>ターゲット市場</td><td className="st st-maybe">○</td><td>ニッチだが刺さる。20歳未満NGで市場が縮小</td></tr>
              <tr style={{ background: '#fef2f2' }}><td>法務・許認可</td><td className="st st-no">△</td><td>飲食許可の要否が未確定。保健所確認が最優先</td></tr>
              <tr><td>運営リスク</td><td className="st st-maybe">△</td><td>火災・泥酔・騒音。ハード面の防御が必須</td></tr>
              <tr><td>収益性</td><td className="st st-maybe">○</td><td>年間57〜177万。副業として優秀</td></tr>
            </tbody>
          </table>
        </div>

        <div className="box box-gray" style={{ marginTop: '1.5rem' }}>
          <h4>結論</h4>
          <p>「勝算はあるが、運用で詰むリスクも高い」。全国では年間40店が閉店し、チルイン（12店舗・売上9.4億）すら破産した。しかしBiPシーシャは彼らとは構造が違う：</p>
          <ul className="cl" style={{ margin: '0.5rem 0' }}>
            <li>チルインの失敗（急拡大→破産）→ 1店舗のスモールビジネス</li>
            <li>B-Sideの失敗（属人経営→疲弊）→ 週3〜4日の副業設計</li>
            <li>Lunaの失敗（ニッチ×ニッチ）→ 「シーシャ×学生」に全振り</li>
            <li>ばんびえんの教訓（運転資金不足）→ 6ヶ月分36万を確保</li>
            <li>KIMETの成功（10席で聖地化）→ 味の練習に全力</li>
          </ul>
          <p style={{ marginTop: '0.75rem' }}><strong>今日やること: 盛岡市保健所に電話1本。クリアしたら間借りで1回イベントを打て。岩大の軽音・美術部に声をかけて、「1人1,667円」が刺さるかの肌感覚を掴むのが先決。</strong></p>
        </div>
      </div>
    </section>
  );
}
