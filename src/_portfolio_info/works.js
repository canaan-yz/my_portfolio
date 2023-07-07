// catalogs: [All,Teaching,Backend,Frontend,Hardware,UI]

let works = [
  {
    name: 'portfolio_old',
    title: 'portfolio website(previous version)',
    catalog: ['Frontend'],
    cover_src: require('./portfolio_old/cover.png'),  //vite-plugin-require
    year: 2019,
    tech_stack: ['Vue2', 'Vue-CLI3', 'Bulma', 'Buefy', 'Webpack4'],
    git_link: 'https://zyzypy.github.io/demo-react-fastapi-mongodb/',    // the order of links is fixed
    doc_link: '/works_info/portfolio_old',
    demo_link: null
  },
  {
    name: 'portfolio_old2',
    title: 'portfolio website2(previous version)',
    catalog: ['Teaching', 'Frontend'],
    cover_src: require('./portfolio_old/cover.png'),  //vite-plugin-require
    year: 2020,
    tech_stack: ['Vue2', 'Vue-CLI3', 'Bulma', 'Buefy', 'Webpack4'],
    git_link: 'https://github.com/',    // the order of links is fixed
    doc_link: null,
    demo_link: null
  },
  {
    name: 'portfolio_old3',
    title: 'portfolio website3(previous version)',
    catalog: ['Backend'],
    cover_src: require('./portfolio_old/cover.png'),  //vite-plugin-require
    year: 2021,
    tech_stack: ['Vue2', 'Vue-CLI3', 'Bulma', 'Buefy', 'Webpack4'],
    git_link: 'https://github.com/',    // the order of links is fixed
    doc_link: '/works_info/portfolio_old',
    demo_link: 'https://github.com/'
  },
]


export default works;