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

export const POST_SUBSCRIPTION = gql`
  subscription {
    postCreated {
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