import React from "react";
import { Box, Heading, Flex, Text, useColorMode, IconButton } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import Link from 'next/link';

const MenuItems = ({ children }) => (
  <Text mt={{ base: 5, md: 0 }} mr={6} display="block">
    {children}
  </Text>
);

const Header = props => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            padding="1.5rem"
            bg={colorMode === "light" ? "white" : "gray.800"}
            color={colorMode === "light" ? "black" : "white"}
            {...props}
        >
            <Flex align="center" mr={5}>
                <Heading as="h1" size="md" letterSpacing={"-.0.01rem"}>
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
        </Flex>
    );
};

export default Header;
