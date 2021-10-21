import { BreadPage, DonePage, MeatPage, OtherPage } from 'Pages/BuilderPage'

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
