window.addEventListener("load", function() {
  var btn = document.querySelector("input"); 
  // JQueryを使うと、$("input")と書くことができる

  btn.addEventListener("click", function() {
    var p = document.querySelector("p");
    p.innerText = "クリックされた！";
  });
});

// 初期段階でnumber1以外見えないように指定
$(function(){
    $(".contents div").hide();
    $(".left").show();
    $(".left-contents").show();
    // $("." + 'number1' +"-items").show()
    // $("." + 'number1' +"-task").show()
  });

$(window).on("load", function() {
  $("li").on("click", function() {
    $("li.selected").removeClass("selected");
    $(this).addClass("selected");
    $(".contents div").hide(); // 二つの要素を非表示にする
    $("." + this.id).show(); // クリックされたボタンに対応する要素を表示する
    $("." + this.id + "-contents").show(); // クリックされたボタンに対応する要素を表示する
  });
});

$(function(){
  $('.slick1').slick({
    dots: true,
    autoplay: true,
    
    });
    $('.slick1').on('mouseover', function() {
    $('.a').slick('goTo', $(this).index());
    });

  });
  
$(function(){
    $('.js-modal-open').on('click',function(){
        $('.js-modal').fadeIn();
        return false;
    });
    $('.js-modal-close').on('click',function(){
        $('.js-modal').fadeOut();
        return false;
    });
});

$(function () {
  $('#star').raty({　　　
    size: 36,
    starOff: "/assets/images/star-off.png",
    starOn: "/assets/images/star-on.png",
    scoreName: "score"
  });
});

$(function(){
  var btn = $('button');
  btn.click(function(){
    btn.removeClass('active');
    $(this).addClass('active');
  });
});

for (let i = 0; i < this.id; i++) {
   console.log("現在" + (i+1) + "回目の処理です。");
 }