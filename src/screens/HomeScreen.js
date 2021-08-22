import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {data} from '../mockData/_postData';

const HomeScreen = () => {
  console.log('data', data);
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
