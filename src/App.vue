<template>
  <div id="app">
    <nav class="navbar navbar-inverse">
      <div class="container">
        <div class="navbar-header">
          <div class="navbar-brand" >用户管理系统</div>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li><router-link to="/" replace>主页</router-link></li>
            <li><router-link to="/about" replace>关于我们</router-link></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li><router-link to="/add" replace>添加用户</router-link></li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>
<script>

</script>
<style>

</style>
