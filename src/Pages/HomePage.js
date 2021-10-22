import { VStack } from '@chakra-ui/react'
import { eventItems, products, topSellers } from 'demo/demoData'
import { TheSwiper } from 'components/Swiper/Swiper'
import BuilderBlock from 'components/BuilderBlock'
import ProductList from 'components/Product/ProductList'
import SectionDivider from 'components/SectionDivider'

const HomePage = () => {
  const TopSwiperOption = {
    pagination: {
      dynamicBullets: true,
      clickable: true,
      bulletElement:
        'div style="height: 20px; width:20px; background: #e15b21;"'
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    spaceBetween: 0,
    slidesPerView: 'auto',
    centeredSlides: true,
    loop: true
  }

  const SellerSwiperOption = {
    swipertype: 'choice',
    slideToClickedSlide: true,
    pagination: {
      dynamicBullets: true,
      clickable: true,
      bulletElement:
        'div style="height: 20px; width:20px; background: #e15b21;"'
    },
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 10,
      stretch: 0,
      depth: 50,
      modifier: 3,
      slideShadows: false
    },
    grabCursor: true,
    fadeEffect: {
      crossFade: true
    },
    spaceBetween: 0,
    slidesPerView: 3,
    centeredSlides: true,
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 40
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 40
      }
    }
  }
  return (
    <>
      <VStack gridGap={7} marginBottom={14}>
        <TheSwiper itemArr={eventItems} options={TopSwiperOption} />
        <BuilderBlock />
        <SectionDivider px={5} title='top sellers' />
        <TheSwiper itemArr={topSellers} options={SellerSwiperOption} />
        <VStack px={5}>
          <SectionDivider title='our products' />
          <ProductList products={products} />
        </VStack>
      </VStack>
    </>
  )
}

export default HomePage
