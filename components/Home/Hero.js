import React from "react";
import { Container, Box, Heading, Link, Text,Stack, Button,Center } from "@chakra-ui/react";
import { DownloadIcon } from '@chakra-ui/icons';
import { FaTwitter } from 'react-icons/fa';

const Hero = ({children}) => {
    return (
        <>
            <Container maxW="7xl" centerContent mt={{base:"28", md:"28", lg:"0"}} padding={{ base :"7", md:"20", lg:"40"}}  alignItems="center" justifyContent="center">
                <Box>
                    <Heading as="h1" textAlign="center" letterSpacing={"-.0.001rem"} lineHeight={"-.0.001rem"} fontSize={{ base :"xl", md:"3xl", sm:"xl", lg:"6xl"}}>
                        Welcome to Vihermawan's, He is a  <Link color="teal.500" href="#">Developer</Link> also <Link color="teal.500" href="#">Student</Link> who love to learn new things 
                    </Heading>
                    <Text textAlign="center" mt={{ base :"1.5"}} fontSize={{ base :"small", md:"xl", lg:"xl"}}> He is a workaholic person, and have 2 experience as Fullstack Developer. If you have any chance to collaborate or project he will glad to hear it.</Text>
                    <Center mt="2.5">
                        <Stack direction="row" spacing={4}>
                            <Button leftIcon={<DownloadIcon />} colorScheme="teal" variant="solid">
                                Resume
                            </Button>
                            <Button rightIcon={<FaTwitter />} colorScheme="teal" variant="outline">
                                Connect
                            </Button>
                        </Stack>
                    </Center>
                </Box>
            </Container>
        </>
    );
}

export default Hero;