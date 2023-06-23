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

      <!-- todo: download resume PDF -->
      <!-- The html2pdf/html2canvas jspdf/ libraries conflict with tailwindCSS.
          Manually maintained: browser mouse right click and print, place .pdf file in project/pulic/_resume-->
      <div class="mt-4 mb-8">
          <button class="border-2 border-neutral-900 text-neutral-900 rounded-md px-4 py-1 text-xl block mx-auto
                    hover:border-neutral-500 hover:text-neutral-500 hover:bg-neutral-100 ">
            <a href="/_resume/YangZheng's Portfolio.pdf" download="ZhengYang_Python_Resume.pdf" class="" target="_blank" >
              Download CV
            </a>
          </button>
      </div>

      <!--A4 210mm 297mm fixed, scale 150% on full-screen, give father container enough height to prevent overflow footer.-->
      <!--for interactive effects, abandon the plan of converting Word documents to HTML first. for neat and fixed, choice grid layout.-->
      <!--grid-rows-cv-layout tailwind.config.cjs -->
      <article id="A4" class="mx-auto w-[210mm] h-[297mm] xl:scale-150 origin-top bg-white shadow-md px-14 py-6
                      text-neutral-700 text-xs font-light leading-4 text-left subpixel-antialiased
                      grid grid-flow-col grid-rows-24 grid-cols-3 gap-2 gap-x-6">

        <section name="header" class="row-span-2 col-span-full">
          <h1 class="text-2xl font-medium text-neutral-700">Zheng Yang</h1>
          <h2 class="">Python Web Engineer/Full-Stack Developer/Programming Teacher</h2>
          <p class="">
            <EnvelopeIcon class="w-4 inline-block"/>zyzy.py@gmail.com&nbsp;
            <LinkIcon class="w-4 inline-block"/>www..com&nbsp;
            <MapPinIcon class="w-4 inline-block"/>ZhengZhou,China&nbsp;
            <DevicePhoneMobileIcon class="w-4 inline-block"/>+1- (00:00~13:00 UTC)&nbsp;
          </p>
        </section>

        <section name="summery" class="row-span-2 col-span-2">
          <div>
            <h2 class="text-sm font-semibold text-neutral-700">Summery</h2>
            <p class="">
              Major in Python Web Backend development. Full-stack developer, from software demand analysis, to prototype/UI, frontend, backend, and final deployment.
              Teaching at programing education company and universities.
            </p>
          </div>
        </section>

        <section name="experience" class="row-span-20 col-span-2 group">
          <h2 class="">Experience</h2>
            <ol name="Teaching" class="">
              <li class="">
                <div class=""></div>
                <time class="">2022</time>
                <h3 class="">Beijing XueJiaAo Education</h3><span class="">Programming Teacher</span>
                <h4 class="">Company Introduction:</h4>
                <p class="">
                  The unique authorization of Oracle Education in China, operate IT training and school-enterprise cooperation teaching.
                </p>
                <h4>Tech Stack:</h4>
                <p class="">
                  Python, Django, Frontend. Computer foundation courses etc.
                </p>
                <h4>My responsibility:</h4>
                <p class="">
                  •"Python from Zero Foundation to Employment in 20 Weeks" training course.<br/>
                  •"Frontend from Zero Foundation to Employment in 20 Weeks" training course(first 70% syllabus).<br/>
                  •"Python Django Video Project" training for new teachers in universities.<br/>
                  •"Python Crawls and Visualization" practical training in Henan University,<br/>
                  Zhengzhou College of Aeronautics and Shenyang University of Technology.<br/>
                  •"Python Foundation Coding" required courses, "Software Testing", "Server Virtualization" elective courses in
                  Zhengzhou Tourism Vocational College.<br/>
                  •"Raspberrypi Air Quality Detector" propaganda course in Tiktok.<br/>
                  •"H5 Page Production Competition" in Shanxi Agricultural College.<br/>
                  Sum up: Teaching plan development, Teaching(mainly python on campus or online), Students Q&A,
                  Publicity classes, Students assessment.
                </p>
              </li>
            </ol>

            <ol name="LongQi" class="">
                <li class="">
                    <div class=""></div>
                    <time class="">2017</time>
                    <h3 class="">LongQi Wig</h3><span class="">ERP Developer</span>
                    <h4 class="">Company Introduction:</h4>
                    <p class="">
                        Xuchang has the advantage of the lowest price of wig in the world. Through foreign trade,
                        the company has grown rapidly. Opened more than 20 stores including self-operated malls,
                        eBay stores, Amazon stores, and AliExpress stores, and placed advertisements on Google and YouTube.
                        No matter where you buy wigs online, it's the same boss behind.
                    </p>
                    <h4>Tech Stack:</h4>
                    <p class="">
                      Odoo, Postgresql, python scenario, E-commerce platform API, Thermal printer
                    </p>
                    <h4>My responsibility:</h4>
                    <p class="">
                        Due to the large number of stores and the rapid growth of orders, it was difficult for the sales staff to handle.<br/>
                        I participate in development of Odoo OA to unify the business process.
                        Request the API of each e-commerce platform to pull the order information and extract the public structure and store it in the database,
                        then sales team process orders, and then orders go to the finance department to generate bills, finally go to the logistics department to generate the waybill.<br/>
                    </p>
                </li>
            </ol>

            <ol name="ChuangHeng-TBKT" class="">
                <li class="">
                    <div class=""></div>
                    <time class="">2015</time>
                    <h3 class="">Synchronized Classroom</h3><span class="">Python Backend Developer</span>
                    <h4 class="">Company Introduction:</h4>
                    <p class="">
                      A primary education app, including subjects such as Chinese, mathematics, and English.
                      Benefits from collaborating with China Mobile and schools in Henan, during its heyday,
                      there were 200k active users who were online for more than 2hr a day.
                    </p>
                    <h4>Tech Stack:</h4>
                    <p class="">
                        Django, MySQL, Vue, Docker. Iterative incremental development.
                    </p>
                    <h4>My responsibility:</h4>
                    <p class="">
                      Mainly responsible for the functional development of the primary school English module,
                      Collaborate with PM,editors,front-end developers and testers colleagues.<br/>
                      I developed APIs about English teaching material management, test paper, school competition activities, teacher end management etc.<br/>
                    </p>
                </li>
            </ol>

            <ol name="UI" class="hidden group-hover:block">
                <li class="">
                    <div class=""></div>
                    <time class="">2014</time>
                    <h3 class="">UI related</h3><span class="">UI Designer</span>
                    <h4 class="">Company Introduction:</h4>
                    <p class="">
                      (I hidde this work to avoid that you may be confused that a backend coder did UI work.)<br/>
                      Alcohol Delivery app and some part-time works.
                    </p>
                    <h4>Tech Stack:</h4>
                    <p class="">
                      Photoshop
                    </p>
                    <h4>My responsibility:</h4>
                    <p class="">
                      In 2014, the Chinese internet was in a rapid development trend.
                      In addition to paying attention to the interface for its functions, the market demands a large number of UI talents.<br/>
                      Due to the difficulty of developing SAP+Weaver in my previous job, I temporarily gave up programming and self-taught UI and UX.
                      At that time, there is not even find one or two UI tutorial books. I learnt succulently, and ultimately found a job.<br/>
                      I restructured the company's Alcohol Delivery app interface, and adapted various interfaces in conjunction with the Android and IOS colleague.
                      One years later, the market began to saturate and there were few high-end UI positions in my city.
                      I felt that there would be a bottleneck if I didn't have a major in art, so I gave up on continuing UI work.<br/>
                      But the aesthetic ability remains.
                    </p>
                </li>
            </ol>
            <!--hidde some unimportant experiences cos limited space-->
            <!--https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-parent-state-->
            <ol name="Dennis" class="hidden group-hover:block">
              <li class="">
                  <div class=""></div>
                  <time class="">2013</time>
                  <h3 class="">Zhengzhou Dennis Department Store Co.Ltd</h3><span class="ml-4">ERP Developer</span>
                  <h4 class="">Company Introduction:</h4>
                  <p class="">
                    (I hide this work because space is limited in one page resume and I don't like the develop language this work used.)
                    A Taiwan-funded enterprise, With an annual turnover of 20 billion in 2018, ranks 1th in Henan province and ranks 30th in the nation in retail industry.
                  </p>
                  <h4>Tech Stack:</h4>
                  <p class="">
                    SAP, Weaver OA. Secondary development. Abap, Java, Js. Walter fall development.
                  </p>
                  <h4>My responsibility:</h4>
                  <p class="">
                    Conduct demand interviews with the finance department and maintenance department key users, preliminary sorting of demand.<br/>
                    Received a little Abap training from the SAP team of Party B and training from the Weaver team.<br/>
                    I developed functions such as financial reimbursement forms and repair work orders.<br/>
                  </p>
              </li>
            </ol>
        </section>

        <section name="avatar" class="row-span-2 col-span-1 overflow-hidden">
            <div class="relative rounded-full w-20 h-20 overflow-hidden mx-auto">
              <img :src="AvatarSrc" class="absolute transform scale-150 top-7 left-1" alt="avatar">
            </div>
        </section>

        <section name="skill" class="row-span-10 col-span-1">
          <h2>Skill</h2>
          <ul>
            <li>
              <span class="_a">proficient</span><span class="_b">experienced</span><span class="_c">understand</span><span class="_c _z">lack energy or dislike</span>
            </li>
            <li>
              <h4 class="mt-0">Production</h4>
              <span class="_a">Demand Analysis</span><span class="_z">UI design</span><span class="_a">Doc</span><span class="_c">Project Management</span>
            </li>
            <li>
              <h4 class="">Frontend</h4>
              <span class="_a">HTML/CSS/JS/JS es5+</span><span class="_z">Bootstrap</span><span>TailwindCSS</span><span class="_c">NodeJS</span><span class="_b">VUE</span><span class="_c">React</span>
              <span class="_b">Vite Webpack</span>
            </li>
            <li>
              <h4 class="">Backend</h4>
              <span class="_a">Django</span><span class="_a">Flask</span><span class="_b">FastAPI</span><span class="_b">Odoo</span><span class="_c _z">tornado</span>
              <span class="_b _z">Scrapy</span><span class="_b _z">Selenium</span><br/>
              <span class="_a">Postgresql</span><span class="_a">MySQL</span><span class="_b _z">Oracle</span><span class="_a">SQL</span><span class="_b">MongoDB</span><span class="_c">Redis</span><br/>
            </li>
            <li>
                <h4 class="">Deployment</h4>
                <span class="_b">Linux/Ubuntu</span><span class="_b">Docker</span><span class="_b">CI CD</span><span class="_b">AWS/Alibaba Cloud</span>
            </li>
            <li>
              <h4 class="">Coordination</h4>
              <span class="_a">Git</span><span class="_b">Jira/Github Actions</span>
            </li>
            <li>
              <h4 class="">Others</h4>
              <span class="_a">RaspberryPi/sensors</span><span class="_c">Rack Server</span><span class="_b _z">Crawler</span>
              <span class="_c _z">Scientific Computing</span><span class="_c _z">AI</span><span class="_c _z">Automated Maintenance</span>
            </li>

          </ul>

        </section>

        <section name="education" class="row-span-2 col-span-1">
          <h2>Education</h2>
          <h3>ZhengZhou University</h3><time class="float-right">2009~2013</time><br/>
          <span>Computer Science</span><span class="float-right">Bachelor</span>
        </section>

        <section name="certification" class="row-span-3 col-span-1">
          <h2>Certification</h2>
          <ul>
            <li class="mb-1">
              <h3>PCPP1</h3><span class="float-right">Python Institute</span><br/>
              <p class="">Certified Professional in Python Programming 1</p>
            </li>
            <li class="mb-1">
              <h3>ACE</h3><span class="float-right">Alibaba</span><br/>
              <p class="">Alibaba Cloud Expert Cloud Computing</p>
            </li>
          </ul>
        </section>

        <section name="language" class="row-span-2 col-span-1">
          <h2>Language</h2>
          <ul>
            <li class="mb-1">
                <h3>English</h3><br/>
                <span class="">reading/writing</span><span class="float-right">influence</span><br/>
                <span class="">listening/speaking</span><span class="float-right">limited</span>
            </li>
          </ul>
        </section>

        <section name="habit" class="row-span-1 col-span-1 group">
          <div class="hidden group-hover:block">
            <h2>Habit</h2>
            <span>Social News</span><span>Game</span><span>Japanese Animation</span><span></span>
          </div>
        </section>

        <section name="political standpoint" class="row-span-2 col-span-1 group">
            <div class="hidden group-hover:block">
                <h2>Political Standpoint</h2>
                <p>Stands with democracy, Against dictatorship.</p>
            </div>
        </section>

      </article>
<!--        todo: popover    todo: Q&A-->


    </div>
  </Layout>
</template>

<script setup>
import {ref} from "vue";

import Layout from './Layout.vue'
import Popover from '../components/Popover.vue'
import {AtSymbolIcon, EnvelopeIcon, LinkIcon, MapPinIcon, DevicePhoneMobileIcon, } from "@heroicons/vue/24/outline";
import AvatarSrc from '../assets/image/resume_avatar.jpg'

</script>

<script>
// vue3-html2pdf high-level lib will destroy generally style.
// html2canvas jspdf low-level lib incompatible with tailwindcss h1(probably cause by line height) and through line.


// import html2canvas from 'html2canvas'
// import JsPDF from 'jspdf'
//
// export default {
//   methods: {
//     printResume(){
//       html2canvas(document.getElementById('A4')).then(canvas => {
//         let pageData = canvas.toDataURL('image/jpeg', 1.0)
//         // default portrait oriented, a4[210mm,297mm]，keep proportion zoom
//         let pdf = new JsPDF('', 'mm', 'a4')
//         pdf.addImage(pageData, 'JPEG', 0, 0, 210, 210 / canvas.width * canvas.height)
//         pdf.save('resume.pdf')
//       })
//     }
//   },
// }


// raw window.print() has margin, excessive header, no args, need coop with css @media print {display}.
// export default {
//   methods: {
//     printResume() {
//       window.print()
//     }
//   }
// }
</script>


<style scoped lang="css">
/*CSS nesting support https://tailwindcss.com/docs/using-with-preprocessors#nesting*/
article{
  /*background: url('../assets/image/resume_a4_bg.svg') no-repeat;*/
  /*filter: opacity(0.5);*/
  & section{
    @apply bg-blue-50;
    & h2{
      @apply  text-sm font-medium leading-8 text-slate-500;
    }
    & h3{
      @apply  inline-block text-xs font-medium text-neutral-700;
    }
    & h4{
      @apply font-medium text-neutral-500 pl-1 border-l-2 border-neutral-300;
    }
    & h4:before{
      /*content: '•';*/
      @apply pl-0;
    }

  }
  & section[name="experience"]{
    & h3{
      @apply  ml-4;
    }
    & h3+span{
        @apply  ml-4;
    }
    & p{
        @apply pl-2;
    }
    & ol{
      @apply  relative border-l-2 border-neutral-500;
      & li{
        /*draw time axis*/
        @apply  mb-4 ml-2;
        & time{
          @apply  mb-1 text-neutral-500;
        }
        & >div:first-child{
          @apply  absolute -left-[0.45rem] w-3 h-3 rounded-full bg-neutral-500 mt-1.5 border-2 border-white;
        }
        & >p{
          @apply  mb-0.5;
        }
      }
    }
  }
  & section[name="skill"]{
    @apply font-medium;
    & li{
      @apply mb-1.5;
    }
    & span{
      @apply  inline-block;
    }
    /* Skill Proficiency */
    & span._a{
      @apply  text-neutral-900;
    }
    & span._b{
      @apply  text-neutral-500;
    }
    & span._c{
      @apply  text-neutral-300;
    }
    & span._z{
      @apply  line-through;
    }
    & span:after{
      content: '•';
      @apply  text-neutral-200;
    }
  }

  & section[name="habit"]{
    & span:after{
      content: '•';
      @apply  text-neutral-200;
    }
  }
}
</style>

<style>
@media print {
    body * {
        visibility: hidden;
    }
    #A4, #A4 * {
        visibility: visible;
    }
    #A4 {
        position: absolute;
        left: 0;
        top: 0;
    }
}
</style>