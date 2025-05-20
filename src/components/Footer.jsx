import { Box, Flex, Text, Image } from '@chakra-ui/react';

function Footer() {
  return (
    <Box
      as="footer"
      bg="#000000"
      py="3rem"
      px={0} // no horizontal padding to avoid clipping SVG overflow
      fontFamily="'Bungee', sans-serif"
      color="#F6E0B3"
      mt="auto"
      position="relative"
      zIndex="1"
      overflow="hidden"
      border="none"
    >
      {/* SVG border container with overflow and negative margins */}
<Box
  position="absolute"
  top="0"
  left="50%"
  width="100vw"
  overflow="hidden"
  zIndex={2}
  pointerEvents="none"
  userSelect="none"
  style={{ transform: 'translateX(-50%) scaleY(-1) scaleX(-1)' }}
>
  <Image
    src="/grunge-divider-1.svg"
    alt="Footer top border"
    width="140vw"
    height="auto"
    display="block"
    transform="scaleY(0.999)"
    transformOrigin="top"
    minWidth="100vw"
  />
</Box>



      <Flex
        justify="center"
        alignItems="center"
        position="relative"
        zIndex={3}
        pt="5rem"
        pb="0"
        px="2rem"  // content padding inside footer
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
