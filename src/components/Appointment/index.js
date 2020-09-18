import React, { useMemo } from 'react';
import { TouchableOpacity } from 'react-native';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { MaterialIcons } from '@expo/vector-icons';

import { useAuth } from '~/contexts/auth';

import colors from '~/styles/colors';

import {
  Container,
  Avatar,
  AppointmentDetail,
  UserName,
  Court,
  AppointmentDate,
  Status,
} from './styles';

const statusMap = {
  1: 'Pendente',
  2: 'Cancelado',
  3: 'Confirmado',
};

const Appointment = ({ data, onCancel = null }) => {
  const { user } = useAuth();
  const dateParsed = useMemo(() => {
    return formatRelative(parseISO(data.date), new Date(), {
      locale: pt,
      addSuffix: true,
    });
  }, [data.date]);

  const avatarUri = user.provider
    ? data?.user?.avatar?.url
    : data?.court?.provider?.avatar?.url;

  return (
    <Container key={data.id}>
      <Avatar
        source={{
          uri:
            avatarUri ||
            `https://api.adorable.io/avatar/50/${data.user.name}.png`,
        }}
      />

      <AppointmentDetail>
        <UserName>
          {user.provider ? data.user.name : data.court.provider.name}
        </UserName>
        <Court>{data.court.name}</Court>
        <Status status={data.status}>{statusMap[data.status]}</Status>
        <AppointmentDate>{dateParsed}</AppointmentDate>
      </AppointmentDetail>

      {data.cancelable && !user.provider && !data.canceled_at && (
        <TouchableOpacity onPress={onCancel}>
          <MaterialIcons name="event-busy" size={24} color={colors.CANCELED} />
        </TouchableOpacity>
      )}
    </Container>
  );
};

export default Appointment;
