import { ApolloServer, gql } from "apollo-server";
import { users, participants, events, locations } from "./data.js";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { nanoid } from "nanoid";

const typeDefs = gql`
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
  }

  input UpdateEventInput {
    title: String
    desc: String
    date: String
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
`;

const resolvers = {
  Mutation: {
    // User
    createUser: (parent, { data }) => {
      const user = {
        id: nanoid(),
        ...data,
      };

      users.push(user);

      return user;
    },
    updateUser: (parent, { id, data }) => {
      const user_index = users.findIndex((user) => user.id.toString() === id.toString());

      if (user_index === -1) {
        throw new Error("User not found");
      }

      const updated_user = (users[user_index] = {
        ...users[user_index],
        ...data,
      });

      return updated_user;
    },
    deleteUser: (parent, { id }) => {
      const user_index = users.findIndex((user) => user.id.toString() === id.toString());

      if (user_index === -1) {
        throw new Error("User not found");
      }

      const deleted_user = users[user_index];
      users.splice(user_index, 1);

      return deleted_user;
    },
    deleteAllUsers: (parent, { data }) => {
      const length = users.length;
      users.splice(0, length);

      return {
        count: length,
      };
    },
    createEvent: (parent, { data}) => {
      const event = {
        id: nanoid(),
        ...data
      };

      events.push(event);
      
      return event;
    },
    updateEvent: (parent, { id, data}) => {
      const event_index = events.findIndex((event) => event.id.toString() === id.toString())

      if (event_index === -1) {
        throw new Error("Event not found");
      }

      const updated_event = events[event_index] = {
        ...events[event_index],
        ...data
      };

      return updated_event;

    },
    deleteEvent: (parent, { id}) => {
      const event_index = events.findIndex((event) => event.id.toString() === id.toString())

      if(event_index === -1) {
        throw new Error("Event not found");
      }

      const deleted_event = events[event_index];
      events.splice(event_index, 1);

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
    createLocation: (parent, { data}) => {
      const location = {
        id: nanoid(),
        ...data
      };

      locations.push(location);

      return location;
    },
    updateLocation: (parent, { id, data }) => {
      const location_index = locations.findIndex((location) => location.id.toString() === id.toString())

      if(location_index === -1) {
        throw new Error("Location not found");
      }

      const updated_location = locations[location_index] = {
        ...locations[location_index],
        ...data
      }

      return updated_location


    },
    deleteLocation: (parent, { id}) => {
      const location_index = locations.findIndex((location) => location.id.toString() === id.toString())

      const deleted_locations = locations[location_index];
      locations.splice(location_index, 1);

      return deleted_locations;

    },
    deleteAllLocations: () => {
      const length = locations.length;
      locations.splice(0, length);

      return {
        count: length
      }
    },
    createParticipant: (parent, { data }) => {
      const participant = {
        id: nanoid(),
        ...data
      };

      participants.push(participant);

      return participant;
    },
    updateParticipant: (parent, { id, data }) => {
      const participant_index = participants.findIndex((participant) => participant.id.toString() === id.toString())

      if(participant_index === -1) {
        throw new Error("Participant not found");
      }

      const updated_participant = participants[participant_index] = {
        ...participants[participant_index],
        ...data
      }

      return updated_participant;

    },
    deleteParticipant: (parent, { id }) => {
      const participant_index = participants.findIndex((participant) => participant.id.toString() === id.toString())

      if(participant_index === -1) {
        throw new Error("Participant not found");
      }

      const deleted_participant = participants[participant_index];
      participants.splice(participant_index, 1);

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

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [
    ApolloServerPluginLandingPageGraphQLPlayground({
      // options
    }),
  ],
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
