<script>
export default {
  name: "start"
}
</script>

<template>
  <div class="container">
    <div>Главная страница</div>
    <router-link class="router-link" to="main">перейти к следующей странице</router-link>
  </div>
</template>

<style scoped>
.container {
  flex-direction: column;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
}

.container div {
  font-size: 24px;
  margin-bottom: 20px;
}

.router-link {
  padding: 10px 20px;
  font-size: 18px;
  background-color: #333;
  color: #fff;
  text-decoration: none;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.router-link:hover {
  background-color: #313131;
}
</style>