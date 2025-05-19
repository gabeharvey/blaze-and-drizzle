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
          {/* Contact Form */}
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
                mt={4}
                bg="#000000"
                color="#F6E0B3"
                border="1px solid #F6E0B3"
                fontFamily="Bungee, sans-serif"
                _hover={{ bg: "#222222" }}
                type="submit"
              >
                Send Message
              </Button>
            </Box>
          </Box>

          {/* Contact Info */}
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
              Get In Touch
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
    </Box>
  );
};

export default Contact;
