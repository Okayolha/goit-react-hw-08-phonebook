import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { store, persistor } from 'redux/store';
import { App } from 'components/App';
import GlobalStyles from 'components/GlobalStyles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider withNormalizeCSS withGlobalStyles>
      <Notifications position="top-center" zIndex={2077} />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter basename="/goit-react-hw-08-phonebook">
            <GlobalStyles />
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </MantineProvider>
  </React.StrictMode>
);
