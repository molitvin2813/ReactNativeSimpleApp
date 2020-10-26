
import React, {Component} from 'react';
import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from '@react-navigation/stack';
import {Galery, Photo} from '../containers/components';
import PropTypes from "prop-types";
 const Stack = createStackNavigator();

 export class RootNavigator extends Component  {
  constructor(){
    super();
  }

  render(){
    return (
      <Stack.Navigator >
        <Stack.Screen name={'Galery'} component={Galery} />
        <Stack.Screen name={'Photo'} component={Photo} />
      </Stack.Navigator>
      );
  }


}

RootNavigator.propTypes = {
  images: PropTypes.array
};

