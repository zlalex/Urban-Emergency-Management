import Vue from 'vue'
import Router from 'vue-router'
import path from '@/router/path'
import getToken from '@/utils/getToken'

let token = ''
const {
  dispose,
  index,
  login,
  register,
  library,
  empty,
  libraryChemical,
  libraryCompany,
  libraryFactory,
  libraryVehicle
} = path
const routes = [
  {
    path: '/',
    component: index,
  },
  {
    path: '/login',
    component: login,
  },
  {
    path: '/register',
    component: register
  },
  {
    path: '/dispose',
    component: dispose
  },
  {
    path: '/404',
    component: empty
  },
  {
    path: '/library',
    component: library,
    children: [
      {
        path: 'chemical',
        component: libraryChemical
      },
      {
        path: 'company',
        component: libraryCompany
      },
      {
        path: 'factory',
        component: libraryFactory
      },
      {
        path: 'vehicle',
        component: libraryVehicle
      },
    ]
  },
]
const paths = routes.reduce((total, route) => {
  if (route.path === '/404') {
    return total
  }
  if (route.children && route.children.length) {
    route.children.reduce((innerTotal, childRoute) => {
      innerTotal.push(`${route.path}/${childRoute.path}`)
      return innerTotal
    }, total)
    return total
  } else {
    total.push(route.path)
    return total
  }
}, [])

Vue.use(Router)

const VueRouter = new Router({ routes })

VueRouter.beforeEach((to, from, next) => {
  if (to.path === '/404' || (to.path === '/login' && !token)) {
    next()
    return
  }
  if (!token) {
    token = getToken()
  }

  if (token && paths.includes(to.path) && (to.path === '/login' || to.path === '/register')) {
    next(from.path)
    return
  }

  token ?
    paths.includes(to.path) ? next() : next('/404')
    : next('/login')
})

export default VueRouter
