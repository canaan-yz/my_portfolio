
## technical selection and thoughts
about readme.md link
In previous version, I maintain project info in src dir in portfolio project, with vue plugin markdown loader.
Readme.md should follow by code repo. Image link should use relative path avoid GitHub raw content domain or GitHub
account name may be modified someday. GitHub forbidden cors iframe, and api is also inconvenient. Then my Thought is
fetch(https://rawcontent.github.com/account/repo/readme.md), then regex replace image url to absolutely path, but my js
is poor, then use lib named showdown to covert md string to html. This portfolio project is a static demonstrate website,
should not be too much functional like md parsing. Finally, I use gh-pages to simply hold a readme webpage.

about video link
In previous version, save videos on Object Saving Service, traffic price of OSS is a little expensive, $0.15/Gb, and
develop a page to play video via html5 label, costs development vitality. Then I spot AlibabaCloud NAS file storage service,
it's really like home nas, mount in server but limited by server bandwidth, request in web client but there is rarely related lib,
price low but also has development costs. Finally, I decide to upload to server simply, though data and code are not separated,
though upload speed slow to 300kb through over the half earth. But good news, I found that Caddy file server browse can
list files and play video online, satisfies my demand. Now I more and more like use ready-made production.

check mobile device popup notice
modify contact illustration people skin to varies of
delete portfolio.vue 8th line

## command
### switch software source
(May affect GitHub Action npm install, better not switch npm software source, use global VPN)
(for China) npm install -g nrm & nrm use taobao
npm create vite@latest name-of-your-project -- --template vue
npm run & npm run dev

## requirements
Node 18.13.0
npm 9.6.1
vue 3.2.45
vue-router 4.1.6


vite 4.1.0
@vitejs/plugin-vue 4.0.0        
tailwindcss 3.2.7    
(abort)tailwind-vite-plugin 0.6.0   had some bugs

## doc
https://vitejs.dev/guide/
https://tailwindcss.com/docs/guides/vite#vue
## reference
