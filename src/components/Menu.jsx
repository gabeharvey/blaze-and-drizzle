import {
  Box,
  Heading,
  Text,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";

const Menu = () => {
  const textColor = "#000000";
  const bgColor = "#F6E0B3";

  return (
    <Box
      minH="100vh"
      px={{ base: 4, md: 12 }}
      py={{ base: 10, md: 20 }}
      bg={bgColor}
      color={textColor}
      fontFamily="Bungee, sans-serif"
    >
      <Box bg={bgColor} borderRadius="xl" p={8} maxW="6xl" mx="auto">
        <Heading
          as="h2"
          size="lg"
          textAlign="center"
          mb={10}
          fontFamily="'Nosifer', cursive"
        >
          Menu
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {/* Ribz */}
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            bg="#000000"
            color="#F6E0B3"
            borderRadius="lg"
            p={4}
            minH="100%"
            border="1px solid #F6E0B3"
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
              <Heading size="lg" mb={2} fontFamily="'Nosifer', cursive">
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
            bg="#000000"
            color="#F6E0B3"
            borderRadius="lg"
            p={4}
            minH="100%"
            border="1px solid #F6E0B3"
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
              <Heading size="lg" mb={2} fontFamily="'Nosifer', cursive">
                Smokin’ Brizket
              </Heading>
              <Text fontSize="md" mb={2}>
                Our tender beef brisket is smoked low and slow with mesquite wood, infused with rich spices, and drizzled with a bold chipotle glaze.
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
            bg="#000000"
            color="#F6E0B3"
            borderRadius="lg"
            p={4}
            minH="100%"
            border="1px solid #F6E0B3"
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
              <Heading size="lg" mb={2} fontFamily="'Nosifer', cursive">
                Hill Country Blaze-Drizzled Beef Ribz
              </Heading>
              <Text fontSize="md" mb={2}>
                Meaty, slow-cooked beef ribs kissed by smoke and fire, then drizzled in our signature spicy-sweet blaze sauce.
              </Text>
            </Box>
            <Text fontWeight="bold" fontSize="xl" color="orange.300">
              $19
            </Text>
          </Box>
                    <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            bg="#000000"
            color="#F6E0B3"
            borderRadius="lg"
            p={4}
            minH="100%"
            border="1px solid #F6E0B3"
          >
            <Box>
              <Image
                src="/pecan-pie.jpg"
                alt="Texas Pecan Pie"
                borderRadius="lg"
                mb={4}
                h="250px"
                w="100%"
                objectFit="cover"
              />
              <Heading size="lg" mb={2} fontFamily="'Nosifer', cursive">
                Texas Pecan Pie
              </Heading>
              <Text fontSize="md" mb={2}>
                A rich, buttery pecan pie made with locally sourced Texas pecans and a hint of caramel drizzle.
              </Text>
            </Box>
            <Text fontWeight="bold" fontSize="xl" color="orange.300">
              $19
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Menu;
