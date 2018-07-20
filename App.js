import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient ,{ createNetworkInterface, addTypename } from 'apollo-client';
import MainNavigator from './MainNavigator';

const networkInterface = createNetworkInterface({
  uri: 'http://mt.com.mm/graphql',
  opts:{
    credentials: 'same-origin'
  },
  transportBatching: true
});

const apolloClient = new ApolloClient(Object.assign({}, {
    queryTransformer: addTypename,
    dataIdfromObject: (result) => {
      if (result.id && result.__typename) {
        return result.__typename + result.id;
      }
      return null;
    }
},{
  networkInterface:networkInterface,
  ssrForceFetchDelay: 100,
}));

//const apolloClient = new ApolloClient();

const App = () =>{
  return(
    <ApolloProvider client={apolloClient}>
        <MainNavigator/>
    </ApolloProvider>
  )
}

export default App;