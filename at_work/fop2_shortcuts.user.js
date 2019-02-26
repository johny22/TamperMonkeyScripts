// ==UserScript==
// @name         Flash Operator Panel 2 Shortcuts
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Usefull Shortcuts for Flash Operator Panel
// @author       Jones R. Bezerra <jones.rom22@gmail.com>
// @match        https://10.2.25.50/fop2/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function handler_keyUp(e) {
        if (e.key == "F3" && e.ctrlKey) {
            var search_field = document.getElementById('filtertext');
            search_field.focus();
        }
    }
    document.addEventListener('keyup', handler_keyUp, false);
})();