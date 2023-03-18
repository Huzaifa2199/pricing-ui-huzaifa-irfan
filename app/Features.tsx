import { Box, Flex, HStack, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import iconOne from './icons/iconOne'
import iconThree from './icons/iconThree'
import iconTwo from './icons/iconTwo'

export default function Features() {
    return (
        <Box maxWidth={"750px"} mt={"50px"} mb={"50px"} mx={{base:"15px", lg:"auto"}}>
            <Flex direction={{base:'column', lg:'row'}}>
                <HStack mb={'20px'}>
                    <Icon as={iconOne} />
                    <Text>30 days money back Guarantee.</Text>
                </HStack>
                <HStack mb={'20px'}>
                    <Icon as={iconTwo} />
                    <Text>No setup fees 100% hassle-free.</Text>
                </HStack>
                <HStack mb={'20px'}>
                    <Icon as={iconThree} />
                    <Text>No monthly subscription Pay once and for all.</Text>
                </HStack>
            </Flex>
        </Box>
    )
}
