import React, { useState, useCallback, useEffect } from 'react';
import {
  RefreshControl,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { Background, Header, Title } from '~/components';
import api from '~/services/api';

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

const Notifications = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [appointments, setAppointments] = useState([]);

  const loadAppointments = async () => {
    const response = await api.get('appointments?status=1');

    setAppointments(response.data);
  };

  const handleConfirm = async (id, status) => {
    const response = await api.put(`appointments/${id}?status=${status}`);

    setAppointments(
      appointments.map((appointment) =>
        appointment.id === id
          ? {
              ...appointment,
              status: response.data.status,
            }
          : appointment
      )
    );

    await loadAppointments();
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
                  uri: item.user.avatar
                    ? item.user.avatar.url
                    : `https://api.adorable.io/avatar/50/${item.user.name}.png`,
                }}
              />
              <AppointmentDetail>
                <UserName>{item.user.name}</UserName>
                <Court>{item.court.name}</Court>
                <AppointmentDate>
                  {formatRelative(parseISO(item.date), new Date(), {
                    locale: pt,
                    addSuffix: true,
                  })}
                </AppointmentDate>
              </AppointmentDetail>
              <AppointmentAction>
                <TouchableOpacity
                  onPress={() => {
                    handleConfirm(item.id, 2);
                  }}
                >
                  <Icon name="close" size={28} color={colors.CANCELED} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    handleConfirm(item.id, 3);
                  }}
                >
                  <Icon name="check" size={28} color={colors.CONFIRMED} />
                </TouchableOpacity>
              </AppointmentAction>
            </Appointment>
          ))}
        </AppointmentListContainer>
      </Container>
    </Background>
  );
};

export default Notifications;
