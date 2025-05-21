/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  Heading,
  Text,
  Input,
  Textarea,
  Button,
  SimpleGrid,
  FormControl,
  FormLabel,
  useToast,
} from "@chakra-ui/react";
import emailjs from "emailjs-com";
import { useRef } from "react";

const Contact = () => {
  const textColor = "#000000";
  const bgColor = "#F6E0B3";
  const form = useRef();
  const toast = useToast();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_chnxs9o", 
        "template_9lth3qc", 
        form.current,
        "OsmvrvTNk66UEd-sC"
      )
      .then(
        () => {
        toast({
        duration: 4000,
        isClosable: true,
        status: "success",
        position: "bottom",
        render: () => (
            <Box
            padding="12px 16px"
            bg="green.500"
            color="white"
            borderRadius="md"
            fontFamily="'Nosifer', cursive"
            boxShadow="lg"
            textAlign="center"
            >
            <Text fontWeight="bold">Message sent!</Text>
            <Text>We'll get back to you soon.</Text>
            </Box>
        ),
        });
          form.current.reset();
        },
        (error) => {
        toast({
        duration: 4000,
        isClosable: true,
        status: "error",
        position: "bottom",
        render: () => (
            <Box
            padding="12px 16px"
            bg="red.500"
            color="white"
            borderRadius="md"
            fontFamily="'Nosifer', cursive"
            boxShadow="lg"
            textAlign="center"
            >
            <Text fontWeight="bold">Failed to send</Text>
            <Text>Please try again later.</Text>
            </Box>
        ),
        });
          console.error("EmailJS Error:", error);
        }
      );
  };

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
          Contact
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Box as="form" ref={form} onSubmit={sendEmail}>
            <FormControl mb={4}>
              <FormLabel fontFamily="Bungee, sans-serif">Name</FormLabel>
              <Input
                name="name"
                placeholder="Your Name"
                bg="white"
                fontFamily="Bungee, sans-serif"
                required
              />
            </FormControl>

            <FormControl mb={4}>
              <FormLabel fontFamily="Bungee, sans-serif">Email</FormLabel>
              <Input
                type="email"
                name="email"
                placeholder="you@example.com"
                bg="white"
                fontFamily="Bungee, sans-serif"
                required
              />
            </FormControl>

            <FormControl mb={4}>
              <FormLabel fontFamily="Bungee, sans-serif">Message</FormLabel>
              <Textarea
                name="message"
                placeholder="Write your message..."
                bg="white"
                fontFamily="Bungee, sans-serif"
                required
              />
            </FormControl>

            <Box textAlign="center">
              <Button
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
                type="submit"
              >
                Send Message
              </Button>
            </Box>
          </Box>
          <Box
            bg="#000000"
            color="#F6E0B3"
            borderRadius="lg"
            p={6}
            border="1px solid #F6E0B3"
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <Heading
              size="lg"
              mb={4}
              fontFamily="'Nosifer', cursive"
              textAlign="center"
            >
              Contact Info
            </Heading>
            <Text fontSize="md" mb={2}>
              Have questions about the drizzle? Reach out and we’ll fire up a reply!
            </Text>
            <Text fontSize="md" mb={1}>
              ✉️ Email: harvey7@gmail.com
            </Text>
            <Text fontSize="md" mb={1}>
              📱 Phone: (210) 219-3117
            </Text>
            <Text fontSize="md">
              📌 Location: 27911 Caymus Cv, Boerne, TX 78015
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
          <Box
      mt={10}
      maxW="600px"
      mx="auto"
      borderRadius="xl"
      overflow="hidden"
      boxShadow="lg"
      border="none"
    >
      <img
        src="/boerne-pic.png"
        alt="Boerne"
        style={{ width: "100%", height: "auto", display: "block" }}
      />
    </Box>
    </Box>
  );
};

export default Contact;
