// import {
//   BreadPage,
//   MeatPage,
//   OtherPage,
//   DonePage
// } from 'Pages/BuilderPage/SubPages'
import { BreadPage, MeatPage, OtherPage, DonePage } from 'Pages/Nested'

import { Redirect } from 'react-router-dom'
const BuilderPageRoutes = [
  {
    path: '/builder/meat',
    name: 'Meat',
    component: MeatPage
  },
  {
    path: '/builder/other',
    name: 'Other',
    component: OtherPage
  },
  {
    path: '/builder/done',
    name: 'Done',
    component: DonePage
  },
  {
    path: '/',
    name: 'Bread',
    component: BreadPage
  },
  {
    path: '',
    component: () => <Redirect to='/' />
  }
]

export default BuilderPageRoutes
