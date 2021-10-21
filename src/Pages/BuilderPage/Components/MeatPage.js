import { useState, useEffect } from 'react'
import { Heading, VStack, Button } from '@chakra-ui/react'
import useMyToast from 'hooks/useMyToast'
import { history } from 'Router/history'
import { TheSwiper } from 'components/Swiper/Swiper'
const MeatPage = () => {
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState(null)
  const { successToast } = useMyToast()
  const setMeat = () => meats[current] && setSelected(meats[current])
  const confirmBread = () => {
    successToast(`${selected.title} has been added to your recipe!`)
    return history.push('/builder/other')
  }
  useEffect(() => {
    setSelected(setMeat)
    console.log(selected)
  }, [current])
  const meats = [
    {
      title: 'Roasted beef',
      price: 0.99,
      image:
        'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80',
      id: 1
    },
    {
      title: 'Roasted chicken',
      price: 0.99,
      image:
        'https://images.unsplash.com/photo-1611489142329-5f62cfa43e6e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80',
      id: 2
    },
    {
      title: 'Ham',
      price: 1.99,
      image:
        'https://images.unsplash.com/photo-1524438418049-ab2acb7aa48f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      id: 3
    },
    {
      title: 'Sausage',
      price: 1.99,
      image:
        'https://images.unsplash.com/photo-1547424450-75ec164925ad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80',
      id: 4
    },
    {
      title: 'Pork ribs',
      price: 1.99,
      image:
        'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
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
          itemArr={meats}
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

export default MeatPage
