import React, { useState, useCallback, useEffect } from 'react';
import { ActivityIndicator, Alert } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import api from '~/services/api';

import { Background, Header, Title } from '~/components';
import Appointment from '~/components/Appointment';

import { Container, List } from './styles';
import colors from '~/styles/colors';

const ClientAppointments = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [appointments, setAppointments] = useState([]);

  const loadAppointments = async () => {
    const response = await api.get('appointments/list?status=3');

    setAppointments(response.data);
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    loadAppointments();
    setRefreshing(false);
  }, [refreshing]);

  useFocusEffect(
    useCallback(() => {
      loadAppointments();
    }, [])
  );

  useEffect(() => {
    loadAppointments();
  }, []);

  const handleCancel = async id => {
    Alert.alert(
      'Deseja cancelar seu agendamento?',
      'Ao clicar em OK seu agendamento será cancelado.',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: async () => {
            const response = await api.delete(`appointments/${id}`);

            setAppointments(
              appointments.map(appointment =>
                appointment.id === id
                  ? {
                      ...appointment,
                      canceled_at: response.data.canceled_at,
                      status: response.data.status,
                    }
                  : appointment
              )
            );
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <Background>
      <Header>
        <Title>Agendamentos</Title>
      </Header>
      <Container>
        {refreshing && (
          <ActivityIndicator size="small" color={colors.MATTE_GREY} />
        )}
        <List
          data={appointments}
          refreshing={refreshing}
          onRefresh={onRefresh}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Appointment onCancel={() => handleCancel(item.id)} data={item} />
          )}
        />
      </Container>
    </Background>
  );
};

export default ClientAppointments;
