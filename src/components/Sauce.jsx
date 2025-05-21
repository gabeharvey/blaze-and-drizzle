/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  Heading,
  Text,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";

const Sauce = () => {
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
          Sauce Shop
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
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
                src="/signature-drizzle.jpg"
                alt="Signature Drizzle"
                borderRadius="lg"
                mb={4}
                h="250px"
                w="100%"
                objectFit="cover"
              />
              <Heading size="lg" mb={2} fontFamily="'Nosifer', cursive">
                Signature Drizzle
              </Heading>
              <Text fontSize="md" mb={2}>
                A sweet and mild sauce with hints of molasses and spices, perfect for all your smoked meats.
              </Text>
            </Box>
            <Text fontWeight="bold" fontSize="xl" color="orange.300">
              $5
            </Text>
          </Box>

          {/* Blazin Hot Drizzle */}
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
                src="/blazin-hot-drizzle.jpg"
                alt="Blazin' Hot Drizzle"
                borderRadius="lg"
                mb={4}
                h="250px"
                w="100%"
                objectFit="cover"
              />
              <Heading size="lg" mb={2} fontFamily="'Nosifer', cursive">
                Blazin' Hot Drizzle
              </Heading>
              <Text fontSize="md" mb={2}>
                A bold sauce meant to set your taste buds ablaze.
              </Text>
            </Box>
            <Text fontWeight="bold" fontSize="xl" color="orange.300">
              $6
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Sauce;
