import React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar, Searchbar } from 'react-native-paper';

const GalleryNavigationBar = ({ theme }) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);

  return (
    <Appbar.Header style={{marginHorizontal: 10}}>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.search}
      />
    </Appbar.Header>
  );
}

export default GalleryNavigationBar;

const styles = StyleSheet.create({
  search: {
    width: '100%',
    height: 38,
    borderRadius: 10,
    elevation: 0
  }
});
