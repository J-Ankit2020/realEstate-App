import { Button, Divider, Heading, HStack, Input, Select, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const FilterBox = ({ selectHandler }) => {
    return (
        <HStack bg="white" px={{ base: 4, md: 10 }} py={{ base: 2, md: 5 }} w={{ md: '80%', base: '100vw' }} mx='auto' h="80px" justifyContent="space-between" rounded="lg"  >
            <VStack spacing={1}>
                <Text fontSize={{ base: 'xs', md: 'md' }}>Location</Text>
                <Heading size={{ base: 'xs', md: 'sm' }}>New York, USA</Heading>
            </VStack>
            <Divider orientation='vertical' borderColor="gray.300" />
            <VStack spacing={1}>
                <Text fontSize={{ base: 'xs', md: 'md' }}>Bedrooms</Text>
                <Select variant="filled" bg="transparent" fontWeight="bold" size={{ base: 'xs', md: 'md' }}
                    fontSize={{ base: 'xs', md: 'md' }} onChange={(e) => selectHandler(e.target.value, 'beds')}>
                    <option value="all" defaultChecked>All</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3 or More</option>
                </Select>
            </VStack>
            <Divider orientation='vertical' borderColor="gray.300" />
            <VStack spacing={1}>
                <Text fontSize={{ base: 'xs', md: 'md' }}>Price</Text>
                <Select variant="filled" bg="transparent" fontWeight="bold" size={{ base: 'xs', md: 'md' }}
                    fontSize={{ base: 'xs', md: 'md' }} onChange={(e) => selectHandler(e.target.value, 'price')}>
                    <option value="all" defaultChecked>All</option>
                    <option value='lowest'>$500 - $2,000</option>
                    <option value='medium'>$2,000 - $3,000</option>
                    <option value='highest'>More than $3,000</option>
                </Select>
            </VStack>
            <Divider orientation='vertical' borderColor="gray.300" fontWeight="bold" />
            <VStack spacing={1}>
                <Text fontSize={{ base: 'xs', md: 'md' }} size={{ base: 'xs', md: 'md' }} >Property Type</Text>
                <Select variant="filled" bg="transparent" fontWeight="bold" onChange={(e) => selectHandler(e.target.value, 'type')}>
                    <option value="all">All</option>
                    <option value='house'>House</option>
                    <option value='apartment'>Apartment</option>
                    <option value='condo'>Condo</option>
                </Select>
            </VStack>
        </HStack >
    )
}

export default FilterBox