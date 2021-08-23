import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const PostRenderItem = ({post}) => {
  const navigation = useNavigation();
  const {title, body, id} = post.item;
  console.log('PostList', post);
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Comments')}
      style={styles.card}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};
const PostsList = ({data}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        style={styles.listContainer}
        extraData={data}
        keyExtractor={(item, index) => `order_${index}`}
        //renderItem={OrderRenderItem}
        renderItem={(item, index) => <PostRenderItem post={item} />}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    paddingTop: 20,
  },
  card: {
    backgroundColor: '#fff',

    padding: 20,
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 8,
    shadowColor: '#000021',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.27,
    shadowRadius: 5,
    elevation: 5,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default PostsList;
