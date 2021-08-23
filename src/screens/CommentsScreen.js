import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getComments} from '../services/PostService';
import {search} from '../utils/search';
import CommentsList from '../components/CommentsList';
import SearchBox from '../components/SearchBox';
const CommentsScreen = props => {
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchString, setSearchString] = useState('');
  async function fetchComments() {
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
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical:20,
  },
});

export default CommentsScreen;
