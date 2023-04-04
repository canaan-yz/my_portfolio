<!--power by component https://tailwindui.com/components/marketing/sections/heroes-->

<template>
  <header name="header" class="bg-transparent">
    <nav name="nav" class="fixed inset-x-0 top-0 z-50 backdrop-blur-sm bg-transparent">
      <div class="flex items-center justify-between p-6 md:px-8" aria-label="Global">
        <div class="flex md:flex-1 items-center">
          <a href="#/" class="-m-1.5 p-1.5">
            <span class="sr-only">Yang Zheng</span>
            <img class="h-8 w-auto hover:rotate-180 transition-transform duration-1000"
                 src="../assets/image/logo.png" alt="Logo" />
          </a>
          <div class="text-xl text-stone-500 ml-2"></div>
        </div>
        <div class="flex md:hidden">
          <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-neutral-700" @click="mobileMenuOpen = true">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="hidden md:flex md:gap-x-12">
<!--          <a v-for="item in navigation" :key="item.name" :href="item.href" class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-neutral-900 hover:bg-neutral-50">{{ item.name }}</a>-->
          <router-link class="text-sm font-semibold leading-6 text-neutral-900 hover:text-neutral-500 duration-500 " active-class="text-neutral-500 border-b-2 border-neutral-700"
                       v-for="item in navigation" :key="item.name" :to="item.href" >
            {{ item.name }}
          </router-link>
        </div>

      </div>
      <Dialog as="div" class="md:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
        <div class="fixed inset-0 z-50" />
        <DialogPanel class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-neutral-900/10">
          <div class="flex items-center justify-between">
            <button type="button" class="-m-2.5 rounded-md p-2.5 text-neutral-700 place-self-end" @click="mobileMenuOpen = false">
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-neutral-500/10">
              <div class="space-y-2 py-6">
                <router-link v-for="item in navigation" :key="item.name" :to="item.href"
                             class="block text-sm font-semibold leading-6 text-neutral-900 hover:bg-neutral-200">
                  {{ item.name }}
                </router-link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </nav>
  </header>


  <!--main content slot-->
  <!--set margin-top in slot content coz of fixed navbar. slot can't set class attr-->
  <div id="main-content" class="min-h-screen">
    <!--set enough height to prop up the blur tier, can't set margin otherwise it will lightly cut a corner of blur background.
    can't set root element bg blur conflict with nav blur. -->
    <div class="backdrop-blur-3xl min-h-[120vh] w-full pt-20">
      <slot></slot>
    </div>
  </div>


  <footer name="footer" class="bg-transparent border-t-2 border-neutral-50">
    <div class="w-full mx-auto container md:p-6 p-4 md:flex md:items-center md:justify-between text-neutral-500">
      <span class="text-sm sm:text-center">©Copyright 2023 YangZheng.</span>
      <span class="text-sm sm:text-center">powered by Vue3+Tailwindcss+Vite.</span>
      </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Resume', href: 'resume' },
  { name: 'Contact', href: 'contact' },
]

const mobileMenuOpen = ref(false)
</script>

<style scoped>

#main-content{
  width:100%;
  height:100%;
  /*position: relative;*/
  background: url('../assets/image/bg-top.svg') no-repeat 0vw 0vh,
              url('../assets/image/bg-top.svg') no-repeat 80vw 45vh;
  background-size: 50% 50%;
  z-index:0;
}


._footer-pattern {
  /*patterns https://heropatterns.com/    adjust color opacity in svg file */
  background-image: url("../assets/image/bg-footer-pattern.svg");
}
</style>