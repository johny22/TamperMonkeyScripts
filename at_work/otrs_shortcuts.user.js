// ==UserScript==
// @name         OTRS' Shortcuts
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Usefull shortcuts for OTRS
// @author       Jones R. Bezerra <jones.rom22@gmail.com>
// @match        http://10.2.25.17/otrs/index.pl*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function handler_keyUp(e) {
        if (e.key == "F3" && e.ctrlKey) {
            var listItSearch = document.getElementById('nav-search');
            var search_link = listItSearch.children[1].href;
            location.href = search_link;
        }
    }
    document.addEventListener('keyup', handler_keyUp, false);
})();