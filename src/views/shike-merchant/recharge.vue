<!--  -->
<template>
  <div class="components-container">
    <aside> <i class="el-icon-chat-line-round" /> 为某个平台商户充值</aside>
    <el-form :inline="true" :model="searchFormRecharge" class="demo-form-inline">
      <el-form-item label="手机号">
        <el-input v-model="searchFormRecharge.phone" placeholder="请输入" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="search">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="userAuthId" label="id" width="180" />
      <el-table-column prop="merchantName" label="昵称" width="180" />
      <el-table-column prop="phone" label="手机号" />
      <el-table-column prop="balance" label="账户余额(元)" width="280" />
      <el-table-column fixed="right" label="操作" width="120">
        <template slot-scope="scope">
          <el-button type="primary" size="small" @click.native.prevent="open(scope.row.userAuthId)">
            充值
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination-box">
      <el-pagination background layout="prev, pager, next" :total="pagination.total" :page-size="pagination.pageSize" @current-change="handleCurrentChange" />
    </div>
    <el-dialog title="充值金额" :visible.sync="centerDialogVisible" width="30%" center>
      <h2>充值金额（元）：</h2>
      <el-input v-model.number="amount" placeholder="请输入充值金额" />
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submit">确定充值</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import request from '@/utils/request'
export default {
  // import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    // 这里存放数据
    return {
      amount: '',
      userId: '',
      centerDialogVisible: false,
      searchFormRecharge: {
        phone: '18611111111'
      },
      pagination: {
        total: 1000,
        pageSize: 20,
        currentPage: 1
      },
      tableData: [
        {
          id: 123,
          money: 123,
          phone: 18611111111,
          nickName: 'werwer'
        }
      ]
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.initData()
  },
  // 方法集合
  methods: {
    search() {
      if (this.searchFormRecharge.phone !== '') {
        request({
          url: '/cms/profiles/merchant-phone-number',
          method: 'get',
          params: { merchantPhoneNumber: this.searchFormRecharge.phone }
        }).then((data) => {
          this.tableData = [data]
        })
      }
    },
    open(id) {
      this.userId = id
      this.centerDialogVisible = true
    },
    initData() {
      // request({ url: '/cms/profiles', method: 'get', params: { currPage: 1, isMerchant: true, maxItemPerPage: 20 })
      request({
        url: '/cms/profiles',
        method: 'get',
        params: { currPage: 1, isMerchant: true, maxItemPerPage: 20 }
      }).then((data) => {
        this.tableData = data
      })
    },
    handleCurrentChange(page) {
      this.pagination.currentPage = page
      this.initData()
    },
    submit() {
      if (this.amount !== '') {
        request({
          url: `/cms/profiles/balance/${Number(this.userId)}/${Number(this.amount)}`,
          method: 'post'
        })
          .then((data) => {
            this.centerDialogVisible = false
            this.$notify({
              title: '成功',
              message: '充值成功',
              type: 'success'
            })
            this.initData()
          })
          .catch((error) => {
            console.log(error.message)
          })
      } else {
        this.$notify({
          title: '警告',
          message: '充值金额不能为空',
          type: 'warning'
        })
      }
    }
  }
}
</script>
<style lang="scss" scoped>
// @import url(); 引入公共css类
.pagination-box {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}
</style>
