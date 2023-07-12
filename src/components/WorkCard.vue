<template>
    <div name="work-card"
        class="flex flex-col justify-between max-w-sm rounded-lg bg-white shadow-lg">
      <a :href="work.demo_link" >
        <img :src="work.cover_src" class="cover block rounded-t-lg" alt="cover"/>
      </a>
      <div class="p-6">
        <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          {{ work.title }}
        </h5>
        <p name="tech-stack" class="h-8 mb-4 text-base text-neutral-600 overflow-scroll">
          <span v-for="(tech, i) in work.tech_stack" class="bg-neutral-100 mr-1 md-1 px-1 py-0.5 text-sm text-neutral-500 rounded-sm">{{tech}}</span>
        </p>
        <!-- there are some design thoughts at draft.md -->
        <p name="external-links" class="flex flex-nowrap justify-around">
            <a v-for="(item, i) in links"
               :key="i"
               :href="item['link']" target="_blank"
               :class="{'hover:shadow hover:bg-neutral-100 duration-75 rounded-xl': item['link']}" class="p-1">
              <component :is="item['icon']" class="w-8" :class="[item['link'] ? 'stroke-neutral-700': 'stroke-neutral-100']"/>
            </a>
        </p>
      </div>
    </div>
</template>

<script setup>
// father component: Portfolio.vue

import GitHubOutlineIcon from '/src/assets/image/social_media/GitHubOutlineIcon.vue';
import {DocumentIcon, ComputerDesktopIcon as LiveIcon} from '@heroicons/vue/24/outline'
// import {computed, VueElement, toRefs} from "vue";


// revive from father component Portfolio.vue
// defineProps, equivalent props. keep same structure with WORKS_INFO.js
const {work} = defineProps({
    work: {
      type: Object,
      default: {
        name: 'some_project',
        title: '',
        catalog: ['Frontend'],
        cover_src: '',
        year: 2023,
        tech_stack: ['some framework'],
        doc_link: '/works_info/some_project',
        git_link: 'https://github.com/',
        demo_link: ''
      },
    },
  }
)
// console.log(work)


const links = [
  {'icon':GitHubOutlineIcon,'link': work.git_link},
  {'icon':DocumentIcon,'link': work.doc_link},
  {'icon':LiveIcon,'link': work.demo_link},
]

</script>

<style scoped>

</style>