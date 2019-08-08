// ==UserScript==
// @name         Tinder Liked Reveal
// @namespace    https://davidpolitis.net/
// @author    	 David Politis
// @version		 1.0
// @date		 2019-08-08
// @description  Reveals the first photo of people who have liked you without having premium membership.
// @match      	 https://tinder.com/*
// @copyright	 2019, David Politis
// ==/UserScript==

(function() {
    'use strict';

    const style = document.createElement('style');
    style.innerHTML = '.' + CSS.escape('StretchedBox::a') + ':after, .' + CSS.escape('Pos\(a\)') + '.' + CSS.escape('B\(0\)') + '.' + CSS.escape('Start\(0\)') + '.' + CSS.escape('End\(0\)') + ' { display: none; }';
    document.head.appendChild(style);
})();