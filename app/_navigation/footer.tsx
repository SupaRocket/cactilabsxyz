'use client';

// components
import {
  Flex,
  Box,
  Heading,
  Text,
  Stack,
  Highlight,
  useColorModeValue,
  Image,
} from '@chakra-ui/react';
import logo from '@/public/icon.svg';
import Logo from '../_components/branding/logo';

export default function Footer() {
  const bg = useColorModeValue('purple.100', 'gray.700');
  const bgAlt = useColorModeValue('white', 'gray.800');
  const color = useColorModeValue('gray.900', 'gray.200');
  const altColor = useColorModeValue('purple.700', 'purple.300');

  return (
    <>
      <footer>
        <Box background={bg}>
          <Flex
            flexDirection={{ base: 'column', md: 'row' }}
            p={{ base: '4rem 2rem 2rem 2rem', md: '7rem 2rem 5rem 2rem' }}
          >
            <Stack maxW={'25rem'} gap={'1rem'}>
              <Box>
                <Flex
                  maxW={'fit-content'}
                  minW={'fit-content'}
                  color={color}
                  align={'center'}
                >
                  <Logo shouldLink={false} />
                </Flex>
              </Box>
              <Text>
                <Highlight
                  query={'version control'}
                  styles={{
                    color: altColor,
                  }}
                >
                  A GitHub-like platform that simplifies music production with
                  seamless version control, cloud storage, and real-time
                  collaboration.
                </Highlight>
              </Text>
            </Stack>
          </Flex>
          <Flex
            w={'100%'}
            background={bgAlt}
            justify={'center'}
            flexDirection={'column'}
            textAlign={'center'}
            p={'1rem 1rem 0.5rem 1rem'}
          >
            <Text fontSize={'0.8rem'}>
              © 2024 Cacti Labs, All Rights reserved
            </Text>
          </Flex>
        </Box>
      </footer>
    </>
  );
}
