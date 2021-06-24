;
(function(designWidth, minWidth) {
    let docEle = document.documentElement
    let screenRatioByDesign = 16 / 9

    function setHtmlFontSize() {
        var screenRatio = docEle.clientWidth / docEle.clientHeight
        var fontSize = ((screenRatio > screenRatioByDesign ? screenRatioByDesign / screenRatio : 1) * docEle.clientWidth) / 10

        docEle.style.fontSize = fontSize.toFixed(3) + 'px'
    }

    setHtmlFontSize()

    window.addEventListener('resize', setHtmlFontSize)
})(1920, 1024)