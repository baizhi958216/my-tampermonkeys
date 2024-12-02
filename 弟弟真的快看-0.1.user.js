// ==UserScript==
// @name         弟弟真的快看
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  没有微信
// @author       baizhi958216
// @match        *://*.ddkk.com/*
// @grant        none
// ==/UserScript==

document.querySelector('.row-content').style.overflow = 'unset'
setTimeout(()=>{
  document.querySelector('#locker').style.display = 'none'
},1000)
