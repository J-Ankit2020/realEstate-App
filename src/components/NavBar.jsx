import React, { useState } from 'react'
import { chakra, Flex, Heading, HStack, Button, Select } from '@chakra-ui/react'
import MobileDrawer from './MobileDrawer'
const NavBar = () => {

    return (
        <chakra.header bg="white">
            <Flex w="full" p={4} justifyContent="space-between" align="center">
                <Heading size="lg">LOGO</Heading>
                <HStack spacing={4} display={{ base: 'none', md: 'flex' }}>
                    <Button variant="ghost" as="a" href='#' _hover={{ bg: "#EBEAFA", color: '#9C94D1' }} >Rent</Button>
                    <Button variant="ghost" as="a" href='#' _hover={{ bg: "#EBEAFA", color: '#9C94D1' }}>Buy</Button>
                    <Select variant="filled" bg="transparent" placeholder='Manage Property' fontWeight="500" _hover={{
                        bg: "#EBEAFA", color: '#9C94D1'
                    }} p={0} cursor="pointer">
                        <option value='option1'>Option 1</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                    </Select>
                    <Select variant="filled" placeholder='Resources' fontWeight="500" bg="transparent" _hover={{
                        bg: "#EBEAFA", color: '#9C94D1'
                    }} cursor="pointer">
                        <option value='option1'>Option 1</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                    </Select>
                    <Button variant="ghost" as="a" href='#' _hover={{ bg: "#EBEAFA", color: '#9C94D1' }}>Rent</Button>
                </HStack>
                <HStack spacing={3}>
                    <Button variant="outline" _hover={{ bg: "#EBEAFA", color: '#9C94D1' }}>Login</Button>
                    <Button variant="solid" color="#EBEAFA" bg='#7369F3'>Sign up</Button>
                    <MobileDrawer />
                </HStack>
            </Flex>
        </chakra.header >
    )
}

export default NavBar