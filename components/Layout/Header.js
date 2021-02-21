import React from "react";
import { Box, Heading, Flex, Text, useColorMode, IconButton, Button, useDisclosure,Divider } from "@chakra-ui/react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
  } from "@chakra-ui/react"
import { SunIcon, MoonIcon, EmailIcon } from '@chakra-ui/icons';
import Link from 'next/link';

const MenuItems = ({ children }) => (
  <Text mt={{ base: 5, md: 0 }} mr={6} display="block">
    {children}
  </Text>
);

const Header = props => {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
        <Flex
            as="header"
            align="center"
            position="fixed"
            justify="space-between"
            wrap="wrap"
            padding="1.5rem"
            width="full"
            bg={colorMode === "light" ? "white" : "gray.800"}
            color={colorMode === "light" ? "black" : "white"}
            {...props}
        >
            <Flex align="center" mr={5}>
                <Heading as="h1" size="md" letterSpacing={"-.0.01rem"} fontSize={{ base :"10", md:"xl", sm:"xl", lg:"xl"}}>
                    <Link href="/">Vihermawan</Link>
                </Heading>
            </Flex>

            <Box
                display={{ base: "none", md:"flex" }}
                mt={{ base: 4, md: 0 }}
                alignContent="center"
            >
                <MenuItems><Link href="/blog">Blog</Link></MenuItems>
                <MenuItems><Link href="/work">Work</Link></MenuItems>
                <MenuItems><Link href="/experience">Experience</Link></MenuItems>
                <MenuItems><Link href="/collections">Collections</Link></MenuItems>
                <IconButton size="xs" bg="transparent" icon={colorMode === "light" ? <MoonIcon /> : <SunIcon/>} onClick={toggleColorMode}/>
            </Box>
            <Box display={{ base: "block", md: "none",lg: "none" }}>
                <IconButton size="xs" bg="transparent" icon={colorMode === "light" ? <MoonIcon /> : <SunIcon/>} onClick={toggleColorMode}/>
                <Button size="xs" bg="transparent" onClick={onOpen}>👋</Button>
            </Box>
        </Flex>
        <Modal
            isCentered
            onClose={onClose}
            isOpen={isOpen}
            size="xs"
            motionPreset="slideInBottom"
        >
            <ModalOverlay />
            <ModalContent>
                    <ModalBody>
                        <Button colorScheme="transparent" variant="solid" size="xs" color={colorMode === "light" ? "black" : "white"} isFullWidth="true" >
                            <Text color="black"><Link href="/blog">🙌 Blog</Link></Text>
                        </Button>
                        <Divider />
                        <Button colorScheme="transparent" variant="solid" size="xs" color={colorMode === "light" ? "black" : "white"} w="full">
                            <Text color="black"><Link href="/work">🤝 Work</Link></Text>
                        </Button>
                        <Divider />
                        <Button colorScheme="transparent" variant="solid" size="xs" color={colorMode === "light" ? "black" : "white"} w="full">
                            <Text color="black"><Link href="/experience">🎓 Experince</Link></Text>
                        </Button>
                        <Divider />
                        <Button colorScheme="transparent" variant="solid" size="xs" color={colorMode === "light" ? "black" : "white"} w="full">
                            <Text color="black"><Link href="/collections">✌️ Collections</Link></Text>
                        </Button>
                    </ModalBody>
            </ModalContent>
        </Modal>
        </>
    );
};

export default Header;
