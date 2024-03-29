<script>
</script>

<template>
  <div class="nav-links">
    <router-link class="router-link" to="start">Главная</router-link>
    <router-link class="router-link" to="main">Регистрация</router-link>
  </div>
  <RouterView/>
</template>

<style scoped>
.nav-links {
  display: flex;
  justify-content: center;
}

.router-link {
  margin: 0 10px;
  padding: 8px 16px;
  font-size: 16px;
  text-decoration: none;
  color: #333;
  border: 2px solid #333;
  border-radius: 5px;
  transition: all 0.3s ease;
}

.router-link:hover {
  background-color: #333;
  color: #fff;
}

.router-link.router-link-active {
  background-color: #333;
  color: #fff;
}
</style>
