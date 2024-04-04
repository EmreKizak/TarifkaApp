import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './CategoriesCard.style';
const CategoriesCard = ({category, onSelect}) => {
  return (
    <TouchableOpacity onPress={onSelect}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: category.strCategoryThumb}} />
        <Text style={styles.title}>{category.strCategory}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoriesCard;
