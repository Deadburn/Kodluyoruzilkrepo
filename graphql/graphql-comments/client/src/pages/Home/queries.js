import { gql } from "@apollo/client";


export const GET_POSTS = gql`
  query getAllPosts {
    posts {
      id
      title
      description
      user {
        id
        fullName
        profile_photo
      }
    }
  }
`;