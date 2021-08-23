import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

const SearchBox = ({searchString, onSearch}) => {
  return (
    <View style={styles.content}>
      <TouchableOpacity
        style={{paddingRight: 12, paddingVertical: 8}}
        onPress={() => {}}>
        <Image source={require('../assets/img/search.png')} />
      </TouchableOpacity>
      <TextInput
        value={searchString}
        onChangeText={text => onSearch(text)}
        multiline
        placeholder={'user name, email or body text…'}
        placeholderTextColor={{color: '#9B9B9B'}}
        style={styles.textInput}
      />
      {!!searchString && (
        <TouchableOpacity style={styles.cancelBtn} onPress={()=>onSearch('')}>
          <Image
            source={require('../assets/img/times-circle.png')}
            style={{height: 14, width: 14}}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 12,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    marginHorizontal: 20,
    borderRadius: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    paddingVertical: 10,
  },
  textInput: {
    flex: 1,
    padding: 6,
  },
  cancelBtn: {
    paddingLeft: 20,
    paddingVertical: 12,
    paddingRight: 0,
  },
});
export default SearchBox;
