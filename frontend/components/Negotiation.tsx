export function Negotiation() {
  return (
    <section id="negotiation">
      <div className="container">
        <div className="section-label">Negotiation</div>
        <h2>物件契約の交渉術</h2>

        <div className="table-wrap">
          <table>
            <thead><tr><th>オーナーの不安</th><th>対策</th></tr></thead>
            <tbody>
              <tr><td>火災リスク</td><td>防火シート+消火器+炭火対応火災保険の証書を見せる</td></tr>
              <tr><td>煙・臭い汚損</td><td>換気設備の設計図を提示+退去時クロス全面張替えを自己負担と提案</td></tr>
              <tr><td>近隣苦情</td><td>排気口の位置計画+開業前の近隣挨拶を約束</td></tr>
            </tbody>
          </table>
        </div>

        <div className="card" style={{ marginTop: "0.75rem" }}>
          <h3>契約書で必ず確認すること</h3>
          <ul className="cl">
            <li>「喫煙を伴う営業」が許可されているか</li>
            <li>炭火の使用が明示的にOKか</li>
            <li>ダクト工事（壁の穴あけ）の許可</li>
            <li>原状回復の範囲と費用上限</li>
            <li className="warn">「火気厳禁」条項がないか</li>
            <li className="warn">保証金は通常の1.5〜2倍を自ら提案すると信頼感UP</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
