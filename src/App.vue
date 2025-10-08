<template>
  <div>
    <nav>
      <ul>
        <li><router-link to="/">Главная</router-link></li>
        <li><router-link to="/info">Инфо</router-link></li>
      </ul>
    </nav>
    <router-view/>
  </div>
</template>

<script lang="ts" setup>
import { RouterView,RouterLink } from 'vue-router';
</script>

<style>

</style>