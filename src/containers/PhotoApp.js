import React, { Component } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import Galery from "./components/Galery";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {RootNavigator} from '../navigation/RootNavigator'
import { NavigationContainer } from '@react-navigation/native';

class PhotoApp extends Component{

  render() {
    return (
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  }
});



export default PhotoApp;