import React from "react";
import { Container, Box, SimpleGrid, Heading,Text, Button,Center, Spacer } from "@chakra-ui/react";

const About = ({children}) => {
    return (
        <>
            <Container maxW="6xl" paddingBottom={{base:"44"}}>
                <Box>
                    <SimpleGrid columns={{base :1, md:2, lg:2}} spacing={10}>
                        <Box width="full">
                            <Text textAlign={{base :"center", md:"left", lg:"left"}} letterSpacing={"-.0.01rem"} lineHeight={"-.0.001rem"} fontSize={{ base :"5", md:"3xl", sm:"xl", lg:"xl"}}>PERSONALITY</Text>
                            <Heading as="h1" textAlign={{base :"center", md:"left", lg:"left"}}  letterSpacing={"-.0.001rem"} lineHeight={"-.0.001rem"} fontSize={{ base :"2xl", md:"3xl", sm:"xl", lg:"6xl"}}>
                                About Me
                            </Heading>
                        </Box>
                        <Box bg="tomato" height="80px" width="full">
                            <Text letterSpacing={"-.0.01rem"} lineHeight={"-.0.001rem"} >
                                A Student who lear
                            </Text>
                        </Box>
                    </SimpleGrid >
                </Box>
            </Container>
        </>
    );
}

export default About;