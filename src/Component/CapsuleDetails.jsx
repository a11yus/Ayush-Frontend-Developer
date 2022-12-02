import React from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalFooter,
    ModalBody,
    Button,
    useDisclosure,
    Text,
    Heading
  } from '@chakra-ui/react';

function CapsuleDetails({data}) {

    const { isOpen, onOpen, onClose } = useDisclosure();
    // console.table('capsulesData:', data);

  return (
    <div>
        <Button
                flex={1}
                fontSize={'sm'}
                rounded={'full'}
                bg={'blue.400'}
                color={'white'}
                boxShadow = {
                  '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                }
                _hover={{
                  bg: 'blue.500',
                }}
                _focus={{
                  bg: 'blue.500',
                }}
                onClick={onOpen}
                w={100}
                ml={3}
                >
                    Details
              </Button>

        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
            <ModalBody>
            </ModalBody>
            <div
            style= 
            {{
                marginLeft:'1rem'
            }}
            key={data}
            >
            <Heading>Details</Heading>
            <Text color='#797f88' fontWeight={'600'} mr={24}>{data.capsule_id}</Text>
            <Text
              fontWeight={600} 
              color='grey'
              >
              {data.details}
            </Text>
            <Text fontWeight={'600'} mr={24}>Status :<span style={{ color: '#717171' }}>{data.status}</span></Text>
            <Text fontWeight={'600'} mr={24}>Type :<span style={{ color: '#717171' }}>{data.type}</span></Text>
            </div>
            <ModalFooter>
            <Button colorScheme='blue' mr={4} onClick={onClose}>
                Close
            </Button>
            </ModalFooter>
        </ModalContent>
        </Modal>
    </div>
  )
}

export default CapsuleDetails;