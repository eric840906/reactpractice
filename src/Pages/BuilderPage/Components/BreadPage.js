import { useState, useEffect } from 'react'
import { Heading, VStack, Button, useToast } from '@chakra-ui/react'
import { useHistory } from 'react-router'
import { TheSwiper } from 'components/Swiper/Swiper'
import { breads } from 'demo/demoData'
import { submitBread } from 'actions'
import { useDispatch } from 'react-redux'
const BreadPage = () => {
  const history = useHistory()
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState(null)
  const dispatch = useDispatch()
  const toast = useToast()
  const setBread = () => breads[current] && setSelected(breads[current])
  const confirmBread = () => {
    dispatch(submitBread(selected))
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
        <Button w='80%' variant='default' onClick={confirmBread}>
          Next
        </Button>
      </VStack>
    </>
  )
}

export default BreadPage
