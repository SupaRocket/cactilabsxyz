'use client';

// chakra-ui
import { Flex, Link, Box, useColorModeValue, Image } from '@chakra-ui/react';

// local components
import logo from '@/public/horizontal-logo.svg';

export default function Logo({ shouldLink = true, makeWhite = false }) {
  return (
    <>
      {shouldLink ? (
        <Link
          pt={'0.2rem'}
          mr={'1.25rem'}
          href='/'
          _hover={{ textDecoration: 'none' }}
          textDecoration={'none'}
        >
          <LogoContent makeWhite={makeWhite} />
        </Link>
      ) : (
        <LogoContent makeWhite={makeWhite} />
      )}
    </>
  );
}

export const LogoContent = ({ makeWhite }: { makeWhite: boolean }) => {
  const bg = useColorModeValue('purple.300', 'purple.900');

  return (
    <Flex
      maxW={'fit-content'}
      minW={'fit-content'}
      borderRadius={'1rem'}
      _hover={{
        bg: bg,
      }}
      align={'center'}
      p={'0.3rem 0.75rem 0.3rem 0.3rem'}
    >
      <Box
        w={'6rem'}
        mr={'0.5rem'}
        filter={makeWhite ? 'brightness(0) invert(1)' : 'none'}
      >
        <Image src={logo.src} alt='Cacti logo' />
      </Box>
    </Flex>
  );
};
