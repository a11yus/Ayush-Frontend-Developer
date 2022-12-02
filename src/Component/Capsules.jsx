import React, { useEffect } from 'react';
import {
  Box,
  Select,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Input,
  Grid
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { getCapsulesData } from '../Redux/AppReducer/action';
import CapsuleDetails from './CapsuleDetails';

const Capsules = () => {

  const dispatch = useDispatch();
  const data = useSelector((store) => store.App.capsulesData)

  const handleStatus = (stat) => {
    console.log(stat);

    dispatch(getCapsulesData(stat));
  }

    useEffect(() => {

    dispatch(getCapsulesData());
    }, [])
  return (
    <div>
    <marquee style= {{
      marginTop: '1rem',
    }}>
    <Heading mr={'24rem'}>Capsules</Heading>
    </marquee>
    <Stack spacing={3} w={'18rem'} ml={'31rem'} mt={'2rem'}>
    <Input variant='flushed' placeholder=' Original launch' />
    <Input variant='flushed' placeholder='Type' />
    <Select 
    placeholder='Status' 
    variant='flushed'
    onChange={ (e) => handleStatus(e.target.value) }
    >
    <option value='Retire'>Retired</option>
    <option value='Active'>Active</option>
    <option value='Unknown'>Unknown</option>
    </Select>
    </Stack>
    <Grid templateColumns='repeat(2, 1fr)' gap={3}>
    {
      data?.map((elm) => (
        
        <Center py={9} key={elm.capsule_serial}>
        <Stack
          borderWidth="1px"
          borderRadius="lg"
          w={{ sm: '100%', md: '540px' }}
          height={{ sm: '490px', md: '22rem' }}
          direction={{ base: 'column', md: 'row' }}
          boxShadow={'2xl'}
          padding={5}
          >
          <Flex flex={1}>
            <Image
              objectFit="cover"
              boxSize="100%"
              borderRadius='1rem'
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/COTS-1_Dragon_After_Return_from_Orbit_%28crop%29.jpg/300px-COTS-1_Dragon_After_Return_from_Orbit_%28crop%29.jpg'/>
          </Flex>
          <Stack
            flex={1}
            flexDirection="column"
            justifyContent="center"
            p={1}
            pt={2}
            >
            <Heading fontSize={'2xl'} fontFamily={'body'} color={'#43525d'} ml='1rem'>
              {
                elm.capsule_serial
              }
            </Heading>
            
            <Text
              fontWeight={500} color={'gray.500'} size="sm" 
              px={3} pl={'1.5rem'}
              >
              <Text color='#797f88' fontWeight={'600'} mr={24}>Missions</Text>
              {
              elm.missions.reduce((acc, el) => (
                
                <Stack align={'center'} justify={'center'} direction={'row'} mr={23}>
              <Box
                px={2}
                py={1}
                fontWeight={'700'}> 
                <Text color='#c9c8c8' fontWeight={'400'}>Name -</Text>
                {
                  acc +' '+ el.name
                }
              </Box>
              <Box
                px={2}
                py={1}
                fontWeight={'700'}>
                <Text color='#c9c8c8' fontWeight={'400'}>Flight -</Text>
                {
                  acc +' '+ el.flight
                }
              </Box>
            </Stack>

              ),'')
              } 
            </Text>
            <Text
              fontWeight={600} 
              color={'#d69778'}
              pl='1.5rem'
              >
              {elm.original_launch}
            </Text>
  
            <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
              <Box
                px={2}
                py={1}
                fontWeight={'700'}> 
                <Text color='#c9c8c8' fontWeight={'400'}>Type -</Text>
                {
                  elm.type
                }
              </Box>
            </Stack>
            <Stack
              width={'100%'}
              mt={'2rem'}
              direction={'row'}
              padding={2}
              justifyContent={'space-between'}
              alignItems={'center'}>  
              <CapsuleDetails data={elm}/>
            </Stack>
          </Stack>
        </Stack>
      </Center>
      ))
    }
   </Grid>
  </div>
  )
}

export default Capsules