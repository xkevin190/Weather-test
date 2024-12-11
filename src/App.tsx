
import React from 'react';
import { Provider } from 'react-redux';
import RootNavigator from './Navigator/RootNavigator';
import store from './store';

function App(): React.JSX.Element {
  return (
      <Provider store={store}>
        <RootNavigator />
      </Provider>
  );
}

export default App;
