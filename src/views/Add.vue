<template>
  <div class="add container right">
    <alert v-if="alert" :message = "alert"></alert>
    <h1 class="page-header">添加用户</h1>
    <form @submit="addCustomer">
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
        <button type="submit" class="btn btn-primary">添加</button>
      </div>
    </form>
  </div>
</template>

<script>
  import Alert from "../components/Alert";
  import {request} from "../network/request";
  export default {
    name: "Add",
    data(){
      return {
        customer:[],
        alert: ''
      }
    },
    components:{
      Alert
    },
    methods:{
      //实现添加用户信息
      addCustomer(e){
        if (!this.customer.name || !this.customer.phone || !this.customer.email) {
          // console.log('请添加关键信息!');
          this.alert = '请添加关键信息!'
        }else {
          let newCustomer = {
            name: this.customer.name,
            phone: this.customer.phone,
            email: this.customer.email,
            age: this.customer.age,
            class: this.customer.class
          }
          request({
            method: 'post',
            url:'/users',
            data:(newCustomer)
          }).then(() => {
            this.$router.push({path:'/',query:{alert:'用户信息添加成功!'}})
          })
        }
        //去除默认提交方式
        e.preventDefault()
      }
    }
  }
</script>

<style scoped>

</style>