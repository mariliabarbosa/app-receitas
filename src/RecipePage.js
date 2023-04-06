import * as React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Image } from 'expo-image';

import RecipeList from '../components/RecipeList';

const RecipePage = ({route}) => {
    const recipe = RecipeList[route.params.index]
    return (
        <View style={styles.container}>
            <Image source={recipe.imgSrc} style={styles.image} contentFit="cover"/>
            <ScrollView style={styles.textWrapper}>
                <Text style={styles.name}>{recipe.name}</Text>
                <Text style={styles.subtitle}>INGREDIENTES</Text>
                {recipe.ingredientList.map((ingredient, index) => {
                    return(<Text style={styles.ingredients} key={index}>{ingredient}</Text>)
                })}
                <Text style={styles.subtitle}>MODO DE PREPARO</Text>
                <Text style={styles.prepMode}>{recipe.prepMode}</Text>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8EAED',
        marginTop: 0
    },
    image: {
        height: 250,
        width: '100%'
    },
    textWrapper: {
        padding: 30,
        marginBottom: 20
    },
    name: {
        flexWrap: 'wrap',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10
    },
    ingredients: {
        marginTop: 5,
        fontSize: 16
    },
    subtitle: {
        flexWrap: 'wrap',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 10
    },
    prepMode: {
        marginTop: 5,
        fontSize: 16
    },
});

export default RecipePage;