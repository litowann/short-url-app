import React from "react";
import PropTypes from 'prop-types';
import {Link, Text, Box} from '@chakra-ui/react'

const Output = ({shortURL}) => shortURL && (
    <Box>
        <Text fontSize='xl'>Shortened URL:</Text>
        <Link color='teal.500' href={shortURL} target="_blank" rel="noopener noreferrer">
            {shortURL}
        </Link>
    </Box>
);

Output.propTypes = {
    shortURL: PropTypes.string.isRequired
}

export default Output;