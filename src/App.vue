<template>
  <div>
    <el-container >
      <el-header>Ansheng WMS</el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu router default-active="$route.name">
            <el-submenu>
              <template slot="title">
                <i class="el-icon-user-solid">基础模块</i>
              </template>
              <el-menu-item index="demo1">前往demo1</el-menu-item>
              <el-menu-item index="demo2">前往demo2</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
          <!--        这里显示路由的所对应的页面   路由出口-->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  data(){
    return{

    }
  },
  components:{

  }
}
</script>
<style scoped>

</style>
