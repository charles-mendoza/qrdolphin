import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Title, withTheme } from 'react-native-paper';

const Home = ({ theme }) => {
  return (
    <View style={[styles.container, { backgroundColor: theme.colors.surface }]}>
      <Title>Home Screen</Title>
    </View>
  );
}

export default withTheme(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
