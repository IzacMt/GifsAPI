import { Text, Image, Box,Flex } from "@chakra-ui/react"

export const GifGridItem = ({title,id,url}) => {
    return (
        <>
        <Box borderRadius="md" >

            <Flex justifyContent="center">

                <Image src={url} alt={title}
                boxSize="250px"
                loading="eager"/>
            </Flex>
                <Text align="center">{title}</Text>

        </Box>
        </>
    )
}
