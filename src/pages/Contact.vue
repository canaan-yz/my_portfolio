<template>
  <Layout>
    <div id="contact" class="mt-20 container items-center flex flex-col justify-center place-self-center bg-transparent">
      <h1 class="text-gray-800 sm:text-4xl mt-10">Contract Me</h1>
      <h4 class="text-gray-500 text-xl mt-2">welcome to talk to me about technology or employment</h4>
      <img :src="contactIllustration" class="max-w-xl lg:max-w-2xl mt-20 px-10 rounded-sm">
      <ul class="mt-20 w-1/2 flex flex-row justify-between flex-wrap">
        <!--social media-->
        <li v-for="(s,i) in socials" class="mb-4" :key="s.name" :data-content="s.note"><!--H5 data- bind value to css pseudo class-->
          <a :href="s.href" class="block" target="_blank">
            <button type="button" class="md:w-28 w-48 px-2 py-2 text-sm text-left text-gray-900 font-medium bg-transparent border-2 rounded-md border-gray-900
  hover:bg-gray-100">
              <img :src="s.iconSrc" class="w-5 h-5 mr-2 inline-block float-left">
              <span class="text-left">{{ s.name }}</span>
              <span class="">{{s.title}}</span>
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
import emailIcon from '../assets/image/social_media/email.svg';
import linkedinIcon from '../assets/image/social_media/linkedin.svg';
import twitterIcon from '../assets/image/social_media/twitter.svg';
import githubIcon from '../assets/image/social_media/github.svg';
import wechatIcon from '../assets/image/social_media/weichat.svg';
import noimageIcon from '../assets/image/social_media/noimage.svg';


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
    'iconSrc': linkedinIcon,
    'note': null
  },
  {
    'name': 'Twitter',
    'href': 'https://twitter.com/canaan_tw',
    'iconSrc': twitterIcon,
    'note': 'ID: canaan_tw'
  },
  {
    'name': 'Github',
    'href': 'https://github.com/canaan-yz',
    'iconSrc': githubIcon,
    'note': 'ID: canaan-yz'
  },
  {
    'name': 'Gitee',
    'href': null,
    'iconSrc': noimageIcon,
    'note': '(abandon) ID: canaan_ge'
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