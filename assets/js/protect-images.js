/**
 * protect-images.js
 * .protected クラスを持つ画像の右クリック・ドラッグを抑止する
 * 副作用を最小限にするため、対象要素のみに適用
 */
(function () {
    'use strict';

    function applyProtection() {
        document.querySelectorAll('img.protected, .protected img').forEach(function (el) {
            el.addEventListener('contextmenu', function (e) {
                e.preventDefault();
                return false;
            });
            el.addEventListener('dragstart', function (e) {
                e.preventDefault();
                return false;
            });
            el.setAttribute('draggable', 'false');
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', applyProtection);
    } else {
        applyProtection();
    }
})();
