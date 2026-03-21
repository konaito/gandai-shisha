export function OperationalRisks() {
  return (
    <section id="risks">
      <div className="container">
        <div className="section-label">Operational Risks</div>
        <h2>運営リスクと対策</h2>
        <p className="section-desc">「学生×貸切×持ち込み」は無法地帯化のリスクと隣り合わせ。</p>

        <div className="chart-wrap" style={{ marginBottom: "1rem" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/chart-risk.png" alt="Risk matrix" />
        </div>

        <div className="table-wrap">
          <table>
            <thead><tr><th>リスク</th><th>確率</th><th>対策</th></tr></thead>
            <tbody>
              <tr><td>持ち込み酒による泥酔・嘔吐</td><td className="st st-no">確実</td><td>入店時の同意書。嘔吐クリーニング費5,000円を明記</td></tr>
              <tr><td>炭の落下・台転倒による火災</td><td className="st st-no">確実</td><td>床を焦げにくい素材に。火災保険の借家人賠償責任特約</td></tr>
              <tr><td>深夜の騒音→近隣通報</td><td className="st st-maybe">高確率</td><td>営業24時まで。防音対策。開業前に近隣全戸へ挨拶</td></tr>
              <tr><td>20歳未満の入場</td><td className="st st-maybe">高確率</td><td>入店時に全員の身分証確認。1人でも未成年→全員不可</td></tr>
              <tr><td>貸切モデルの回転率の壁</td><td className="st st-no">構造的</td><td>完全貸切は3人以上に限定。ソロ・デュオは相席あり</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
