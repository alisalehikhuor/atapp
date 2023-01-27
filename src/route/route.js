
  const routes = [

        {
            path: '/',
            name: 'list',
            component: () => import( '../components/list.vue')
        },
        {
            path: '/search',
            name: 'search',
            component: () => import( '../components/search.vue')
        },
        {
            path: '/fav',
            name: 'fav',
            component: () => import( '../components/fav.vue')
        },
        {
            path: '/artist/:id',
            name: 'artist',
            component: () => import( '../components/Artist.vue')
        },
    ]
export default routes 