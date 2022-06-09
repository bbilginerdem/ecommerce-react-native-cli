import React from 'react';
import {FlatList} from 'react-native';
import Config from 'react-native-config';

import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import useFetch from '../../hooks/useFetch';
import ProductCard from '../../components/ProductCard';

const Products = () => {
  const {error, loading, data} = useFetch(Config.API_URL);

  const renderProduct = ({item}) => <ProductCard product={item} />;

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return <FlatList data={data} renderItem={renderProduct} />;
};
export default Products;
