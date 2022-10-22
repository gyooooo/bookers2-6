// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import "jquery"
import "popper.js"
import "bootstrap"
import '@fortawesome/fontawesome-free/js/all';
import "../stylesheets/application" 

Rails.start()
Turbolinks.start()
ActiveStorage.start()


let str1 = 'Hello';
let str2 = 'World!!';
alert(str1 + str2);

let orange = 100;
let apple = 120;

if(orange < apple){
  alert('みかんの値段がりんごより安い');
} else if(orange == apple){
  alert('みかんとりんごが同じ値段');
} else{
  alert('みかんの値段がりんごより高い');
}

let max = 100;
let num = 1;
let count = 0;

while(num < max){
  num = num * 2;
  count = count + 1;
}

alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');

// varによる再宣言
var nickname = "taro"
console.log(nickname)
var nickname = "ichiro"
console.log(nickname)

letによる再宣言
let nickname = "taro"
console.log(nickname)
let nickname = "ichiro"
console.log(nickname)

// constによる再宣言
// const nickname = "taro"
// console.log(nickname)
// const nickname = "ichiro"
// console.log(nickname)

// varによる再代入
var nickname = "taro"
console.log(nickname)
nickname = "jiro"
console.log(nickname)

var str = "webcamp" //グローバルスコープ

function foo() {
  console.log(str)
  var y = "hello" //関数スコープ
}

foo()
console.log(y)

// var str = "webcamp"

// function foo() { 
//   console.log(str)
//   var str = "dmm webcamp"
//   console.log(str)
// }

// foo()

// function addString(strA){
//   let addStr = "Hello " + strA;
//   return addStr;
// }

// // メイン部分
// let alertString;
// alertString = addString("WebCamp");

// // 作成した関数を呼び出す
// alert(alertString);

// // 作成した関数
// function addString(strA){
//   let addStr = "Hello " + strA;
//   return addStr;
// }

// // じゃんけんの手を入力してもらうプロンプト欄を生成
// let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');

// // じゃんけんの手をランダムに作成する関数を呼び出す
// let js_hand = getJShand();

// // ユーザの手とJavaScriptのじゃんけんの手を比べる関数を呼び出し、結果をjudgeに入れる
// let judge = winLose(user_hand, js_hand);

// // 結果を表示する
// alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');

// // ランダムでじゃんけんの手を作成する関数
// function getJShand(){
//   let js_hand_num = Math.floor( Math.random() * 3 );
//   let hand_name;

//   if(js_hand_num == 0){
//     hand_name = "グー";
//   } else if(js_hand_num == 1){
//     hand_name = "チョキ";
//   } else if(js_hand_num == 2){
//     hand_name = "パー";
//   }

//   return hand_name;
// }

// // ユーザの手とJavaScriptのじゃんけんの手を比べる関数
// function winLose(user, js){
//   let winLoseStr;

//   if(user == "グー"){
//     if(js == "グー"){
//       winLoseStr = "あいこ";
//     } else if(js == "チョキ"){
//       winLoseStr = "勝ち";
//     } else if(js == "パー"){
//       winLoseStr = "負け";
//     }
//   } else if(user == "チョキ"){
//     if(js == "グー"){
//       winLoseStr = "負け";
//     } else if(js == "チョキ"){
//       winLoseStr = "あいこ";
//     } else if(js == "パー"){
//       winLoseStr = "勝ち";
//     }
//   } else if(user == "パー"){
//     if(js == "グー"){
//       winLoseStr = "勝ち";
//     } else if(js == "チョキ"){
//       winLoseStr = "負け";
//     } else if(js == "パー"){
//       winLoseStr = "あいこ";
//     }
//   }

//   return winLoseStr;
// }


// jquery
$(document).ready(function () {
  $('body').html('<h1>Hello jQuery!!</h1>');
});

// box1 デザイン
// $(function(){
//   $('.box1').css({
//     'background-color': '#0000FF',
//     'height': '100px'
//   });
// });

// $(function(){
//   $('.box1').slideDown();
// });

// $(function(){
//   $('.box1').mouseover(function(){
//     $('.box1').addClass('box1-ext');
//   });
//   $('.box1').mouseout(function(){
//     $('.box1').removeClass('box1-ext');
//   });
// });



$(function(){
  // $('.bg1').on('click', function(){
  //   $('.bg1').slideUp();
  // });

  $('.bg2').on('click', function(){
    $('.bg2').slideUp();
  });

  $('.bg3').on('click', function(){
    $('.bg3').slideUp();
  });

  $('.bg4').on('click', function(){
    $('.bg4').slideUp();
  });
});

$(function(){
  $('.box1').on('click', function(){
    $(this).slideUp();
  });
});