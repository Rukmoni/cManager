import React from 'react';
import {
  View,
  Text,
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
        {/* <Image source={require('../../../../assets/img/search.png')} /> */}
      </TouchableOpacity>
      <TextInput
        value={searchString}
        onChangeText={text => onSearch(text)}
        multiline
        placeholder={'Order ID, mobile number or a name…'}
        placeholderTextColor={{color: '#9B9B9B'}}
        style={styles.textInput}
      />
      {!!searchString && (
        <TouchableOpacity
          style={styles.cancelBtn}>
          {/*  <Image
            source={require('../../../../assets/img/times-circle.png')}
            style={{height: RFValue(14), width: RFValue(14)}}
          /> */}
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
    borderWidth:1,
    borderColor:'gray',
    paddingVertical:10
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
