import React, {useState} from 'react';
import {useMutation} from '@apollo/client';
import {SHORTEN_URL} from '../../graphql/queries';

const App = () => {
    const [longURL, setLongURL] = useState('');
    const [shortenURL] = useMutation(SHORTEN_URL);
    const [shortURL, setShortURL] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const {data} = await shortenURL({
                variables: {longURL},
            });
            setShortURL(data.shortenURL);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="App">
            <h1>URL Shortener</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={longURL}
                    onChange={(e) => setLongURL(e.target.value)}
                    placeholder="Enter long URL"
                    required
                />
                <button type="submit">Shorten URL</button>
            </form>
            {shortURL && (
                <div>
                    <p>Shortened URL:</p>
                    <a href={shortURL} target="_blank" rel="noopener noreferrer">{shortURL}</a>
                </div>
            )}
        </div>
    );
}

export default App;
