import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import SearchBar from '../components/searchBar';
import RecipeList from '../components/RecipeList';
import Recipe from '../components/Recipe';


const RecipeIndex = ({navigation}) => {
    const [ searchWord, setSearchWord ] = useState(' ');

    return (
        <View style={styles.container}>
        <View style={styles.recipesWrapper}>
            <Text style={styles.sectionTitle}>Receitas</Text>
            <SearchBar placeholder="Digite o nome da receita" value={searchWord} onChangeText={(text) => setSearchWord(text)}/>   
            <View style={styles.items}>
            {
                RecipeList.map((item, index) => {
                    if(searchWord == ""){
                        return(
                            <TouchableOpacity key={index} onPress={() => navigation.navigate('Recipe', {index})}>
                                <Recipe name={item.name} image={item.imgSrc} key={index}/>
                            </TouchableOpacity>
                        )
                    } else if(searchWord){
                        if(item.name.toLocaleLowerCase().includes(searchWord.toLocaleLowerCase())){
                            return(
                                <TouchableOpacity key={index} onPress={() => navigation.navigate('Recipe', {index})}>
                                    <Recipe name={item.name} image={item.imgSrc} key={index}/>
                                </TouchableOpacity>
                            )
                        }
                    }
                })
            }
            </View>
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8EAED',
    },
    recipesWrapper:{
        paddingTop: 80,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    items: {
        marginTop: 20,
    },
});

export default RecipeIndex;