<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="home-header">
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="100" height="100" />
    <h1>This is my very first Vue.js app</h1>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="100" height="100" />
  </header>
  <main class="home-page">
    <nav>
      <div class="left">
        <img
          src="https://img.freepik.com/free-vector/football-player-action-logo_293731-76.jpg"
          alt="footbal"
          width="150"
          height="150"
        />
        <RouterLink to="/">Football League</RouterLink>
      </div>
      <div>
        <RouterLink to="/teams">teams</RouterLink>
        <RouterLink to="/games">games</RouterLink>
        <RouterLink to="/ranking">ranking</RouterLink>
      </div>
    </nav>
    <div class="container">
      <RouterView />
    </div>
  </main>
</template>

<style>
@import '@/assets/base.css';

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

.home-header {
  padding: 10px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #efefef;
  border: 1px solid gray;
  border-radius: 10px;
}

.home-header>h1 {
  font-size: 2.5em;
}

.home-page a {
  text-decoration: none;
  color: black;
}

.home-page a:hover {
  text-decoration: underline;
}

.home-page nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.home-page nav a {
  font-size: 1.25em;
  margin: 20px;
}

.container {
  text-align: center;
}

.left {
  display: flex;
  align-items: center;
}
.left h2 {
  margin-left: 50px;

}
</style>
