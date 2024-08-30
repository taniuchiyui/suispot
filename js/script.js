!(function () {
  const viewport = document.querySelector('meta[name="viewport"]');
  function switchViewport() {
    const value =
      window.outerWidth > 390
        ? 'width=device-width,initial-scale=1'
        : 'width=390';
    if (viewport.getAttribute('content') !== value) {
      viewport.setAttribute('content', value);
    }
  }
  addEventListener('resize', switchViewport, false);
  switchViewport();
})();


// ドロワーメニュー(tab,sp)のクラス名つけ外し、背景スクロール固定
const body = document.body;
const jsHamburger = document.getElementById('js-hamburger');
const gNavHamburger = document.getElementById('g-nav-hamburger');

let scrollPosition = 0;

// ドロワーメニューを開くときの処理
const openDrawerMenu = () => {
  scrollPosition = window.scrollY;
  body.style.position = 'fixed'; // ページ全体を固定する
  body.style.top = `-${scrollPosition}px`; // 現在のスクロール位置を維持
  body.style.width = '100%'; // 横幅を100%に設定
};

// ドロワーメニューを閉じるときの処理
const closeDrawerMenu = () => {
  body.style.position = ''; // 通常のスクロールに戻す
  body.style.top = ''; // topのスタイルをクリア
  body.style.width = ''; // 横幅のスタイルをクリア
  window.scrollTo(0, scrollPosition); // 元のスクロール位置に戻す
};

// ドロワーメニューのトグル関数
const toggleDrawerMenu = () => {
  const isOpen = gNavHamburger.classList.toggle('panelactive'); // gNavHamburgerのクラス名をtoggleするように修正
  if (isOpen) {
    openDrawerMenu();
  } else {
    closeDrawerMenu();
  }
};
// #js-hamburgerがクリックされたときの処理
jsHamburger.addEventListener('click', () => {
  jsHamburger.classList.toggle('active');
  toggleDrawerMenu();
});


// ナビゲーション内のリンクがクリックされたときの処理
$("#g-nav-hamburger a").click(function () {
  $("#js-hamburger").removeClass("active"); // ボタンの active クラスを除去する
  $("#g-nav-hamburger").removeClass("panelactive"); // ナビゲーションの panelactive クラスを除去する
  closeDrawerMenu(); // ドロワーメニューを閉じる処理を呼び出す
});

//escキー押下でメニューを閉じられるように
window.addEventListener("keydown", () => {
  if (event.key === "Escape") {

  $("#js-hamburger").removeClass("active"); // ボタンの active クラスを除去する
  $("#g-nav-hamburger").removeClass("panelactive"); // ナビゲーションの panelactive クラスを除去する
  closeDrawerMenu(); // ドロワーメニューを閉じる処理を呼び出す
  }
});

// フォーカストラップ制御
let focusTrap = document.getElementById("js-focus-trap");
let hamburger = document.getElementById("js-hamburger");
focusTrap.addEventListener("focus", (e) => {
  hamburger.focus();
});


//room-swiper
const swiper1 = new Swiper(".p-room__swiper", {
  //名前を変える
  centeredSlides: true, // 1枚目のスライドを中央にする
  loop: true, // ループさせる
  speed: 500, // 少しゆっくり(デフォルトは300)
  slidesPerView: 1.29, // スライドの表示枚数
  spaceBetween: 24, // スライド間の距離
  autoplay: { // 自動再生
    delay: 5000, // 5秒後に次のスライド
    disableOnInteraction: false, // 矢印をクリックしても自動再生を止めない
  },
   breakpoints: {
      768: {
       slidesPerView: 3,
        spaceBetween: 0
      }
    },
});

//use-swiper
const swiper2 = new Swiper(".p-use__swiper", {
  //名前を変える
  loop: true, // ループさせる
   speed: 500, // 少しゆっくり(デフォルトは300)
  slidesPerView: 1, // スライドの表示枚数
  // spaceBetween: 0, // スライド間の距離
  centeredSlides: true,
    // キーボード操作
  keyboard: {
    enabled: true,
  },
  // aria-labelの内容を変更
  a11y: { 
    containerMessage:'使い方はいろいろスライドショー',
    prevSlideMessage: '前のスライドへ',
    nextSlideMessage: '次のスライドへ',
    slideLabelMessage:'{{index}}枚目のスライド',
    paginationBulletMessage: '{{index}}枚目のスライドを表示',
  },
   breakpoints: {
      768: {
       slidesPerView: 1.5,
       spaceBetween: 18,
      centeredSlides: true,
     },
     
     1000: {
       slidesPerView: 3,
       spaceBetween: 18,
      centeredSlides: true,
     },
     1220: {
       slidesPerView: 4,
       spaceBetween: 18,
      centeredSlides: false,
       },
  },
   // If we need pagination
  pagination: {
        el: ".swiper-pagination",
      },

  // Navigation arrows
  navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
});

