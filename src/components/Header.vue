<template>
        <!----------------------------------
                导航组件 Header.vue
        ------------------------------------>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark" id="header">
            <a class="navbar-brand" href="#">{{title}}</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-item nav-link active" href="#">主页 <span class="sr-only">(current)</span></a>
                    <a class="nav-item nav-link" href="#">参考文档</a>
                    <a class="nav-item nav-link" href="#">菜鸟教程</a>
                    <a class="nav-item nav-link disabled" href="#">其他</a>
                </div>
            </div>
        </nav>
</template>

<script>
    export default {
        name: 'header',
        data() {
            return {
                title:"Lionsun-UI",
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>

<style scoped>
    #header{
        height: 100%;
    }
</style>
