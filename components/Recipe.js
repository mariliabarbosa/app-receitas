import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image';

const Recipe = (props) => {
    return (
    <View style={styles.item}>
        <Image source={props.image} style={styles.image} contentFit="cover"/>
        <Text style={styles.name}>{props.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#fff',
        padding: 15,
        height: 170,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    image: {
        width: '40%', 
        height: '100%',
        backgroundColor: '#000',
        borderRadius: 10,
    },
    name: {
        marginLeft: 10,
        padding: 5,
        fontWeight: 'bold',
        fontSize: 25,
        flex: 1, 
        flexWrap: 'wrap'
    }
});

export default Recipe;