import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {View, FlatList, ActivityIndicator, Text} from 'react-native';
import Config from 'react-native-config';

import ProductCard from '../../components/ProductCard';

const Products = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const {data: productData} = await axios.get(Config.API_URL);
      setData(productData);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const renderProduct = ({item}) => <ProductCard product={item} />;

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <View>
      <FlatList data={data} renderItem={renderProduct} />
    </View>
  );
};
export default Products;
