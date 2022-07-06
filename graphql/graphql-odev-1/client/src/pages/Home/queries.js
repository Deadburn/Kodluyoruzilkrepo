import { gql } from "@apollo/client";

export const GET_EVENTS = gql`
  query getAllEvents {
    events {
      id
      title
      desc
      date
    }
  }
`;

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

export const ADD_EVENT = gql`
  mutation createEvent($data: CreateEventInput!) {
    createEvent(data: $data) {
      id
      title
    }
  }
`;
