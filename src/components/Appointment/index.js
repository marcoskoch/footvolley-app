import React, { useMemo } from 'react';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt';

import {
  Container,
  Avatar,
  AppointmentDetail,
  UserName,
  Court,
  AppointmentDate,
} from './styles';

const Appointment = ({ data }) => {
  const dateParsed = useMemo(() => {
    return formatRelative(parseISO(data.date), new Date(), {
      locale: pt,
      addSuffix: true,
    });
  }, [data.date]);

  return (
    <Container key={data.id}>
      <Avatar
        source={{
          uri: data.user.avatar
            ? data.user.avatar.url
            : `https://api.adorable.io/avatar/50/${data.user.name}.png`,
        }}
      />
      <AppointmentDetail>
        <UserName>{data.user.name}</UserName>
        <Court>{data.court.name}</Court>
        <AppointmentDate>{dateParsed}</AppointmentDate>
      </AppointmentDetail>
    </Container>
  );
};

export default Appointment;
