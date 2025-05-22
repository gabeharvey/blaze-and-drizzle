/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  Heading,
  Text,
  Image,
  SimpleGrid,
  Button,
} from "@chakra-ui/react";
import { useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';

const Sauce = () => {
  const textColor = "#000000";
  const bgColor = "#F6E0B3";

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
      <Box bg={bgColor} borderRadius="xl" p={8} maxW="6xl" mx="auto">
        <Heading
          as="h2"
          size="lg"
          textAlign="center"
          mb={10}
          fontFamily="'Nosifer', cursive"
        >
          Secret Drizzle Shop
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
              $8
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
              $8
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
                src="/secret-drizzle.jpg" 
                alt="Secret Drizzle Sauce"
                borderRadius="lg"
                mb={4}
                h="250px"
                w="100%"
                objectFit="cover"
                />
                <Heading size="lg" mb={2} fontFamily="'Nosifer', cursive">
                Secret Drizzle Sauce
                </Heading>
                <Text fontSize="md" mb={2}>
                A tantalizing blend of smoky, sweet, and tangy flavors that takes your BBQ to the next level.
                </Text>
            </Box>
            <Text fontWeight="bold" fontSize="xl" color="orange.300">
                $8
            </Text>
            </Box>
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                bg="#000000"
                color="#FFEDD5"
                borderRadius="lg"
                p={4}
                minH="100%"
                >
                <Box>
                    <Image
                    src="/cheetoh-drizzle.png" 
                    alt="Spicy Hot Cheetoh Drizzle"
                    borderRadius="lg"
                    mb={4}
                    h="250px"
                    w="100%"
                    objectFit="cover"
                    />
                    <Heading size="lg" mb={2} fontFamily="'Nosifer', cursive" color="#FF4D00">
                    Spicy Hot Cheetoh Drizzle
                    </Heading>
                    <Text fontSize="md" mb={2}>
                    A bold, fiery drizzle made with real Flamin’ Hot Cheetos, crushed red pepper, and sweet heat. We dare you to try it!
                    </Text>
                </Box>
                <Text fontWeight="bold" fontSize="xl" color="orange.300">
                    $8
                </Text>
                </Box>

        </SimpleGrid>
        <Box
          mt={10}
          py={4}
          px={6}
          bg="#000000"
          borderRadius="lg"
          border="1px solid #F6E0B3"
          boxShadow="0 8px 15px rgba(246, 224, 179, 0.5)"
          textAlign="center"
          maxW={{ base: "100%", md: "50%", lg: "33%" }} 
          mx="auto" 
          minH="100%" 
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Text
            fontFamily="'Nosifer', cursive"
            fontSize={{ base: "xl", md: "2xl" }}
            color="#F6E0B3"
          >
            Drippin' Flavor, Pourin' Love
          </Text>
        </Box>
        <Box textAlign="center" mt={8}>
        <Button
            as={RouterLink}
            to="/"
            sx={{
            background: "linear-gradient(135deg, #3b1f0b, #5c3a0a, #2f1605, #7a4d0c, #3b1f0b)",
            backgroundSize: "400% 400%",
            animation: "flameBackground 12s ease-in-out infinite",
            transition: "background 0.3s ease, color 0.3s ease",
            }}
            color="#F6E0B3"
            fontFamily="Bungee, sans-serif"
            _hover={{ bg: "#000000" }}
            px={8}
            py={6}
            fontSize="lg"
            borderRadius="lg"
            boxShadow="0 6px 12px rgba(0,0,0,0.4)"
        >
            Home
        </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Sauce;
