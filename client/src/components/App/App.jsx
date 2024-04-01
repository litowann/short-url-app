import React, {useState} from 'react';
import {ChakraProvider, Flex, Box} from '@chakra-ui/react'
import UrlForm from '../UrlForm/UrlForm';
import Output from '../Output/Output';

const App = () => {
    const [shortURL, setShortURL] = useState('');

    return (
        <ChakraProvider>
            <Flex
                height="100vh"
                alignItems="center"
                justifyContent="center"
            >
                <Box width="40vw" height="60vh">
                    <UrlForm setShortURL={setShortURL}/>
                    <Output shortURL={shortURL}/>
                </Box>
            </Flex>
        </ChakraProvider>
    );
}

export default App;
