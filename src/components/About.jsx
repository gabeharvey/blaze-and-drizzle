import { Box, Heading, Text, VStack, Image, Flex } from "@chakra-ui/react";
import { Link as RouterLink } from 'react-router-dom';
import BBQImage from "/ribz-drizzle.png";
import TexasFlagGIF from "/texas-flag.gif"; 

const About = () => {
  return (
    <Box
      bg="#F6E0B3"
      py={{ base: 10, md: 16 }}
      px={{ base: 6, md: 20 }}
      minH="100vh"
      textAlign="center"
    >
    <Flex
      direction="column"
      align="center"
      justify="center"
      mb={8}
      fontFamily="'Nosifer', cursive"
      fontWeight="bold"
      color="#000000"
    >
    <Flex
      align="center"
      justify="center"
      fontSize={{ base: "3xl", md: "4xl" }}
      flexWrap="wrap"
      textAlign="center"
      mb={4}
    >
      <Text as="span" mr={2} textShadow="0px 4px #F6E0B3">
        We
      </Text>
      <Text
        as="span"
        color="#F6E0B3"
        fontSize={{ base: "4xl", md: "5xl" }}
        mx={1}
        animation="heartbeat 1.5s infinite"
        textShadow="0px 0px #F6E0B3"
      >
        ❤️
      </Text>
      <Text
        as="span"
        mx={2}
        _hover={{ transform: "scale(1.05)", transition: "transform 0.3s" }}
        textShadow="0px 4px #F6E0B3"
      >
        Boerne
      </Text>
    </Flex>
    <Image
      src={TexasFlagGIF}
      alt="Waving Texas Flag"
      boxSize={{ base: "80px", md: "100px" }}
      animation="floatFlag 3s ease-in-out infinite"
    />
    {/* <Box
      position="relative"
      boxSize={{ base: "67px", md: "87px" }}
      mt={4}
      sx={{
        animation: 'fullFlip 16s linear infinite',
        transformStyle: 'preserve-3d',
        transformOrigin: 'center',
      }}
    >
      <Image
        src="/mississippi-flag.jpg"
        alt="Front"
        position="absolute"
        inset="0"
        backfaceVisibility="hidden"
        w="100%"
        h="100%"
      />
      <Image
        src="/mississippi-flag.jpg"
        alt="Back"
        position="absolute"
        inset="0"
        transform="rotateY(180deg)"
        w="100%"
        h="100%"
      />
    </Box> */}
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
        <Heading as="h2" size="lg" color="#000000" fontFamily="'Nosifer', cursive">
          About Us
        </Heading>
        <Text fontSize="lg" color="#000000" maxW="3xl" fontFamily="'Bungee', sans-serif">
          Welcome to <Box as="span" fontWeight="bold">Blaze & </Box>
          <Box as="span" fontFamily="'Nosifer', cursive" fontWeight="bold">Drizzle</Box>,
          proudly founded in Boerne, Texas in 2025. We are your Texas Hill Country destination for slow-cooked, smoky perfection with a bold Texas twist and unforgettable hospitality.
        </Text>

        <Text fontSize="lg" color="#000000" maxW="3xl" fontFamily="'Bungee', sans-serif" mt={4}>
          From our legendary brizket and fall-off-the-bone ribz to our signature sauces,
          everything we serve is crafted with passion, fire, and flavor.
          <Box as="span" fontWeight="bold"> Blaze & </Box>
          <Box as="span" fontFamily="'Nosifer', cursive" fontWeight="bold">Drizzle</Box> is here to serve up serious smoke.
        </Text>
        <Text fontSize="lg" color="#000000" maxW="3xl" fontFamily="'Bungee', sans-serif" mt={4}>
          We love to support local small businesses and we source practically everything from the Boerne area.
        </Text>
        <Flex justify="center" mt={4}>
          <Box
            as={RouterLink}
            to="/pitmasters"
            px={6}
            py={3}
            fontWeight="bold"
            fontFamily="'Bungee', sans-serif"
            color="#F6E0B3"
            textAlign="center"
            sx={{
              background:
                "linear-gradient(135deg, #3b1f0b, #5c3a0a, #2f1605, #7a4d0c, #3b1f0b)",
              backgroundSize: "400% 400%",
              animation: "flameBackground 12s ease-in-out infinite",
              transition: "background 0.3s ease, color 0.3s ease",
              borderRadius: "12px",
              border: "1px solid #F6E0B3",
              _hover: {
                transform: "scale(1.05)",
              },
            }}
          >
            Meet the Pitmasters
          </Box>
        </Flex>
              <Flex justify="center" mt={12}>
        <Box
          bg="#FFFFFF"
          borderRadius="md"
          overflow="hidden"
          boxShadow="md"
          maxW="600px"
          w="full"
          border="20px solid black"
        >
          <Image
            src="/jack-burton-3.png"
            alt="First"
            objectFit="cover"
            width="100%"
            height="auto"
          />
        </Box>
      </Flex>
      </VStack>
    </Box>
  );
};

export default About;
