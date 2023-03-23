<template>
  <Layout>
    <div id="contact" class="mt-20 container items-center flex flex-col justify-center place-self-center bg-white bg-opacity-0">
      <h1 class="text-gray-800 sm:text-4xl mt-10">Contract Me</h1>
      <h4 class="text-gray-500 text-xl mt-2">welcome to talk to me about technology or employment</h4>
      <img :src="contactIllustration" class="max-w-xl lg:max-w-2xl mt-20 px-10 rounded-sm">
      <ul class="mt-20 w-3/4 flex flex-row justify-between">
        <!--social media-->
        <li v-for="(s,i) in socials" class="" :key="s.name" :data-content="s.note"><!--H5 data- bind value to css pseudo class-->
          <a :href="s.href" class="block" target="_blank">
            <button type="button" class="w-32 px-2 py-2 text-sm text-left text-gray-900 font-medium bg-transparent border-2 rounded-md border-gray-900
  hover:bg-gray-100">
              <img :src="s.iconSrc" class="w-5 h-5 mr-2 inline-block float-left">
              <span class="text-left">{{ s.name }}</span>
              <div class="hidden hover:block">{{s.title}}</div>
            </button>
          </a>
        </li>
      </ul>
    </div>
  </Layout>

</template>

<script setup>
import Layout from "../components/Layout.vue";
import contactIllustration from '../assets/image/contact_illustration.svg';
// icons https://feathericons.dev/?iconset=brands    hereicons has no social media icons.
import emailIcon from '../assets/image/email.svg';
import LinkedinIcon from '../assets/image/linkedin.svg';
import twitterIcon from '../assets/image/twitter.svg';
import wechatIcon from '../assets/image/weichat.svg';


const socials = [
  {
    'name': 'Email',
    'href': 'mailto:canaanyangzheng@gmail.com',
    'iconSrc': emailIcon,
    'note': 'canaanyangzheng@gmail.com'
  },
  {
    'name': 'Link-In',
    'href': 'https://linkedin.com/in/zheng-yang-1a7627267',
    'iconSrc': LinkedinIcon,
    'note': null
  },
  {
    'name': 'Twitter',
    'href': 'https://twitter.com/canaan_tw',
    'iconSrc': twitterIcon,
    'note': 'ID: canaan_tw'
  },
  {
    'name': 'WeChat',
    'href': null,
    'iconSrc': wechatIcon,
    'note': 'ID: yangzheng_python3'
  }
]
</script>

<style scoped>
li:hover:after {
  content: attr(data-content);
}
</style>