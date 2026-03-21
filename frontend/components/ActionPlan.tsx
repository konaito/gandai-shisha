export function ActionPlan() {
  return (
    <section id="action-plan">
      <div className="container">
        <div className="section-label">Action Plan</div>
        <h2>やることリスト</h2>
        <p className="section-desc">出張販売許可は審査に2〜3ヶ月。物件探しと並行して今すぐ動く。</p>

        <div className="chart-wrap" style={{ marginBottom: '1.5rem' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/chart-timeline.png" alt="Action timeline" />
        </div>

        <div className="box box-green" style={{ marginBottom: '1.5rem' }}>
          <h4>リスクを最小化する「間借り検証」ルート（推奨）</h4>
          <p>いきなり物件を借りるのではなく、まず盛岡のバーやカフェで週1〜2日間借りしてテストマーケティングする。初期投資は15〜20万円だけ。失敗しても致命傷にならない。</p>
        </div>

        <div className="steps">
          <div className="step step-red" data-step="0">
            <h4 style={{ color: 'var(--red)' }}>盛岡市保健所に電話（今日中にやれ）</h4>
            <p>「持ち込み飲食のみのシーシャ店に飲食店営業許可は必要か？」を確認。ここがNGなら全プランが変わる。<br /><a href="tel:0196038311">019-603-8311</a> / <a href="tel:0196038305">019-603-8305</a></p>
          </div>

          {/* Phone Scripts */}
          <div className="box box-gray" style={{ margin: '0.75rem 0 1.25rem 2rem' }}>
            <h4>電話スクリプト集</h4>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', marginBottom: '0.75rem' }}>緊張するのはわかる。でも電話1本で全部の方向性が決まる。台本通りに読め。</p>

            <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '8px', padding: '1rem', marginBottom: '0.75rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
                <strong style={{ fontSize: '0.85rem' }}>1. 盛岡市保健所（生活衛生課）</strong>
                <span className="tag tag-red">最優先</span>
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', marginBottom: '0.5rem' }}>TEL: <a href="tel:0196038311">019-603-8311</a></p>
              <div style={{ background: '#f9f9f9', borderRadius: '6px', padding: '0.75rem', fontSize: '0.82rem', lineHeight: 1.9 }}>
                <p>「お忙しいところ恐れ入ります。飲食店の営業許可についてお伺いしたいのですが、ご担当の方はいらっしゃいますでしょうか。」</p>
                <p style={{ marginTop: '0.5rem' }}>（担当者に繋がったら）</p>
                <p style={{ marginTop: '0.25rem' }}>「ありがとうございます。盛岡市内でシーシャ（水たばこ）の貸切スペースの開業を検討しております。<strong>飲食物はお客様の持ち込みのみ</strong>で、当店からの飲食の提供は一切行わない形を考えているのですが、この場合でも飲食店営業許可は必要でしょうか？」</p>
                <p style={{ marginTop: '0.5rem', color: 'var(--text-dim)' }}>（回答を聞いた後）</p>
                <p style={{ marginTop: '0.25rem' }}>「もう1点確認させてください。シーシャのみの提供の場合、<strong>喫煙目的施設としての届出</strong>は、そちらの課で受け付けていただけますか？それとも別の窓口になりますか？」</p>
                <p style={{ marginTop: '0.5rem', color: 'var(--text-dim)' }}>（メモすべき回答）</p>
                <ul style={{ marginTop: '0.25rem', paddingLeft: '1.25rem', fontSize: '0.8rem' }}>
                  <li>飲食店営業許可: <strong>必要 / 不要 / 条件付き</strong></li>
                  <li>必要な場合の設備基準（調理場・手洗い等）</li>
                  <li>喫煙目的施設の届出先</li>
                  <li>担当者の名前（後で「先日○○さんに伺った件で」と言える）</li>
                </ul>
              </div>
            </div>

            <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '8px', padding: '1rem', marginBottom: '0.75rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
                <strong style={{ fontSize: '0.85rem' }}>2. CLOUD SHOP（出張販売許可の委託元）</strong>
                <span className="tag tag-orange">Step 1と同時</span>
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', marginBottom: '0.5rem' }}>WEB: <a href="https://shop.cloud-jp.net" target="_blank" rel="noopener noreferrer">shop.cloud-jp.net</a>（問い合わせフォーム or メール）</p>
              <div style={{ background: '#f9f9f9', borderRadius: '6px', padding: '0.75rem', fontSize: '0.82rem', lineHeight: 1.9 }}>
                <p>「はじめまして。岩手県盛岡市でシーシャ（水たばこ）の貸切スペースの開業を準備しております。</p>
                <p style={{ marginTop: '0.25rem' }}>貴社の<strong>たばこ出張販売許可の委託元サービス</strong>を利用させていただきたく、ご連絡いたしました。</p>
                <p style={{ marginTop: '0.25rem' }}>現在はまだ物件の確定前ですが、出張販売許可の審査に2〜3ヶ月かかると伺っておりますので、早めに申請を進めたいと考えております。</p>
                <p style={{ marginTop: '0.5rem' }}>お伺いしたい点：</p>
                <ul style={{ paddingLeft: '1.25rem', fontSize: '0.8rem' }}>
                  <li>物件が確定していない段階でも申請手続きを開始できますか？</li>
                  <li>申請に必要な書類を教えてください</li>
                  <li>岩手県での申請実績はありますか？」</li>
                </ul>
              </div>
            </div>

            <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '8px', padding: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
                <strong style={{ fontSize: '0.85rem' }}>3. テナント盛岡</strong>
                <span className="tag">Step 3</span>
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', marginBottom: '0.5rem' }}>TEL: <a href="tel:0196293010">019-629-3010</a></p>
              <div style={{ background: '#f9f9f9', borderRadius: '6px', padding: '0.75rem', fontSize: '0.82rem', lineHeight: 1.9 }}>
                <p>「お忙しいところ恐れ入ります。盛岡市内でシーシャ（水たばこ）の小規模店舗を探しておりまして、ご相談させていただけますでしょうか。」</p>
                <p style={{ marginTop: '0.5rem' }}>（担当者に繋がったら）</p>
                <p style={{ marginTop: '0.25rem' }}>「ありがとうございます。希望条件としては、</p>
                <ul style={{ paddingLeft: '1.25rem', fontSize: '0.8rem' }}>
                  <li><strong>面積</strong>: 25〜65m²程度</li>
                  <li><strong>エリア</strong>: 本町通・上田周辺（岩手大学に近いエリア）</li>
                  <li><strong>用途地域</strong>: 近隣商業地域が理想ですが、第一種住居地域でも500m²以下であれば可能です</li>
                  <li><strong>条件</strong>: 喫煙を伴う営業が可能で、<strong>ダクト工事（壁の穴あけ）の許可</strong>がいただける物件</li>
                  <li><strong>予算</strong>: 家賃6万円以内</li>
                </ul>
                <p style={{ marginTop: '0.25rem' }}>炭火を使用しますので、火気の使用がOKな物件に限られます。ネットに出ていない物件も含めて、何かございましたらご紹介いただけますと助かります。」</p>
              </div>
            </div>
          </div>

          <div className="step" data-step="1">
            <h4>CLOUD SHOPに連絡</h4>
            <p>出張販売許可の無料申請を依頼。審査2〜3ヶ月。保健所確認と並行。<br /><a href="https://shop.cloud-jp.net" target="_blank" rel="noopener noreferrer">shop.cloud-jp.net</a></p>
          </div>
          <div className="step" data-step="2">
            <h4>間借り先を探す or 物件内見</h4>
            <p>間借りルート: バー・カフェに「週1〜2日シーシャイベント」を交渉。<br />物件ルート: サニーフラット・本町通貸店舗を内見。</p>
          </div>
          <div className="step" data-step="3">
            <h4>テナント盛岡に電話</h4>
            <p>「喫煙OK・ダクト工事OKの小規模テナント」で相談。ネットに出ない物件がある。<br /><a href="tel:0196293010">019-629-3010</a></p>
          </div>
          <div className="step" data-step="3.5">
            <h4>シーシャの作り方を死ぬほど練習</h4>
            <p>KIMETが証明した通り、味が全て。盛岡の既存店に通って研究。最低100回は作ってからテスト営業に臨め。</p>
          </div>
          <div className="step" data-step="4">
            <h4>テストマーケティング（3ヶ月）</h4>
            <p>間借り or 物件で営業開始。客数・リピート率・客単価のデータを取る。軽音部・美術部・写真部を直撃。</p>
          </div>
          <div className="step" data-step="5">
            <h4>データに基づいて判断</h4>
            <p>3ヶ月のデータでスケール or ピボット or 撤退を判断。間借りなら撤退コストはほぼゼロ。</p>
          </div>
          <div className="step" data-step="6">
            <h4>物件確定・換気設備・内装</h4>
            <p>データが良ければ物件を正式契約。換気工事、内装。</p>
          </div>
          <div className="step" data-step="7">
            <h4>グランドオープン + サブスク開始</h4>
            <p>喫煙目的施設の届出。テスト期間の常連にサブスクを案内。</p>
          </div>
        </div>

        <div className="box box-red" style={{ marginTop: '1rem' }}>
          <h4>タイムライン</h4>
          <p>
            <strong style={{ color: 'var(--red)' }}>今日</strong>: 盛岡市保健所に電話 + CLOUD SHOPに連絡 + 間借り先探し<br />
            <strong>1〜2週間後</strong>: 間借り交渉 or 内見 + 用途地域確認<br />
            <strong>1ヶ月後</strong>: テスト営業開始（シーシャ台3台で小さく）<br />
            <strong>2〜3ヶ月後</strong>: 出張販売許可おりる + データ蓄積<br />
            <strong>4ヶ月後</strong>: データに基づきスケール判断<br />
            <strong>5〜6ヶ月後</strong>: グランドオープン
          </p>
        </div>
      </div>
    </section>
  );
}
