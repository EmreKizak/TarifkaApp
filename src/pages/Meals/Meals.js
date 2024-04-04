import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import useFetch from '../../components/hooks/useFetch';
import {API_MEALS_URL} from '../../components/constants/api';
import MealsCard from '../../components/Cards/MealsCard/MealsCard';
import styles from './Meals.style';
const Meals = ({route, navigation}) => {
  const {strCategory} = route.params;
  const {data, loading, error} = useFetch(API_MEALS_URL + strCategory);

  const handleMealsSelect = idMeal => {
    navigation.navigate('Detail', {idMeal});
  };

  const renderMeals = ({item}) => {
    return (
      <MealsCard Meals={item} onselect={() => handleMealsSelect(item.idMeal)} />
    );
  };
  if (loading) {
    return (
      <View>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text>{error}</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <FlatList data={data.meals} renderItem={renderMeals} />
    </View>
  );
};

export default Meals;
