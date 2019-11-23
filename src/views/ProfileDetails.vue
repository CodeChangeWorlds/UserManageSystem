<template>
  <div class="container">
    <h1 class="page-header">
      {{profile.name}}
      <span class="pull-right">
        <router-link class="btn btn-primary" :to="'/edit/'+ profile.id">
          编辑
        </router-link>
        &nbsp;
        <button class="btn btn-danger" @click="removeProfile(profile.id)">
          删除
        </button>
      </span>
    </h1>
    <ul class="list-group">
      <li class="list-group-item">
        <span class="glyphicon glyphicon-earphone"> {{profile.phone}}</span>
      </li>
      <li class="list-group-item">
        <span class="glyphicon glyphicon-envelope"> {{profile.email}}</span>
      </li>
      <li class="list-group-item">
        <span class="glyphicon glyphicon-font"> {{profile.age}}</span>
      </li>
      <li class="list-group-item">
        <span class="glyphicon glyphicon-list-alt"> {{profile.class}}</span>
      </li>
    </ul>
    <ul class="nav navbar-nav navbar-right">
      <router-link to="/" class="btn btn-default" replace>返回</router-link>
    </ul>
  </div>
</template>
<script>
  import {request} from "../network/request";
  export default {
    name: "ProfileDetails",
    data(){
      return {
        profile:''
      }
    },
    methods:{
      getInfo(id){
        return request({
          url:'/users/'+ id
        })
      },
      removeProfile(id){
        return request({
          method:'delete',
          url:'/users/'+ id
        }).then(()=>{
          this.$router.push({path:'/',query:{alert:'用户信息删除成功'}})
        })
      }
    },
    created() {
      this.getInfo(this.$route.params.id).then(res =>{
        this.profile = res.data
      })
    },
  }
</script>

<style scoped>

</style>