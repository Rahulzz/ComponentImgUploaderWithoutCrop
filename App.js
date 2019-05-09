
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import UploadImage from './components/UploadImage';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <UploadImage />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
