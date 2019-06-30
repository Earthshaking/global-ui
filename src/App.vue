<template>
    <el-container id="app">
        <!-- 导航栏 -->
        <el-header>
            <!-- 全局公用导航栏 页面路径：'src/components/Header.vue' -->
            <header-view></header-view>
        </el-header>
        
        <el-container>
            <!-- 侧边栏 -->
            <el-aside width="240px">
                    <sidebar-view></sidebar-view>
            </el-aside>
            
            <!-- 主体内容 -->
            <el-main>
                <router-view/>
            </el-main>
        </el-container>
    
    </el-container>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style>
    * {
        padding: 0;
        margin: 0;
    }
    
    html, body {
        width: 100%;
        height: 100%;
    }
    
    *, *:before, *:after {
        box-sizing: border-box;
    }
    
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
    
    .el-container {
        height: 100%;
    }
    
    .el-header {
        background-color: transparent;
        padding: 0 !important;
        height: 56px !important;
    }
    
    .el-aside {
        background-color: transparent;
        border-right: 1px solid #ddd;
        height: 100%;
        overflow: hidden;
    }


   

</style>
