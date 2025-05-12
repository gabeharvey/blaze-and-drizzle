import {
    Box,
    Flex,
    Heading,
    Spacer,
    Link as ChakraLink,
    IconButton,
    useDisclosure,
    Text,
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';
import { CgMenuGridO } from 'react-icons/cg';
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
        <Box
            w="100%"
            position="sticky"
            top="0"
            zIndex="999"
            bgGradient="linear(to-b, #2E2E2E, #8B0000, #5C2E00)"
            borderBottomLeftRadius="20px"
            borderBottomRightRadius="20px"
            pb="2rem"
            pt="2.5rem"
            px="2rem"
            boxShadow="0 8px 15px rgba(0, 0, 0, 0.5)"
            fontFamily="'Black Ops One', system-ui"
        >
            <Flex alignItems="center" justifyContent="space-between" wrap="wrap">
                <Flex
                    flexDirection={isMobile ? 'column' : 'row'}
                    alignItems={isMobile ? 'flex-start' : 'center'}
                >
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}  
                        animate={{ opacity: 1, y: 0 }}  
                        transition={{ duration: 1, ease: 'easeOut' }}  
                    >
                <Heading
                    fontSize={{ base: '2xl', md: '3xl' }}
                    fontFamily="'Black Ops One', system-ui"
                    fontWeight="extra bold"
                    letterSpacing="wider"
                    mb={4}
                    className="shimmer-text"
                    color="#FAF3E0"
                    sx={{
                        textShadow: '2px 2px 3px #EA2127',
                        WebkitTextStroke: '0.5px #EA2127',
                    }}
                >
                    Blaze and Drizzle
                </Heading>
                    </motion.div>
                </Flex>
                <Spacer />
                <IconButton
                    aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
                    icon={
                        showCloseIcon ? (
                            <motion.div
                                whileHover={{ scale: 1.2, color: '#FAF3E0' }}
                                animate={{ y: [0, -5, 0] }}
                                transition={{ duration: 0.5, repeat: Infinity, repeatType: 'loop' }}
                                style={{ color: '#FAF3E0' }}
                            >
                                <CloseIcon />
                            </motion.div>
                        ) : (
                            <motion.div
                                whileHover={{ scale: 1.2, color: '#FAF3E0' }}
                                animate={{ y: [0, -5, 0] }}
                                transition={{ duration: 0.5, repeat: Infinity, repeatType: 'loop' }}
                                style={{ color: '#FAF3E0' }}
                            >
                                <CgMenuGridO />
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
                    {['ABOUT', 'MENU'].map((text, index) => (
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
                            fontFamily="'Arvo', system-ui"
                            color="#FAF3E0"
                            position="relative"
                            _hover={{ transform: 'scale(1.05)', transition: 'transform 0.2s', color: '#FAF3E0' }}
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
                            bgGradient="linear(to-b, #2E2E2E, #8B0000, #5C2E00)"
                            p="1rem"
                            borderTopLeftRadius="30px"
                            borderBottomLeftRadius="30px"
                            color="#FAF3E0"
                            height="100%"
                            boxShadow="0 0 20px rgba(0, 0, 0, 0.9)"
                        >
                            <Flex alignItems="center" justifyContent="space-between" mb="1rem">
                                <Text fontSize="2xl" ml="20px" fontWeight="bold">
                                    Menu
                                </Text>
                                <IconButton
                                    icon={<CloseIcon w={6} h={6} />}
                                    color="#FAF3E0"
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
                            {/* <Divider /> */}
                            <Flex as="ul" flexDirection="column" alignItems="flex-start" gap="1rem" mt="1rem">
                                {['ABOUT', 'MENU'].map((text, index) => (
                                    <ChakraLink
                                        key={index}
                                        as={ScrollLink}
                                        to={text.replace(' ', '-').toLowerCase()} 
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={500}
                                        fontSize="lg"
                                        fontFamily="'Arvo', system-ui"
                                        fontWeight="bold"
                                        color="#FAF3E0"
                                        position="relative"
                                        _hover={{ transform: 'scale(1.05)', transition: 'transform 0.2s', color: '#FAF3E0' }}
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
    );
};

export default Navbar;