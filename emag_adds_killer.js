// ==UserScript==
// @name         Remove sponsored content
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Ionait
// @match        https://www.emag.ro/*
// @icon         https://www.google.com/s2/favicons?domain=emag.ro
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // Your code here...
    setTimeout(()=> {
        fetch('https://raw.githubusercontent.com/Ionait/emag-adds-killer/main/class_name.json').then(response => response.json()).then(data => {
            console.log(data.class_name)
            const promovari = document.getElementsByClassName(data.class_name)
            while(promovari.length>0) {
                promovari[0].parentNode.removeChild(promovari[0]);
            }
        })
//        const promovari = document.getElementsByClassName("card-item card-standard js-product-data js-card-ads-listing card-ads-listing")
//        while(promovari.length>0) {
//            promovari[0].parentNode.removeChild(promovari[0]);
//        }
    },5000)
})();
