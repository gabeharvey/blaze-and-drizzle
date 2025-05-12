import {
  Box,
  Heading,
  Text,
  Image,
  SimpleGrid,
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
      <Box bg={bgColor} borderRadius="xl" p={8} maxW="6xl" mx="auto">
        <Heading as="h2" size="xl" textAlign="center" mb={10}>
          Menu
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {/* Ribz */}
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            border="1px solid #708090"
            borderRadius="lg"
            p={4}
            minH="100%"
          >
            <Box>
              <Image
                src="/ribz-drizzle-2.jpg"
                alt="Pork Ribs"
                borderRadius="lg"
                mb={4}
                h="250px"
                w="100%"
                objectFit="cover"
              />
              <Heading size="lg" mb={2}>
                Legendary Ribz
              </Heading>
              <Text fontSize="md" mb={2}>
                Slow-smoked, flame-kissed pork ribs rubbed in our fiery blaze blend and glazed with a tangy molasses BBQ drizzle.
              </Text>
            </Box>
            <Text fontWeight="bold" fontSize="xl" color="orange.300">
              $19
            </Text>
          </Box>

          {/* Brizket */}
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            border="1px solid #708090"
            borderRadius="lg"
            p={4}
            minH="100%"
          >
            <Box>
              <Image
                src="/brizket-drizzle.png"
                alt="Brisket"
                borderRadius="lg"
                mb={4}
                h="250px"
                w="100%"
                objectFit="cover"
              />
              <Heading size="lg" mb={2}>
                Smokin’ Brizket
              </Heading>
              <Text fontSize="md" mb={2}>
                Our tender beef brisket is smoked low and slow with mesquite wood, infused with rich spices, and served with a bold chipotle glaze.
              </Text>
            </Box>
            <Text fontWeight="bold" fontSize="xl" color="orange.300">
              $19
            </Text>
          </Box>

          {/* Beef Ribs */}
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            border="1px solid #708090"
            borderRadius="lg"
            p={4}
            minH="100%"
            >
            <Box>
                <Image
                src="/beef-ribs.jpg"
                alt="Beef Ribs"
                borderRadius="lg"
                mb={4}
                h="250px"
                w="100%"
                objectFit="cover"
                />
                <Heading size="lg" mb={2}>
                Hill Country Blaze-Drizzled Beef Ribs
                </Heading>
                <Text fontSize="md" mb={2}>
                Meaty, slow-cooked beef ribs kissed by smoke and fire, then drizzled in our signature spicy-sweet blaze sauce.
                </Text>
            </Box>
            <Text fontWeight="bold" fontSize="xl" color="orange.300">
                $29
            </Text>
            </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Menu;