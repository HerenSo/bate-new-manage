import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/dashboard'
        },
        {
            path: '/',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            meta: { title: '自述文件' },
            children:[
                {
                    path: '/dashboard',
                    component: resolve => require(['../components/page/Dashboard.vue'], resolve),
                    meta: { title: '系统首页' }
                },
                {
                    path: '/icon',
                    component: resolve => require(['../components/page/Icon.vue'], resolve),
                    meta: { title: '自定义图标' }
                },
                {
                    path: '/area',
                    component: resolve => require(['../components/page/contentManage/Area.vue'], resolve),
                    meta: { title: '区域管理' }
                },
                {
                    path: '/areaEdit',
                    component: resolve => require(['../components/page/contentManage/AreaEdit.vue'], resolve),
                    meta: { title: '区域编辑' }
                },
                {
                    path: '/commodity',
                    component: resolve => require(['../components/page/contentManage/Commodity.vue'], resolve),
                    meta: { title: '商品管理' }
                },
                {
                    path: '/order',
                    component: resolve => require(['../components/page/contentManage/Area.vue'], resolve),
                    meta: { title: '订单管理' }
                },
                {
                    path: '/helpCenter',
                    component: resolve => require(['../components/page/contentManage/Area.vue'], resolve),
                    meta: { title: '帮助中心' }
                },
                {
                    path: '/telephone',
                    component: resolve => require(['../components/page/contentManage/Area.vue'], resolve),
                    meta: { title: '电话管理' }
                },
                {
                    path: '/stationSet',
                    component: resolve => require(['../components/page/contentManage/StationSet.vue'], resolve),
                    meta: { title: '全站设置' }
                },
                {
                    path: '/agent',
                    component: resolve => require(['../components/page/contentManage/Area.vue'], resolve),
                    meta: { title: '代理管理' }
                },
                {
                    path: '/financialDetails',
                    component: resolve => require(['../components/page/contentManage/FinancialDetails.vue'], resolve),
                    meta: { title: '资金明细' }
                },
                {
                    path: '/financialAudit',
                    component: resolve => require(['../components/page/contentManage/FinancialDetails.vue'], resolve),
                    meta: { title: '资金审核' }
                },
                {
                    path: '/rechargeRecord',
                    component: resolve => require(['../components/page/contentManage/FinancialDetails.vue'], resolve),
                    meta: { title: '充值记录' }
                },
                {
                    path: '/substationReport',
                    component: resolve => require(['../components/page/contentManage/SubstationReport.vue'], resolve),
                    meta: { title: '分站报表' }
                },
                {
                    path: '/adminSettings',
                    component: resolve => require(['../components/page/contentManage/Area.vue'], resolve),
                    meta: { title: '管理员设置' }
                },
                {
                    path: '/adminLog',
                    component: resolve => require(['../components/page/contentManage/Area.vue'], resolve),
                    meta: { title: '管理日志' }
                },
                {
                    path: '/tabs',
                    component: resolve => require(['../components/page/Tabs.vue'], resolve),
                    meta: { title: 'tab选项卡' }
                },
                {
                    path: '/form',
                    component: resolve => require(['../components/page/BaseForm.vue'], resolve),
                    meta: { title: '基本表单' }
                },
                {
                    // 富文本编辑器组件
                    path: '/editor',
                    component: resolve => require(['../components/page/VueEditor.vue'], resolve),
                    meta: { title: '富文本编辑器' }
                },
                {
                    // markdown组件
                    path: '/markdown',
                    component: resolve => require(['../components/page/Markdown.vue'], resolve),
                    meta: { title: 'markdown编辑器' }    
                },
                {
                    // 图片上传组件
                    path: '/upload',
                    component: resolve => require(['../components/page/Upload.vue'], resolve),
                    meta: { title: '文件上传' }   
                },
                {
                    // vue-schart组件
                    path: '/charts',
                    component: resolve => require(['../components/page/BaseCharts.vue'], resolve),
                    meta: { title: 'schart图表' }
                },
                {
                    // 拖拽列表组件
                    path: '/drag',
                    component: resolve => require(['../components/page/DragList.vue'], resolve),
                    meta: { title: '拖拽列表' }
                },
                {
                    // 拖拽Dialog组件
                    path: '/dialog',
                    component: resolve => require(['../components/page/DragDialog.vue'], resolve),
                    meta: { title: '拖拽弹框' }
                },
                {
                    // 权限页面
                    path: '/permission',
                    component: resolve => require(['../components/page/Permission.vue'], resolve),
                    meta: { title: '权限测试', permission: true }
                },
                {
                    path: '/404',
                    component: resolve => require(['../components/page/404.vue'], resolve),
                    meta: { title: '404' }
                },
                {
                    path: '/403',
                    component: resolve => require(['../components/page/403.vue'], resolve),
                    meta: { title: '403' }
                }
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
})
