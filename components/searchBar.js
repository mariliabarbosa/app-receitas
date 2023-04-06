import * as React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

const SearchBar = (props) => {
  return (
    <View style={styles.searchContainer}>
        <TextInput
            style={styles.search}
            onChangeText={props.onChangeText}
            placeholder= {props.placeholder}
        />    
    </View>
  );
}

const styles = StyleSheet.create({
    searchContainer:{
        marginTop: 20,
        marginBottom: 10
    },
    search:{
        backgroundColor: '#fff',
        height: 60,
        padding: 15,
        borderRadius: 10,
        fontSize: 15,
    },
});

export default SearchBar;