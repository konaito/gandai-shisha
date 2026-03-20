export function InvestmentTimeline() {
  return (
    <section id="investment">
      <div className="container">
        <div className="section-label">Investment Timeline</div>
        <h2>時間軸別コスト計画</h2>
        <p className="section-desc">「いつ・何に・いくら必要か」を5フェーズに分解。最初の一歩は3,000円。</p>

        {/* Summary Cards */}
        <div className="grid-3" style={{ marginBottom: '1.5rem' }}>
          <div className="stat-card">
            <div className="label">Phase 0〜1 合計</div>
            <div className="val">15〜25万</div>
            <div className="sub">間借りテストまで。撤退ダメージ最小</div>
          </div>
          <div className="stat-card">
            <div className="label">Phase 2 追加</div>
            <div className="val">75〜160万</div>
            <div className="sub">物件契約・換気工事・内装</div>
          </div>
          <div className="stat-card" style={{ borderColor: 'var(--text)' }}>
            <div className="label">全フェーズ合計</div>
            <div className="val">130〜225万</div>
            <div className="sub">運転資金36万含む</div>
          </div>
        </div>

        <div className="chart-wrap" style={{ margin: '0 0 1.5rem' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/chart-investment-phases.png" alt="Phase-by-phase cumulative investment cost" />
        </div>

        {/* Phase 0 */}
        <div className="card" style={{ borderLeft: '3px solid var(--red)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
            <h3>Phase 0 — 調査・申請</h3>
            <span className="tag tag-red">今日〜2週間</span>
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)', marginBottom: '0.5rem' }}>全てはここから。金はほぼかからないが、ここを飛ばすと全部崩れる。</p>
          <div className="table-wrap">
            <table>
              <thead><tr><th>項目</th><th>費用</th><th>備考</th></tr></thead>
              <tbody>
                <tr><td>盛岡市保健所に電話確認</td><td><strong>0円</strong></td><td>飲食店営業許可の要否。最優先</td></tr>
                <tr><td>CLOUD SHOP連絡（出張販売許可）</td><td><strong>0円</strong></td><td>委託元は無料。審査開始まで</td></tr>
                <tr><td>登録免許税</td><td><strong>3,000円</strong></td><td>出張販売許可の申請費用</td></tr>
                <tr><td>JT盛岡支店への相談</td><td><strong>0円</strong></td><td>申請手続きの事前確認</td></tr>
                <tr style={{ background: '#f7f7f7' }}><td><strong>Phase 0 合計</strong></td><td><strong>~3,000円</strong></td><td></td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Phase 1 */}
        <div className="card" style={{ borderLeft: '3px solid var(--orange)', marginTop: '0.75rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
            <h3>Phase 1 — 間借りテスト営業</h3>
            <span className="tag tag-orange">1〜3ヶ月目</span>
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)', marginBottom: '0.5rem' }}>バー・カフェで週1〜2日のテスト営業。データを取りながらシーシャの腕を磨く。失敗しても最大25万の損失で撤退可能。</p>
          <div className="table-wrap">
            <table>
              <thead><tr><th>項目</th><th>費用</th><th>備考</th></tr></thead>
              <tbody>
                <tr><td>シーシャ台 × 3台</td><td><strong>9〜15万円</strong></td><td>テスト用。3万/台で中堅クラス</td></tr>
                <tr><td>炭・フレーバー初期仕入</td><td><strong>3〜5万円</strong></td><td>フレーバー5種 + ココナッツ炭</td></tr>
                <tr><td>ホース・マウスピース・消耗品</td><td><strong>1〜2万円</strong></td><td>ホース3本 + 使い捨てマウスピース</td></tr>
                <tr><td>CO検知器 × 2台</td><td><strong>1〜2万円</strong></td><td>安全装備は初日から必須</td></tr>
                <tr><td>消火器</td><td><strong>0.5万円</strong></td><td></td></tr>
                <tr><td>間借り利用料</td><td><strong>1〜3万円/月</strong></td><td>売上の10〜20%が相場。× 3ヶ月</td></tr>
                <tr style={{ background: '#ffedd5' }}><td><strong>Phase 1 合計</strong></td><td><strong>15〜25万円</strong></td><td>撤退してもこれだけの損失</td></tr>
              </tbody>
            </table>
          </div>
          <div className="box box-blue" style={{ marginTop: '0.75rem', marginBottom: 0 }}>
            <h4>Phase 1 で取るべきデータ</h4>
            <p>客数/日、リピート率、客単価、人気フレーバー、滞在時間、予約vs飛び込み比率。このデータがPhase 2に進むかの判断材料。</p>
          </div>
        </div>

        {/* Phase 2 */}
        <div className="card" style={{ borderLeft: '3px solid var(--blue)', marginTop: '0.75rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
            <h3>Phase 2 — 物件契約・内装工事</h3>
            <span className="tag tag-blue">4〜5ヶ月目</span>
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)', marginBottom: '0.5rem' }}>テストデータが良好な場合のみ進む。最大の出費は換気設備。居抜き物件で大幅削減可能。</p>
          <div className="table-wrap">
            <table>
              <thead><tr><th>項目</th><th>最小（居抜き）</th><th>最大（スケルトン）</th><th>備考</th></tr></thead>
              <tbody>
                <tr><td>敷金・保証金</td><td><strong>0万円</strong></td><td><strong>20万円</strong></td><td>サニーフラットなら0円</td></tr>
                <tr><td>仲介手数料</td><td><strong>5万円</strong></td><td><strong>7万円</strong></td><td>家賃1ヶ月分</td></tr>
                <tr><td>換気設備工事</td><td><strong>50万円</strong></td><td><strong>100万円</strong></td><td>最大の支出。居抜きダクト既存なら50万〜</td></tr>
                <tr><td>シーシャ台 追加2台</td><td><strong>6万円</strong></td><td><strong>10万円</strong></td><td>計5台体制に</td></tr>
                <tr><td>ソファ・テーブル・クッション</td><td><strong>5万円</strong></td><td><strong>15万円</strong></td><td>中古・メルカリ活用で圧縮</td></tr>
                <tr><td>床材（耐火・耐焦げ）</td><td><strong>2万円</strong></td><td><strong>5万円</strong></td><td>炭落下対策。タイルカーペット等</td></tr>
                <tr><td>プロジェクター + Switch</td><td><strong>4万円</strong></td><td><strong>8万円</strong></td><td>中古Switch + Anker Nebula等</td></tr>
                <tr><td>照明・雰囲気づくり</td><td><strong>1万円</strong></td><td><strong>3万円</strong></td><td>間接照明・LED</td></tr>
                <tr><td>防音対策</td><td><strong>1万円</strong></td><td><strong>5万円</strong></td><td>防音カーテン・隙間テープ等</td></tr>
                <tr><td>火災保険（借家人賠償特約付）</td><td><strong>1万円</strong></td><td><strong>2万円</strong></td><td>年間。必須</td></tr>
                <tr style={{ background: '#dbeafe' }}><td><strong>Phase 2 合計</strong></td><td><strong>75万円</strong></td><td><strong>175万円</strong></td><td>居抜き+敷礼ゼロが理想</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Phase 3 */}
        <div className="card" style={{ borderLeft: '3px solid var(--green)', marginTop: '0.75rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
            <h3>Phase 3 — グランドオープン後（月間ランニングコスト）</h3>
            <span className="tag tag-green">6ヶ月目〜</span>
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)', marginBottom: '0.5rem' }}>毎月確実に出ていく固定費。売上17.2万に対して10.5万。粗利率39%。</p>
          <div className="table-wrap">
            <table>
              <thead><tr><th>項目</th><th>月額</th><th>年額</th><th>備考</th></tr></thead>
              <tbody>
                <tr><td>家賃</td><td><strong>5.5〜6万円</strong></td><td>66〜72万円</td><td>サニーフラット5.5万 / 本町通6万</td></tr>
                <tr><td>光熱費（電気・ガス・水道）</td><td><strong>1.5万円</strong></td><td>18万円</td><td>換気ファン常時稼働分込み</td></tr>
                <tr><td>シーシャ原価（炭・フレーバー）</td><td><strong>2万円</strong></td><td>24万円</td><td>月60セッション想定（345円/回）</td></tr>
                <tr><td>マウスピース等消耗品</td><td><strong>0.3万円</strong></td><td>3.6万円</td><td></td></tr>
                <tr><td>通信費（Wi-Fi）</td><td><strong>0.4万円</strong></td><td>4.8万円</td><td>客向けWi-Fi必須</td></tr>
                <tr><td>雑費（清掃用品・備品補充）</td><td><strong>0.3万円</strong></td><td>3.6万円</td><td></td></tr>
                <tr style={{ background: '#f0fdf4' }}><td><strong>合計</strong></td><td><strong>10〜10.5万円</strong></td><td><strong>120〜126万円</strong></td><td></td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Buffer */}
        <div className="card" style={{ borderLeft: '3px solid var(--purple)', marginTop: '0.75rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
            <h3>運転資金バッファ</h3>
            <span className="tag" style={{ background: '#f3e8ff', color: 'var(--purple)' }}>開業時に確保</span>
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)', marginBottom: '0.5rem' }}>ばんびえん・LAGOSの教訓。最悪シナリオ（月間赤字1.9万）でも1年半以上耐えられる金額。</p>
          <div className="table-wrap">
            <table>
              <tbody>
                <tr><td>経費6ヶ月分</td><td><strong>36万円</strong></td><td>赤字月をカバーする生命線</td></tr>
                <tr><td>予備費（設備故障・突発対応）</td><td><strong>5万円</strong></td><td>シーシャ台の破損・換気ファン故障等</td></tr>
                <tr style={{ background: '#f3e8ff' }}><td><strong>バッファ合計</strong></td><td><strong>41万円</strong></td><td></td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Total Summary */}
        <div className="box box-gray" style={{ marginTop: '1.5rem' }}>
          <h4>全フェーズ累計サマリ</h4>
          <div className="table-wrap" style={{ marginTop: '0.5rem' }}>
            <table>
              <thead><tr><th>フェーズ</th><th>時期</th><th>最小</th><th>最大</th><th>累計（最小）</th></tr></thead>
              <tbody>
                <tr><td>Phase 0: 調査・申請</td><td>今日〜2週間</td><td>0.3万</td><td>0.3万</td><td><strong>0.3万</strong></td></tr>
                <tr><td>Phase 1: 間借りテスト</td><td>1〜3ヶ月目</td><td>15万</td><td>25万</td><td><strong>15万</strong></td></tr>
                <tr><td>Phase 2: 物件・内装</td><td>4〜5ヶ月目</td><td>75万</td><td>175万</td><td><strong>90万</strong></td></tr>
                <tr><td>運転資金バッファ</td><td>開業時</td><td>41万</td><td>41万</td><td><strong>131万</strong></td></tr>
                <tr style={{ background: '#f7f7f7' }}><td><strong>合計</strong></td><td></td><td><strong>131万</strong></td><td><strong>241万</strong></td><td><strong style={{ color: 'var(--green)' }}>居抜き+敷礼0で約150万が現実ライン</strong></td></tr>
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)', marginTop: '0.75rem' }}><strong>最重要ポイント:</strong> Phase 1（間借りテスト）で15〜25万しかかからない。ここでデータが悪ければ撤退すればいい。Phase 2の75万超を突っ込むのは、データが良好な場合のみ。段階的にリスクを取れ。</p>
        </div>

        {/* Break-even chart */}
        <div className="chart-wrap" style={{ margin: '1.5rem 0' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/chart-investment-breakeven.png" alt="Break-even payback simulation" />
        </div>

        {/* Break-even card */}
        <div className="card" style={{ marginTop: '1rem', borderLeft: '3px solid var(--green)' }}>
          <h3>損益分岐点と回収シミュレーション</h3>
          <div className="table-wrap" style={{ marginTop: '0.5rem' }}>
            <table>
              <thead><tr><th>シナリオ</th><th>月間利益</th><th>初期投資回収</th></tr></thead>
              <tbody>
                <tr><td>悲観（稼働率30%）</td><td className="st st-no">-1.9万円/月</td><td>回収不可。撤退判断</td></tr>
                <tr><td>現実的（稼働率60%）</td><td className="st st-yes">+6.7万円/月</td><td><strong>約22ヶ月（1年10ヶ月）</strong></td></tr>
                <tr style={{ background: '#f0fdf4' }}><td>現実的 + サブスク20人</td><td className="st st-yes">+16.7万円/月</td><td><strong>約9ヶ月</strong></td></tr>
                <tr><td>楽観（稼働率80%）</td><td className="st st-yes">+12万円/月</td><td><strong>約12ヶ月（1年）</strong></td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
