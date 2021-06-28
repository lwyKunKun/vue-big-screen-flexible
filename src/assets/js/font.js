export const fontSize = function(size, defalteWidth = 3840) {
    let docEl = document.documentElement,
        clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
    if (!clientWidth) return
    let fontSize = clientWidth / defalteWidth
    return Number((size * fontSize).toFixed(3))
}