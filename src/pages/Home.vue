<template>
  <div id="home">
    <Layout>
      <!--big title-->
      <div class="mx-auto max-w-3xl py-32 sm:py-48 md:py-56">
        <div class="text-center">
          <h1 class="text-4xl tracking-tight text-gray-900 sm:text-6xl">
            <span class="_shake-hand-animation inline-block sm:text-5xl">👋🏼</span>
            <span class="_big_title" title='/ʈʂɤŋ/ /jæŋ/ pronounce similar to "Jane Young"'>
              Hello, I'm Zheng Yang</span><br/>
            <p class="sm:text-5xl mt-4 leading-8">A Python Fullstack Engineer</p>
          </h1>
          <p class="mt-4 text-lg leading-8 text-gray-600">
            Major in Web Backend development & Programing Teaching, with a little UI background.
          </p>
          <p class="mt-1 text-lg leading-8 text-gray-600">
            <MapPinIcon class="w-7 h-7 inline-block"></MapPinIcon>based in China ZhengZhou, work for remote.
          </p>
          <div class="mt-2 flex items-center justify-center gap-x-6">
            <!--            <a href="#" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</a>-->
            <router-link to="/portfolio" class="text-sm font-semibold leading-4 text-gray-800 hover:translate-x-1 duration-500">
              Learn more <span aria-hidden="true" class="">→</span></router-link>
          </div>
        </div>
      </div>
    </Layout>
  </div>
</template>

<script setup>
import Layout from "../components/Layout.vue";
import {MapPinIcon } from '@heroicons/vue/24/outline'
</script>

<style scoped>
@font-face {
  font-family: Pacifico;
  src: url("../assets/font/Pacifico.ttf");
}
._big_title {
  font-family: Pacifico, cursive;
  font-weight: bold;
  margin-bottom: 2rem;
}

@keyframes shake-hand {
  0% { transform: rotate( 0.0deg) }
  10% { transform: rotate(14.0deg) }
  20% { transform: rotate(-8.0deg) }
  30% { transform: rotate(14.0deg) }
  40% { transform: rotate(-4.0deg) }
  50% { transform: rotate(10.0deg) }
  60% { transform: rotate( 0.0deg) }
  100% { transform: rotate( 0.0deg) }
}
._shake-hand-animation {
  transform-origin: bottom right;
  animation: shake-hand 4s ease infinite;
}

</style>