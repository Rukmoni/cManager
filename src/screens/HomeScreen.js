import React,{useEffect} from 'react';
import {View, Text, StyleSheet,ActivityIndicator} from 'react-native';
import{useDispatch, useSelector} from 'react-redux';
import {getPostsfromApi} from '../store/postSlice';



const HomeScreen = () => {
    const dispatch=useDispatch();
    const postsState=useSelector((state)=>state.posts);
    useEffect(()=>{
       dispatch(getPostsfromApi());

    },[])
 
  return (
    <View style={styles.container}>
      <Text>New HomeScreen</Text>
    </View>
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

export default HomeScreen;
