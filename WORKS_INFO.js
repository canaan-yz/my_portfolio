// catalogs = [
//       All,
//       Teaching,
//       Backend,
//       Frontend,
//       Hardware,
//       UI
// ]


let WORKS_INFO = [
  // {
  //   name: 'portfolio_old',
  //   title: 'portfolio website(previous version)',
  //   catalog: ['Frontend'],
  //   cover_src: require('./portfolio_old/cover.png') or 'https://',  //vite-plugin-require
  //   year: 2019,
  //   tech_stack: ['Vue2', 'Vue-CLI3', 'Bulma', 'Buefy', 'Webpack4'],
  //   git_link: 'https://zyzypy.github.io/demo-react-fastapi-mongodb/',    // the order of links is fixed
  //   doc_link: '/works_info/portfolio_old',
  //   demo_link: null or ''
  // },
  {
    name: 'python_basic',
    title: 'Python Foundational',
    catalog: ['Teaching'],
    cover_src: 'https://zyzypy.github.io/portfolio_info/python_basic/cover.jpg',
    year: 2020,
    tech_stack: ['Python', 'pygame lib'],
    git_link: null,
    doc_link: 'https://zyzypy.github.io/portfolio_info/python_basic/',
    demo_link: 'https://buckets.zyzypy.com/python_basic/'
  },
  {
    name: 'python_flask',
    title: 'Python Flask',
    catalog: ['Teaching'],
    cover_src: 'https://zyzypy.github.io/portfolio_info/python_flask/cover.jpg',
    year: 2018,
    tech_stack: ['Python', 'Flask'],
    git_link: null,
    doc_link: 'https://zyzypy.github.io/portfolio_info/python_flask/',
    demo_link: null    // todo blog link
  },
  {
    name: 'python_django',
    title: 'Python Django Teaching',
    catalog: ['Teaching'],
    cover_src: 'https://zyzypy.github.io/portfolio_info/python_django/cover.jpg',
    year: 2021,
    tech_stack: ['Python', 'Django', 'PostgresSQL'],
    git_link: null,
    doc_link: 'https://zyzypy.github.io/portfolio_info/python_django/',
    demo_link: 'https://buckets.zyzypy.com/python_django/'
  },
  {
    name: 'python_spider',
    title: 'Python Web Crawler Teaching',
    catalog: ['Teaching'],
    cover_src: 'https://zyzypy.github.io/portfolio_info/python_spider/cover.jpg',
    year: 2021,
    tech_stack: ['Python', 'requests lib', 'xpath', 'pychart lib'],
    git_link: null,
    doc_link: 'https://zyzypy.github.io/portfolio_info/python_spider/',
    demo_link: 'https://buckets.zyzypy.com/python_spider/'
  },
  {
    name: 'python_zhiyou',
    title: 'Python Web Full Stack Teaching',
    catalog: ['Teaching'],
    cover_src: 'https://zyzypy.github.io/portfolio_info/python_zhiyou/cover.jpg',
    year: 2018,
    tech_stack: ['Python', 'Full-Stack'],
    git_link: null,
    doc_link: 'https://zyzypy.github.io/portfolio_info/python_zhiyou/',
    demo_link: null
  },
  {
    name: 'ui_material',
    title: 'UI Material Download Website',
    catalog: ['UI', 'Backend', 'Frontend'],
    cover_src: 'https://zyzypy.github.io/ui_material/README_IMG/cover.jpg',
    year: 2015,
    tech_stack: ['Flask', 'masonry.js', 'Bootstrap'],
    git_link: 'https://github.com/zyzypy/ui_material',
    doc_link: 'https://zyzypy.github.io/ui_material/',
    demo_link: 'https://ui-material.zyzypy.com'
  },
  {
    name: 'ui_works',
    title: 'UI Works',
    catalog: ['UI'],
    cover_src: 'https://zyzypy.github.io/portfolio_info/ui_works/cover.jpg',
    year: 2014,
    tech_stack: ['UI', 'Photoshop'],
    git_link: null,
    doc_link: 'https://zyzypy.github.io/portfolio_info/ui_works/',
    demo_link: null
  },
  {
    name: 'portfolio_old',
    title: 'Portfolio Old',
    catalog: ['Frontend'],
    cover_src: 'https://zyzypy.github.io/portfolio_old/cover.jpg',
    year: 2020,
    tech_stack: ['Vue2 vue-cli', 'Buefy Bulma'],
    git_link: 'https://github.com/zyzypy/portfolio_old',
    doc_link: 'https://zyzypy.github.io/portfolio_old',
    demo_link: null
  },
  {
    name: 'blog_hexo',
    title: 'Blog Old',
    catalog: ['Frontend', 'Teaching'],
    // todo https://zyzypy.github.io/blog_hexo  github pages ci will use hexo _config as ci config
    //  results error https://github.com/zyzypy/blog_hexo/actions/runs/5572800783/jobs/10179245817
    // cover_src: 'https://github.com/zyzypy/blog_hexo/raw/main/cover.jpg',   timeout via China IP
    cover_src: require('./README_IMG/blog_hexo-cover.jpg'),
    year: 2018,
    tech_stack: ['blog'],
    git_link: 'https://github.com/zyzypy/blog_hexo',
    doc_link: null,
    demo_link: 'https://blog-hexo.zyzypy.com/'
  },
  {
    name: 'raspberrypi_air',
    title: 'Air Quality Measuring based on Raspberry Pi',
    catalog: ['Hardware', 'Frontend', 'Backend'],
    cover_src: 'https://zyzypy.github.io/raspberrypi_air/cover.jpg',
    year: 2015,
    tech_stack: ['Raspberry Pi', 'PM2.5 sensor', 'Material UI', 'High-Chart', 'Flask'],
    git_link: 'https://github.com/zyzypy/raspberrypi_air',
    doc_link: 'https://zyzypy.github.io/raspberrypi_air/',
    demo_link: null
  },
  {
    name: 'raspberrypi_bullettime',
    title: 'Bullet Time based on Raspberry Pi',
    catalog: ['Hardware', 'Backend'],
    cover_src: 'https://zyzypy.github.io/portfolio_info/raspberrypi_bullettime/cover.gif',
    year: 2016,
    tech_stack: ['Raspberry Pi', 'photography'],
    git_link: null,
    doc_link: 'https://zyzypy.github.io/portfolio_info/raspberrypi_bullettime/',
    demo_link: null
  },
  {
    name: 'demo-react-fastapi-mongodb',
    title: 'Car Info Website Demo',
    catalog: ['Frontend', 'Backend'],
    cover_src: 'https://zyzypy.github.io/demo-react-fastapi-mongodb/cover.jpg',
    year: 2022,
    tech_stack: ['React', 'TailwindCSS', 'FastAPI', 'MongoDB', 'Docker compose'],
    git_link: 'https://github.com/zyzypy/demo-react-fastapi-mongodb',
    doc_link: 'https://zyzypy.github.io/demo-react-fastapi-mongodb/',
    demo_link: 'https://demo-farm-react.zyzypy.com/'
  },
  {
    name: 'portfolio',
    title: 'The Site You Are Looking',
    catalog: ['Frontend'],
    cover_src: require('./cover.jpg'),
    year: 2022,
    tech_stack: ['Vue3', 'TailwindCSS', 'Vite', 'GitHub Action'],
    git_link: 'https://github.com/zyzypy/portfolio',
    doc_link: 'https://github.com/zyzypy/portfolio/blob/main/README.md',
    demo_link: null
  },

  
]


export default WORKS_INFO;