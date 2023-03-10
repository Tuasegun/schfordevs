import React from 'react'
import { ContentCard } from './ContentCard'
import {Box, SimpleGrid } from '@chakra-ui/react'
import { MainContainer } from '@/layouts/MainContainer'
import { BlogContents } from '@/constant'
export const ContentGrid = () => {
  return (
    <MainContainer>
        <Box pt="5.1875rem">
            <SimpleGrid columns={[1, 2, 3]} spacing="30px">
                {
                    BlogContents.map(({image, title, previewText, id}) => {
                        return (
                            <ContentCard
                                key={id}
                                id={id}    
                                title={title}
                                image={image}
                                previewText={previewText}
                            />
                        )
                    })
                }
            </SimpleGrid>
        </Box>
    </MainContainer>
  )
}
