import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const HomePage = () => {
  return (
    <View style={styles.container}>
      <Text>Rob2d baby</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomePage;