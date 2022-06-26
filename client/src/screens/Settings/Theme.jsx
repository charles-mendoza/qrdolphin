import React from 'react';
import { Radio, useColorMode } from 'native-base';
import Layout from '../../components/Layout';

const Theme = ({ navigation }) => {
  const {colorMode, toggleColorMode} = useColorMode();

  const setTheme = (value) => {
    if (colorMode !== value) {
      toggleColorMode();
    }
  }

  return (
    <Layout navigation={navigation} p="4">
      <Radio.Group defaultValue={colorMode} onChange={setTheme}>
        <Radio value="light" my="2">
          Light
        </Radio>
        <Radio value="dark" my="2">
          Dark
        </Radio>
        <Radio value="default" my="2">
          System default
        </Radio>
      </Radio.Group>
    </Layout>
  );
}

export default Theme;
