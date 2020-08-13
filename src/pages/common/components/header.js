import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Icon } from 'react-native-elements';


export default ({ title }) => {
  return (
    <View style={[styles.container]}>
      <Text>{title || '标题'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#07c160',
    height: 40,
  },
});
