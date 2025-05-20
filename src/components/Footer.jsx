import { Box, Flex, Text, Image } from '@chakra-ui/react';

function Footer() {
  return (
    <Box
      as="footer"
      bg="#000000"
      py="3rem"
      px="2rem"
      fontFamily="'Bungee', sans-serif"
      color="#F6E0B3"
      mt="auto"
      position="relative"
      zIndex="1"
      overflow="hidden"
      border="none"
    >

      <Box
        position="absolute"
        top="0"
        left="0"
        w="100%"
        overflow="hidden"
        zIndex={2}
        pointerEvents="none"
        userSelect="none"
        style={{ transform: 'scaleY(-1) scaleX(-1)' }}
      >
        <Box position="relative" w="100%">
        <Image
        src="/slant-divider-1.svg"
        alt="Navbar bottom border"
        w="100%"
        h="auto"
        transform="scaleY(.999)" 
        transformOrigin="top"
        display="block"
      />
        <Box position="absolute" top="0" left="0" w="100%" h="1px" bg="#000000" zIndex="2" />
        <Box position="absolute" bottom="0" left="0" w="100%" h="1px" bg="#F6E0B3" zIndex="2" />
      </Box>
      </Box>

      <Flex
        justify="center"
        alignItems="center"
        position="relative"
        zIndex={3}
        pt="5rem"
        pb="0"
        px="1rem"
        textAlign="center"
        flexWrap="wrap"
      >
        <Text
          fontSize={['md', 'lg']}
          fontWeight="bold"
          letterSpacing="wider"
          whiteSpace={{ base: 'normal', md: 'nowrap' }}
          overflow="visible"
        >
          ©2025 Blaze &{' '}
          <Box
            as="span"
            fontFamily="'Nosifer', cursive"
            color="#F6E0B3"
            display="inline"
          >
            Drizzle
          </Box>{' '}
          LLC
        </Text>
      </Flex>
    </Box>
  );
}

export default Footer;
