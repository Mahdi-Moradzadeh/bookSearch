import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
me {
        _id
        username
        email
        bookCount
        savedBooks {
            bookId
            authors
            image
            description
            title
            link
        }
    }

`;