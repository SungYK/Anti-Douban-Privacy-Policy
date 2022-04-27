// ==UserScript==
// @name         豆瓣隐私协议更新屏蔽
// @namespace    http://tampermonkey.net/
// @version      0.1.1
// @description  Defending your life, and I care about my fucking privacy.
// @author       Kai S
// @match        https://www.douban.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=greasyfork.org
// @grant        none
// @run-at document-end
// @license MIT
// ==/UserScript==

(function() {
    'use strict';

    var timer = setInterval(function(){
        var dialog = $("div[id^='dui-dialog0']");
        if(dialog['length'] == 1) {
            dialog.remove();
            console.log("隐私协议更新移除");
            clearInterval(timer);
        }
    },100);

    // Your code here...
})();
