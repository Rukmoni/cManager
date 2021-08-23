import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';

const PostRenderItem = ({post}) => {
  const {name, email, body, id} = post.item;
  console.log('PostList', post);
  return (
    <View style={styles.card}>
      <Image
        source={require('../assets/img/avatar.png')}
        style={styles.avatar}
      />
      <View style={styles.info}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
        <Text style={styles.body}>{body}</Text>
      </View>
    </View>
  );
};
const CommentsList = ({data}) => {
  console.log('data', data);
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        style={styles.listContainer}
        extraData={data}
        keyExtractor={(item, index) => `order_${index}`}
        renderItem={(item, index) => <PostRenderItem post={item} />}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
width:'96%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    flex: 1,
	width:'100%',
    backgroundColor: '#fff',
	paddingTop: 20,
	padding:10,

  },
  card: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    

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
   
	paddingVertical: 12,

  },
  avatar: {width: 100, height: 100},
  info:{
	  marginLeft:10,
	  width:'68%',
	  

  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  email:{
	fontSize: 12,
	color:'gray'

  },
  body:{
	  marginTop:5,
	fontSize: 12,
	textAlign:'left'

  }
});

export default CommentsList;
