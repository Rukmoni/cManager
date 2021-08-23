import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import store from './store/store';
import HomeScreen from './screens/HomeScreen';
import RootNavigator from './navigation/RootNavigator';

const App = () => {

  return (
    <Provider store={store}>
     
        <RootNavigator />
      
    </Provider>
  );
};

const styles=StyleSheet.create({
    container:{
        flex:1,
       
        justifyContent:'center',
        alignItems:'center'
    }
})


export default App;
