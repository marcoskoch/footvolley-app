import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import api from '~/services/api';

import { Background } from '~/components';
import { Container, CourtsList, Court, Name } from './styles';

const SelectCourt = ({ route, navigation }) => {
  const [courts, setCourts] = useState([]);

  const { provider } = route.params;

  const loadCourts = async () => {
    const response = await api.get(`courts/${provider.id}`);
    setCourts(response.data);
  };

  useEffect(() => {
    loadCourts();
  }, []);

  return (
    <Background>
      <Container>
        <CourtsList
          data={courts}
          keyExtractor={(court) => String(court.id)}
          renderItem={({ item: court }) => (
            <Court
              onPress={() =>
                navigation.navigate('New', {
                  screen: 'SelectDateTime',
                  params: { provider, court },
                })
              }
            >
              <Name>{court.name}</Name>
            </Court>
          )}
        />
      </Container>
    </Background>
  );
};

export default SelectCourt;
