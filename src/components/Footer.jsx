import { Box, Flex, Text } from '@chakra-ui/react';

function Footer() {
  return (
    <Box
      as="footer"
      className="flame-bg"
      fontFamily="'Bungee', sans-serif"
      color="#F6E0B3"
      mt="auto"
      position="relative"
      zIndex={1}
      border="none"
      pt="3rem"
      pb="2rem"
      px="2rem"
      borderTopRightRadius="10px"
      borderTopLeftRadius="10px"
    >
      <Flex
        justify="center"
        alignItems="center"
        position="relative"
        zIndex={3}
        textAlign="center"
        flexWrap="wrap"
      >
        <Text
          fontSize={['md', 'lg']}
          fontWeight="bold"
          letterSpacing="wider"
          whiteSpace={{ base: 'normal', md: 'nowrap' }}
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
