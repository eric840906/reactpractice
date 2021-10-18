import {
  BreadPage,
  MeatPage,
  OtherPage,
  DonePage
} from '../../../src/Pages/BuilderPage/SubPages'
const BuilderPageRoutes = [
  {
    name: 'Bread',
    component: BreadPage
  },
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
  }
]

export default BuilderPageRoutes