//p-price ScrollHint
window.addEventListener('DOMContentLoaded', function () {
  new ScrollHint('.js-scrollable', {
    suggestiveShadow: false,
  i18n: {
    scrollable: 'スクロールできます'
  },
  scrollHintIconAppendClass: 'scroll-hint-icon-white',
});
  });


//voice-swiper
const swiper3 = new Swiper(".p-voice__swiper", {
  //名前を変える
  loop: true, // ループさせる
   speed: 500, // 少しゆっくり(デフォルトは300)
  slidesPerView: 1, // スライドの表示枚数
  spaceBetween: 18,
  centeredSlides: true,
  watchSlidesProgress: true,//watchSlidesVisibilityを有効にするために必要
  watchSlidesVisibility: true,//表示されているスライドにswiper-slide-visibleのクラスが追加される

   breakpoints: {
      768: {
       slidesPerView: 1.3,
      centeredSlides: true,
     },

    800: {
       slidesPerView: 1.4,
      //  spaceBetween: 18,
      centeredSlides: true,
     },
    
    850: {
       slidesPerView: 1.5,
      //  spaceBetween: 18,
      centeredSlides: true,
     },
    
    900: {
       slidesPerView: 1.8,
      //  spaceBetween: 18,
      centeredSlides: true,
     },


     1000: {
       slidesPerView: 2,
       spaceBetween: 18,
      centeredSlides: false,

     },

         1180: {
       slidesPerView: 2.5,
      //  spaceBetween: 18,
      centeredSlides: true,
     },

     1360: {
       slidesPerView: 3,
       spaceBetween: 18,
      centeredSlides: false,
       },
  },
   // If we need pagination
  pagination: {
        el: ".swiper-pagination",
      },

  // Navigation arrows
  navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
  },
  // キーボード操作
  keyboard: {
    enabled: true,
  },
  // aria-labelの内容を変更
  a11y: { 
    containerMessage:'お客様の声スライドショー',
    prevSlideMessage: '前のスライドへ',
    nextSlideMessage: '次のスライドへ',
    slideLabelMessage:'{{index}}枚目のスライド',
    paginationBulletMessage: '{{index}}枚目のスライドを表示',
  },
});



//p-voice アコーディオンをクリックした時の動作
$('.p-voice__swiper-btn').on('click', function() {//タイトル要素をクリックしたら
  const findElm = $(this).prevAll(".p-voice__swiper-text");//アコーディオンを行うエリアを取得し
  $(findElm).slideToggle();//アコーディオンの上下動作
//
    if($(this).hasClass('close')){//タイトル要素にクラス名closeがあれば
      $(this).removeClass('close');//クラス名を除去し
	}else{//それ以外は
      $(this).addClass('close');//クラス名closeを付与
    }
  
});

//p-fq アコーディオンをクリックした時の動作
$('.p-faq__list').on('click', function() {//タイトル要素をクリックしたら
  const findElm2 = $(this).find(".p-faq__answer");//直後のアコーディオンを行うエリアを取得し
  $(findElm2).slideToggle();//アコーディオンの上下動作
    
  if($(this).hasClass('open')){//タイトル要素にクラス名openがあれば
    $(this).removeClass('open');//クラス名を除去し
  }else{//それ以外は
    $(this).addClass('open');//クラス名openを付与
  }

});



//ページ内リンク スムーススクロール
$(window).on("load resize", function () {
  var breakpoint = 1440; //ブレイクポイント設定
  var browseWid = $(window).width(); //ブラウザの横幅取得
  var widPc = browseWid > breakpoint; //PC表示のとき
  var widSp = browseWid <= breakpoint; //SP表示のとき

  $(document).on("click", "a[href^='#']", function () {
    var headerHeight = 0; // ヘッダーの高さの初期値を設定

    if (widPc) {
      headerHeight = 104; // PC表示の場合のヘッダーの高さ
    } else if (widSp) {
      headerHeight = 60; // SP表示の場合のヘッダーの高さ
    }

    var speed = 500; // ミリ秒
    var href = $(this).attr("href"); // アンカーの値取得
    var target = $(href == "#" || href == "" ? "html" : href); // 移動先を取得
    var position = target.offset().top - headerHeight; // 移動先を数値で取得（ここでヘッダー分の高さを引く）
    // スムーススクロール
    $("body,html").animate({ scrollTop: position }, speed, "swing", function() {
      // スクロール完了後にフォーカスを移動
      focusTarget(target[0]);
    });
    return false;
  });
})

//スムーススクロール後のフォーカス移動
const focusTarget = (element) => {
  // ターゲット要素にフォーカスを設定
  element.focus({ preventScroll: true });

  // アクティブな要素がターゲット要素でない場合
  if (document.activeElement !== element) {
    // ターゲット要素のtabindexを一時的に-1に設定
    element.setAttribute('tabindex', '-1');
    // 再度フォーカスを設定
    element.focus({ preventScroll: true });
  }
}
