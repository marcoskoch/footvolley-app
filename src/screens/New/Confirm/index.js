import React, { useMemo } from 'react';
import { formatRelative, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';

import { Background } from '~/components';

import { Container, Avatar, Name, Time, SubmitButton } from './styles';

const Confirm = ({ route, navigation }) => {
  const { court, provider, time } = route.params;

  const dateFormatted = useMemo(
    () => formatRelative(parseISO(time), new Date(), { locale: pt }),
    [time]
  );

  async function handleAddAppointment() {
    await api.post('appointments', {
      court_id: court.id,
      date: time,
    });

    navigation.reset({
      index: 0,
      routes: [{ name: 'ClientAppointments' }],
    });
  }

  return (
    <Background>
      <Container>
        <Avatar
          source={{
            uri: provider.avatar
              ? provider.avatar.url
              : `https://api.adorable.io/avatar/50/${provider.name}.png`,
          }}
        />
        <Name>{provider.name}</Name>

        <Time>{dateFormatted}</Time>

        <SubmitButton onPress={handleAddAppointment}>
          Confirmar reserva
        </SubmitButton>
      </Container>
    </Background>
  );
};

export default Confirm;
