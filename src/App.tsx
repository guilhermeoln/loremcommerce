import React from 'react';
import RoutesApp from './routes';
import { Provider } from 'react-redux';
import store from './store/store';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <RoutesApp />
      </Provider>
    </ChakraProvider>
  );
}

export default App;
