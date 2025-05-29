/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  Heading,
  Text,
  Image,
  Flex,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Founder = () => {
  const textColor = "#000000";
  const bgColor = "#F6E0B3";
  const navigate = useNavigate();
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box
      minH="100vh"
      px={{ base: 4, md: 12 }}
      py={{ base: 10, md: 20 }}
      bg={bgColor}
      color={textColor}
      fontFamily="Bungee, sans-serif"
    >
      <Box maxW="6xl" mx="auto" textAlign="center">
        <Heading
          as="h2"
          size="lg"
          mb={10}
          fontFamily="'Nosifer', cursive"
        >
          Meet the Pitmaster
        </Heading>

        <Flex
          direction={{ base: "column", md: "row" }}
          gap={10}
          justify="center"
          align="stretch"
          wrap="wrap"
          mb={12}
        >
          {/* Image container with transparent background */}
          <Box
            flex="1"
            p={6}
            fontFamily="'Bungee', sans-serif"
            textAlign="center"
          >
            <Box
              w="100%"
              maxW="300px"
              mx="auto"
              mb={4}
              borderRadius="sm"
              overflow="hidden"
            >
              <Image
                src="/gabe-and-laura.png"
                alt="Gabe"
                w="100%"
                h="auto"
                objectFit="cover"
                borderRadius="lg"
              />
            </Box>
            <Heading size="md" fontFamily="Bungee, sans-serif">
              Martin "Gabe" Harvey
            </Heading>
            <Text fontSize="md" mt={2}>
              Blaze and Drizzle Founder
            </Text>
          </Box>

          {/* Text box with flame gradient */}
          <Box
            flex="1"
            color="#F6E0B3"
            borderRadius="lg"
            border="1px solid #F6E0B3"
            p={6}
            fontFamily="'Bungee', sans-serif"
            sx={{
              background:
                "linear-gradient(135deg, #3b1f0b, #5c3a0a, #2f1605, #7a4d0c, #3b1f0b)",
              backgroundSize: "400% 400%",
              animation: "flameBackground 12s ease-in-out infinite",
              transition: "background 0.3s ease, color 0.3s ease",
            }}
          >
            <Text mb={4}>
              Born and raised in Mississippi and the deep South, Martin "Gabe" Harvey grew up surrounded by the rich, smoky traditions of Southern barbecue. From a young age, he was drawn to the grill, learning the fundamentals from his father that would shape his craft.
            </Text>

            <Text mb={4}>
              After moving to Texas, Gabe developed a deep appreciation for bold, slow-smoked Texas-style BBQ, blending his Southern heritage with the robust flavors of the Lone Star State. His passion for barbecue is rooted in tradition, fueled by fire, and driven by heart.
            </Text>

            <Text mb={4}>
              If you ever get the chance to talk to Gabe, you’ll immediately feel his passion for what he does—and the genuine love he shares for his neighbors.
            </Text>

            <Text mb={4}>
              Gabe is married to his wonderful wife, Laura, and they share three beautiful children—born and bred in Texas. The Harvey Family has fallen in love with the Boerne community and absolutely loves the Texas Hill Country.
            </Text>

            <Text>
              When Gabe is not grilling, he can usually be found writing code or around a sports field. He loves spending time with family.
            </Text>
          </Box>
        </Flex>

        {/* Home button */}
        <Button
          onClick={() => navigate("/")}
          bg="#3b1f0b"
          color="#F6E0B3"
          fontFamily="'Bungee', sans-serif"
          size="lg"
          px={8}
          _hover={{
            bg: "#5c3a0a",
          }}
          sx={{
            background:
              "linear-gradient(135deg, #3b1f0b, #5c3a0a, #2f1605, #7a4d0c, #3b1f0b)",
            backgroundSize: "400% 400%",
            animation: "flameBackground 12s ease-in-out infinite",
            transition: "background 0.3s ease, color 0.3s ease",
            borderRadius: "12px",
            border: "1px solid #F6E0B3",
          }}
          mx="auto"
          display="block"
        >
          Home
        </Button>
      </Box>
    </Box>
  );
};

export default Founder;
