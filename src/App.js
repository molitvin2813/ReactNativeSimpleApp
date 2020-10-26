import React, { Component } from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import RootNavigator from "./navigation/RootNavigator"
import PhotoApp from "./containers/PhotoApp";

import reducer from "./redux/reducers/ImageGaleryReducer";

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const storeWithMiddleware = createStoreWithMiddleware(reducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={storeWithMiddleware}>
         <PhotoApp />
      </Provider>
    );
  }
}
