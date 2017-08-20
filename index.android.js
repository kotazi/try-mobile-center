/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import Analytics from "mobile-center-analytics";
import Crashes from "mobile-center-crashes";

export default class TryMobileCenter extends Component {

  _onClick() {
    Analytics.trackEvent('clicked', { Category: 'button', Type: 'test'});
  }

  _onClickCrash() {
    Crashes.generateTestCrash();
  }

  render() {
    Analytics.trackEvent('rendered', { Category: 'index'});
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
        <View style={{marginTop: 10}}>
          <Button onPress={this._onClick} title="Track event"/>
        </View>
        <View style={{marginTop: 10}}>
          <Button onPress={this._onClickCrash} title="Test Crash" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('TryMobileCenter', () => TryMobileCenter);
