import {
    Box,
    Flex,
    Spacer,
    Link as ChakraLink,
    IconButton,
    useDisclosure,
    Text,
    Image
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaFire } from 'react-icons/fa';
import { useEffect, useRef, useState } from 'react';
import '../App.css';

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [showCloseIcon, setShowCloseIcon] = useState(false);
    const menuRef = useRef();
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1240);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1240);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => setShowCloseIcon(true), 200);
        } else {
            setShowCloseIcon(false);
        }
    }, [isOpen]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                onClose();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    const menuVariants = {
        hidden: { opacity: 0, x: '100%' },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                delayChildren: 0.5,
                staggerChildren: 0.5,
                duration: 0.5,
                ease: 'easeInOut',
            },
        },
        exit: { opacity: 0, x: '100%' },
    };

    return (
        <Box position="sticky" top="0" zIndex="999" bg="transparent">
            <Box
                bg="#000000"
                pb="2rem"
                pt="2.5rem"
                px="2rem"
                fontFamily="'Bungee', sans-serif"
                position="relative"
                zIndex="2"
            >
            <Flex alignItems="center" justifyContent="space-between" wrap="wrap">
                <Flex
                flexDirection={isMobile ? 'column' : 'row'}
                alignItems={isMobile ? 'flex-start' : 'center'}
                >
                <Box
                    maxW={{ base: '220px', md: '260px', lg: '340px' }}
                    w="100%"
                >
                    <Image
                    src="/blaze-and-drizzle-logo-4.png"
                    alt="Logo"
                    w="100%"
                    h="auto"
                    />
                </Box>
                </Flex>
                <Spacer />
                <IconButton
                    aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
                    icon={
                        showCloseIcon ? (
                            <motion.div
                                whileHover={{ scale: 1.2, color: '#F6E0B3' }}
                                animate={{ scale: [1, 1.1, 1], opacity: [1, 0.7, 1] }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    repeatType: 'loop',
                                    ease: 'easeInOut',
                                }}
                                style={{ color: '#F6E0B3' }}
                            >
                                <CloseIcon />
                            </motion.div>
                        ) : (
                            <motion.div
                            whileHover={{ scale: 1.3 }}
                            animate={{
                                scale: [1, 1.1, 1],
                                color: ["#FF4500", "#FFD700", "#FF2400", "#FF6B00", "#FF4500"], 
                                textShadow: [
                                "0 0 5px #FF4500",
                                "0 0 10px #FFD700",
                                "0 0 15px #FF2400",
                                "0 0 20px #FF6B00",
                                "0 0 25px #FF4500",
                                ],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatType: "loop",
                                ease: "easeInOut",
                            }}
                            style={{
                                fontSize: "2.2rem", 
                            }}
                            >
                            <FaFire />
                            </motion.div>
                        )
                    }
                    display={isMobile ? 'block' : 'none'}
                    onClick={isOpen ? onClose : onOpen}
                    variant="unstyled"
                    fontSize="30px"
                    _focus={{ boxShadow: 'none' }}
                    mt="20px"
                    mb="20px"
                />
                <Flex
                    as="ul"
                    display={isMobile ? 'none' : 'flex'}
                    listStyleType="none"
                    ml="auto"
                    alignItems="center"
                    gap="2rem"
                    flex="1"
                    justifyContent="space-evenly"
                    whiteSpace="nowrap"
                >
                    {['ABOUT', 'SOCIAL', 'MENU', 'CONTACT'].map((text, index) => (
                        <ChakraLink
                            key={index}
                            as={ScrollLink}
                            to={text.replace(' ', '-').toLowerCase()}
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                            fontSize="md"
                            fontWeight="extrabold"
                            fontFamily="'Bungee', sans-serif"
                            color="#F6E0B3"
                            position="relative"
                            _hover={{
                                transform: 'scale(1.05)',
                                transition: 'transform 0.2s',
                                color: '#F6E0B3',
                            }}
                            _after={{
                                content: '""',
                                position: 'absolute',
                                bottom: '-0.2rem',
                                left: 0,
                                width: '0%',
                                height: '2px',
                                bg: '#e47608',
                                transition: 'width 0.3s ease',
                            }}
                            _hoverAfter={{ width: '100%' }}
                            style={{ cursor: 'pointer' }}
                        >
                            {text}
                        </ChakraLink>
                    ))}
                </Flex>
                {isOpen && (
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={menuVariants}
                        style={{ position: 'fixed', top: 0, right: 0, width: '70%', height: '100vh', zIndex: 10 }}
                    >
                        <Box
                            ref={menuRef}
                            bg="black"
                            p="1rem"
                            borderTopLeftRadius="30px"
                            borderBottomLeftRadius="30px"
                            color="#F6E0B3"
                            height="100%"
                            boxShadow="0 8px 15px rgba(246, 224, 179, 0.5)"
                        >
                            <Flex alignItems="center" justifyContent="space-between" mb="1rem">
                                <Text fontSize="2xl" ml="20px" fontWeight="bold" fontFamily="'Nosifer', cursive">
                                    Menu
                                </Text>
                                <IconButton
                                    icon={<CloseIcon w={6} h={6} />}
                                    color="#F6E0B3"
                                    aria-label="Close Menu"
                                    variant="outline"
                                    onClick={onClose}
                                    bgColor="transparent"
                                    _focus={{ boxShadow: 'none' }}
                                    _hover={{ bg: 'transparent' }}
                                    size="lg"
                                    fontWeight="bold"
                                    borderColor="transparent"
                                />
                            </Flex>
                            <Flex as="ul" flexDirection="column" alignItems="flex-start" gap="1rem" mt="1rem">
                                {['ABOUT', 'SOCIAL', 'MENU', 'CONTACT'].map((text, index) => (
                                    <ChakraLink
                                        key={index}
                                        as={ScrollLink}
                                        to={text.replace(' ', '-').toLowerCase()}
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={500}
                                        fontSize="lg"
                                        fontFamily="'Bungee', sans-serif"
                                        fontWeight="bold"
                                        color="#F6E0B3"
                                        position="relative"
                                        _hover={{
                                            transform: 'scale(1.05)',
                                            transition: 'transform 0.2s',
                                            color: '#F6E0B3',
                                        }}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        {text}
                                    </ChakraLink>
                                ))}
                            </Flex>
                        </Box>
                    </motion.div>
                )}
            </Flex>
            </Box>
            <Box mt={{ base: '-.1rem', md: '-.2rem' }} w="100%" zIndex="1" overflow="hidden"
                lineHeight="0">
               <Image
    src="/grunge-divider.svg"
    alt="Navbar bottom border"
    w="calc(100% + 6px)" 
    h="auto"
    display="block"
    position="relative"
    ml="-3px"
    style={{ margin: 0, padding: 0 }}
  />
            </Box>
        </Box>
    );
};

export default Navbar;
