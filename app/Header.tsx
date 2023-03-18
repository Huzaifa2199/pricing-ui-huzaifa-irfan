import { Box, Center, Heading, Text } from '@chakra-ui/react';
import React from 'react'

export default function Header() {
  return<Box textAlign={{base: 'left', md: 'left', lg:'center'}} bg="#6B46C1" color="white" pt="100px" pb="200px" pr="15px" pl="15px">
    <Heading pb="15px">Simple pricing for your business</Heading>
    <Text>Plans that carefully crafted to suit your business</Text>
    </Box>;
}
