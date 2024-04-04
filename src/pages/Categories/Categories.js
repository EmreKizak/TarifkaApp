import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {API_CATEGORIES_URL} from '../../components/constants/api';
import useFetch from '../../components/hooks/useFetch';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './Categories.style';
import CategoriesCard from '../../components/Cards/CategoriesCard/CategoriesCard';
const Categories = ({navigation}) => {
  const {data, loading, error} = useFetch(API_CATEGORIES_URL);

  const handleCategorySelect = strCategory => {
    navigation.navigate('Meals', {strCategory});
  };
  const renderCategory = ({item}) => {
    return (
      <CategoriesCard
        category={item}
        onSelect={() => handleCategorySelect(item.strCategory)}
      />
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
    <SafeAreaView style={styles.container}>
      <FlatList data={data.categories} renderItem={renderCategory} />
    </SafeAreaView>
  );
};

export default Categories;
