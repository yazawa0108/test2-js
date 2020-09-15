// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require rails-ujs 
// これがないと(link_toのdeleteが機能しなくなる https://www.inodev.jp/entry/2019/12/03/234210)
//= require activestorage
//= require turbolinks 
// HTMLの読み込みをtitleとbodyのみにすることで処理を高速化する。一方で、Turbolinksによって画面が切り替わった場合は load(イベントページ読み込み)を起点としたJavascriptは機能しなくなるhttps://www.ryotaku.com/entry/2019/01/15/213420
//= require_tree .
