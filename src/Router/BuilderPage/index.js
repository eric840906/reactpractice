import {
  BreadPage,
  MeatPage,
  OtherPage,
  DonePage
} from 'Pages/BuilderPage/SubPages'
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
  }
]

export default BuilderPageRoutes
