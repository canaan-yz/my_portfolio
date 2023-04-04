<template>
  <Layout>
    <div id="resume" class="container mx-auto bg-transparent h-[500mm]">
      <div name="title" class="text-center">
        <h1 class="text-neutral-800 sm:text-4xl mt-10">
            Resume
        </h1>
        <p class="text-neutral-500 text-md mt-2 ">
            <br/>
        </p>
      </div>

      <!--A4 210mm 297mm fixed, scale 150% on full-screen, give father container enough height to prevent overflow footer.-->
      <!--for interactive effects, abandon the plan of converting Word documents to HTML first. for neat and fixed, choice grid layout.-->
      <!--grid-rows-cv-layout tailwind.config.cjs -->
      <article id="A4" class="mx-auto w-[210mm] h-[297mm] xl:scale-150 origin-top bg-white shadow-md px-14 py-6
                      text-neutral-700 text-xs font-light leading-4 text-left subpixel-antialiased
                      grid grid-flow-col grid-rows-cv-layout grid-cols-1 gap-y-0.5">
        <section name="header" class="">
          <h1 class="text-2xl font-semibold text-neutral-900">Zheng Yang</h1>
          <h2 class="">Python web engineer/Full-stack developer/Programming teacher</h2>
          <p class="">
            <AtSymbolIcon class="w-4 inline-block"/>canaanyangzheng@gmail.com&nbsp;
            <LinkIcon class="w-4 inline-block"/>www.1owo.com&nbsp;
            <MapPinIcon class="w-4 inline-block"/>ZhengZhou,China&nbsp;
            <DevicePhoneMobileIcon class="w-4 inline-block"/>+86-13733177926 (00:00~13:00 UTC)&nbsp;
          </p>
        </section>

        <section name="middle" class="bg-amber-200 col-span-2
                        grid grid-flow-col grid-rows-24 grid-cols-cv-layout gap-y-2">
          <div name="summery" class="bg-blue-200 row-span-3">
            <div>
                <h2 class="text-sm font-semibold text-neutral-700">SUMMERY</h2>
                <p class="">
                  Major in Python Web Backend development. Full-stack developer, from software requirements analysis, to prototype/UI, frontend, backend, and final deployment.
                  Teaching at programing education company and universities.
                </p>
            </div>
          </div>

          <div name="experience" class="bg-blue-50 border-2 row-span-5">
            <h2 class="">EXPERIENCE</h2>
              <ol class="relative border-l-2 border-neutral-500">
                <li class="mb-4 ml-2">
                    <div class="absolute w-3 h-3 rounded-full bg-neutral-500 mt-1.5 -left-[0.4rem] border-2 border-white"></div>
                    <time class="mb-1 text-neutral-500">2022</time>
                    <h3 class="">Application UI code in Tailwind CSS</h3>
                    <p class="mb-4">
                      Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar,
                      and pre-order E-commerce & Marketing pages.
                    </p>
                </li>
              </ol>
          </div>
        </section>




<!--        </div>-->
<!--        <div class="bg-amber-200 " name="tech-stack">-->
<!--            <h2 class="text-xs font-semibold">tech-stack</h2>-->
<!--        </div>-->
<!--        <div class="" name="education&training">education&training</div>-->
<!--        <div class="" name="language">language</div>-->
<!--        <div class="" name="certification">certification</div>-->
<!--        <div class="" name="avatar">avatar</div>-->

        <section name="footer" class="bg-amber-200">
            footer<br/>
            <br/>
            <br/>
        </section>
      </article>

    </div>


  </Layout>



</template>

<script setup>
import Layout from './Layout.vue'
import Popover from '../components/Popover.vue'
import {DevicePhoneMobileIcon, AtSymbolIcon, MapPinIcon, LinkIcon } from "@heroicons/vue/24/outline";

</script>

<style scoped>
/*CSS nesting support https://tailwindcss.com/docs/using-with-preprocessors#nesting*/
article{
  /*background: url("./Screenshot.png");*/
  background-size: contain;
  /*filter: opacity(0.5);*/
  & section{
    & h2{
      @apply  text-sm font-medium leading-8
    }
    & h3{
      @apply  inline-block ml-2 text-xs font-normal text-neutral-900;
    }
  }
}
</style>