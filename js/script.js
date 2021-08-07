const p = document.querySelectorAll('p');
console.log(p);

// const script = document.createElement('script');
// script.src = "js/test.js";
// По умолчанию вызванный скрипт через JS определяется, как async. 
// Он не будет ждать загрузку других скриптов, а будет загружаться независимо от других скриптов.
// script.async = false;
// document.body.append(script);

function loadScript (src) {
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    document.body.append(script);
}

loadScript("js/test.js");
loadScript("js/some.js");