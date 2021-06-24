/*
 * 描述: 封装组件库
 * 作者: lwy
 * 日期: 20201-6-24
 */
import wireframe from '@/components/wireframe/index.vue' //线框
import homeHead from '@/components/head/index.vue'

const components = {
    wireframe,
    homeHead,
}

const install = (Vue = {}) => {
    if (install.installed) return
    Object.keys(components).forEach((component) => {
        Vue.component(components[component].name, components[component])
    })

    install.installed = true
}

install.installed = false

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
    install.installed = true
}

const Vcomp = {
    ...components,
    install,
}

export default Vcomp