import { Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import Card from './Card'

const CardWrapper = ({ propertyData }) => {
    return (
        <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} w={{ base: "100%", md: '80%' }} h="full" gap={10} px={8} py={4} mx="auto">
            {propertyData.map(data => {
                return < GridItem key={data.id} >
                    <Card data={data} />
                </ GridItem>
            })}
        </Grid >
    )
}

export default CardWrapper