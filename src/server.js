const { ApolloServer, gql } = require('apollo-server');
const fs = require('fs');
const path = require('path');

// HackerNews1つ1つの投稿
let links = [
  {
    id: 'link-0',
    description: 'GraphQLチュートリアルをUdemyで学ぶ',
    url: 'www.udemy-graphql-tutorial.com',
  },
];

// リゾルバ関数
const resolvers = {
  Query: {
    info: () => 'HackerNewsクローン',
    feed: () => links,
  },

  Mutation: {
    // argsは引数のこと
    post: (parent, args) => {
      let idCount = links.length;

      const link = {
        id: `link-${idCount++}`,
        description: args.description,
        url: args.url,
      };

      links.push(link);
      return link;
    },
  },
};

const server = new ApolloServer({
  typeDefs: fs.readFileSync(path.join(__dirname, 'schema.graphql'), 'utf8'),
  resolvers,
});

server.listen().then(({ url }) => console.log(`${url}でサーバーを起動中・・・`));
