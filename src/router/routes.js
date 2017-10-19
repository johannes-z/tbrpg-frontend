import Home from '@/components/Home'
import About from '@/components/About'
import Login from '@/components/Login'
import Register from '@/components/Register'

export default [
  {
    path: '/',
    icon: 'fa-home fa-fw',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    icon: 'fa-info fa-fw',
    name: 'About',
    component: About
  },
  {
    path: '/login',
    icon: 'fa-unlock fa-fw',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    icon: 'fa-user-plus fa-fw',
    name: 'Register',
    component: Register
  }
]
