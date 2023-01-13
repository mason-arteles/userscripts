// ==UserScript==
// @name        Copy Endpoint JSON
// @namespace   https://mason-arteles.github.io/
// @version     1.0.1
// @description Copy the raw JSON of the blaseball endpoint into your clipboard with two clicks.
// @author      mason-arteles@github
// @match       https://api2.blaseball.com//*
// @icon        https://www.google.com/s2/favicons?sz=64&domain=blaseball.com
// @grant       none
// @run-at      context-menu
// @supportURL  https://discord.com/channels/@me/176112761477136384/
// @downloadURL https://raw.githubusercontent.com/mason-arteles/userscripts/main/blaseball/copy_blaseball_endpoint.js
// @updateURL   https://raw.githubusercontent.com/mason-arteles/userscripts/main/blaseball/copy_blaseball_endpoint.js
// ==/UserScript==

void async function() {
    'use strict';
    var isFirefox = !!document.getElementById("rawdata-tab");
    var rawData;
    if (isFirefox) {
        document.getElementById("rawdata-tab").click();
        rawData = await new Promise((res, rej) => setTimeout(() => {res(document.querySelector("pre.data").innerText)}, 0));
        // ensures the page updates before grabbing the data, have had the issue with this not working before.
    } else {
        rawData = document.body.innerText;
    }
    await navigator.clipboard.writeText(rawData);
    // Your code here...
}();