import {
  Box,
  Heading,
  Text,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

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
                alt="Beef Ribz"
                borderRadius="lg"
                mb={4}
                h="250px"
                w="100%"
                objectFit="cover"
              />
              <Heading size="lg" mb={2} fontFamily="'Nosifer', cursive">
                Hill Country Beef Ribz
              </Heading>
              <Text fontSize="md" mb={2}>
                Meaty, slow-cooked beef ribs kissed by smoke and fire, covered with your favorite signature drizzle.
              </Text>
            </Box>
            <Text fontWeight="bold" fontSize="xl" color="orange.300">
              $16 1/2 lb
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
                src="/wagyu-ribz.png" 
                alt="Wagyu Beef Ribs"
                borderRadius="lg"
                mb={4}
                h="250px"
                w="100%"
                objectFit="cover"
              />
              <Heading size="lg" mb={2} fontFamily="'Nosifer', cursive">
                Boerne Black Label Wagyu Beef Ribz
              </Heading>
              <Text fontSize="md" mb={2}>
                Indulgently tender and marbled to perfection, our Wagyu beef ribs are slow-smoked over post oak and will melt in your mouth. 
              </Text>
            </Box>
            <Text fontWeight="bold" fontSize="xl" color="orange.300">
              $39 1/2 lb
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
                src="/brizket-drizzle.png"
                alt="Smokin' Brisket"
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
                Our tender beef brisket is smoked low and slow with post oak, infused with rich spices, and finished with your choice of drizzle.
              </Text>
            </Box>
            <Text fontWeight="bold" fontSize="xl" color="orange.300">
              $19 1/2 lb
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
                src="/ribz-drizzle-2.jpg"
                alt="Legendary Ribz"
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
                Slow-smoked, flame-kissed pork ribs rubbed in our fiery blaze blend and covered with your favorite drizzle.
              </Text>
            </Box>
            <Text fontWeight="bold" fontSize="xl" color="orange.300">
              $13 1/2 lb
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
                src="/hill-country-drip.png" 
                alt="Hill Country Drip Mac and Cheese"
                borderRadius="lg"
                mb={4}
                h="250px"
                w="100%"
                objectFit="cover"
              />
              <Heading size="lg" mb={2} fontFamily="'Nosifer', cursive">
                Hill Country Drip
              </Heading>
              <Text fontSize="md" mb={2}>
                Creamy, cheesy mac loaded with slow-smoked flavor and Texas-sized richness — the ultimate BBQ side.
              </Text>
            </Box>
            <Text fontWeight="bold" fontSize="xl" color="orange.300">
              $6 bowl
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
                A rich, buttery pecan pie made with locally sourced Texas pecans — topped with a hint of caramel drizzle.
              </Text>
            </Box>
            <Text fontWeight="bold" fontSize="xl" color="orange.300">
              $5 slice
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
                  src="/chocolate-chip-cookies.png" 
                  alt="Boerne Gold Cookies"
                  borderRadius="lg"
                  mb={4}
                  h="250px"
                  w="100%"
                  objectFit="cover"
                />
                <Heading size="lg" mb={2} fontFamily="'Nosifer', cursive">
                  Boerne Gold Cookies
                </Heading>
                <Text fontSize="md" mb={2}>
                  Fresh-baked with gooey chocolate chips, crisp edges, and finished with a generous drizzle of warm, rich chocolate. Soft, chewy, and full of Boerne flavor in every bite.
                </Text>
              </Box>
              <Text fontWeight="bold" fontSize="xl" color="orange.300">
                $10 half doz
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
                src="/topo-chico.png" 
                alt="Ice Cold Topo Chico"
                borderRadius="lg"
                mb={4}
                h="250px"
                w="100%"
                objectFit="cover"
              />
              <Heading size="lg" mb={2} fontFamily="'Nosifer', cursive">
                Ice Cold Topo-Chico
              </Heading>
              <Text fontSize="md" mb={2}>
                Refreshing sparkling mineral water — served ice cold, perfect to quench your thirst.
              </Text>
            </Box>
            <Text fontWeight="bold" fontSize="xl" color="orange.300">
              $4 bottle
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
                src="/coca-cola.png" 
                alt="Ice Cold Coca-Cola"
                borderRadius="lg"
                mb={4}
                h="250px"
                w="100%"
                objectFit="cover"
              />
              <Heading size="lg" mb={2} fontFamily="'Nosifer', cursive">
                Ice Cold Coca-Cola
              </Heading>
              <Text fontSize="md" mb={2}>
                Classic Coca-Cola chilled to perfection — a timeless refreshment that pairs perfectly with smoky BBQ.
              </Text>
            </Box>
            <Text fontWeight="bold" fontSize="xl" color="orange.300">
              $3 can
            </Text>
          </Box>
        </SimpleGrid>
                <Box
          mt={10}
          maxW="600px"
          mx="auto"
          borderRadius="xl"
          overflow="hidden"
          boxShadow="lg"
          border="20px solid black"
          bg="white"
          textAlign="center"
        >
          <Link to="/sauce">
            <img
              src="/bbq-sauce-3.png"
              alt="BBQ Sauce"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </Link>
          <Text
            fontFamily="'Nosifer', cursive"
            fontSize={{ base: "2xl", md: "3xl" }}
            color="#F6E0B3"
            bgColor="#000000"
            py={4}
          >
            BBQ Sauce
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Menu;
