import { Grid } from '@chakra-ui/react'
import { GifGridItem } from './GifGridItem'

import { Stack,Text } from "@chakra-ui/react"
import { useFetchGif } from '../hooks/useFetchGif'


export const GifGrid = ({category}) => {

    /* 
     *Con el category recibiremos una funcion http
    */

     const {data:images, loading} = useFetchGif(category);

    return (
        <>
            <Stack spacing={3} mt={5} mb={5}>
                <Text fontSize="50px" as="em">{category}</Text>
            </Stack>

            {loading && <p>Loading...</p>} {/* Doble && es un and */}

            <Grid display="flex" flexDirection="row" flexWrap="wrap" gap={10} justifyContent="center">

            {
                images.map( img => (
                    /* * Usamos operador sprent {...img} para mandar todas las propiedades  */
                    <GifGridItem {...img} key={img.id}/>
                ))
            }
            </Grid>
        </>
    )
}

