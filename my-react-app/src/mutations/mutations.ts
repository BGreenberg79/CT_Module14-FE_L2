import { gql } from "@apollo/client";

export const CREATE_POST = gql`
    mutation CreatePost($input: CreatePostInput!){
    createPost(input: $input){
        id
        title
        body
        user {
            id
            name
        }
    }
}
`;

export const UPDATE_POST = gql`
    mutation UpdatePost($id: ID!, $input: UpdatePostInput!) {
        updatePost(id: $id, input: $input){
            id
            title
            body
    }
}
`;

export const DELETE_POST = gql`
    mutation Deleteost($id: ID!) {
    deletePost(id: $id)
    }
`;
// Tasks 2.1-2.3 muttions for create, update, and delete post