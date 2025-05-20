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
      {/* SVG divider flipped back to normal */}
      <Box
        position="absolute"
        top="0"
        left="0"
        w="100%"
        overflow="hidden"
        zIndex={2}
        pointerEvents="none"
        userSelect="none"
        style={{ transform: 'scaleY(-1)' }}
      >
        <Image
          src="/slant-divider-1.svg"
          alt="Footer top border"
          w="100%"
          h="auto"
          display="block"
          style={{
            transform: 'scale(1.01)',
          }}
        />
      </Box>

      {/* Footer Content */}
      <Flex
        justify="center"
        direction={['column', 'row']}
        alignItems="center"
        position="relative"
        zIndex={3}
        pt="5rem"
        pb="0"
      >
        <Text
          fontSize={['md', 'lg']}
          fontWeight="bold"
          letterSpacing="wider"
          textAlign="center"
          maxW="100%"
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
        >
          ©2025 Blaze &{' '}
          <Box as="span" fontFamily="'Nosifer', cursive" color="#F6E0B3">
            Drizzle
          </Box>{' '}
          LLC
        </Text>
      </Flex>
    </Box>
  );
}

export default Footer;
