import {useState} from 'react';
import ApolloClient from "apollo-client";
import { ApolloProvider } from '@apollo/client';
import { WebSocketLink } from 'apollo-link-ws';
import { HttpLink } from 'apollo-link-http';
import { split } from 'apollo-link';
import { getMainDefinition } from 'apollo-utilities';
import { InMemoryCache } from 'apollo-cache-inmemory';
import config from './utils/config'
import GameRegistration from './modules/GameRegistration/GameRegistration';
import {ContextProvider} from './utils/Context';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import InfoSnackbar from './modules/InfoSnackbar/InfoSnackbar';
import Game from './modules/Game/Game'

const httpLink = new HttpLink({
  uri: config.HASURA_HTTP_URL,
  headers: {
    'x-hasura-admin-secret': config.HASURA_SECRET
  }
});


const wsLink = new WebSocketLink({
  uri: config.HASURA_WS_URL,
  options: {
    reconnect: true,
    connectionParams: {
      headers: {
        "content-type": "application/json",
        "x-hasura-admin-secret": config.HASURA_SECRET,
      },
    },
  }
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache()
});


const App = () => {
  
  const [managerPasswordModal, setManagerPasswordModal] = useState(false)

  return (
    <ApolloProvider client={client}>
      <ContextProvider>
        <div className='App'>
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<GameRegistration />}/>
          <Route path="game/:gameId" element={<Game/>}/>
                {/* <ManagerPassword open={managerPasswordModal} setOpen={setManagerPasswordModal}/>
                <button onClick={() => setManagerPasswordModal(true)}>bar</button> */}
          </Routes>
        </BrowserRouter>
          <InfoSnackbar/>
          </div>
      </ContextProvider>
    </ApolloProvider>
  );
}

export default App;
