import { withFilter } from "graphql-yoga";

export const Subscription = {
  // User
  userCreated: {
    subscribe: (_, __, { pubsub }) => {
      console.log("_")
      return  pubsub.asyncIterator("userCreated")
    },
  },
  userUpdated: {
    subscribe: (_, __, { pubsub }) => pubsub.asyncIterator("userUpdated"),
  },
  userDeleted: {
    subscribe: (_, __, { pubsub }) => pubsub.asyncIterator("userDeleted"),
  },

  // Event
  eventCreated: {
    subscribe: withFilter(
      (_, __, { pubsub }) => pubsub.asyncIterator("eventCreated"),
      (payload, variables) => {
        // console.log("Payload", payload)
        // console.log("variables", variables)

        return variables.user_id
          ? payload.eventCreated.user_id === variables.user_id
          : true;
      }
    ),
  },
  eventUpdated: {
    subscribe: (_, __, { pubsub }) => pubsub.asyncIterator("eventUpdated"),
  },
  eventDeleted: {
    subscribe: (_, __, { pubsub }) => pubsub.asyncIterator("eventDeleted"),
  },

  // Location
  locationCreated: {
    subscribe: (_, __, { pubsub }) => pubsub.asyncIterator("locationCreated"),
  },
  locationUpdated: {
    subscribe: (_, __, { pubsub }) => pubsub.asyncIterator("locationUpdated"),
  },
  locationDeleted: {
    subscribe: (_, __, { pubsub }) => pubsub.asyncIterator("locationDeleted"),
  },

  // Participant
  participantCreated: {
    subscribe: withFilter(
      (_, __, { pubsub }) => pubsub.asyncIterator("participantCreated"),
      (payload, variables) => {
        return variables.user_id
          ? payload.participantCreated.user_id === variables.user_id
          : true;
      }
    ),
  },
  participantUpdated: {
    subscribe: (_, __, { pubsub }) =>
      pubsub.asyncIterator("participantUpdated"),
  },
  participantDeleted: {
    subscribe: (_, __, { pubsub }) =>
      pubsub.asyncIterator("participantDeleted"),
  },
};
