import { gql } from '@apollo/client';

export const SHORTEN_URL = gql`
  mutation ShortenURL($longURL: String!) {
    shortenURL(longURL: $longURL)
  }
`;