import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './MealsCard.style';
const MealsCard = ({Meals, onselect}) => {
  return (
    <TouchableOpacity onPress={onselect}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: Meals.strMealThumb}} />
        <Text style={styles.title}>{Meals.strMeal}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MealsCard;
