'use client';

// images
import logo from '@/public/icon.svg';
import bgImg from '@/public/joel-vodell-ehQNfr7odvs-unsplash.jpg';

// chakra-ui
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';
import { Sparkles } from 'lucide-react';

export default function Home() {
  const borderColor = useColorModeValue('black', 'white');
  const buttonBg = useColorModeValue('black', 'white');
  const buttonColor = useColorModeValue('white', 'black');
  const buttonHoverBg = useColorModeValue('purple.400', 'gray.800');
  const buttonHoverColor = useColorModeValue('black', 'white');
  const iconColor = useColorModeValue('green.300', 'green.400');

  return (
    <Box
      w={'100vw'}
      minH={'95vh'}
      bg={`linear-gradient(0deg, rgba(0, 61, 18, 0.3), rgba(0, 61, 18, 0.3)), url(${bgImg.src})`}
      bgSize={'cover'}
      bgPosition={'50% 80%'}
      bgRepeat={'no-repeat'}
    >
      <Box
        p={{ base: '1.5rem' }}
        pt={{ base: '15rem', md: '13rem' }}
        textAlign={'center'}
        m={'auto'}
        color={'white'}
      >
        <Heading size={'lg'} fontWeight={500}>
          Version control
        </Heading>
        <Heading size={'lg'} fontWeight={500}>
          for music producers
        </Heading>
        <Flex
          align={'center'}
          gap={'1rem'}
          justify={'center'}
          mb={{ base: '1rem', md: '2rem' }}
          mt={{ base: '0.5rem', md: '0' }}
        >
          <Heading fontSize={{ base: '2.5rem', md: '8rem' }}>
            Streamline
          </Heading>
          <Image
            filter={'brightness(0) invert(1)'}
            src={logo.src}
            alt='Cacti logo'
            w={{ base: '2.5rem', md: '6rem' }}
            h={{ base: '2.5rem', md: '6rem' }}
          />
          <Heading fontSize={{ base: '2.5rem', md: '8rem' }}>it.</Heading>
        </Flex>
        <Button
          bg={buttonBg}
          color={buttonColor}
          size={'lg'}
          borderRadius={'full'}
          border={'2px solid'}
          borderColor={borderColor}
          _hover={{
            bg: buttonHoverBg,
            color: buttonHoverColor,
          }}
          leftIcon={
            <Flex color={iconColor}>
              <Sparkles size={24} />
            </Flex>
          }
        >
          Join the Beta
        </Button>
      </Box>
    </Box>
  );
}
