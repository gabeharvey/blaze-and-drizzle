import { Flex, Box, Text, Link as ChakraLink } from '@chakra-ui/react';

function Footer() {
  return (
    <Box
      as="footer"
      bgGradient="linear(to-b, #5C2E00,  #8B0000, #2E2E2E)"
      py="2rem"
      px="2rem"
      fontFamily="'Black Ops One', system-ui"
      color="#FAF3E0"
      borderTopLeftRadius="20px"
      borderTopRightRadius="20px"
      boxShadow="0 -8px 15px rgba(0, 0, 0, 0.5)"
      mt="auto"
    >
      <Flex
        justify="space-between"
        direction={['column', 'row']}
        alignItems="center"
        gap="1rem"
      >
        <Text
          fontSize="md"
          fontWeight="bold"
          letterSpacing="wider"
          sx={{
            textShadow: '1px 1px 2px #EA2127',
            WebkitTextStroke: '0.3px #EA2127',
          }}
        >
          ©2025 Blaze and Drizzle LLC
        </Text>

        <ChakraLink
          href="https://athletexelite.com"
          target="_blank"
          rel="noopener noreferrer"
          fontSize="md"
          fontWeight="extrabold"
          fontFamily="'Arvo', system-ui"
          color="#FAF3E0"
          _hover={{
            textDecoration: 'none',
            transform: 'scale(1.05)',
            color: '#FAF3E0',
          }}
        >
          All Rights Reserved
        </ChakraLink>
      </Flex>
    </Box>
  );
}

export default Footer;
