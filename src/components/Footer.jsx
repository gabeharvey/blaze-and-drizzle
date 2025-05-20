import { Flex, Box, Text, Image } from '@chakra-ui/react';

function Footer() {
  return (
    <Box
      as="footer"
      bg="transparent"
      py="3rem" 
      px="2rem"
      fontFamily="'Bungee', sans-serif"
      color="#F6E0B3"
      mt="auto"
      position="relative"
      zIndex="1"
      overflow="hidden" 
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        w="100%"
        overflow="hidden"
        style={{ transform: 'scaleY(-1)' }}
        zIndex={2}
        pointerEvents="none"
        userSelect="none"
      >
      <Image
        src="/steps-divider.svg"
        alt="Footer top border"
        w="100%"
        h="auto"
        display="block"
        style={{
          transform: 'scale(1.01)', 
          filter: 'drop-shadow(0 0 0 black)', 
        }}
      />
      </Box>

      <Flex
        justify="center" 
        direction={['column', 'row']}
        alignItems="center"
        gap="1rem"
        position="relative"
        zIndex={3}
        pt="4rem" 
        pb="0"
        bg="#000000"
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
          ©2025 Blaze{' '}
          <Box as="span" fontFamily="'Nosifer', cursive">
            Drizzle
          </Box>{' '}
          LLC
        </Text>
      </Flex>
    </Box>
  );
}

export default Footer;
