import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getComments,getPostInfo} from '../services/PostService';
import {search} from '../utils/search';
import CommentsList from '../components/CommentsList';
import SearchBox from '../components/SearchBox';
const CommentsScreen = props => {
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [post,setPost]=useState(null);
  const [searchString, setSearchString] = useState('');
  async function fetchComments() {
    let postInfo=await getPostInfo();
    setPost(postInfo);
    let response = await getComments();
    if (response) {
      console.log('response', response);
      setComments(response);
      setFiltered(response);
      setLoading(false);
    }
  }

  useEffect(() => {
    setLoading(true);
    fetchComments();
    //dispatch(getPostsfromApi());
  }, []);

  const onSearch = str => {
    console.log('onSearch');
    setSearchString(str);

    let filteredData = search(comments, str);
    setFiltered(filteredData);
  };

  return (
    <View style={styles.container}>
    {post&&<View style={{padding:10}}><Text style={styles.title}>{post.title?post.title:''}</Text>
    <Text style={styles.info}>Post Id:{post.id?post.id:''}</Text></View>}
      <SearchBox searchString={searchString} onSearch={onSearch} />
      {filtered.length > 0 ? (
        <CommentsList data={filtered} />
      ) : (
        <ActivityIndicator />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    paddingVertical:20,
  },
  title:{
    fontSize:14,
    fontWeight:'bold'
  },
  info:{
    fontSize:12,
    color:'gray'
  }
});

export default CommentsScreen;
