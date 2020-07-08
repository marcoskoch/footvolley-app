import React, { useState, useCallback } from 'react';
import { RefreshControl, ActivityIndicator } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Background, Header, Title } from '~/components';

import {
  Container,
  AppointmentListContainer,
  Appointment,
  AppointmentDetail,
  UserName,
  Court,
  AppointmentDate,
  Avatar,
  AppointmentAction,
} from './styles';
import colors from '~/styles/colors';

function wait(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}

const appointments = [
  {
    id: 1,
    name: 'Marcos Koch',
    court: 'Quadra 1',
    date: '21/06/2020 às 20 horas',
  },
  {
    id: 2,
    name: 'Roberto Carlos',
    court: 'Quadra 2',
    date: '21/06/2020 às 21 horas',
  },
  {
    id: 3,
    name: 'Paulo Sergio',
    court: 'Quadra 3',
    date: '22/06/2020 às 17 horas',
  },
  {
    id: 4,
    name: 'Marcos Koch',
    court: 'Quadra 1',
    date: '21/06/2020 às 20 horas',
  },
  {
    id: 5,
    name: 'Roberto Carlos',
    court: 'Quadra 2',
    date: '21/06/2020 às 21 horas',
  },
  {
    id: 6,
    name: 'Paulo Sergio',
    court: 'Quadra 3',
    date: '22/06/2020 às 17 horas',
  },
  {
    id: 7,
    name: 'Marcos Koch',
    court: 'Quadra 1',
    date: '21/06/2020 às 20 horas',
  },
  {
    id: 8,
    name: 'Roberto Carlos',
    court: 'Quadra 2',
    date: '21/06/2020 às 21 horas',
  },
  {
    id: 9,
    name: 'Paulo Sergio',
    court: 'Quadra 3',
    date: '22/06/2020 às 17 horas',
  },
];

const Notifications = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, [refreshing]);

  return (
    <Background>
      <Header>
        <Title style={{ color: '#fff' }}>Notificações</Title>
      </Header>
      <Container>
        {refreshing && (
          <ActivityIndicator size="large" color={colors.MATTE_GREY} />
        )}

        <AppointmentListContainer
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {appointments.map((item) => (
            <Appointment key={item.id}>
              <Avatar
                source={{
                  uri: `https://api.adorable.io/avatar/80/${item.name}.png`,
                }}
              />
              <AppointmentDetail>
                <UserName>{item.name}</UserName>
                <Court>{item.court}</Court>
                <AppointmentDate>{item.date}</AppointmentDate>
              </AppointmentDetail>
              <AppointmentAction>
                <MaterialCommunityIcons
                  name="check"
                  size={28}
                  color="#339623"
                />
                <MaterialCommunityIcons
                  name="close"
                  size={28}
                  color="#bd3028"
                />
              </AppointmentAction>
            </Appointment>
          ))}
        </AppointmentListContainer>
      </Container>
    </Background>
  );
};

export default Notifications;
