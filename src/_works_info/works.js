// catalogs: [All,Teaching,Backend,Frontend,Hardware,UI]

let works = [
  {
    name: 'portfolio_old',
    title: 'portfolio website(previous version)',
    catalog: ['Frontend'],
    cover_src: require('./portfolio_old/cover.png'),  //vite-plugin-require
    year: 2020,
    tech_stack: ['Vue2', 'Vue-CLI3', 'Bulma', 'Buefy', 'Webpack4'],
    git_link: 'https://github.com/',    // the order of links is fixed
    doc_link: '/works_info/portfolio_old',
    demo_link: null
  },
  {
    name: 'portfolio_old',
    title: 'portfolio website(previous version)',
    catalog: ['Frontend'],
    cover_src: require('./portfolio_old/cover.png'),  //vite-plugin-require
    year: 2020,
    tech_stack: ['Vue2', 'Vue-CLI3', 'Bulma', 'Buefy', 'Webpack4'],
    git_link: 'https://github.com/',    // the order of links is fixed
    doc_link: null,
    demo_link: null
  },
  {
    name: 'portfolio_old',
    title: 'portfolio website(previous version)',
    catalog: ['Frontend'],
    cover_src: require('./portfolio_old/cover.png'),  //vite-plugin-require
    year: 2020,
    tech_stack: ['Vue2', 'Vue-CLI3', 'Bulma', 'Buefy', 'Webpack4'],
    git_link: 'https://github.com/',    // the order of links is fixed
    doc_link: '/works_info/portfolio_old',
    demo_link: 'https://github.com/'
  },
]

// relative path to Portfolio.vue
// const works_info_relative_path = '../_works_info'
// works.map((w, i)=>{
//
//   w.cover_src = `../_works_info/${w.name}/cover.png`
//
// });
// console.log(works)

export default works;