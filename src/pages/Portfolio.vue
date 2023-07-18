<template>
  <Layout>
    <div id="portfolio" class="w-3/4 mx-auto flex flex-col text-center items-center bg-transparent">
      <div name="title">
        <h1 class="text-neutral-800 sm:text-4xl mt-10">
            Beside Works
        </h1>
        <p class="text-neutral-500 text-md mt-2 ">
        Some works are private work with novelty needs; Some for architecture research; Some come from my full-time work(public part).<br/>
        Though the complexity of these are much easier than full-time work, but also show my abilities. See my formal work experiences on my resume.<br/>
        </p>
      </div>

      <section name="catalog-tabs" class="w-1/2 self-center">
        <ul class="mt-20 flex flex-wrap items-center justify-between">
          <li v-for="(item,i) in catalogs"
              :key="item.name"
              class="m-3 text-neutral-700 hover:text-neutral-500 "
              :class="{'border-b-2 border-neutral-500': i===currentCatalogIndex}"
              @click="handleCatalogClick(i, item, $event)"
          >
            <a :href=null class="flex">
                <component :is="item.iconComponent" class="inline-block w-4"/>
              <span class="text-sm inline-block">{{ item.name }}</span>
            </a>
          </li>
        </ul>
      </section>

      <section name="cards" class="w-full mt-10 mb-32 flex flex-row flex-wrap justify-center gap-10">
        <!--the effect of justify-around not good on different width screen-->
        <!--component class values will append to component root element class values, no need pass props-->
        <WorkCard v-for="(work,i) in filteredWorks" :key="i" class=""
              :work="work">
        </WorkCard>
      </section>
    </div>
  </Layout>
</template>


<script setup>
import {computed, ref} from "vue";// similar to react useState?
import Layout from "./Layout.vue";
import WorkCard from "../components/WorkCard.vue";
import portfolioIllustration from '../assets/image/portfolio_illustration.svg'
import {AcademicCapIcon, CodeBracketIcon, Squares2X2Icon, PhotoIcon, CircleStackIcon, CpuChipIcon,
  ComputerDesktopIcon, ArrowTopRightOnSquareIcon, CubeTransparentIcon, DocumentIcon,} from '@heroicons/vue/24/outline'

// config vite.config to allow path access which outside src dir
import WORKS_INFO from "../../WORKS_INFO.js";

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


// methods
const handleCatalogClick = function(i, catalog, event) {
  // notice 'this' in anonymous function ()=> is not refer to component object,use ordinary function and ref()
  currentCatalogIndex.value = i
  // console.log(i, catalog.name)
}

// computed
const filteredWorks = computed({
  // click catalog, and filter WORKS_INFO
  // calling after handleCatalogClick() currentCatalogIndex changed
  get: ()=>{
    let filteredWorks = []
    let currentCatalogName = catalogs[currentCatalogIndex.value]['name']
    if (currentCatalogName==='All'){
      filteredWorks = WORKS_INFO
    } else {
      filteredWorks = WORKS_INFO.filter((work)=>{
        if (work.catalog.indexOf(currentCatalogName)!==-1){
          return work
        }
      })
    }
    // sort by year reverse
    filteredWorks.sort(function (a,b){
      return b.year - a.year
    })
    return filteredWorks
  }
})
</script>

<style scoped>

</style>