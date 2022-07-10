import { gql } from "@apollo/client";



export const ADD_EVENT = gql`
mutation createEvent($data: CreateEventInput!) {
  createEvent(data: $data) {
    id
    title
  }
}
`;