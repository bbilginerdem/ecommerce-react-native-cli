import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {View, FlatList, Text} from 'react-native';
import Config from 'react-native-config';

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const {data: productData} = await axios.get(Config.API_URL);
    setData(productData);
  };

  const renderProduct = ({item}) => <Text>{item.title}</Text>;

  return (
    <View>
      <FlatList data={data} renderItem={renderProduct} />
    </View>
  );
};
export default Products;
