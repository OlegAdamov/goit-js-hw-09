!function(){var t={},e=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]"),c=document.querySelector("body");e.addEventListener("click",(function(){t.isActive||(t.isActive=!0,t.intervalID=setInterval((function(){c.style.backgroundColor="".concat("#".concat(Math.floor(16777215*Math.random()).toString(16)))}),1e3))})),n.addEventListener("click",(function(){clearInterval(t.intervalID),t.isActive=!1}))}();
//# sourceMappingURL=01-color-switcher.d7451dec.js.map
