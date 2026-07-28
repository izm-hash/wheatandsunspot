// ページの読み込みが完了してから実行
document.addEventListener('DOMContentLoaded', () => {
    // 要素（ハンバーガーボタンとメニュー）を取得
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');

    // ハンバーガーボタンがクリックされた時の処理
    hamburger.addEventListener('click', () => {
        // クラスの付け外し（あれば消す、なければ足す）
        hamburger.classList.toggle('active'); // CSSでバツ印に変形させる
        menu.classList.toggle('open');       // CSSでメニューをフワッと表示させる
    });

    // 💡 追加：メニュー内のリンクをクリックした時にメニューを閉じる
    const menuLinks = menu.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active'); // バツ印を三本線に戻す
            menu.classList.remove('open');       // メニューを非表示にする
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // 監視対象のアニメーションさせたい要素（すべてのh2）を取得
    const targets = document.querySelectorAll('h2');

    // 画面に表示されたら実行する処理
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // 要素が10%画面に入ったら発火
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 画面に入ったら「active」というクラスを付与する
                entry.target.classList.add('active');
                // 一度表示されたら監視を解除（何度も動かさない場合）
                observer.unobserve(entry.target);
            }
        });
    }, options);

    // すべてのh2を監視に登録
    targets.forEach(target => {
        observer.observe(target);
    });
});
