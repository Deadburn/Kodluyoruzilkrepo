import { GraphQLServer, withFilter } from "graphql-yoga";
import { users, participants, events, locations } from "./data.js";
import { nanoid } from "nanoid";
import pubsub from "./pubsub.js"

const typeDefs = `
  # id, username, email
  type User {
    id: ID!
    username: String!
    email: String!
  }

  input CreateUserInput {
    username: String!
    email: String!
  }

  input UpdateUserInput {
    username: String
    email: String
  }

  # id, title, desc, date, from, to, location_id, user_id
  type Event {
    id: ID!
    title: String!
    desc: String!
    date: String!
    from: String!
    to: String!
    location_id: ID!
    user_id: ID!
    user: User!
    participants: [Participant!]!
    location: Location!
  }

  input CreateEventInput {
    title: String!
    desc: String!
    date: String!
    user_id: ID!
  }

  input UpdateEventInput {
    title: String
    desc: String
    date: String
    user_id: ID
  }

  # id name desc lat lng
  type Location {
    id: ID!
    name: String!
    desc: String!
    lat: Float!
    lng: Float!
  }

  input CreateLocationInput {
    name: String!
    desc: String!
    lat: Float!
    lng: Float!
  }

  input UpdateLocationInput {
    name: String
    desc: String
    lat: Float
    lng: Float
  }

  # id user_id event_id
  type Participant {
    id: ID!
    user_id: ID!
    event_id: ID!
  }

  input CreateParticipantInput {
    user_id: ID
    event_id: ID
  }

  input UpdateParticipantInput {
    user_id: ID
    event_id: ID
  }

  type DeleteAllOutput {
    count: Int!
  }

  type Query {
    #User
    users: [User!]!
    user(id: ID!): User!

    #Event
    events: [Event!]!
    event(id: ID!): Event!

    #Location
    locations: [Location!]!
    location(id: ID!): Location!

    #Participants
    participants: [Participant!]!
    participant(id: ID!): Participant!
  }

  type Mutation {
    # User
    createUser(data: CreateUserInput!): User!
    updateUser(id: ID!, data: UpdateUserInput!): User!
    deleteUser(id: ID!): User!
    deleteAllUsers: DeleteAllOutput!

    # Event
    createEvent(data: CreateEventInput!): Event!
    updateEvent(id: ID!, data: UpdateEventInput!): Event!
    deleteEvent(id: ID!): Event!
    deleteAllEvents: DeleteAllOutput!

    # Location
    createLocation(data: CreateLocationInput!): Location!
    updateLocation(id: ID!, data: UpdateLocationInput!): Location!
    deleteLocation(id: ID!): Location
    deleteAllLocations: DeleteAllOutput!

    # Participant
    createParticipant(data: CreateParticipantInput!): Participant!
    updateParticipant(id: ID!, data: UpdateParticipantInput!): Participant!
    deleteParticipant(id: ID!): Participant!
    deleteAllParticipants: DeleteAllOutput!

  }

  type Subscription {
    userCreated: User!
    userUpdated: User!
    userDeleted: User!

    eventCreated(user_id: ID): Event!
    eventUpdated: Event!
    eventDeleted: Event!

    locationCreated: Location!
    locationUpdated: Location!
    locationDeleted: Location!

    participantCreated(user_id: ID): Participant!
    participantUpdated: Participant!
    participantDeleted: Participant!

  }
`;

