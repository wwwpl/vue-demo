<template>
<div class="main-new">
  <div>
  <div class="main-new-search">
  <el-input placeholder="请输入内容" v-model="input" class="input-with-select" style="width:400px">
    <el-select v-model="value" slot="prepend" placeholder="请选择" style="width:100px">
     <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
    </el-select>
    <el-button slot="append" icon="el-icon-search" @click="testClick"> 搜索</el-button>
  </el-input>
  </div>
  </div>
  <div class="main-new-table">
     <el-table
    :data="tableData"
    style="width: 100%"
    :default-sort = "{prop: 'date', order: 'descending'}"
    >
    <el-table-column
      prop="date"
      label="日期"
      sortable
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      sortable
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      sortable
      :formatter="formatter">
    </el-table-column>
  </el-table>
  <div class="block" >
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      layout="total, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>
  </div>
</div>

</template>
<script>
export default {
   created () {
    this.total = this.tableData.length
  },
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      currentPage: 1,
       options: [{
          value: '0',
          label: '日期'
        }, {
          value: '1',
          label: '姓名'
        }, {
          value: '2',
          label: '地址'
        }],
        optionsValue:[10, 20, 50, 100],
        value: '',
        input: '',
        totalValue:10,
        total:10
    };
  },
  methods: {
    formatter(row, column) {
      return row.address;
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    testClick(){
      console.log("hello")
    }
  }
};
</script>
<style scoped>
body html {
  margin-left: 10px;
}
.main-new-search {
  margin-top: 20px;
}
.main-new-table {
  margin-top: 20px;
  border-top: solid 1px #e6e6e6;
}
</style>

