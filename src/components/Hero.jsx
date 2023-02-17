import React, { useState } from 'react'
import { Heading, Flex, Input, InputRightElement, InputGroup } from '@chakra-ui/react'
import { AiOutlineSearch } from 'react-icons/ai'
const Hero = ({ handleSearch }) => {
    const handleChange = (e) => {
        handleSearch(e.target.value)
    }
    return (
        <Flex w="full" mx="auto" mt={10} p={5} justifyContent="space-around" flexDir={{ base: 'column', md: 'row' }}>
            <Heading size="lg">Search Properties to rent</Heading>
            <InputGroup w="1/2" mt={{ base: '3', md: 0 }} bg="whiteAlpha.600">
                <Input placeholder='Search with Search Bar' onChange={handleChange} />
                <InputRightElement children={<AiOutlineSearch color='green.500' />} />
            </InputGroup>
        </Flex>
    )
}

export default Hero