import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination, EffectCoverflow } from 'swiper'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import './swiper.css'
import { Image, Flex, Text, Heading } from '@chakra-ui/react'
import Proptype from 'prop-types'
import { imageBox } from '../../assets/style'

SwiperCore.use([Pagination, EffectCoverflow])
export const TheSwiper = ({ itemArr, options }) => {
  const defaultSwiper = itemArr.map((item) => {
    return (
      <SwiperSlide style={{ width: '100%' }} key={item.id}>
        <Heading
          color="brand.heading"
          style={{ padding: 20 }}
          textAlign="center"
          as="h4"
          size="md"
        >
          {item.title}
        </Heading>
        <Flex
          justifyContent="center"
          gridGap={5}
          style={{ marginBottom: 40 }}
          flexDirection={{ base: 'column', md: 'row' }}
        >
          <Text
            w={{ base: '80%', md: '35%' }}
            color="brand.text"
            alignSelf={{ base: 'center', md: 'baseline' }}
          >
            {item.text}
          </Text>
          <Image {...imageBox} src={item.image} alt="" />
        </Flex>
      </SwiperSlide>
    )
  })
  const choiceSwiper = itemArr.map((item) => {
    return (
      <SwiperSlide key={item.id}>
        <Flex
          borderRadius="10px"
          overflow="hidden"
          flexDirection="column"
          boxShadow="lg"
          justifyContent="center"
          marginBottom="40px"
          bg="brand.100"
        >
          <Image objectFit="cover" src={item.image} alt="" />
          <Flex flexDirection="column" p={{ base: 2, md: 3 }}>
            <Heading textAlign="center" size={{ base: 'sm', sm: 'md' }}>
              {item.title}
            </Heading>
            <Text textAlign="center" fontSize="1rem">{`$${item.price}`}</Text>
          </Flex>
        </Flex>
      </SwiperSlide>
    )
  })
  const renderSwiper = () => {
    switch (options.swipertype) {
      case 'choice':
        return choiceSwiper
      default:
        return defaultSwiper
    }
  }
  return (
    <Flex bg={options.swipertype ? 'white' : 'brand.100'} w="100%">
      <Swiper
        {...options}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {renderSwiper()}
      </Swiper>
    </Flex>
  )
}

TheSwiper.propTypes = {
  itemArr: Proptype.array,
  options: Proptype.object
}
