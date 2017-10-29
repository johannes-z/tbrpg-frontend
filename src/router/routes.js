import Home from '@/components/Home'
import About from '@/components/About'
import Login from '@/components/Login'
import Register from '@/components/Register'

import CharacterIndex from '@/components/character/Index'
import CharacterEdit from '@/components/character/Edit'

export default [
  {
    title: 'Home',
    sidebar: true,
    path: '/',
    icon: 'fa-home fa-fw',
    component: Home
  },
  {
    title: 'About',
    sidebar: true,
    path: '/about',
    icon: 'fa-info fa-fw',
    component: About
  },
  {
    title: 'Login',
    sidebar: true,
    path: '/login',
    icon: 'fa-unlock fa-fw',
    component: Login
  },
  {
    title: 'Register',
    sidebar: true,
    path: '/register',
    icon: 'fa-user-plus fa-fw',
    component: Register
  },

  {
    name: 'character.index',
    title: 'Characters',
    sidebar: true,
    path: '/characters',
    icon: 'fa-users fa-fw',
    component: CharacterIndex
  },
  {
    name: 'character.edit',
    path: '/character/:character/edit',
    icon: 'fa-edit fa-fw',
    component: CharacterEdit
  }
]
