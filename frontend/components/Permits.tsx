export function Permits() {
  return (
    <section id="permits">
      <div className="container">
        <div className="section-label">Permits</div>
        <h2>必要な許認可</h2>
        <p className="section-desc">飲食を出さないなら、実質「たばこ出張販売許可」だけでいける。ただし重大な落とし穴あり。</p>

        <div className="box box-red" style={{ marginBottom: '1.5rem' }}>
          <h4>最重要: 飲食店営業許可が必要な可能性が高い</h4>
          <p>「持ち込みスタイルなら不要」と想定していたが、店内で飲食（持ち込み含む）させる営業を行う場合、飲食店営業許可が必要になるケースが圧倒的多数。「提供しないからOK」は通じない可能性が高い。</p>
          <p style={{ marginTop: '0.5rem', fontWeight: 700, color: 'var(--red)' }}>
            → 今すぐ盛岡市保健所に匿名で電話確認すること
            <br />
            生活衛生課: <a href="tel:0196038311" style={{ color: 'var(--red)' }}>019-603-8311</a> / 健康増進課: <a href="tel:0196038305" style={{ color: 'var(--red)' }}>019-603-8305</a>
          </p>
          <p style={{ marginTop: '0.5rem' }}>ここがクリアできなければ全プランが変わる。他の全ステップより先にこれを確認せよ。</p>
        </div>

        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>許可名</th>
                <th>必要？</th>
                <th>理由</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>たばこ出張販売許可</strong></td>
                <td className="st st-yes">必要</td>
                <td>シーシャ（たばこ）を提供する以上必須</td>
              </tr>
              <tr>
                <td><strong>喫煙目的施設の届出</strong></td>
                <td className="st st-yes">必要</td>
                <td>改正健康増進法により屋内喫煙するために必要</td>
              </tr>
              <tr style={{ background: '#fef2f2' }}>
                <td><strong>飲食店営業許可</strong></td>
                <td className="st st-maybe">要確認</td>
                <td>持ち込みでも必要な可能性大。保健所に確認必須</td>
              </tr>
              <tr>
                <td>深夜酒類提供届出</td>
                <td className="st st-no">不要</td>
                <td>酒を店が提供しないなら不要</td>
              </tr>
              <tr>
                <td>防火管理者</td>
                <td className="st st-maybe">規模次第</td>
                <td>収容30人超の場合のみ</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 style={{ marginTop: "1.5rem", marginBottom: "0.25rem" }}>たばこ出張販売許可の取り方（最短ルート）</h3>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)', marginBottom: '0.5rem' }}>
          <a href="https://shop.cloud-jp.net" target="_blank" rel="noopener noreferrer">CLOUD SHOP</a>に頼めば<strong>無料</strong>で委託元になってくれる。登録免許税3,000円のみ。審査2〜3ヶ月。
        </p>
        <div className="table-wrap">
          <table>
            <tbody>
              <tr>
                <td>JT盛岡支店</td>
                <td>盛岡市盛岡駅前通15-19 盛岡フコク生命ビル1F</td>
              </tr>
              <tr>
                <td>JTお客様相談センター</td>
                <td><a href="tel:0120198504">0120-198-504</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