const resolvers = {
  Subscription: {
    // User
    userCreated: {
      subscribe: (_, __, { pubsub}) => pubsub.asyncIterator('userCreated')
    },
    userUpdated: {
      subscribe: (_, __, { pubsub}) => pubsub.asyncIterator('userUpdated')
    },
    userDeleted: {
      subscribe: (_, __, { pubsub}) => pubsub.asyncIterator('userDeleted')
    },

    // Event
    eventCreated: {
      subscribe: withFilter(
        (_, __, { pubsub}) => pubsub.asyncIterator('eventCreated'),
        (payload, variables) => {
          // console.log("Payload", payload)
          // console.log("variables", variables)

          return variables.user_id ? (payload.eventCreated.user_id === variables.user_id) : true
        }
      )
    },
    eventUpdated: {
      subscribe: (_, __, { pubsub}) => pubsub.asyncIterator('eventUpdated')
    },
    eventDeleted: {
      subscribe: (_, __, { pubsub}) => pubsub.asyncIterator('eventDeleted')
    },

    // Location
    locationCreated: {
      subscribe: (_, __, { pubsub}) => pubsub.asyncIterator('locationCreated')
    },
    locationUpdated: {
      subscribe: (_, __, { pubsub}) => pubsub.asyncIterator('locationUpdated')
    },
    locationDeleted: {
      subscribe: (_, __, { pubsub}) => pubsub.asyncIterator('locationDeleted')
    },

    // Participant
    participantCreated: {
      subscribe: withFilter(
        (_, __, { pubsub}) => pubsub.asyncIterator('participantCreated'),
        (payload, variables) => {

          return variables.user_id ? (payload.participantCreated.user_id === variables.user_id) : true
        }
      )
    },
    participantUpdated: {
      subscribe: (_, __, { pubsub}) => pubsub.asyncIterator('participantUpdated')
    },
    participantDeleted: {
      subscribe: (_, __, { pubsub}) => pubsub.asyncIterator('participantDeleted')
    }

  },
  Mutation: {
    // User
    createUser: (parent, { data }, { pubsub}) => {
      const user = {
        id: nanoid(),
        ...data,
      };

      users.push(user);
      pubsub.publish('userCreated', { userCreated: user});

      return user;
    },
    updateUser: (parent, { id, data }, { pubsub }) => {
      const user_index = users.findIndex((user) => user.id.toString() === id.toString());

      if (user_index === -1) {
        throw new Error("User not found");
      }

      const updated_user = (users[user_index] = {
        ...users[user_index],
        ...data,
      });
      pubsub.publish('userUpdated', { userUpdated: updated_user });

      return updated_user;
    },
    deleteUser: (parent, { id }, { pubsub}) => {
      const user_index = users.findIndex((user) => user.id.toString() === id.toString());

      if (user_index === -1) {
        throw new Error("User not found");
      }

      const deleted_user = users[user_index];
      users.splice(user_index, 1);
      
      pubsub.publish('userDeleted', { userDeleted: deleted_user });

      return deleted_user;
    },
    deleteAllUsers: (parent, { data }) => {
      const length = users.length;
      users.splice(0, length);

      return {
        count: length,
      };
    },
    createEvent: (parent, { data}, { pubsub }) => {
      const event = {
        id: nanoid(),
        ...data
      };

      events.push(event);
      pubsub.publish('eventCreated', { eventCreated: event });

      return event;
    },
    updateEvent: (parent, { id, data}, { pubsub}) => {
      const event_index = events.findIndex((event) => event.id.toString() === id.toString())

      if (event_index === -1) {
        throw new Error("Event not found");
      }

      const updated_event = events[event_index] = {
        ...events[event_index],
        ...data
      };
      pubsub.publish('eventUpdated', { eventUpdated: updated_event });

      return updated_event;

    },
    deleteEvent: (parent, { id}, { pubsub }) => {
      const event_index = events.findIndex((event) => event.id.toString() === id.toString())

      if(event_index === -1) {
        throw new Error("Event not found");
      }

      const deleted_event = events[event_index];
      events.splice(event_index, 1);
      pubsub.publish('eventDeleted', { eventDeleted: deleted_event });

      return deleted_event;

    },
    deleteAllEvents: () => {
      const length = events.length;
      events.splice(0, length);

      return {
        count: length
      };
    },

    // Location
    createLocation: (parent, { data}, { pubsub }) => {
      const location = {
        id: nanoid(),
        ...data
      };

      locations.push(location);
      pubsub.publish('locationCreated', { locationCreated: location });

      return location;
    },
    updateLocation: (parent, { id, data }, { pubsub }) => {
      const location_index = locations.findIndex((location) => location.id.toString() === id.toString())

      if(location_index === -1) {
        throw new Error("Location not found");
      }

      const updated_location = locations[location_index] = {
        ...locations[location_index],
        ...data
      }
      pubsub.publish('locationUpdated', { locationUpdated: updated_location });

      return updated_location


    },
    deleteLocation: (parent, { id}, { pubsub }) => {
      const location_index = locations.findIndex((location) => location.id.toString() === id.toString())

      const deleted_locations = locations[location_index];
      locations.splice(location_index, 1);
      pubsub.publish('locationDeleted', { locationDeleted: deleted_locations });

      return deleted_locations;

    },
    deleteAllLocations: () => {
      const length = locations.length;
      locations.splice(0, length);

      return {
        count: length
      }
    },
    createParticipant: (parent, { data }, { pubsub }) => {
      const participant = {
        id: nanoid(),
        ...data
      };

      participants.push(participant);
      pubsub.publish('participantCreated', { participantCreated: participant });

      return participant;
    },
    updateParticipant: (parent, { id, data }, { pubsub }) => {
      const participant_index = participants.findIndex((participant) => participant.id.toString() === id.toString())

      if(participant_index === -1) {
        throw new Error("Participant not found");
      }

      const updated_participant = participants[participant_index] = {
        ...participants[participant_index],
        ...data
      }
      pubsub.publish('participantUpdated', { participantUpdated: updated_participant });

      return updated_participant;

    },
    deleteParticipant: (parent, { id }, { pubsub }) => {
      const participant_index = participants.findIndex((participant) => participant.id.toString() === id.toString())

      if(participant_index === -1) {
        throw new Error("Participant not found");
      }

      const deleted_participant = participants[participant_index];
      participants.splice(participant_index, 1);
      pubsub.publish('participantDeleted', { participantDeleted: deleted_participant });

      return deleted_participant;

    },
    deleteAllParticipants: () => {
      const length = participants.length;
      participants.splice(0, length);

      return {
        count: length
      }
    }
  },

  Query: {
    //user
    users: () => users,
    user: (parent, args) =>
      users.find((user) => user.id.toString() === args.id.toString()),

    //event
    events: () => events,
    event: (parent, args) =>
      events.find((event) => event.id.toString() === args.id.toString()),

    //Location
    locations: () => locations,
    location: (parent, args) =>
      locations.find(
        (location) => location.id.toString() === args.id.toString()
      ),

    //Participant
    participants: () => participants,
    participant: (parent, args) =>
      participants.find(
        (participant) => participant.id.toString() === args.id.toString()
      ),
  },
  Event: {
    user: (parent) =>
      users.find((user) => user.id.toString() === parent.user_id.toString()),
    participants: (parent) =>
      participants.filter(
        (participant) =>
          participant.event_id.toString() === parent.id.toString()
      ),
    location: (parent) =>
      locations.find(
        (location) => location.id.toString() === parent.location_id.toString()
      ),
  },
};

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: {
    pubsub,
  },
});

server.start(() => console.log("Server is running on localhost:4000"));
