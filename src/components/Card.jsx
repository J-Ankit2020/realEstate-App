import React from 'react'
import { Box, Image, Avatar, VStack, Heading, Text, Flex, Divider, AspectRatio } from '@chakra-ui/react';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiBed } from 'react-icons/bi'
import { TbBath } from 'react-icons/tb'

const Card = ({ data }) => {
    const { src, bedrooms, bathrooms, rent, name, address } = data;
    return (
        <Box maxW={{ base: 'sm', md: 'xs' }} borderWidth="1px" borderRadius="lg" overflow="hidden" bg="white" shadow="md" mx="auto">
            <AspectRatio >
                <Image src={src} />
            </AspectRatio>
            <VStack px={6} py={2} align="flex-start" spacing={1}>
                <Flex justifyContent="space-between" w="full">
                    <Flex align="center">
                        <Heading size="md" mr="1">{`$${rent}`}</Heading>
                        <Text align="end" fontSize="sm" mt="2">/month</Text>
                    </Flex>
                    <Avatar icon={<AiOutlineHeart />} bg="transparent" cursor="pointer" borderWidth="1px" borderColor="gray.200" color='purple.400' />
                </Flex>
                <Heading size="md">{name}</Heading>
                <Text>{address}</Text>
                <Divider />
                <Flex w="full" align="center" justifyContent="space-between" fontSize="sm" flexDir={{ base: 'row', md: 'column', lg: 'row' }}>
                    <Flex align="center" justifyContent="center">
                        <BiBed />
                        <Text ml={1} >{`${bedrooms} Beds`}</Text>
                    </Flex>
                    <Flex align="center" alignItems="center">
                        <TbBath fontSize="sm" />
                        <Text ml={1} fontSize="xs" >{`${bathrooms} Bathrooms`}</Text>
                    </Flex>
                    <Flex align="center" >
                        <BiBed />
                        <Text ml={1}>5 x 7 m</Text>
                    </Flex>
                </Flex>
            </VStack>
        </Box >
    )
}

export default Card;