import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag'
import fetch from 'node-fetch'
import {config as dotenvConfig} from "dotenv";

// Load .env configuration
dotenvConfig();

const URL = 'https://graphql.fauna.com/graphql'

const client = new ApolloClient({
  uri: URL,
  fetch,
  request: operation => {
    operation.setContext({
      headers: {
        "Authorization": "Bearer " + process.env.FAUNADB_SERVER_SECRET
      },
    });
  },
})


exports.handler = (event, context, callback) => {
  const allOpeningFens = gql`
      query FindAllTodos {
          allTodos {
              data {
                  _id
                  title
                  completed
              }
          }
      }
  `;


  client.query(
    {
      query: allOpeningFens,
      fetchPolicy: 'no-cache'
    }
  )
    .then(results => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(results),
      })
    })
    .catch(e => callback(e))
}
