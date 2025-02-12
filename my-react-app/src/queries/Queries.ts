import { gql } from "@apollo/client";

export const GET_POSTS =gql`
    query {
        posts {
            data {
                title
                body
                id
                user {
                    id
                }
            }
            meta {
                totalCount
            }
        }
    }
`;

// Task 1.1 query to return all posts title and body from api
// Task 1.2 extend query to return post id and user id

export const GET_POSTS_BY_USER = gql`
    query GetPostsByUser($userId: ID!) {
    posts(options: { operators: [{ field: "user.id", kind: EQ, value: $userID}]}) {
        data {
            id
            title
            body
            user {
                id
            }
        }
    }
}
`;
// Task 1.3 query to filter by userID