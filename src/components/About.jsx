import { Box, Heading, Text, VStack, Image, Flex } from "@chakra-ui/react";
import BBQImage from "/ribz-drizzle.png";
import TexasFlagGIF from "/texas-flag.gif"; 

const About = () => {
  return (
    <Box
      bg="#2E2E2E"
      py={{ base: 10, md: 16 }}
      px={{ base: 6, md: 20 }}
      minH="100vh"
      textAlign="center"
    >
      {/* Banner */}
      <Flex
        align="center"
        justify="center"
        mb={8}
        fontFamily="'Arvo', serif"
        fontSize={{ base: "3xl", md: "4xl" }}
        fontWeight="bold"
        color="#FAF3E0"
      >
        <Text as="span" mr={2}>
          We
        </Text>
        <Text as="span" color="#EA2127" fontSize="5xl" mx={1}>
          ❤️
        </Text>
        <Text as="span" mx={2}>
          Boerne, TX
        </Text>
        <Image
          src={TexasFlagGIF}
          alt="Waving Texas Flag"
          boxSize="50px" 
          ml={2}
        />
      </Flex>
      <VStack spacing={6}>
        <Image
          src={BBQImage}
          alt="Blaze and Drizzle Logo"
          borderRadius="lg"
          maxW="600px"
          boxShadow="2xl"
        />
        <Heading as="h2" size="xl" color="#FAF3E0" fontFamily="'Arvo', serif">
          About Us
        </Heading>

        <Text fontSize="lg" color="#FAF3E0" maxW="3xl" fontFamily="'Arvo', serif">
          Welcome to <strong>Blaze and Drizzle BBQ</strong>, proudly founded in Boerne, Texas in 2025. We are your go-to destination for slow-cooked, smoky perfection with a bold Texas twist and unforgettable hospitality.
        </Text>

        <Text fontSize="md" color="#FAF3E0" maxW="3xl" fontFamily="'Arvo', serif">
          From our legendary brisket and fall-off-the-bone ribs to our signature sauces and big Texas sides, everything we serve is crafted with passion, fire, and flavor. Blaze and Drizzle is here to serve up serious smoke.
        </Text>
      </VStack>
    </Box>
  );
};

export default About;

