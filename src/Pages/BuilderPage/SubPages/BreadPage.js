import { useState, useEffect } from 'react'
import { Heading, VStack, Button, useToast } from '@chakra-ui/react'
import { history } from 'Router/history'
import { TheSwiper } from 'components/Swiper/Swiper'
const BreadPage = () => {
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState(null)
  const toast = useToast()
  const setBread = () => breads[current] && setSelected(breads[current])
  const confirmBread = () => {
    toast({
      title: `${selected.title} has been added to your recipe!`,
      position: 'bottom',
      status: 'success',
      duration: 3000,
      isClosable: true
    })
    return history.push('/builder/meat')
  }
  useEffect(() => {
    setSelected(setBread)
    console.log(selected)
  }, [current])
  const breads = [
    {
      title: 'White bread',
      price: 0.99,
      image:
        'https://images.unsplash.com/photo-1611824431626-300e118a94fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
      id: 1
    },
    {
      title: 'Wholegrain bread',
      price: 0.99,
      image:
        'https://images.unsplash.com/photo-1529059957291-76ab3843ef63?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80',
      id: 2
    },
    {
      title: 'Chestnut bread',
      price: 1.99,
      image:
        'https://images.unsplash.com/photo-1611070097019-134ef801cfa5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80',
      id: 3
    },
    {
      title: 'Italian bread',
      price: 1.99,
      image:
        'https://images.unsplash.com/photo-1580822642566-5138e95313d3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80',
      id: 4
    },
    {
      title: 'Garlic bread',
      price: 1.99,
      image:
        'https://images.unsplash.com/photo-1547033965-5dd4885e88ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80',
      id: 5
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
        <Heading>Your Choice</Heading>
        <TheSwiper
          itemArr={breads}
          options={SellerSwiperOption}
          func={setCurrent}
        />
        {/* {selected && <Text>{selected.title}</Text>} */}
        <Button w='80%' variant='default' onClick={() => confirmBread()}>
          Next
        </Button>
      </VStack>
    </>
  )
}

export default BreadPage
