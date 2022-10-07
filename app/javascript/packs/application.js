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

// let orange = 100;
// let apple = 120;

// if(orange < apple){
//   alert('みかんの値段がりんごより安い');
// } else if(orange == apple){
//   alert('みかんとりんごが同じ値段');
// } else{
//   alert('みかんの値段がりんごより高い');
// }

// let max = 100;
// let num = 1;
// let count = 0;

// while(num < max){
//   num = num * 2;
//   count = count + 1;
// }

// alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');

// // varによる再宣言
// var nickname = "taro"
// console.log(nickname)
// var nickname = "ichiro"
// console.log(nickname)

// letによる再宣言
// let nickname = "taro"
// console.log(nickname)
// let nickname = "ichiro"
// console.log(nickname)

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

function addString(strA){
  let addStr = "Hello " + strA;
  return addStr;
}