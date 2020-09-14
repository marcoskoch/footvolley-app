import React, { useMemo } from 'react';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { useAuth } from '~/contexts/auth';

import {
  Container,
  Avatar,
  AppointmentDetail,
  UserName,
  Court,
  AppointmentDate,
} from './styles';

const Appointment = ({ data }) => {
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
        <AppointmentDate>{dateParsed}</AppointmentDate>
      </AppointmentDetail>
    </Container>
  );
};

export default Appointment;
