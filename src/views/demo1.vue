<template>
  <div>
    <el-button type="primary">添加</el-button>
    <el-table
      :data="list"
      stripe
      style="width: 100%"
    >
      <el-table-column
        prop="propId"
      >
      </el-table-column>
      <el-table-column
          prop="propId"
      >
      </el-table-column>
      <el-table-column
          prop="propId"
      >
      </el-table-column>
      <el-table-column
          prop="propId"
      >
      </el-table-column>
      <el-table-column
          prop="propId"
      >
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "demo1",
  data(){
    return{
      list:[{'propId':1},{'propId':2},{'propId':3},{'propId':4},{'propId':6}]
    }
  }
}
</script>

<style scoped>

</style>
