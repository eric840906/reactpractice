import { VStack } from '@chakra-ui/react'
import React from 'react'
import { HomeSwiper } from '../components/HomePage/Swiper'
import BuilderBlock from '../components/BuilderBlock'
import SectionDivider from '../components/SectionDivider'

const HomePage = () => {
  const eventItems = [
    {
      title: 'Summer Sale',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam, erat eget sagittis pulvinar, tellus nisl rho.',
      image:
        'https://images.unsplash.com/photo-1481070414801-51fd732d7184?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80',
      id: 1
    },
    {
      title: 'Event2',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam, erat eget sagittis pulvinar, tellus nisl rho.',
      image:
        'https://images.unsplash.com/photo-1550547660-d9450f859349?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=465&q=80',
      id: 2
    },
    {
      title: 'Event3',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam, erat eget sagittis pulvinar, tellus nisl rho.',
      image:
        'https://images.unsplash.com/photo-1617199045294-8053ccfa6f61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=510&q=80',
      id: 3
    },
    {
      title: 'Event4',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam, erat eget sagittis pulvinar, tellus nisl rho.',
      image:
        'https://images.unsplash.com/photo-1621188988280-67c8d6e130a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',
      id: 4
    }
  ]
  return (
    <>
      <VStack gridGap={7}>
        <HomeSwiper
          itemArr={eventItems}
          options={{ centeredSlides: true, loop: true }}
        />
        <BuilderBlock />
        <SectionDivider title="popular choice" />
      </VStack>
    </>
  )
}

export default HomePage
