import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import store from './store/store';
import HomeScreen from './screens/HomeScreen';


const App = () => {

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <HomeScreen/>
      </View>
    </Provider>
  );
};

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'yellow',
        justifyContent:'center',
        alignItems:'center'
    }
})


export default App;
