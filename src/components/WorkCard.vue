<template>
  <div name="work-card" class="flex justify-center">
    <div
        class="block max-w-sm rounded-lg bg-white shadow-lg">
      <a :href="work.demo_link" >
        <img :src="work.cover_src" class="cover rounded-t-lg" alt="cover"/>
      </a>
      <div class="p-6">
        <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          {{ work.title }}
        </h5>
        <p name="tech-stack" class="h-8 mb-4 text-base text-neutral-600 overflow-scroll">
          <span v-for="(tech, i) in work.tech_stack" class="bg-neutral-100 mr-1 md-1 px-1 py-0.5 text-sm text-neutral-500 rounded-sm">{{tech}}</span>
        </p>
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
  </div>
</template>

<script setup>
// import {toRefs} from "vue";
import githubOutlineIconSrc from '/src/assets/image/social_media/github-outline.svg';
import {DocumentIcon, ComputerDesktopIcon as LiveIcon} from '@heroicons/vue/24/outline'
import {computed, VueElement} from "vue";

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


// import app from 'main.js';app.component('',{})
// the object below will be compiled as a local component
let GithubOutlineIcon = {
  name: 'GithubOutlineIcon',
  template: `<svg viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none">
    <path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"
    d="M120.755 170c.03-4.669.059-20.874.059-27.29 0-9.272-3.167-15.339-6.719-18.41 22.051-2.464 45.201-10.863 45.201-49.067 0-10.855-3.824-19.735-10.175-26.683 1.017-2.516 4.413-12.63-.987-26.32 0 0-8.296-2.672-27.202 10.204-7.912-2.213-16.371-3.308-24.784-3.352-8.414.044-16.872 1.14-24.785 3.352C52.457 19.558 44.162 22.23 44.162 22.23c-5.4 13.69-2.004 23.804-.987 26.32C36.824 55.498 33 64.378 33 75.233c0 38.204 23.149 46.603 45.2 49.067-3.551 3.071-6.719 9.138-6.719 18.41 0 6.416.03 22.621.059 27.29M27 130c9.939.703 15.67 9.735 15.67 9.735 8.834 15.199 23.178 10.803 28.815 8.265"/>
    </svg>`
}
const links = [
  {'icon':GithubOutlineIcon,'link': work.git_link},
  {'icon':DocumentIcon,'link': work.doc_link},
  {'icon':LiveIcon,'link': work.demo_link},
]
</script>

<style scoped>

</style>