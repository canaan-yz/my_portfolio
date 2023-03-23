<!--power by component https://tailwindui.com/components/marketing/sections/heroes-->

<template>
  <header name="header" class="bg-white min-h-screen">
    <nav name="nav" class="fixed inset-x-0 top-0 z-50 backdrop-blur-sm">
      <div class="flex items-center justify-between p-6 md:px-8" aria-label="Global">
        <div class="flex md:flex-1 items-center">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Yang Zheng</span>
            <img class="h-8 w-auto hover:rotate-180 transition-transform duration-1000"
                 src="../assets/image/logo.png" alt="Logo" />
          </a>
          <div class="text-xl text-stone-500 ml-2">Portfolio</div>
        </div>
        <div class="flex md:hidden">
          <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="hidden md:flex md:gap-x-12">
<!--          <a v-for="item in navigation" :key="item.name" :href="item.href" class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{{ item.name }}</a>-->
          <router-link class="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-500 duration-500 " active-class="text-gray-500 border-b-2 border-gray-700"
                       v-for="item in navigation" :key="item.name" :to="item.href" >
            {{ item.name }}
          </router-link>
        </div>

      </div>
      <Dialog as="div" class="md:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
        <div class="fixed inset-0 z-50" />
        <DialogPanel class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div class="flex items-center justify-between">
            <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700 place-self-end" @click="mobileMenuOpen = false">
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <router-link v-for="item in navigation" :key="item.name" :to="item.href"
                             class="block text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-200">
                  {{ item.name }}
                </router-link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </nav>

    <div name="bg" class="relative isolate px-6 h-20 md:px-8"><!--isolate mix-blend-mode only mix in father element edge-->
      <!-- background top half, blur svg -->
      <div name="bg-top-half" class="absolute -z-10 inset-x-0 -top-40 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <svg class="relative left-[calc(50%-11rem)] -z-10 h-[21rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42rem]" viewBox="0 0 1155 678">
          <path fill="url(#svg45de2b6b)" fill-opacity=".3"
                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
          <defs>
            <linearGradient id="svg45de2b6b" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
              <stop stop-color="#9089FC" />
              <stop offset="1" stop-color="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <!--main content slot--><!--set margin-top in slot content coz of fixed navbar-->
      <slot id="main-content"></slot>

      <!--background bottom half-->
      <div name="bg-bottom-half" class="absolute inset-x-0 top-[calc(100%-2rem)] -z-10 transform-gpu overflow-hidden blur-3xl ]">
        <svg class="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678">
          <path fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)" fill-opacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
          <defs>
            <linearGradient id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
              <stop stop-color="#9089FC" />
              <stop offset="1" stop-color="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  </header>

  <footer name="footer" class="_pattern bg-gray-100 bg-opacity-10 m-4 mx-0 mb-0">
    <div class="w-full mx-auto container md:p-6 p-4 md:flex md:items-center md:justify-between text-gray-500">
      <span class="text-sm sm:text-center">© 2023 YangZheng.</span>
      <span class="text-sm sm:text-center">powered by Vue3+Tailwindcss. </span>
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
._pattern {
  /*patterns https://heropatterns.com/    adjust color opacity in svg file */
  background-image: url("../assets/image/pattern-hideout.svg");
}
</style>