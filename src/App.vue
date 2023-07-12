<script setup>
</script>

<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style>
/*Tailwindui component specific font "Inter"*/
/*Occasionally shortly 403 since Cloudflare, needn't deal with it.*/
/*todo: Chrome added same-site=lax http-header error issues since cdn request, temporarily no elegant solution.
   Local preview has error while remote server correct, needn't deal with it temporarily*/
@import url('https://fonts.cdnfonts.com/css/inter');
</style>
