import {
  ActivityIndicator,
  Button,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {API_DETAIL_URL} from '../../components/constants/api';
import useFetch from '../../components/hooks/useFetch';
import styles from './Detail.style';
const Detail = ({route}) => {
  const {idMeal} = route.params;
  const {data, loading, error} = useFetch(API_DETAIL_URL + idMeal);

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

  const renderDetail = ({item}) => {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: item.strMealThumb}} />
        <View style={styles.title_container}>
          <Text style={styles.title}>{item.strMeal}</Text>
          <Text style={styles.area}>{item.strArea}</Text>
        </View>
        <Text style={styles.instruction}>{item.strInstructions}</Text>

        <TouchableOpacity
          style={styles.opa}
          onPress={() => {
            {
              item.strYoutube;
            }
          }}>
          <Text style={styles.buton}>Watch On Youtube</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList data={data.meals} renderItem={renderDetail} />
    </View>
  );
};

export default Detail;
