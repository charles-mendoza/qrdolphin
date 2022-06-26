import React from 'react';
import PressableRow from '../../components/PressableRow';
import Layout from '../../components/Layout';

const About = ({ navigation }) => {
  return (
    <Layout navigation={navigation}>
      <PressableRow title="Data Policy" />
      <PressableRow title="Terms of Use" />
      <PressableRow title="Open source libraries" />
    </Layout>
  );
}

export default About;
