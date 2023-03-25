<template>
  <Layout>
    <div id="portfolio" class="mt-20 container flex flex-col text-center items-center bg-transparent">
      <div name="title">
        <h1 class="text-gray-800 sm:text-4xl mt-10">Beside Works</h1>
        <h4 class="text-gray-500 text-md mt-2 ">
        The complexity of these works are much easier than formal full-time work, but also show the ability of mine.<br/>
        Some are achitecture research; Some are part-time private work with novelty needs; Some come from my full-time work.<br/>
        </h4>
      </div>

      <div name="portfolio-illustration" class="absolute opacity-30 -z-10 -left-20 top-40 w-96 ">
        <img :src="portfolioIllustration" alt="portfolioIllustration">
      </div>

      <section name="catalog-tabs" class="w-1/2 self-center">
        <ul class="mt-20 flex flex-wrap items-center justify-between">
          <li v-for="(item,i) in catalogs"
              :key="item.name"
              class="mr-6 text-gray-700 hover:text-gray-500 "
              :class="{'border-b-2 border-gray-500': i===currentCatalogIndex}"
              @click="handleCatalogClick(i, item, $event)"
          >
            <a :href=null class="flex">
                <component :is="item.iconComponent" class="inline-block w-4"/>
              <span class="text-sm inline-block">{{ item.name }}</span>
            </a>
          </li>
        </ul>
      </section>

      <section name="cards" class="w-3/4 mt-10 border-2 flex flex-row flex-wrap justify-center gap-8">
        <!-- component class values will append to component root element class values, no need pass props-->
        <Card v-for="(card,i) in cards" class=""></Card>
      </section>
    </div>
  </Layout>
</template>


<script setup>
import {ref} from "vue";// similar to react useState?
import Layout from "../components/Layout.vue";
import Card from "../components/Card.vue";
import portfolioIllustration from '../assets/image/portfolio_illustration.svg'
import {AcademicCapIcon, CodeBracketIcon, Squares2X2Icon, PhotoIcon, CircleStackIcon, CpuChipIcon,
  ComputerDesktopIcon, ArrowTopRightOnSquareIcon, CubeTransparentIcon, DocumentIcon,} from '@heroicons/vue/24/outline'


const catalogs = [
  {
    'name': 'All',
    'iconComponent': Squares2X2Icon
  },
  {
    'name': 'Teaching',
    'iconComponent': AcademicCapIcon
  },
  {
    'name': 'Backend',
    'iconComponent': CircleStackIcon
  },
  {
    'name': 'Frontend',
    'iconComponent': CodeBracketIcon
  },
  {
    'name': 'Hardware',
    'iconComponent': CpuChipIcon
  },
  {
    'name': 'UI',
    'iconComponent': PhotoIcon
  },

]
let currentCatalogIndex = ref(0)
const cards = [1,2,3]

const handleCatalogClick = function(i, catalog, event) {
  // notice 'this' in anonymous function ()=> is not refer to component object,use ordinary function and ref()
  // console.log(i, catalog, event)
  currentCatalogIndex.value = i
}

</script>

<style scoped>

</style>