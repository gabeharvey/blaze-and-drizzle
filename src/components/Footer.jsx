import { Flex, Box, Text } from '@chakra-ui/react';

function Footer() {
  return (
    <Box
      as="footer"
      bg="#000000"
      py="2rem"
      px="2rem"
      fontFamily="'Bungee', sans-serif"
      color="#F6E0B3"
      borderTopLeftRadius="20px"
      borderTopRightRadius="20px"
      mt="auto"
    >
      <Flex
        justify="space-between"
        direction={['column', 'row']}
        alignItems="center"
        gap="1rem"
      >
        <Text
          fontSize="lg"
          fontWeight="bold"
          letterSpacing="wider"
          textAlign="center"
        >
          ©2025 Blaze &{' '}
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
