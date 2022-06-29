import { ApolloServer, gql } from "apollo-server";
import { users, posts, comments } from "./data.js";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
//add nanoid package
import { nanoid } from "nanoid";

const typeDefs = gql`

  # User type definition
  type User {
    id: ID!
    fullName: String!
    posts: [Post!]!
    comments: [Comment!]!
  }

  input CreateUserInput {
    fullName: String!
  }


  # Post type definition
  type Post {
    id: ID!
    title: String!
    user_id: ID!
    user: User!
    comments: [Comment!]!
  }

  input CreatePostInput {
    title: String!
    user_id: ID!
  }

  # Comment type definition
  type Comment {
    id: ID!
    text: String!
    post_id: ID!
    user: User!
    post: Post!
  }

  input CreateCommentInput {
    text: String! 
    post_id: ID!
    user_id: ID!
  }

  type Query {
    # User
    users: [User!]!
    user(id: ID!): User!

    # Post
    posts: [Post!]!
    post(id: ID!): Post!

    # Comment
    comments: [Comment!]!
    comment(id: ID!): Comment!
  }

  type Mutation {
    # User
    createUser(data: CreateUserInput!): User!
    # Post
    createPost(data: CreatePostInput!): Post!
    # Comment
    createComment(data: CreateCommentInput!): Comment!
  }
`;

const resolvers = {
  Mutation: {
    createUser: (parent, { data }) => {
      const user = {
         id: nanoid(),
         ...data,
        };

      users.push(user);

      return user;
    },
    createPost: (parent, { data }) => {

      const post = {
        id: nanoid(),
        ...data,
      };

      posts.push(post);

      return post;

    },
    createComment: (parent, { data }) => {
      const comment = {
        id: nanoid(),
        ...data,
      };

      comments.push(comment);

      return comment;
    }
  },
  Query: {
    // user
    users: () => users,
    user: (parent, args) => users.find((user) => user.id === args.id),

    // post
    posts: () => posts,
    post: (parent, args) => posts.find((post) => post.id === args.id),

    // comment
    comments: () => comments,
    comment: (parent, args) =>
      comments.find((comment) => comment.id === args.id),
  },
  User: {
    posts: (parent, args) => posts.filter((post) => post.user_id === parent.id),
    comments: (parent) =>
      comments.filter((comment) => comment.user_id === parent.id),
  },
  Post: {
    user: (parent) => users.find((user) => user.id === parent.user_id),
    comments: (parent) =>
      comments.filter((comment) => comment.post_id === parent.id),
  },
  Comment: {
    user: (parent) => users.find((user) => user.id === parent.user_id),
    post: (parent) => posts.find((post) => post.id === parent.post_id),
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

/*  Hata kontrolü

user: (parent, args) => {
      const user = users.find((user) => user.id === args.id);
      if (!user) {
        return new Error("User not found");
      }

      return user;
    },
    
*/
