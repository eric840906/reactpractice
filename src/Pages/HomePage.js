import { VStack } from '@chakra-ui/react'

import { TheSwiper } from 'components/Swiper/Swiper'
import BuilderBlock from 'components/BuilderBlock'
import ProductList from 'components/Product/ProductList'
import SectionDivider from 'components/SectionDivider'

const HomePage = () => {
  const eventItems = [
    {
      title: 'Summer Sale',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam, erat eget sagittis pulvinar, tellus nisl rho.',
      image:
        'https://images.unsplash.com/photo-1481070414801-51fd732d7184?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80',
      id: 1
    },
    {
      title: 'Event2',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam, erat eget sagittis pulvinar, tellus nisl rho.',
      image:
        'https://images.unsplash.com/photo-1550547660-d9450f859349?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=465&q=80',
      id: 2
    },
    {
      title: 'Event3',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam, erat eget sagittis pulvinar, tellus nisl rho.',
      image:
        'https://images.unsplash.com/photo-1617199045294-8053ccfa6f61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=510&q=80',
      id: 3
    },
    {
      title: 'Event4',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam, erat eget sagittis pulvinar, tellus nisl rho.',
      image:
        'https://images.unsplash.com/photo-1621188988280-67c8d6e130a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',
      id: 4
    }
  ]
  const products = [
    {
      title: 'simple cheese sandwich',
      class: 'sandwiches',
      ingredients: ['white bread', 'cheese'],
      price: 1.99,
      imageUrl:
        'https://images.unsplash.com/photo-1528736235302-52922df5c122?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1254&q=80',
      id: 1
    },
    {
      title: 'fruit sandwich',
      class: 'sandwiches',
      ingredients: ['wholegrain bread', 'tomatoes', 'lettuce', 'cucumber'],
      price: 1.99,
      imageUrl:
        'https://images.unsplash.com/photo-1592415499556-74fcb9f18667?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1025&q=80',
      id: 2
    },
    {
      title: 'Jumbo+ burger',
      class: 'burgers',
      ingredients: [
        '3 beef patties',
        'cheese',
        'secret sauce',
        'tomatoes',
        'lettuce',
        'cucumber'
      ],
      price: 5.99,
      imageUrl:
        'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=999&q=80',
      id: 3
    },
    {
      title: 'fruit butterbrot',
      class: 'snacks',
      ingredients: ['bread', 'seasonal fruits', 'honey'],
      price: 1.99,
      imageUrl:
        'https://images.unsplash.com/photo-1631001822163-78f66f1670b8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80',
      id: 4
    },
    {
      title: 'Ham sandwich',
      class: 'sandwiches',
      ingredients: [
        'white bread',
        'Ham',
        'becon',
        'cheese',
        'tomatoes',
        'lettuce'
      ],
      price: 5.99,
      imageUrl:
        'https://images.unsplash.com/photo-1553909489-cd47e0907980?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1025&q=80',
      id: 5
    },
    {
      title: 'butterbrot',
      class: 'snacks',
      ingredients: ['bread', 'home made sausa'],
      price: 1.99,
      imageUrl:
        'https://images.unsplash.com/photo-1630230596557-ad07b433f5c0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80',
      id: 6
    }
  ]
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
  const topSellers = [
    {
      title: 'Top seller',
      price: 1.99,
      image:
        'https://images.unsplash.com/photo-1606101273945-e9eba91c0dc4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80',
      id: 1
    },
    {
      title: 'Top seller',
      price: 1.99,
      image:
        'https://images.unsplash.com/photo-1606101273945-e9eba91c0dc4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80',
      id: 2
    },
    {
      title: 'Top seller',
      price: 1.99,
      image:
        'https://images.unsplash.com/photo-1606101273945-e9eba91c0dc4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80',
      id: 3
    },
    {
      title: 'Top seller',
      price: 1.99,
      image:
        'https://images.unsplash.com/photo-1606101273945-e9eba91c0dc4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80',
      id: 4
    },
    {
      title: 'Top seller',
      price: 1.99,
      image:
        'https://images.unsplash.com/photo-1606101273945-e9eba91c0dc4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80',
      id: 5
    },
    {
      title: 'Top seller',
      price: 1.99,
      image:
        'https://images.unsplash.com/photo-1606101273945-e9eba91c0dc4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80',
      id: 6
    },
    {
      title: 'Top seller',
      price: 1.99,
      image:
        'https://images.unsplash.com/photo-1606101273945-e9eba91c0dc4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80',
      id: 7
    },
    {
      title: 'Top seller',
      price: 1.99,
      image:
        'https://images.unsplash.com/photo-1606101273945-e9eba91c0dc4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80',
      id: 8
    }
  ]

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
