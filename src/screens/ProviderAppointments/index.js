import React, { useState, useCallback, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import api from '~/services/api';

import { Background, Header, Title } from '~/components';
import Appointment from '~/components/Appointment';

import { Container, List } from './styles';
import colors from '~/styles/colors';

function wait(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}

const ProviderAppointments = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [appointments, setAppointments] = useState([]);

  const loadAppointments = async () => {
    const response = await api.get('appointments');

    setAppointments(response.data);
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    loadAppointments();
    setRefreshing(false);
  }, [refreshing]);

  useEffect(() => {
    loadAppointments();
  }, []);

  return (
    <Background>
      <Header>
        <Title style={{ color: colors.WHITE }}>Agendamentos</Title>
      </Header>
      <Container>
        {refreshing && (
          <ActivityIndicator size="small" color={colors.MATTE_GREY} />
        )}
        <List
          data={appointments}
          refreshing={refreshing}
          onRefresh={onRefresh}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <Appointment data={item} />}
        />
      </Container>
    </Background>
  );
};

export default ProviderAppointments;
