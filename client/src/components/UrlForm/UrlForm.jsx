import React, {useState} from "react";
import {
    FormControl,
    Input,
    Button,
    FormErrorMessage,
    Text
} from '@chakra-ui/react'
import {useMutation} from "@apollo/client";
import PropTypes from 'prop-types';
import {Formik, Form} from 'formik';
import {SHORTEN_URL} from '../../graphql/queries';
import {urlValidationSchema} from '../../validation/schema';

const UrlForm = ({setShortURL}) => {
    const [longURL, setLongURL] = useState('');
    const [shortenURL] = useMutation(SHORTEN_URL);

    const handleSubmit = async () => {
        try {
            const {data} = await shortenURL({
                variables: {longURL},
            });
            setShortURL(data.shortenURL);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleChange = ({target: {value}}) => setLongURL(value);

    return (
        <Formik
            initialValues={{url: ''}}
            validationSchema={urlValidationSchema}
            onSubmit={handleSubmit}
        >
            {({errors, touched, handleSubmit: onSubmit, handleChange: onChange}) => (
                <FormControl marginY={5}>
                    <Text fontSize='4xl' textAlign="center">URL Shortener</Text>
                    <Form onSubmit={onSubmit}>
                        <FormControl isInvalid={errors.url && touched.url} marginY={10} height={7}>
                            <Input
                                type="text"
                                value={longURL}
                                onChange={(e) => {
                                    handleChange(e);
                                    onChange(e)
                                }}
                                placeholder="Enter long URL"
                                name="url"
                                required
                            />
                            <FormErrorMessage>{errors.url}</FormErrorMessage>
                        </FormControl>
                        <Button mt={4} colorScheme="teal" type="submit" width="100%">
                            Generate short URL
                        </Button>
                    </Form>
                </FormControl>
            )}
        </Formik>
    );
}

UrlForm.propTypes = {
    setShortURL: PropTypes.func.isRequired
};

export default UrlForm;