<template>
    <div class="sidebar">
        <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#324157"
            text-color="#bfcbd9" active-text-color="#20a0ff" router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                                <template slot="title">{{ subItem.title }}</template>
                                <el-menu-item v-for="(threeItem,i) in subItem.subs" :key="i" :index="threeItem.index">
                                    {{ threeItem.title }}
                                </el-menu-item>
                            </el-submenu>
                            <el-menu-item v-else :index="subItem.index" :key="subItem.index">
                                {{ subItem.title }}
                            </el-menu-item>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    import bus from '../common/bus';
    export default {
        data() {
            return {
                collapse: false,
                items: [
//                  {
//                      icon: 'el-icon-lx-home',
//                      index: 'dashboard',
//                      title: '系统首页'
//                  },
                    {
                        icon: 'el-icon-lx-rank',
                        index: 'contentManage',
                        title: '内容管理',
                        subs: [
                            {
                                index: 'area',
                                title: '区域管理'
                            },
                            {
                                index: 'commodity',
                                title: '商品管理'
                            },
                            {
                                index: 'order',
                                title: '订单管理'
                            },
                            {
                                index: 'helpCenter',
                                title: '帮助中心'
                            },
                            {
                                index: 'telephone',
                                title: '电话管理'
                            },
                            {
                                index: 'stationSet',
                                title: '全站设置'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-lx-cascades',
                        index: 'userManage',
                        title: '用户管理',
                        subs: [
                            {
                                index: 'agent',
                                title: '代理管理'
                            },
                            {
                                index: 'financialDetails',
                                title: '资金明细'
                            },
                            {
                                index: 'financialAudit',
                                title: '资金审核'
                            },
                            {
                                index: 'rechargeRecord',
                                title: '充值记录'
                            },
                            {
                                index: 'substationReport',
                                title: '分站报表'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-lx-favor',
                        index: 'controlPanel',
                        title: '控制面板',
                        subs: [
                            {
                                index: 'adminSettings',
                                title: '管理员设置'
                            },
                            {
                                index: 'adminLog',
                                title: '管理日志'
                            }
                        ]
                    },
//                  {
//                      icon: 'el-icon-lx-copy',
//                      index: 'tabs',
//                      title: 'tab选项卡'
//                  },
//                  {
//                      icon: 'el-icon-lx-calendar',
//                      index: '3',
//                      title: '表单相关',
//                      subs: [
//                          {
//                              index: 'form',
//                              title: '基本表单'
//                          },
//                          {
//                              index: '3-2',
//                              title: '三级菜单',
//                              subs: [
//                                  {
//                                      index: 'editor',
//                                      title: '富文本编辑器'
//                                  },
//                                  {
//                                      index: 'markdown',
//                                      title: 'markdown编辑器'
//                                  },
//                              ]
//                          },
//                          {
//                              index: 'upload',
//                              title: '文件上传'
//                          }
//                      ]
//                  },
//                  {
//                      icon: 'el-icon-lx-emoji',
//                      index: 'icon',
//                      title: '自定义图标'
//                  },
//                  {
//                      icon: 'el-icon-lx-favor',
//                      index: 'charts',
//                      title: 'schart图表'
//                  },
//                  {
//                      icon: 'el-icon-rank',
//                      index: '6',
//                      title: '拖拽组件',
//                      subs: [
//                          {
//                              index: 'drag',
//                              title: '拖拽列表',
//                          },
//                          {
//                              index: 'dialog',
//                              title: '拖拽弹框',
//                          }
//                      ]
//                  },
//                  {
//                      icon: 'el-icon-lx-warn',
//                      index: '7',
//                      title: '错误处理',
//                      subs: [
//                          {
//                              index: 'permission',
//                              title: '权限测试'
//                          },
//                          {
//                              index: '404',
//                              title: '404页面'
//                          }
//                      ]
//                  }
                ]
            }
        },
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        },
        created(){
            // 通过 Event Bus 进行组件间通信，来折叠侧边栏
            bus.$on('collapse', msg => {
                this.collapse = msg;
            })
        }
    }
</script>

<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        left: 0;
        top: 70px;
        bottom:0;
        overflow-y: scroll;
    }
    .sidebar::-webkit-scrollbar{
        width: 0;
    }
    .sidebar-el-menu:not(.el-menu--collapse){
        width: 250px;
    }
    .sidebar > ul {
        height:100%;
    }
    .el-submenu__title{
    	height: 46px;
    	line-height: 46px;
    }
    
</style>
