<template>
  <div id="app">
    <div>
      <label>ID:</label>
      <input type="text" v-model="id">
      <label>名称:</label>
      <input type="text" v-model="name" @keyup.end="add">
      <input type="button" value="添加" class="btn btn-primary" @click="add"> &nbsp;&nbsp;&nbsp;&nbsp;
      <span>按品牌名称检索:</span>
      <input type="text" v-model="keywords" @change="searchByName" v-focus placeholder="请输入检索的名称">
    </div>

    <table class="table table-bordered table-hover table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>名称</th>
          <th>时间</th>
          <th  v-bold="600">操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in searchByName()" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.ctime }}</td>
          <td>
            <a href="javascrip:;" @click.prevent="edit(item)" class="edit">编辑</a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="javascrip:;" @click.prevent="del(item.id)" class="del">删除</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      id: '',
      name: '',
      keywords: '', // 根据名称检索时候的关键字
      list: [
        { id: 1, name: '奔驰', ctime: new Date() },
        { id: 2, name: '宝马', ctime: new Date() },
        { id: 3, name: '千里马', ctime: new Date() },
        { id: 4, name: '奔奔', ctime: new Date(), }
      ]
    }
  },
  methods: {
    // 增添
    add() { 
      this.list.push({ id: this.id, name: this.name, ctime: new Date() })
      this.id = this.name = ''
    },
    // 删除
    del(id) { 
      const index = this.list.findIndex(function (item, i, arr) {
        return item.id == id
      })
      this.list.splice(index, 1)
    },
    // 修改
    edit() {

    },
    // 查找
    searchByName() {
      return this.list.filter(item => item.name.includes(this.keywords))
    }
  },
  directives: { // 自定义指令区域
    bold: { // 让指定元素字体加粗的指令
      bind(el, binding) {
        el.style.fontWeight = binding.value
      },
      inserted(el) { }
    },
    italic: function (el, binding) { 
      el.style.fontStyle = "italic"
    }
  }
}


</script>

<style>
.table {
  text-align: center !important;

}
.del {
  color: red !important;
}
</style>
