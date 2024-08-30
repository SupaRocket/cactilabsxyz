'use client';

// chakra-ui
import { Link, Flex, useColorModeValue, Button } from '@chakra-ui/react';

// local components
import { ExternalLink } from 'lucide-react';

export default function DesktopNavbar() {
  const borderColor = useColorModeValue('black', 'white');
  const buttonBg = useColorModeValue('black', 'white');
  const buttonColor = useColorModeValue('white', 'black');
  const buttonHoverBg = useColorModeValue('purple.400', 'gray.800');
  const buttonHoverColor = useColorModeValue('black', 'white');

  return (
    <Flex align={'center'} gap={'1rem'}>
      <Flex fontSize={'0.9rem'}></Flex>
      <Button
        bg={buttonBg}
        color={buttonColor}
        size={'md'}
        borderRadius={'full'}
        border={'2px solid'}
        borderColor={borderColor}
        _hover={{
          bg: buttonHoverBg,
          color: buttonHoverColor,
        }}
      >
        Get early access
      </Button>
    </Flex>
  );
}

const NavLink = ({ name, path }: { name: string; path: string }) => {
  return (
    <Link
      position={'relative'}
      m={'0 0.5rem'}
      fontSize={'1rem'}
      fontWeight={500}
      textDecoration={'none'}
      borderRadius={'0.25rem'}
      _hover={{
        textDecoration: 'none',
        background: 'purple.100',
        color: 'purple.700',
        borderRadius: '0.35rem',
      }}
      href={path}
      p={'0.4rem 0.8rem'}
    >
      {name}
    </Link>
  );
};

const ExternalNavLink = ({ name, path }: { name: string; path: string }) => {
  return (
    <Link
      position={'relative'}
      m={'0 0.5rem'}
      fontSize={'1rem'}
      fontWeight={500}
      textDecoration={'none'}
      borderRadius={'0.25rem'}
      _hover={{
        textDecoration: 'none',
        background: 'purple.100',
        color: 'purple.700',
        borderRadius: '0.35rem',
      }}
      target={'_blank'}
      href={path}
      p={'0.4rem 0.8rem'}
    >
      <Flex align={'center'} gap={'0.35rem'}>
        {name}
        <ExternalLink size={15} />
      </Flex>
    </Link>
  );
};
