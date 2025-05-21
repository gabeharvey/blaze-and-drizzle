import { Box, Flex, Text, Image } from '@chakra-ui/react';

function Footer() {
  return (
    <Box
      as="footer"
      bg="#000000"
      px={0}
      fontFamily="'Bungee', sans-serif"
      color="#F6E0B3"
      mt="auto"
      position="relative"
      zIndex={1}
      overflow="hidden"
      border="none"
    >
      <Box
        position="relative"
        width="100vw"
        overflow="hidden"
        zIndex={2}
        height="auto"
        pointerEvents="none"
        userSelect="none"
        style={{ transform: 'scaleY(-1)' }} 
        mb="-3rem" 
        lineHeight={0}
      >
        <Image
          src="/grunge-divider-1.svg"
          alt="Footer top border"
          width="120vw"
          maxWidth="none"
          marginLeft="-10vw"
          height="100px"
          objectFit="cover"
          display="block"
        />
      </Box>
      <Flex
        justify="center"
        alignItems="center"
        position="relative"
        zIndex={3}
        pt="3rem" 
        pb="0"
        px="2rem"
        textAlign="center"
        flexWrap="wrap"
      >
        <Text
          fontSize={['md', 'lg']}
          fontWeight="bold"
          letterSpacing="wider"
          whiteSpace={{ base: 'normal', md: 'nowrap' }}
          overflow="visible"
          mb="2rem"
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
