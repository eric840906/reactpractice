import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  useDisclosure,
  ModalFooter,
  Button
} from '@chakra-ui/react'
import Proptype from 'prop-types'

const BasicDialog = ({ children, modalOptions }) => {
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
  return (
    <>
      {modalOptions && openBtn()}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent w='80%'>
          <ModalHeader></ModalHeader>
          {children}
          <ModalFooter>
            {/* <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button> */}
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
