<template>
  <div class="home container">
    <div v-if="alert"><Alert :message="alert"></Alert></div>
    <h1 class="page-header">用户管理系统</h1>
    <input type="text" class="form-control " placeholder="Search" v-model="filterInput"/>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>姓名</th>
          <th>电话</th>
          <th>邮箱</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
      <tr v-for="item in filterBy(users,filterInput)">
        <td>{{item.id}}</td>
        <td>{{item.name}}</td>
        <td>{{item.phone}}</td>
        <td>{{item.email}}</td>
        <td>
          <router-link class="btn btn-default" :to="'/profile/'+item.id" replace>详情</router-link>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  import {request} from "../network/request"
  import Alert from "../components/Alert";
  export default {
    name: 'home',
    data(){
      return {
        users:[],
        alert:'',
        filterInput:''
      }
    },
    methods:{
      //通过get方法获取users
      getInfo(){
        return request({
          url:'/users'
        })
      },
      //实现搜索功能
      filterBy(users,value){
        return users.filter(user => {
          return user.name.match(value)
        })
      }
    },
    created() {
      if(this.$route.query.alert){
        this.alert = this.$route.query.alert
      }
      this.getInfo().then(res => {
          // console.log(res)
        this.users = res.data
      })
    },
    components:{
      Alert
    }
  }
</script>
