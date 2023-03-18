import { Box, Button, Center, Flex, Heading, HStack, Text, Icon } from '@chakra-ui/react'
import React from 'react'
import checkMarkIcon from './icons/checkMarkIcon'

export default function Pricing() {
    return (
        <Box
            maxW={"800px"}
            mx={{base:"20px", lg:"auto"}}
            mt={"-150px"}
            borderRadius={"15px"}
            overflow="hidden"
            boxShadow={"0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"}>

            <Flex direction={{ base: "column", md: "column", lg: "row" }}>
                <Box bg={"#ded3ff"} p={"60px"} textAlign={"center"}>
                    <Text fontWeight={'bold'} fontSize={"25px"}>
                        Premium Pro
                    </Text>
                    <Heading fontSize={"60px"}>$250</Heading>
                    <Text>Billed just once</Text>
                    <Button w={"200px"} bg={"#8d68e1"} color={"white"} mt={"15px"}>Get Started</Button>
                </Box>
                <Box pt={"55px"} pl={"35px"} pr={"35px"} pb={"55px"} bg={"white"}>
                    <Text>Acces these features when you get this pricing package for your business.</Text>
                    <HStack mt={"15px"}>
                        <Icon as={checkMarkIcon} />
                        <Text>Internatinal calling and messaging API.</Text>
                    </HStack>
                    <HStack mt={"15px"}>
                        <Icon as={checkMarkIcon} />
                        <Text>Additional phone numbers.</Text>
                    </HStack>
                    <HStack mt={"15px"}>
                        <Icon as={checkMarkIcon} />
                        <Text>Automated messages via Zapier.</Text>
                    </HStack>
                    <HStack mt={"15px"}>
                        <Icon as={checkMarkIcon} />
                        <Text>24/7 support and consulting.</Text>
                    </HStack>
                </Box>
            </Flex>
        </Box>
    )
}
