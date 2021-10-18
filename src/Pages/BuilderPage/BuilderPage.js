import React from 'react'
// import { Router, Switch, useRouteMatch, Route } from 'react-router-dom'
import { Router, Switch } from 'react-router-dom'
import { RouteWithSubRoutes } from '../../Router/RouteWithSubRoutes'
// import { BreadPage, MeatPage, OtherPage, DonePage } from './SubPages'
import { FaBreadSlice, FaCheck } from 'react-icons/fa'
import { GiMeat } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import { Grid } from '@chakra-ui/react'
import StepperIndicator from '../../components/StepperIndicator'
import PropTypes from 'prop-types'
import { history } from '../../Router/history'
// import { useRouteMatch } from 'react-router'

const active = {
  color: 'white',
  bgColor: 'brand.200'
}
// const success = {
//   color: 'white',
//   bgColor: 'brand.green'
// }
const inActive = {
  color: 'brand.gray',
  bgColor: 'white',
  borderColor: 'brand.gray'
}

const BuilderPage = ({ routes }) => {
  console.log(routes)
  return (
    <>
      <Router history={history}>
        <Grid w='100%' mt={10} mb={20} templateColumns='repeat(4, 1fr)'>
          <StepperIndicator
            {...active}
            icon={<FaBreadSlice size={25} />}
            lineWidth='25%'
            title='bread'
          />
          <StepperIndicator
            {...inActive}
            icon={<GiMeat size={25} />}
            lineWidth='25%'
            title='meat'
          />
          <StepperIndicator
            {...inActive}
            icon={<MdOutlineRestaurantMenu size={25} />}
            lineWidth='25%'
            title='others'
          />
          <StepperIndicator
            {...inActive}
            icon={<FaCheck size={25} />}
            lineWidth='25%'
            title='done'
          />
        </Grid>
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </Router>
    </>
  )
}

BuilderPage.propTypes = {
  routes: PropTypes.array
}

export default BuilderPage
