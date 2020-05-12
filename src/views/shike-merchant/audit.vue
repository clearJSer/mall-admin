<!--  -->
<template>
  <div class="components-container">
    <aside> <i class="el-icon-chat-line-round" /> 审核商家新发布的活动</aside>
    <el-form :inline="true" :model="searchFormRecharge" class="demo-form-inline">
      <el-form-item label="手机号">
        <el-input v-model="searchFormRecharge.phone" placeholder="请输入" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="search">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" border style="width: 100%" height="600">
      <el-table-column prop="id" label="活动id" width="80" />
      <el-table-column prop="title" label="活动标题" width="280" />
      <el-table-column prop="statusName" label="状态" />
      <el-table-column prop="nickName" label="商家昵称" width="180" />
      <el-table-column prop="phone" label="手机号" width="180" />
      <el-table-column prop="money" label="支付金额" width="180" />
      <el-table-column fixed="right" label="操作" width="180">
        <template slot-scope="scope">
          <p>
            <el-button type="success" size="small" @click="changeStatus(scope.row.id, '已通过待上线')">
              通过
            </el-button>
            <el-button type="danger" size="small" @click="changeStatus(scope.row.id, '待修改')">
              不通过
            </el-button>
          </p>
          <p v-if="scope.row.statusName === '结算完成'">
            <el-button type="success" size="small" @click="changeStatus(scope.row.id, '已结束')">
              确认结束
            </el-button>
          </p>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination-box">
      <el-pagination background layout="prev, pager, next" :total="pagination.total" :page-size="pagination.pageSize" @current-change="handleCurrentChange" />
    </div>
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
      serachStauss: '待审核,待付款,结算完成',
      searchFormRecharge: {
        phone: '+8618611111111'
      },
      tableData: [
        {
          id: 123,
          money: 123,
          phone: 18611111111,
          nickName: 'werwer'
        }
      ],
      pagination: {
        total: 1000,
        pageSize: 20,
        currentPage: 1
      }
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
          url: '/cms/trial-events/merchant-phone-number',
          method: 'get',
          params: { merchantPhoneNumber: this.searchFormRecharge.phone }
        }).then((data) => {
          // this.pagination.total = data
          this.tableData = data
        })
      }
    },
    open(id) {
      this.userId = id
      this.centerDialogVisible = true
    },
    async initData() {
      // await request({
      //   url: `/cms/trial-events/count`,
      //   method: 'get',
      //   params: {
      //     currPage: this.pagination.currentPage,
      //     maxItemPerPage: this.pagination.pageSize,
      //     sortStrategy: 'TIME',
      //     statuses: '待审核,待付款'
      //   }
      // }).then((data) => {
      //   this.pagination.total = data
      // })
      // 获取商家活动列表
      await request({
        url: `/cms/trial-events`,
        method: 'get',
        params: {
          currPage: this.pagination.currentPage,
          maxItemPerPage: this.pagination.pageSize,
          sortStrategy: 'TIME',
          statuses: this.serachStauss
        }
      }).then((data) => {
        this.tableData = data
      })
    },
    handleCurrentChange(page) {
      this.pagination.currentPage = page
      this.initData()
    },
    changeStatus(id, status) {
      request({
        url: `/cms/trial-event/status/${id}`,
        method: 'put',
        data: { status }
      }).then((data) => {
        this.$notify({
          title: '成功',
          message: '审核操作成功',
          type: 'success'
        })
        this.initData()
      })
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
