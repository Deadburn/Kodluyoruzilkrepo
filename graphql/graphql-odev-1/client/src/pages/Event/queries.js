import { gql } from "@apollo/client";


export const GET_EVENT = gql`
query getEvent {
  event(id: "1") {
    id
    title
    desc
    date
    user_id
  }
}
`;