<template>
  <div class="header">
      <router-link to="/news">뉴스</router-link> |
      <router-link to="/ask">질문</router-link> |
      <router-link to="/jobs">취업</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scope>
.header {
    color:#fff;
    background-color:#42b883;
    display:flex;
    padding:8px;    
}
.header a {
    color: #fff;
    text-decoration: none;    
    margin: 0 5px;
    font-weight: bold;
}
.header .router-link-active {
    color: rgb(73, 22, 216);
}
</style>