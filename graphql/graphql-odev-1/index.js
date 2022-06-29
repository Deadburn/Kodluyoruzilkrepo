const { ApolloServer, gql } = require("apollo-server");
const { users,
  participants,
  events,
  locations } = require("./data")
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require("apollo-server-core");

const typeDefs = gql`
  # id, username, email 
  type User {
    id: ID!
    username: String!
    email: String!
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
  # id name desc lat lng
  type Location {
    id: ID!
    name: String!
    desc: String!
    lat: Float!
    lng: Float!
  }
  # id user_id event_id
  type Participant {
    id: ID!
    user_id: ID!
    event_id: ID!
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
`;




const resolvers = {
  Query: {
    //user
    users: () => users,
    user: (parent, args) => users.find((user) => user.id.toString() === args.id.toString()),

    //event
    events: () => events,
    event: (parent, args) => events.find((event) => event.id.toString() === args.id.toString()),

    //Location
    locations: () => locations,
    location: (parent, args) => locations.find((location) => location.id.toString() === args.id.toString()),

    //Participant
    participants: () => participants,
    participant: (parent, args) => participants.find((participant) => participant.id.toString() === args.id.toString()),
  },
  Event: {
    user: (parent) => users.find((user) => user.id.toString() === parent.user_id.toString()),
    participants: (parent) => participants.filter((participant) => participant.event_id.toString() === parent.id.toString()),
    location: (parent) => locations.find((location) => location.id.toString() === parent.location_id.toString())
  }
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
