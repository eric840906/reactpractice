import {
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  useDisclosure,
  ModalFooter,
  ModalCloseButton,
  ModalBody,
  Button
} from '@chakra-ui/react'
import Proptype from 'prop-types'

const BasicDialog = ({ modalOptions }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const openBtn = () => {
    switch (Object.keys(modalOptions.triggerBtn)[0]) {
      case 'icon':
        return (
          <Button
            variant='default'
            w='40px'
            h='40px'
            padding={0}
            boxShadow='none'
            borderRadius='100'
            onClick={onOpen}
          >
            {modalOptions.triggerBtn.icon()}
          </Button>
        )
      case 'text':
        return (
          <Button
            variant='default'
            w='40px'
            h='40px'
            borderRadius='100'
            onClick={onOpen}
          >
            {modalOptions.triggerBtn.text()}
          </Button>
        )
      default:
        return (
          <Button
            variant='default'
            w='40px'
            h='40px'
            borderRadius='100'
            onClick={onOpen}
          >
            Open Modal
          </Button>
        )
    }
  }
  // const renderBodyBtns = modalOptions.bodyBtns && modalOptions.bodyBtns.map(btn => (
  //   <Button leftIcon={btn.icon ? btn.icon : ''} key={btn.title} onClick={btn.onClick}></Button>
  // ))
  // const renderBodyBtns =
  //   modalOptions.footerBtns &&
  //   modalOptions.footerBtns.map((btn) => (
  //     <Button
  //       leftIcon={btn.icon ? btn.icon : ''}
  //       key={btn.title}
  //       onClick={btn.onClick}
  //     ></Button>
  //   ))
  const renderBtns = btnArr =>
    btnArr.map(btn => (
      <Button
        variant={btn.variant}
        leftIcon={btn.icon ? btn.icon() : ''}
        w='100%'
        p={1}
        key={btn.title}
        onClick={async () => {
          await btn.onClick()
          onClose()
        }}
        m='auto'
      >
        {btn.title}
      </Button>
    ))
  return (
    <>
      {modalOptions && openBtn()}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent w='90%'>
          <ModalHeader>{modalOptions.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody px={2} pb={6} display='flex' flexDirection='column'>
            {modalOptions.bodyBtns && renderBtns(modalOptions.bodyBtns)}
          </ModalBody>
          <ModalFooter>
            {modalOptions.footerBtns && renderBtns(modalOptions.footerBtns)}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

BasicDialog.propTypes = {
  children: Proptype.node,
  modalOptions: Proptype.object
}

export default BasicDialog
