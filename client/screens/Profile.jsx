import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Switch, Title, Subheading, withTheme } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { setDarkMode } from '../redux/actions';

const Profile = ({ theme }) => {
  const { darkMode } = useSelector((state) => state.themeReducer);
  const dispatch = useDispatch();

  const toggleTheme = () => {
    dispatch(setDarkMode(!darkMode));
  }

  return (
    <View style={[ styles.container, { backgroundColor: theme.colors.surface }]}>
      <View style={styles.row}>
        <Subheading>Dark Mode</Subheading>
        <Switch value={darkMode} onValueChange={toggleTheme} />
      </View>
      <View style={styles.center}>
        <Title>Profile Screen</Title>
      </View>
    </View>
  );
}

export default withTheme(Profile);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 14,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
