/* eslint-disable react/no-unescaped-entities */
import { Box, Heading, HStack, Link, Icon, Text } from "@chakra-ui/react";
import {
  FaFacebook,
  FaInstagram,
  FaSnapchatGhost,
  FaTiktok,
} from "react-icons/fa";

const Social = () => {
  const textColor = "#000000";
  const bgColor = "#F6E0B3";

  return (
    <Box
      bg={bgColor}
      color={textColor}
      fontFamily="Bungee, sans-serif"
      px={{ base: 4, md: 12 }}
      py={{ base: 10, md: 20 }}
      minH="60vh"
      textAlign="center"
    >
      <Heading as="h2" size="lg" mb={10} fontFamily="'Nosifer', cursive">
        Follow Us
      </Heading>
      <HStack spacing={10} justify="center">
        <Link href="https://www.facebook.com/people/Blaze-and-Drizzle/61575836171289/?mibextid=wwXIfr&rdid=slL0PJ5Woz74jII3&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1A1CkSpPj8%2F%3Fmibextid%3DwwXIfr" isExternal aria-label="Facebook">
          <Icon
            as={FaFacebook}
            boxSize={10}
            color="#1877F2" 
            transition="transform 0.2s"
            _hover={{ transform: "scale(1.1)" }}
          />
        </Link>
        <Link href="https://www.instagram.com/blaze_and_drizzle" isExternal aria-label="Instagram">
          <Icon
            as={FaInstagram}
            boxSize={10}
            color="#E4405F" 
            transition="transform 0.2s"
            _hover={{ transform: "scale(1.1)" }}
          />
        </Link>
        <Link href="https://www.snapchat.com" isExternal aria-label="Snapchat">
          <Icon
            as={FaSnapchatGhost}
            boxSize={10}
            color="#FFFC00" 
            transition="transform 0.2s"
            _hover={{ transform: "scale(1.1)" }}
          />
        </Link>
        <Link href="https://www.tiktok.com/@blaze_and_drizzle?lang=en" isExternal aria-label="TikTok">
          <Icon
            as={FaTiktok}
            boxSize={10}
            color="#69C9D0" 
            transition="transform 0.2s"
            _hover={{ transform: "scale(1.1)" }}
          />
        </Link>
      </HStack>
      
      <Box
        mt={10}
        py={4}
        px={6}
        bg="#000000"
        borderRadius="md"
        display="inline-block"
        boxShadow="0 8px 15px rgba(246, 224, 179, 0.5)"
      >
        <Text
          fontFamily="'Nosifer', cursive"
          fontSize={{ base: "xl", md: "2xl" }}
          color="#F6E0B3"
        >
          Boerne Blazed and Drippin'
        </Text>
      </Box>
    </Box>
  );
};

export default Social;
