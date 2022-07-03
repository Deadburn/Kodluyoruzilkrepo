import path from "path";
import { mergeResolvers } from "@graphql-tools/merge"
import { loadFilesSync } from "@graphql-tools/load-files";


const resolversArray = loadFilesSync(path.join(__dirname), {
  extensions: ['js'],
  extractExports: fileExport => {
    if (typeof fileExport === 'function') {
      return fileExport('query_root')
    }
    return fileExport
    }
});

module.exports = mergeResolvers(resolversArray);


// import Query from "./Query.js";
// import Mutation from "./Mutation.js";
// import Subscription from "./Subscription.js";
// import User from "./User.js";
// import Post from "./Post.js";
// import Comment from "./Comment.js";

// export default {
//     Query,
//     Mutation,
//     Subscription,
//     User,
//     Post,
//     Comment,
// }