import React, { useMemo } from 'react';
import { TouchableOpacity } from 'react-native';
import { parseISO, formatRelative, differenceInDays, format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
    const today =  new Date()

    if (differenceInDays(parseISO(data.date), new Date()) > 6 ) {
      return format(parseISO(data.date), "HH:mm 'horas' - dd/MM/yyyy", { locale: pt })
    }

    return formatRelative(parseISO(data.date), new Date(), {
      locale: pt,
      addSuffix: true,
    });
  }, [data.date]);

  const avatarUri = user.provider
    ? data?.user?.avatar?.url
    : data?.court?.provider?.avatar?.url;

    const name = user.provider
    ? data?.user?.name
    : data?.court?.provider?.name

  return (
    <Container key={data.id}>
      <Avatar
        source={{
          uri:
            avatarUri ||
            `https://api.adorable.io/avatar/50/${name}.png`,
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
          <Icon name="event-busy" size={24} color={colors.CANCELED} />
        </TouchableOpacity>
      )}
    </Container>
  );
};

export default Appointment;
