<!--  -->
<template>
  <div class="components-container">
    <aside> <i class="el-icon-chat-line-round" /> 设置商品的来源 </aside>
    <el-button type="primary" icon="el-icon-plus" @click="add">添加新的来源</el-button>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="index" width="50" />
      <el-table-column label="ID" width="180">
        <template slot-scope="scope">
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column label="来源" width="180">
        <template slot-scope="scope">
          <span>{{ scope.row.platformName }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog :title="type === 'add' ? '新增' : '编辑'" :visible.sync="dialogVisible" width="30%">
      <el-form ref="ruleForm" :model="formData" :rules="rules" label-width="100px" class="demo-ruleForm">
        <el-input v-show="false" v-model="formData.id" />
        <el-form-item label="来源" prop="platformName">
          <el-input v-model="formData.platformName" />
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import { getSources, addSources, editSources, deleteSources } from '@/api/product'
export default {
  // import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    // 这里存放数据
    return {
      dialogVisible: false,
      type: 'add',
      formData: {
        id: '',
        platformName: ''
      },
      tableData: [
        {
          platformName: '京东',
          id: 1
        }
      ],
      rules: {
        platformName: [{ required: true, message: '请输入商品来源', trigger: 'blur' }]
      }
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.init()
  },
  // 方法集合
  methods: {
    init() {
      getSources()
        .then((data) => {
          this.tableData = data
        })
        .catch((error) => {
          console.log(error)
        })
    },
    add() {
      this.type = 'add'
      this.formData = {
        id: '',
        name: '',
        icon: '',
        description: ''
      }
      this.dialogVisible = true
    },
    submitForm() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          if (this.formData.id === '') {
            // 新增
            addSources(this.formData)
              .then((data) => {
                this.dialogVisible = false
                this.init()
              })
              .catch((error) => {
                console.log(error)
              })
          } else {
            // 修改
            editSources(this.formData)
              .then((data) => {
                this.dialogVisible = false
                this.init()
              })
              .catch((error) => {
                console.log(error)
              })
          }
        } else {
          return false
        }
      })
    },
    handleEdit(row) {
      this.formData = row
      this.type = 'edit'
      this.dialogVisible = true
    },
    handleDelete(id) {
      deleteSources(id)
        .then((data) => {
          const { message } = data
          this.$message({
            message,
            type: 'success'
          })
          this.init()
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>
<style lang="scss" scoped>
// @import url(); 引入公共css类
</style>
