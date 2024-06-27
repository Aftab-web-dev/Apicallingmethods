// src/components/DataComponent.tsx
import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator, FlatList } from 'react-native';
import useStore from '../stores/useStore';

const DataComponent: React.FC = () => {
  const { data, images, loadingData, loadingImages, errorData, errorImages, fetchData, fetchImages } = useStore();

  useEffect(() => {
    fetchData();
    fetchImages();
  }, [fetchData, fetchImages]);

  if (loadingData || loadingImages) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (errorData) {
    return <Text>Error: {errorData}</Text>;
  }

  if (errorImages) {
    return <Text>Error: {errorImages}</Text>;
  }

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
          </View>
        )}
      />
      <FlatList
        data={images}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Image source={{ uri: item.url }} style={{ width: 100, height: 100 }} />
          </View>
        )}
      />
    </View>
  );
};

export default DataComponent;
