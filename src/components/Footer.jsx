import { Flex, Box, Text } from '@chakra-ui/react';

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
          fontSize="lg"
          fontWeight="bold"
          letterSpacing="wider"
          textAlign='center'
          sx={{
            textShadow: '1px 1px 2px #EA2127',
            WebkitTextStroke: '0.3px #EA2127',
          }}
        >
          ©2025 Blaze and Drizzle LLC
        </Text>
      </Flex>
    </Box>
  );
}

export default Footer;
