import React, { useState, useEffect } from 'react'
import { Router, Switch, useLocation } from 'react-router-dom'
import { RouteWithSubRoutes } from 'Router/RouteWithSubRoutes'
import { FaBreadSlice, FaCheck } from 'react-icons/fa'
import { GiMeat } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import { Grid } from '@chakra-ui/react'
import StepperIndicator from 'components/StepperIndicator'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router'

const active = {
  color: 'white',
  bgColor: 'brand.200'
}
const success = {
  color: 'white',
  bgColor: 'brand.green'
}
const inActive = {
  color: 'brand.gray',
  bgColor: 'white',
  borderColor: 'brand.gray'
}

const BuilderPage = ({ routes }) => {
  const history = useHistory()
  const location = useLocation()
  const indicators = [
    { title: 'bread', icon: <FaBreadSlice size={25} /> },
    { title: 'meat', icon: <GiMeat size={25} /> },
    { title: 'other', icon: <MdOutlineRestaurantMenu size={25} /> },
    { title: 'done', icon: <FaCheck size={25} /> }
  ]
  const routeIndex = currentName => {
    return indicators.findIndex(indicator => indicator.title === currentName)
  }
  const [currentIndex, setCurrentIndex] = useState(0)
  const indicatorStyle = index => {
    return index === currentIndex
      ? active
      : currentIndex > index
      ? success
      : inActive
  }
  const renderIndicators = () =>
    indicators.map((indicator, i) => {
      return (
        <StepperIndicator
          {...indicator}
          {...indicatorStyle(i)}
          key={indicator.title}
          lineWidth='25%'
        />
      )
    })
  useEffect(() => {
    if (!location.pathname) return
    const subPath = location.pathname && location.pathname.split('/')[2]
    subPath && setCurrentIndex(routeIndex(subPath))
  }, [location])

  return (
    <>
      <Router history={history}>
        <Grid
          w='100%'
          mt={10}
          mb={{ base: 10, sm: 20 }}
          templateColumns='repeat(4, 1fr)'
        >
          {renderIndicators()}
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
