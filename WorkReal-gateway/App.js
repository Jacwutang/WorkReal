import React from 'react';
import EntryFormContainer from './entryFormContainer';
import {Provider} from 'react-redux';
import configureStore from './store/store';

export default class App extends React.Component {
  render() {
    // let store = configureStore();
    // console.log("store",store);
    return (
      <Provider store={configureStore()}>
        <EntryFormContainer />
      </Provider>
    );
  }
}
