//rem 计算
import miss from "miss" ;
const {"Number":$number}    =  miss
;(function() {
    function refreshRem() {
        let width      =  docEl.getBoundingClientRect().width;
        let dpr        =  window.devicePixelRatio
        // let rem        =  width * ROOT_FONT_SIZE * 2  / (BASE_WIDTH);
        let rem        =  $number.div( $number.mul( width * 2 , ROOT_FONT_SIZE )  , BASE_WIDTH )
        window.REM     =  rem
        docEl.style.fontSize = rem + "px";
    }
    let tid = null, docEl = document.documentElement, BASE_WIDTH = 750, ROOT_FONT_SIZE = 100;
    refreshRem();
    window.addEventListener("resize", function() {
        clearTimeout(tid);
        tid = setTimeout(refreshRem, 300);
    }, false);
})();