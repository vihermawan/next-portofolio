import React from "react";
import Image from "next/image";
import { Container, Box, Heading,Text, Grid, GridItem, Button, Center } from "@chakra-ui/react";
import { DownloadIcon } from '@chakra-ui/icons';

const About = ({children}) => {
    return (
        <>
            <Container maxW="6xl" paddingBottom={{base:"44"}}>
                <Box>
                    <Grid
                        h="full"
                        width="full"
                        templateRows="repeat(1, 1fr)"
                        templateColumns="repeat(5, 1fr)"
                        gap={{base :1, md:4}}
                    >
                        <GridItem colSpan={{base :5, md:1, lg:2}} width="full" height="full">
                            <Image
                                src="/images/piki.svg"
                                alt=""
                                quality={100}
                                width={612}
                                height={430}
                                layout="responsive"
                            />
                        </GridItem>
                        <GridItem colSpan={{base :5, md:4, lg:3}} width="full">
                            <Heading as="h1" textAlign={{base :"center", md:"left", lg:"left"}}  letterSpacing={"-.0.001rem"} lineHeight={"-.0.001rem"} fontSize={{ base :"xl", md:"3xl",lg:"6xl"}}>
                                About He
                            </Heading>
                            <Text letterSpacing={"-.0.01rem"} lineHeight={"-.0.001rem"} textAlign={{base :"center", md:"justify", lg:"justify"}} fontSize={{ base :"small", md:"md", lg:"md"}}>
                                His name is Vicky Hermawan, a D4 student of Software Engineering Technology, Gadjah Mada University, his role as FullStack Developer and sometimes a designer or a photographer. Until now, he continues to learn new things related to website development and work together on projects both individually and in teams. He is also open if you want to collaborate to create a product.
                            </Text>
                            <Button leftIcon={<DownloadIcon />} colorScheme="teal" variant="outline" fontSize="md" display={{base:"none",md:"block"}} mt="3">
                                Resume
                            </Button>
                            <Center mt="2.5" display={{base:"flex",md:"none"}}>
                                <Button leftIcon={<DownloadIcon />} colorScheme="teal" variant="outline" fontSize="xs">
                                    Resume
                                </Button>
                            </Center>
                        </GridItem>
                    </Grid>
                </Box>
            </Container>
        </>
    );
}

export default About;