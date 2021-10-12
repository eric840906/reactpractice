import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Pagination } from "swiper"
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import './swiper.css'
import { Image, Flex, Text, Heading } from "@chakra-ui/react"

SwiperCore.use([Pagination])
export const HomeSwiper = ({itemArr, options}) => {
  return (
    <Flex bg="brand.100" w="100%">
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
          bulletElement: 'div style="height: 20px; width:20px; background: #e15b21;"'
        }}
        effect="fade"
        fadeEffect={{
          crossFade: true
        }}
        spaceBetween={0}
        slidesPerView="auto"
        centeredSlides={options.centeredSlides}
        centeredSlidesBounds={options.centeredSlides}
        loop={options.loop}
        onSlideChange={() => console.log("slide change")}
        onSwiper={swiper => console.log(swiper)}
      >
        {
          itemArr.map(item => {
            return (
              <SwiperSlide style={{width:'100%'}} key={item.id}>
                <Heading color="brand.heading"  style={{padding:20}} textAlign="center" as="h4" size="md">
                  {item.title}
                </Heading>
                <Flex justifyContent="center" gridGap={5} style={{marginBottom:40}} flexDirection={{base:'column', md:'row'}}>
                  <Text w={{base: '80%', md: '35%'}} color="brand.text" alignSelf={{base:"center", md:"baseline"}}>{item.text}</Text>
                  <Image alignSelf="center" borderRadius="10px" boxSize="150px" src={item.image} alt=""/>
                </Flex>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </Flex>
  )
}