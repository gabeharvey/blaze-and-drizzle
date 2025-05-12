import {
  Box,
  Heading,
  Text,
  Image,
  VStack,
  StackDivider,
} from "@chakra-ui/react";

const Menu = () => {
  const textColor = "#FAF3E0"; 
  const bgColor = "#2E2E2E"; 
  return (
    <Box
      minH="100vh"
      px={{ base: 4, md: 12 }}
      py={{ base: 10, md: 20 }}
      bg={bgColor}
      color={textColor}
      fontFamily="Arvo, serif"
    >
      <Box
        bg="#2E2E2E"
        borderRadius="xl"
        p={8}
        maxW="3xl"
        mx="auto"
      >
        <Heading as="h2" size="2xl" textAlign="center" mb={10}>
          Menu
        </Heading>

        <VStack
          spacing={10}
          align="stretch"
          divider={<StackDivider borderColor="gray.600" />}
        >
          {/* Ribz */}
          <Box>
            <Image
                src="/ribz-drizzle-2.jpg"
                alt="Pork Ribs"
                borderRadius="lg"
                mb={4}
            />
            <Heading size="lg" mb={2}>
              Legendary Ribz
            </Heading>
            <Text fontSize="md" mb={2}>
              Slow-smoked, flame-kissed pork ribs rubbed in our fiery blaze blend and glazed with a tangy molasses BBQ drizzle.
            </Text>
            <Text fontWeight="bold" fontSize="xl" color="orange.300">
              $19
            </Text>
          </Box>
          {/* Brizket */}
          <Box>
            <Image
                src="/brizket-drizzle.png"
                alt="Brisket"
                borderRadius="lg"
                mb={4}
            />
            <Heading size="lg" mb={2}>
              Smokin’ Brizket
            </Heading>
            <Text fontSize="md" mb={2}>
              Our tender beef brisket is smoked low and slow with mesquite wood, infused with rich spices, and served with a bold chipotle glaze.
            </Text>
            <Text fontWeight="bold" fontSize="xl" color="orange.300">
              $19
            </Text>
          </Box>
        </VStack>
      </Box>
    </Box>
  );
};

export default Menu;


