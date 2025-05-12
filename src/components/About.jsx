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
        flexWrap="wrap"
        >
        <Text as="span" mr={2} textShadow="0px 4px #EA2127">
            We
        </Text>
        <Text
            as="span"
            color="#EA2127"
            fontSize={{ base: "4xl", md: "5xl" }}
            mx={1}
            animation="heartbeat 1.5s infinite"
            textShadow="0px 0px #EA2127"
        >
            ❤️
        </Text>
        <Text
            as="span"
            mx={2}
            _hover={{ transform: "scale(1.05)", transition: "transform 0.3s" }}
            textShadow="0px 4px #EA2127"
        >
            Boerne
        </Text>
        <Image
            src={TexasFlagGIF}
            alt="Waving Texas Flag"
            boxSize="50px"
            ml={2}
            animation="floatFlag 3s ease-in-out infinite"
        />
        </Flex>
      <VStack spacing={6}>
        <Box
        w="100%"
        maxW="600px"
        mx="auto"
        my="2rem"
        px={{ base: "1rem", md: "2rem" }}
        overflow="hidden"
        aspectRatio={1}
        sx={{
            maskImage: `url('/texas-outline.svg')`,
            maskSize: 'contain',
            maskRepeat: 'no-repeat',
            maskPosition: 'center',
            WebkitMaskImage: `url('/texas-outline.svg')`,
            WebkitMaskSize: 'contain',
            WebkitMaskRepeat: 'no-repeat',
            WebkitMaskPosition: 'center',
        }}
        >
        <Image
            src={BBQImage}
            alt="Blaze and Drizzle Logo"
            w="100%"
            h="100%"
            objectFit="cover"
        />
        </Box>
        <Heading as="h2" size="xl" color="#FAF3E0" fontFamily="'Arvo', serif">
          About Us
        </Heading>

        <Text fontSize="lg" color="#FAF3E0" maxW="3xl" fontFamily="'Arvo', serif">
          Welcome to <strong>Blaze and Drizzle</strong>, proudly founded in Boerne, Texas in 2025. We are your Texas Hill Country destination for slow-cooked, smoky perfection with a bold Texas twist and unforgettable hospitality.
        </Text>

        <Text fontSize="lg" color="#FAF3E0" maxW="3xl" fontFamily="'Arvo', serif">
          From our legendary brisket and fall-off-the-bone ribs to our signature sauces and big Texas sides, everything we serve is crafted with passion, fire, and flavor. Blaze and Drizzle is here to serve up serious smoke.
        </Text>
      </VStack>
    </Box>
  );
};

export default About;

