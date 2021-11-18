import {Box} from '@chakra-ui/react'

const Section = ({num}) => {
    return (
        <>
            <Box
            color={'black'}

            pt={5}
            px={20}
            >
                <h1>Section {num}</h1>
            </Box>
        </>
    )
}

export default Section