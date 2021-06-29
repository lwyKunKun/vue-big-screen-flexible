/*
 * 描述: 封装组件库
 * 作者: lwy
 * 日期: 20201-6-24
 */
import wireframe from '@/components/wireframe/index.vue' //线框
import homeHead from '@/components/head/index.vue' //头部
import chartTitle from '@/components/chartTitle/index.vue' //图表标题
import businessEchart from '@/components/echart/business' //行业30天投递人数排行图表
import educationEchart from '@/components/echart/education' //求职者学历占比图表
import classPlay from '@/components/echart/classPlay' //30天内培训课程播放人次排行图表
import postNeed from '@/components/echart/postNeed' //职位需求人数TOP10图表
import newPostMoney from '@/components/echart/newPostMoney' //新增职位平均薪酬TOP10图表
import hotCompany from '@/components/echart/hotCompany' //热门企业简历投递数图表

const components = {
    wireframe,
    homeHead,
    chartTitle,
    businessEchart,
    educationEchart,
    classPlay,
    postNeed,
    newPostMoney,
    hotCompany,
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