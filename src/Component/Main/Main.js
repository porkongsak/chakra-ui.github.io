import React from 'react'
import { Box,Image,Badge  } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'

const Main = ({ propertys }) => {
  return (
    <div>
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' m={10}>
            <Image src={propertys.imageUrl} alt={propertys.imageAlt} />

            <Box p='6'>
            <Box display='flex' alignItems='baseline'>
                <Badge borderRadius='full' px='2' colorScheme='teal'>
                New
                </Badge>
                <Box
                color='gray.500'
                fontWeight='semibold'
                letterSpacing='wide'
                fontSize='xs'
                textTransform='uppercase'
                ml='2'
                >
                {propertys.beds} beds &bull; {propertys.baths} baths
                </Box>
            </Box>

            <Box
                mt='1'
                fontWeight='semibold'
                as='h4'
                lineHeight='tight'
                isTruncated
            >
                {propertys.title}
            </Box>

            <Box>
                {propertys.formattedPrice}
                <Box as='span' color='gray.600' fontSize='sm'>
                / wk
                </Box>
            </Box>

            <Box display='flex' mt='2' alignItems='center'>
                {Array(5)
                .fill('')
                .map((_, i) => (
                    <StarIcon
                    key={i}
                    color={i < propertys.rating ? 'teal.500' : 'gray.300'}
                    />
                ))}
                <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                {propertys.reviewCount} reviews
                </Box>
            </Box>
            </Box>
        </Box>
    </div>
  )
}

export default Main;