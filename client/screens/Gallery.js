import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Card, Title, Paragraph, Text, withTheme } from 'react-native-paper';

const SampleItem = () => {
  return (
    <Card style={styles.item}>
      <Card.Cover source={require("../assets/qrcode.png")} />
      <Card.Title title="QR Code" subtitle="Test QR Code" />
      <Card.Content>
        <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</Paragraph>
      </Card.Content>
    </Card>
  );
}

const Gallery = ({ theme }) => {
  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.surface }]}>
      <SampleItem />
      <SampleItem />
      <SampleItem />
    </ScrollView>
  );
}

export default withTheme(Gallery);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 14,
  },
  item: {
    elevation: 4,
    marginBottom: 14
  }
});
