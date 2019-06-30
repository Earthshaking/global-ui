<template>
    <!----------------------------------
          侧边栏组件 Sidebar.vue
    ------------------------------------>
    <GeminiScrollbar id="sidebar">
        <!-- 页面模版 -->
        <div class="card brn bn">
            <div class="card-header sidebar-card-header text-left">
                <a class="card-link" href="javascript:void (0)" data-toggle="collapse">页面模版</a>
            </div>
            <div id="layout" class="collapse show">
                <div class="card-body p0">
                    <div class="sidebarMenu list-group-flush list-group">
                        <a href="#" class="list-group-item list-group-item-action" target="frame">基本布局</a>
                        <a href="#" class="list-group-item list-group-item-action" target="frame">常用页面</a>
                        <a href="#" class="list-group-item list-group-item-action" target="frame">独立部件</a>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- 元素组件 -->
        <div class="card brn bn">
            <div class="card-header sidebar-card-header text-left">
                <a class="card-link" href="javascript:void (0)" data-toggle="collapse">元素组件</a>
            </div>
            <div id="element" class="collapse show">
                <div class="card-body p0">
                    <div class="sidebarMenu list-group-flush list-group">
                        <a href="#" class="list-group-item list-group-item-action" target="frame">按钮样式</a>
                        <a href="#" class="list-group-item list-group-item-action" target="frame">调色板</a>
                        <a href="#" class="list-group-item list-group-item-action" target="frame">列表组</a>
                        <a href="#" class="list-group-item list-group-item-action" target="frame">表格组件</a>
                        <a href="#" class="list-group-item list-group-item-action disabled" target="frame">卡片面板</a>
                        <a href="#" class="list-group-item list-group-item-action disabled" target="frame">轮播组件</a>
                        <a href="#" class="list-group-item list-group-item-action disabled" target="frame">导航栏模块</a>
                        <a href="#" class="list-group-item list-group-item-action disabled" target="frame">侧边栏组件</a>
                        <a href="#" class="list-group-item list-group-item-action disabled" target="frame">日期选择器</a>
                        <a href="#" class="list-group-item list-group-item-action disabled" target="frame">下拉菜单</a>
                        <a href="#" class="list-group-item list-group-item-action disabled" target="frame">自定义表单</a>
                        <a href="#" class="list-group-item list-group-item-action disabled" target="frame">分页模块</a>
                        <a href="#" class="list-group-item list-group-item-action disabled" target="frame">滚动加载</a>
                        <a href="#" class="list-group-item list-group-item-action disabled" target="frame">拖拽布局</a>
                        <a href="#" class="list-group-item list-group-item-action disabled" target="frame">字体规范</a>
                        <a href="#" class="list-group-item list-group-item-action disabled" target="frame">图标一览</a>
                        <a href="#" class="list-group-item list-group-item-action disabled" target="frame">辅助类工具</a>
                    </div>
                </div>
            </div>
        </div>
        
    </GeminiScrollbar>
</template>

<script>
    export default {
        name: 'sidebar',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>

<style scoped>
    
    #sidebar{
    }

    .sidebarMenu a{
        border: 0;
        font-size: 14px;
        text-align: left;
        padding-left: 35px;
    }
    
    .sidebarMenu a.disabled{
        color: rgba(0, 0, 0, 0.4) !important;
    }

    .sidebar-card-header {
        background-color: rgb(18, 134, 152);
        border-radius: 0 !important;
    }

    .sidebar-card-header a {
        border-radius: 0 !important;
        color: #FFF;
        font-weight: bold;
    }

    .gm-scrollbar.-vertical {
        background-color: #f5f5f5
    }

    /* horizontal scrollbar track */
    .gm-scrollbar.-horizontal {
        background-color: transparent;
    }

    .gm-scrollbar .thumb {
        background-color: transparent;
    }

    .gm-scrollbar .thumb:hover {
        background-color: #f5f5f5;
    }
    
</style>
