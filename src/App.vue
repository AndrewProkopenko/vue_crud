<template>
  <div id="app" class="container mt-3"> 
      <nav class="navbar navbar-expand-md bg-dark navbar-dark mb-3 rounded shadow">
        <ul class="navbar-nav">
          <li class="nav-item" :class="{ active: $route.path === '/' }">
            <router-link :to='{name: "home"}' class="nav-link">Home</router-link>
          </li>
          <li class="nav-item" :class="{ active: $route.path === '/posts' }">
            <router-link :to='{name: "posts"}' class="nav-link">Posts</router-link>
          </li>
          <li class="nav-item" :class="{ active: $route.path === '/create' }">
            <router-link :to='{name: "create"}' class="nav-link">Create Post</router-link>
          </li>
        </ul>
      </nav>
     <transition name='fade'>
        <router-view></router-view>  
     </transition>
  </div> 
</template>

<script> 
 
export default {
  name: 'App'  
}
</script>

 
<style scoped>
  .fade-enter, .fade-leave { 
    opacity: 0;
    transform: translateY(10px);
  }
  .fade-enter-active, .fade-leave-active {  
    transition: 300ms ease-out;
  }
</style>