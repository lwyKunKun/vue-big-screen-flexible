//监听浏览器当前窗口是否改变
export const resize = (init, dom) => {
    window.addEventListener('resize', () => {
        init()
        dom.resize()
    })
}