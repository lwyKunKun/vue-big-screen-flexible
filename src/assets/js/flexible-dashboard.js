// ;
// (function(designWidth, minWidth) {
//     let docEle = document.documentElement
//     let screenRatioByDesign = 16 / 9

//     function setHtmlFontSize() {
//         var screenRatio = docEle.clientWidth / docEle.clientHeight
//         var fontSize = ((screenRatio > screenRatioByDesign ? screenRatioByDesign / screenRatio : 1) * docEle.clientWidth) / 10

//         docEle.style.fontSize = fontSize.toFixed(3) + 'px'
//     }

//     setHtmlFontSize()

//     window.addEventListener('resize', setHtmlFontSize)
// })(3840, 2160)

// 设置系统缩放比，适配各分辨率
export function refreshScale() {
    let baseWidth = document.documentElement.clientWidth
    let baseHeight = document.documentElement.clientHeight
    let appStyle = document.getElementById('app').style
    let realRatio = baseWidth / baseHeight
    let designRatio = 16 / 9
    let scaleRate = baseWidth / 3280
    if (realRatio > designRatio) {
        scaleRate = baseHeight / 2160
    }
    appStyle.transformOrigin = 'left top'
    appStyle.transform = `scale(${scaleRate}) translateX(-50%)`
    appStyle.width = `${baseWidth / scaleRate}px`
}