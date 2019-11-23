<template>
  <div class="edit container right">
    <alert v-if="alert" :message = "alert"></alert>
    <h1 class="page-header">编辑用户</h1>
    <form @submit="updateCustomer">
      <div class="well">
        <h4>用户信息</h4>
        <div class="form-group">
          <label>姓名</label>
          <input type="text" class="form-control" placeholder="Name" v-model="customer.name">
        </div>
        <div class="form-group">
          <label>电话</label>
          <input type="number" class="form-control" placeholder="Phone" v-model="customer.phone">
        </div>
        <div class="form-group">
          <label>邮箱</label>
          <input type="email" class="form-control" placeholder="Email" v-model="customer.email">
        </div>
        <div class="form-group">
          <label>年龄</label>
          <input type="number" class="form-control" placeholder="Age" v-model="customer.age">
        </div>
        <div class="form-group">
          <label>班级</label>
          <input type="text" class="form-control" placeholder="Class" v-model="customer.class">
        </div>
        <div class="form-group">
          <label>个人简介</label>
          <textarea rows="10" class="form-control" placeholder="Tell me about yourself"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">确认</button>
      </div>
    </form>
  </div>
</template>

<script>
  import {request} from "../network/request";
  import Alert from "../components/Alert";
  export default {
    name: "Edit",
    components:{
      Alert
    },
    data(){
      return {
        customer:{},
        alert: ''
      }
    },
    methods:{
      updateCustomer(e){
        if (!this.customer.name || !this.customer.phone || !this.customer.email) {
          // console.log('请添加关键信息!');
          this.alert = '请添加关键信息!'
        }else {
          let updateCustomer = {
            name: this.customer.name,
            phone: this.customer.phone,
            email: this.customer.email,
            age: this.customer.age,
            class: this.customer.class
          }
          request({
            method: 'put',
            url:'/users/' + this.$route.params.id,
            data:(updateCustomer)
          }).then(() => {
            this.$router.push({path:'/',query:{alert:'用户信息修改成功!'}})
          })
        }
        e.preventDefault()
      },
      getInfo(id){
        return request({
          url:'/users/'+ id
        })
      }
    },
    created() {
      this.getInfo(this.$route.params.id).then(res => {
        this.customer = res.data
      })
    }
  }
</script>

<style scoped>

</style>