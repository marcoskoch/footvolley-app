import React, { useEffect, useState, useCallback } from 'react';
import { TouchableOpacity, ActivityIndicator } from 'react-native';

import api from '~/services/api';

import { Background } from '~/components';
import { Container, ProvidersList, Provider, Avatar, Name } from './styles';
import colors from '~/styles/colors';

const SelectProvider = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);
  const [providers, setProviders] = useState([]);

  const loadProviders = async () => {
    const response = await api.get('providers');

    setProviders(response.data);
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    loadProviders();
    setRefreshing(false);
  }, [refreshing]);

  useEffect(() => {
    loadProviders();
  }, []);

  return (
    <Background>
      <Container>
        {refreshing && (
          <ActivityIndicator size="small" color={colors.MATTE_GREY} />
        )}
        <ProvidersList
          data={providers}
          keyExtractor={(provider) => String(provider.id)}
          refreshing={refreshing}
          onRefresh={onRefresh}
          renderItem={({ item: provider }) => (
            <Provider
              onPress={() =>
                navigation.navigate('New', {
                  screen: 'CourtProvider',
                  params: { provider },
                })
              }
            >
              <Avatar
                source={{
                  uri: provider.avatar
                    ? provider.avatar.url
                    : `https://api.adorable.io/avatar/50/${provider.name}.png`,
                }}
              />
              <Name>{provider.name}</Name>
            </Provider>
          )}
        />
      </Container>
    </Background>
  );
};

export default SelectProvider;
