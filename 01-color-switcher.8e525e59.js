!function(){var t=document.querySelector("body"),e=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]");function o(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}intervalID=null,console.log(o()),e.addEventListener("click",(function(){intervalID=setInterval((function(){t.style.backgroundColor=o()}),1e3),e.disabled=!0})),n.addEventListener("click",(function(){clearInterval(intervalID),e.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.8e525e59.js.map
