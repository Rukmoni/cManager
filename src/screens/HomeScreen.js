import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getPostsfromApi} from '../store/postSlice';
import PostsList from '../components/PostsList';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const postsState = useSelector(state => state.posts);
  const [LoadingState, setLoadingState] = useState('idle');
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    dispatch(getPostsfromApi());
  }, []);

  useEffect(() => {
    setLoadingState(postsState.loading);
    setPosts(postsState.posts);
    console.log(postsState);
  }, [postsState]);

  return (
    <View style={styles.container}>
      {LoadingState === 'fullfilled' ? (
        <PostsList data={posts}/>
      ) : (
        <ActivityIndicator />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
